export const dynamic = 'force-dynamic';

import { NextRequest } from 'next/server';

const SYSTEM_PROMPT = `Você é o GoalPulse AI, um assistente inteligente especializado em futebol.
Você tem conhecimento sobre:
- Jogos ao vivo, resultados e classificações
- Mercado de transferências e rumores
- Copa do Mundo 2026
- Estatísticas de jogadores e times
- Notícias recentes do futebol mundial
- História do futebol

Responda sempre em português brasileiro, de forma concisa e informativa.
Use emojis quando apropriado para tornar a conversa mais dinâmica.
Se não souber algo, diga honestamente que não tem essa informação atualizada.
Mantenha respostas curtas (máximo 3 parágrafos).`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userMessages = body?.messages ?? [];

    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(userMessages ?? []).map((m: any) => ({
        role: m?.role ?? 'user',
        content: m?.content ?? '',
      })),
    ];

    const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-5.4-mini',
        messages: apiMessages,
        stream: true,
        max_tokens: 1000,
      }),
    });

    if (!response?.ok) {
      const errorText = await response?.text?.() ?? 'Erro desconhecido';
      console.error('LLM API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Falha ao se comunicar com a IA' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response?.body?.getReader?.();
        if (!reader) {
          controller.close();
          return;
        }
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value ?? new Uint8Array());
            controller.enqueue(encoder.encode(chunk));
          }
        } catch (error: any) {
          console.error('Stream error:', error);
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    console.error('Pulse AI error:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

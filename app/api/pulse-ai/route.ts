import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `Você é o Pulse AI, assistente esportivo inteligente do GoalPulse.
Você é especialista em futebol mundial. Responda sempre em português.
Seja direto, apaixonado e técnico quando necessário.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return NextResponse.json({ resposta: 'API Key não configurada.' }, { status: 500 });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 1024, system: SYSTEM_PROMPT, messages }),
    });

    const data = await response.json();
    return NextResponse.json({ resposta: data.content?.[0]?.text ?? 'Sem resposta.' });
  } catch {
    return NextResponse.json({ resposta: 'Erro ao processar.' }, { status: 500 });
  }
}

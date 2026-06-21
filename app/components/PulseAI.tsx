'use client';

import { useState } from 'react';

const sugestoes = [
  '⚽ Quem vai ganhar a Copa do Mundo 2026?',
  '📊 Compare Mbappé e Vinicius Jr',
  '🔍 Explique a tática 4-3-3',
  '🏆 Como está o Grupo A da Copa?',
];

export default function PulseAI() {
  const [mensagens, setMensagens] = useState([
    {
      role: 'assistant',
      texto: 'Olá! Sou o **Pulse AI** ⚡ — sua inteligência artificial do futebol. Pergunte qualquer coisa sobre futebol!',
    },
  ]);
  const [input, setInput] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function enviar(texto: string) {
    const pergunta = texto.trim();
    if (!pergunta || carregando) return;

    setInput('');
    setMensagens((prev) => [...prev, { role: 'user', texto: pergunta }]);
    setCarregando(true);

    try {
      const res = await fetch('/api/pulse-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: pergunta }],
        }),
      });
      const data = await res.json();
      setMensagens((prev) => [...prev, { role: 'assistant', texto: data.resposta ?? 'Não consegui responder agora.' }]);
    } catch {
      setMensagens((prev) => [...prev, { role: 'assistant', texto: 'Erro ao conectar. Tente novamente.' }]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <section id="pulse-ai" className="px-6 py-12">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <p className="text-xs font-semibold text-[#FFD700] uppercase tracking-widest mb-1">
            Inteligência Artificial
          </p>
          <h2 className="text-2xl font-bold text-white">🤖 Pulse AI</h2>
          <p className="text-sm text-[#888888] mt-1">Pergunte qualquer coisa sobre futebol</p>
        </div>

        <div className="bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="px-5 py-4 border-b border-[#222222] flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FFD700] flex items-center justify-center text-black font-black text-lg">⚡</div>
            <div>
              <p className="text-sm font-bold text-white">Pulse AI</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs text-[#888888]">Online</span>
              </div>
            </div>
          </div>

          {/* Mensagens */}
          <div className="h-80 overflow-y-auto p-5 flex flex-col gap-4">
            {mensagens.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-black
                  ${msg.role === 'user' ? 'bg-[#0066FF] text-white' : 'bg-[#FFD700] text-black'}`}>
                  {msg.role === 'user' ? 'U' : '⚡'}
                </div>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                  ${msg.role === 'user'
                    ? 'bg-[#0066FF] text-white rounded-tr-sm'
                    : 'bg-[#1A1A1A] border border-[#222] text-[#E0E0E0] rounded-tl-sm'}`}>
                  {msg.texto}
                </div>
              </div>
            ))}
            {carregando && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-black font-black text-sm">⚡</div>
                <div className="px-4 py-3 bg-[#1A1A1A] border border-[#222] rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1.5 items-center h-4">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sugestões */}
          {mensagens.length <= 1 && (
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {sugestoes.map((s) => (
                <button key={s} onClick={() => enviar(s)}
                  className="text-xs px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#333] text-[#888] hover:text-white hover:border-[#0066FF]/50 transition-all">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-[#222] flex gap-3 items-end">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && enviar(input)}
              placeholder="Pergunte sobre futebol…"
              disabled={carregando}
              className="flex-1 bg-[#1A1A1A] border border-[#333] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] outline-none focus:border-[#0066FF]/50 transition-colors disabled:opacity-50"
            />
            <button onClick={() => enviar(input)} disabled={carregando || !input.trim()}
              className="w-11 h-11 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] disabled:opacity-40 flex items-center justify-center flex-shrink-0 transition-colors">
              <svg className="w-5 h-5 text-white rotate-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

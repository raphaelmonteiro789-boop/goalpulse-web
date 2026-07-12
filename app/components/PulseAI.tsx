'use client';

import { useRef, useState } from 'react';
import { Sparkles, Send, X } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function PulseAI() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Olá! Eu sou o Pulse AI ⚽ Pergunte sobre jogos, times ou a Copa 2026.' },
  ]);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const controller = new AbortController();
      abortRef.current = controller;

      const res = await fetch('/api/pulse-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        throw new Error('Falha ao se comunicar com a IA');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: assistantText };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Desculpe, não consegui responder agora. Tente novamente em instantes.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="pulse-ai" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {open && (
        <div className="mb-3 w-80 sm:w-96 h-[28rem] bg-gp-dark-card border border-gp-dark-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gp-dark-border bg-gradient-to-r from-gp-purple/20 to-gp-blue/20">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gp-purple" />
              <span className="text-sm font-semibold text-white">Pulse AI</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fechar Pulse AI">
              <X className="w-4 h-4 text-gp-gray hover:text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm rounded-xl px-3 py-2 max-w-[85%] ${
                  m.role === 'user'
                    ? 'ml-auto bg-gp-blue text-white'
                    : 'bg-gp-dark-hover text-gp-gray-light'
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="bg-gp-dark-hover text-gp-gray-light text-sm rounded-xl px-3 py-2 max-w-[85%] animate-pulse-live">
                Pensando...
              </div>
            )}
          </div>

          <div className="p-3 border-t border-gp-dark-border flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Pergunte ao Pulse AI..."
              className="flex-1 bg-gp-dark-hover rounded-lg px-3 py-2 text-sm text-white placeholder-gp-gray focus:outline-none"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="p-2 bg-gp-blue rounded-lg disabled:opacity-50"
              aria-label="Enviar"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-gp-purple to-gp-blue text-white text-sm font-semibold shadow-xl hover:opacity-90 transition-opacity"
      >
        <Sparkles className="w-4 h-4" />
        Pulse AI
      </button>
    </section>
  );
}

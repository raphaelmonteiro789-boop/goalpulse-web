'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) {
      toast.error('Digite um e-mail válido.');
      return;
    }
    toast.success('Inscrito! Você receberá nossos lançamentos em primeira mão.');
    setEmail('');
  }

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="rounded-3xl bg-gradient-to-r from-white/10 to-white/[0.03] border border-white/10 p-10 sm:p-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Não perca os lançamentos</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          Novidades da Nike, Adidas e Puma direto no seu e-mail, com ofertas exclusivas.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="flex-1 bg-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button type="submit" className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:scale-[1.02] transition-transform">
            Inscrever
          </button>
        </form>
      </div>
    </section>
  );
}

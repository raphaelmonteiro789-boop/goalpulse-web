'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Counter from '../Counter';

export default function PumaSection({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative overflow-hidden bg-[#0A0A0A] text-white">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-[2px] bg-[#FFD400]/30"
            style={{ top: `${20 + i * 25}%`, width: '40%' }}
            animate={{ x: ['-40%', '140%'] }}
            transition={{ duration: 2.4 + i * 0.4, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
          />
        ))}
      </div>

      <motion.div
        aria-hidden
        className="absolute w-16 h-16 rounded-full bg-[#FFD400]/20 blur-xl pointer-events-none"
        style={{ top: '30%' }}
        initial={{ x: '-10%' }}
        whileInView={{ x: '110%' }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.1, ease: 'easeIn' }}
      />

      <div className={`relative z-10 max-w-[1440px] mx-auto px-6 ${compact ? 'py-16' : 'py-24'}`}>
        <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#FFD400]">Puma</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 mb-6 max-w-xl">
          Forever Faster.
        </h2>
        <p className="text-white/60 max-w-md mb-10">
          Feita para arrancadas felinas: tração agressiva e espuma que devolve energia a cada passo.
        </p>

        {!compact && (
          <div className="flex flex-wrap gap-12 mb-10">
            <div>
              <div className="text-3xl font-black text-[#FFD400]">
                <Counter to={120} suffix="+" />
              </div>
              <div className="text-xs text-white/40 mt-1">países no mundo</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FFD400]">
                <Counter to={1948} />
              </div>
              <div className="text-xs text-white/40 mt-1">ano de fundação</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#FFD400]">
                <Counter to={9} suffix="s" />
              </div>
              <div className="text-xs text-white/40 mt-1">recorde dos 100m com atletas Puma</div>
            </div>
          </div>
        )}

        <Link
          href="/loja/puma"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFD400] text-black font-bold hover:scale-[1.03] transition-transform"
        >
          Explorar coleção Puma
        </Link>
      </div>
    </div>
  );
}

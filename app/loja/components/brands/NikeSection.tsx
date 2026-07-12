'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Counter from '../Counter';

export default function NikeSection({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const background = useMotionTemplate`radial-gradient(500px circle at ${mx}% ${my}%, rgba(225,38,28,0.25), transparent 70%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="relative overflow-hidden bg-[#0D0D0D] text-white"
    >
      <motion.div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background }} />
      <div className={`relative z-10 max-w-[1440px] mx-auto px-6 ${compact ? 'py-16' : 'py-24'}`}>
        <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#E1261C]">Nike</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 mb-6 max-w-xl">
          Just Do It.
        </h2>
        <p className="text-white/60 max-w-md mb-10">
          Tecnologia de amortecimento Air e Zoom para atletas que não esperam a hora certa — eles a criam.
        </p>

        {!compact && (
          <div className="flex flex-wrap gap-12 mb-10">
            <div>
              <div className="text-3xl font-black text-[#E1261C]">
                <Counter to={190} suffix="+" />
              </div>
              <div className="text-xs text-white/40 mt-1">países atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#E1261C]">
                <Counter to={70} suffix=" anos" />
              </div>
              <div className="text-xs text-white/40 mt-1">de inovação esportiva</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#E1261C]">
                <Counter to={12} suffix="M+" />
              </div>
              <div className="text-xs text-white/40 mt-1">pares vendidos por ano</div>
            </div>
          </div>
        )}

        <Link
          href="/loja/nike"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E1261C] font-bold hover:scale-[1.03] transition-transform"
        >
          Explorar coleção Nike
        </Link>
      </div>
    </div>
  );
}

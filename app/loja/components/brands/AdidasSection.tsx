'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Counter from '../Counter';

export default function AdidasSection({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const stripe1 = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const stripe2 = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const stripe3 = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className="relative overflow-hidden bg-[#FAFAFA] text-[#111111]">
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <motion.div style={{ x: stripe1 }} className="absolute top-[10%] -left-10 w-[140%] h-10 bg-[#111111] -rotate-12" />
        <motion.div style={{ x: stripe2 }} className="absolute top-[45%] -left-10 w-[140%] h-10 bg-[#111111] -rotate-12" />
        <motion.div style={{ x: stripe3 }} className="absolute top-[80%] -left-10 w-[140%] h-10 bg-[#111111] -rotate-12" />
      </div>

      <div className={`relative z-10 max-w-[1440px] mx-auto px-6 ${compact ? 'py-16' : 'py-24'}`}>
        <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#0033A0]">Adidas</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mt-3 mb-6 max-w-xl">
          Impossible Is Nothing.
        </h2>
        <p className="text-[#111]/60 max-w-md mb-10">
          As três listras que atravessam gerações — em campo, na pista e nas ruas.
        </p>

        {!compact && (
          <div className="flex flex-wrap gap-12 mb-10">
            <div>
              <div className="text-3xl font-black text-[#0033A0]">
                <Counter to={150} suffix="+" />
              </div>
              <div className="text-xs text-[#111]/40 mt-1">países com lojas</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#0033A0]">
                <Counter to={1949} />
              </div>
              <div className="text-xs text-[#111]/40 mt-1">ano de fundação</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#0033A0]">
                <Counter to={3} />
              </div>
              <div className="text-xs text-[#111]/40 mt-1">listras icônicas</div>
            </div>
          </div>
        )}

        <Link
          href="/loja/adidas"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0033A0] text-white font-bold hover:scale-[1.03] transition-transform"
        >
          Explorar coleção Adidas
        </Link>
      </div>
    </div>
  );
}

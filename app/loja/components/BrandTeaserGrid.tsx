'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BRANDS, type Brand } from '@/lib/products';
import ShoeGlyph from './ShoeGlyph';

const ORDER: Brand[] = ['nike', 'adidas', 'puma'];
const SAMPLE_COLOR: Record<Brand, string> = { nike: '#E1261C', adidas: '#0033A0', puma: '#FFD400' };

function TeaserCard({ brand }: { brand: Brand }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 flex flex-col items-center text-center"
    >
      <ShoeGlyph color={SAMPLE_COLOR[brand]} brand={brand} className="w-40 h-24 mb-6 drop-shadow-lg" />
      <h3 className="text-2xl font-black text-white mb-2">{BRANDS[brand].name}</h3>
      <p className="text-white/40 text-sm mb-6">{BRANDS[brand].tagline}</p>
      <Link
        href={`/loja/${brand}`}
        className="px-5 py-2.5 rounded-xl font-bold text-sm text-black"
        style={{ backgroundColor: SAMPLE_COLOR[brand] === '#FFD400' ? '#FFD400' : SAMPLE_COLOR[brand], color: SAMPLE_COLOR[brand] === '#FFD400' ? '#111' : '#fff' }}
      >
        Explorar
      </Link>
    </motion.div>
  );
}

export default function BrandTeaserGrid() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center">Escolha sua marca</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {ORDER.map((brand) => (
          <TeaserCard key={brand} brand={brand} />
        ))}
      </div>
    </section>
  );
}

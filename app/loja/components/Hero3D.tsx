'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { BRANDS, type Brand } from '@/lib/products';

const Sneaker3D = dynamic(() => import('./Sneaker3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-white/5 rounded-3xl" />,
});

const BRAND_ORDER: Brand[] = ['nike', 'adidas', 'puma'];
const SWATCHES: Record<Brand, string[]> = {
  nike: ['#E1261C', '#0D0D0D', '#FFD700'],
  adidas: ['#0033A0', '#111111', '#FAFAFA'],
  puma: ['#FFD400', '#0A0A0A', '#F2F2F2'],
};

export default function Hero3D() {
  const [brand, setBrand] = useState<Brand>('nike');
  const [color, setColor] = useState(SWATCHES.nike[0]);

  function selectBrand(b: Brand) {
    setBrand(b);
    setColor(SWATCHES[b][0]);
  }

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ background: `radial-gradient(ellipse 70% 60% at 50% 20%, ${color}33 0%, transparent 70%)` }}
      />
      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-10 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-white/50 mb-4">
            Nike · Adidas · Puma
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            Chuteiras e tênis
            <br />
            <span style={{ color }}>que movem o jogo.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-md mb-8">
            {BRANDS[brand].tagline} Arraste o produto 3D, gire, aproxime e escolha sua marca favorita.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {BRAND_ORDER.map((b) => (
              <button
                key={b}
                onClick={() => selectBrand(b)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  brand === b
                    ? 'bg-white text-black border-white'
                    : 'border-white/25 text-white/70 hover:border-white/60 hover:text-white'
                }`}
              >
                {BRANDS[b].name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs text-white/50 uppercase tracking-widest">Cor</span>
            {SWATCHES[brand].map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                aria-label={`Selecionar cor ${c}`}
                className={`w-7 h-7 rounded-full border-2 transition-transform ${
                  color === c ? 'scale-110 border-white' : 'border-white/20 hover:scale-105'
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>

          <a
            href={`/loja/${brand}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: color === '#0D0D0D' || color === '#111111' || color === '#0A0A0A' ? '#ffffff' : color }}
          >
            Explorar {BRANDS[brand].name}
          </a>
        </div>

        <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
          <Suspense fallback={<div className="w-full h-full animate-pulse bg-white/5 rounded-3xl" />}>
            <Sneaker3D color={color} brand={brand} />
          </Suspense>
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-white/35 tracking-wide">
            arraste para girar · scroll para zoom
          </p>
        </div>
      </div>
    </section>
  );
}

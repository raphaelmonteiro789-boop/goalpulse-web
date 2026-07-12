'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import ShoeGlyph from './ShoeGlyph';
import { BRANDS, type Product } from '@/lib/products';
import { useCart } from '@/store/cart';

export default function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  const addItem = useCart((s) => s.addItem);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-12, 12]);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function reset() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
    >
      <Link href={`/loja/produto/${product.slug}`} className="block">
        <div className="relative h-48 flex items-center justify-center p-6" style={{ backgroundColor: `${product.color}1A` }}>
          {product.tag && (
            <span
              className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-black"
              style={{ backgroundColor: BRANDS[product.brand].accent, color: '#fff' }}
            >
              {product.tag}
            </span>
          )}
          <ShoeGlyph color={product.color} brand={product.brand} className="w-full h-28 drop-shadow-xl transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="p-4">
          <span className="text-[11px] uppercase tracking-widest text-white/40">{BRANDS[product.brand].name}</span>
          <h3 className="text-sm font-semibold text-white mt-0.5 mb-1 leading-snug">{product.name}</h3>
          <p className="text-xs text-white/40 mb-3">{product.colorName}</p>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">R$ {product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-white/35 line-through">R$ {product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product, 40, 1);
        }}
        className="absolute bottom-4 right-4 p-2.5 rounded-full text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
        style={{ backgroundColor: BRANDS[product.brand].accent }}
        aria-label="Adicionar ao carrinho"
      >
        <ShoppingBag className="w-4 h-4" style={{ color: BRANDS[product.brand].accent === '#FFD400' ? '#111' : '#fff' }} />
      </button>
    </motion.div>
  );
}

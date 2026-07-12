'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import { BRANDS, type Product } from '@/lib/products';
import { useCart } from '@/store/cart';

const Sneaker3D = dynamic(() => import('../../components/Sneaker3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full animate-pulse bg-white/5 rounded-3xl" />,
});

const SIZES = [37, 38, 39, 40, 41, 42, 43, 44];

export default function ProductDetailClient({ product }: { product: Product }) {
  const [size, setSize] = useState(40);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((s) => s.addItem);
  const brand = BRANDS[product.brand];

  function handleAddToCart() {
    addItem(product, size, quantity);
    toast.success(`${product.name} adicionado ao carrinho!`);
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden" style={{ backgroundColor: `${product.color}10` }}>
        <Suspense fallback={<div className="w-full h-full animate-pulse bg-white/5" />}>
          <Sneaker3D color={product.color} brand={product.brand} />
        </Suspense>
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-white/35 tracking-wide">
          arraste para girar · scroll para zoom
        </p>
      </div>

      <div>
        <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: brand.accent }}>
          {brand.name}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-3">{product.name}</h1>
        <p className="text-white/50 mb-6">{product.description}</p>

        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl font-black text-white">R$ {product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-white/35 line-through">R$ {product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-white/40 block mb-2">Tamanho (BR)</span>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`w-11 h-11 rounded-lg text-sm font-semibold border transition-all ${
                  size === s
                    ? 'bg-white text-black border-white'
                    : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-white/40 block mb-2">Quantidade</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-9 rounded-lg bg-white/10 text-white font-bold"
            >
              −
            </button>
            <span className="text-white w-6 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 rounded-lg bg-white/10 text-white font-bold"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform"
          style={{ backgroundColor: brand.accent, color: brand.accent === '#FFD400' ? '#111' : '#fff' }}
        >
          <ShoppingBag className="w-5 h-5" />
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

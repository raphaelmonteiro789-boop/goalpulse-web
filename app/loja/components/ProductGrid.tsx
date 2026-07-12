'use client';

import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS, type Brand, type Category } from '@/lib/products';

interface ProductGridProps {
  brand?: Brand;
  title?: string;
}

const CATEGORY_LABEL: Record<Category, string> = {
  chuteira: 'Chuteiras',
  tenis: 'Tênis',
};

export default function ProductGrid({ brand, title = 'Catálogo' }: ProductGridProps) {
  const [category, setCategory] = useState<Category | 'todos'>('todos');

  const products = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (brand && p.brand !== brand) return false;
      if (category !== 'todos' && p.category !== category) return false;
      return true;
    });
  }, [brand, category]);

  return (
    <section className="max-w-[1440px] mx-auto px-6 py-14">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white">{title}</h2>
        <div className="flex gap-2">
          {(['todos', 'chuteira', 'tenis'] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                category === c
                  ? 'bg-white text-black border-white'
                  : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white'
              }`}
            >
              {c === 'todos' ? 'Todos' : CATEGORY_LABEL[c]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-white/40 text-sm mt-8 text-center">Nenhum produto encontrado nessa categoria.</p>
      )}
    </section>
  );
}

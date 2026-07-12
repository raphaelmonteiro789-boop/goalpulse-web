'use client';

import Link from 'next/link';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart, cartCount } from '@/store/cart';

const BRAND_LINKS = [
  { href: '/loja/nike', label: 'Nike' },
  { href: '/loja/adidas', label: 'Adidas' },
  { href: '/loja/puma', label: 'Puma' },
];

export default function StoreHeader() {
  const items = useCart((s) => s.items);
  const toggle = useCart((s) => s.toggle);
  const count = cartCount(items);

  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          GoalPulse
        </Link>

        <Link href="/loja" className="text-lg font-black tracking-tight text-white">
          🛍️ Loja
        </Link>

        <nav className="hidden sm:flex items-center gap-1 ml-4">
          {BRAND_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggle}
          className="relative ml-auto flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <ShoppingBag className="w-4 h-4 text-white" />
          <span className="text-sm text-white hidden sm:inline">Carrinho</span>
          {count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

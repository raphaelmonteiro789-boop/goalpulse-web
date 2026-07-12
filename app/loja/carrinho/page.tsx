'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useCart, cartTotal } from '@/store/cart';
import { BRANDS } from '@/lib/products';
import ShoeGlyph from '../components/ShoeGlyph';

export default function CarrinhoPage() {
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const total = cartTotal(items);

  return (
    <main className="max-w-[900px] mx-auto px-6 py-14">
      <h1 className="text-3xl font-black text-white mb-8">Seu carrinho</h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-white/40 mb-6">Seu carrinho está vazio.</p>
          <Link href="/loja" className="inline-flex px-6 py-3 rounded-xl bg-white text-black font-bold">
            Continuar comprando
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-10">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="flex gap-4 border border-white/10 rounded-2xl p-4">
                <div
                  className="w-24 h-24 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.product.color}1A` }}
                >
                  <ShoeGlyph color={item.product.color} brand={item.product.brand} className="w-20 h-12" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase tracking-widest text-white/40">
                    {BRANDS[item.product.brand].name}
                  </span>
                  <p className="text-base font-semibold text-white truncate">{item.product.name}</p>
                  <p className="text-xs text-white/40 mb-3">Tamanho {item.size}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-white"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm text-white w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-white"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-base font-bold text-white">
                      R$ {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.product.id, item.size)}
                  aria-label="Remover item"
                  className="self-start text-white/30 hover:text-red-400"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <span className="text-white/60">Total</span>
            <span className="text-2xl font-black text-white">R$ {total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => toast.success('Checkout em breve! 🛍️')}
            className="w-full mt-6 py-4 rounded-xl bg-white text-black font-bold hover:scale-[1.01] transition-transform"
          >
            Finalizar compra
          </button>
        </>
      )}
    </main>
  );
}

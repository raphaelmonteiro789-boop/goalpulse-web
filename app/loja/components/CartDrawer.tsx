'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useCart, cartTotal } from '@/store/cart';
import { BRANDS } from '@/lib/products';
import ShoeGlyph from './ShoeGlyph';

export default function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const total = cartTotal(items);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-[#0d0d0d] border-l border-white/10 z-50 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
              <h2 className="text-white font-bold">Seu carrinho</h2>
              <button onClick={close} aria-label="Fechar carrinho">
                <X className="w-5 h-5 text-white/60 hover:text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.length === 0 && (
                <p className="text-white/40 text-sm text-center mt-10">Seu carrinho está vazio.</p>
              )}
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-3 border-b border-white/5 pb-4">
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.product.color}1A` }}
                  >
                    <ShoeGlyph color={item.product.color} brand={item.product.brand} className="w-14 h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase tracking-widest text-white/40">
                      {BRANDS[item.product.brand].name}
                    </span>
                    <p className="text-sm font-semibold text-white truncate">{item.product.name}</p>
                    <p className="text-xs text-white/40 mb-2">Tam. {item.size}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm text-white w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-white">
                        R$ {(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id, item.size)}
                    aria-label="Remover item"
                    className="self-start text-white/30 hover:text-red-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/60 text-sm">Total</span>
                <span className="text-white text-lg font-black">R$ {total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => toast.success('Checkout em breve! 🛍️')}
                disabled={items.length === 0}
                className="w-full py-3 rounded-xl bg-white text-black font-bold disabled:opacity-40 hover:scale-[1.01] transition-transform"
              >
                Finalizar compra
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

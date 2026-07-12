import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Product } from '@/lib/products';

export interface CartItem {
  product: Product;
  size: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size: number, quantity?: number) => void;
  removeItem: (productId: string, size: number) => void;
  updateQuantity: (productId: string, size: number, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

function sameLine(a: CartItem, productId: string, size: number) {
  return a.product.id === productId && a.size === size;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      addItem: (product, size, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((i) => sameLine(i, product.id, size));
          if (existing) {
            return {
              items: state.items.map((i) =>
                sameLine(i, product.id, size) ? { ...i, quantity: i.quantity + quantity } : i
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, { product, size, quantity }], isOpen: true };
        }),
      removeItem: (productId, size) =>
        set((state) => ({ items: state.items.filter((i) => !sameLine(i, productId, size)) })),
      updateQuantity: (productId, size, quantity) =>
        set((state) => ({
          items: state.items
            .map((i) => (sameLine(i, productId, size) ? { ...i, quantity } : i))
            .filter((i) => i.quantity > 0),
        })),
      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: 'goalpulse-loja-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
}

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

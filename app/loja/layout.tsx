import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import StoreHeader from './components/StoreHeader';
import StoreFooter from './components/StoreFooter';
import CartDrawer from './components/CartDrawer';

export const metadata: Metadata = {
  title: { default: 'Loja GoalPulse — Nike, Adidas e Puma', template: '%s | Loja GoalPulse' },
  description: 'Chuteiras e tênis Nike, Adidas e Puma com experiência 3D interativa. Explore, gire, escolha a cor e compre.',
  keywords: ['chuteiras', 'tênis', 'Nike', 'Adidas', 'Puma', 'loja esportiva', '3D'],
};

export default function LojaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black min-h-screen">
      <StoreHeader />
      {children}
      <StoreFooter />
      <CartDrawer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

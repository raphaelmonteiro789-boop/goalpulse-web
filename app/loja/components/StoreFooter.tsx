import Link from 'next/link';

export default function StoreFooter() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <span className="text-lg font-black text-white">🛍️ Loja GoalPulse</span>
          <p className="text-sm text-white/40 max-w-xs mt-3">
            Chuteiras e tênis Nike, Adidas e Puma em um só lugar, com experiência 3D interativa.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Marcas</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li><Link href="/loja/nike" className="hover:text-white transition-colors">Nike</Link></li>
            <li><Link href="/loja/adidas" className="hover:text-white transition-colors">Adidas</Link></li>
            <li><Link href="/loja/puma" className="hover:text-white transition-colors">Puma</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Ajuda</h4>
          <ul className="space-y-2 text-sm text-white/40">
            <li><Link href="/loja/carrinho" className="hover:text-white transition-colors">Carrinho</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Trocas e devoluções</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Guia de tamanhos</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 py-4 text-xs text-white/30 text-center">
          © {new Date().getFullYear()} Loja GoalPulse. Marcas mencionadas pertencem aos seus respectivos donos.
        </div>
      </div>
    </footer>
  );
}

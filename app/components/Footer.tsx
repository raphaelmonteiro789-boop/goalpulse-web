import Link from 'next/link';
import { Zap } from 'lucide-react';

const columns = [
  {
    title: 'GoalPulse',
    links: ['Sobre nós', 'Carreiras', 'Imprensa', 'Contato'],
  },
  {
    title: 'Conteúdo',
    links: ['Notícias', 'Jogos ao Vivo', 'Copa 2026', 'Estatísticas'],
  },
  {
    title: 'Legal',
    links: ['Termos de Uso', 'Privacidade', 'Cookies'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gp-dark border-t border-gp-dark-border mt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-xl font-display font-bold text-white">GP</span>
            <Zap className="w-5 h-5 text-gp-gold fill-gp-gold" />
            <span className="text-lg font-display font-bold text-white">GoalPulse</span>
          </div>
          <p className="text-sm text-gp-gray max-w-xs">
            Futebol em tempo real com Inteligência Artificial. Notícias, placares e estatísticas em um só lugar.
          </p>
          <Link
            href="/loja"
            className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-gp-dark-card border border-gp-dark-border rounded-lg text-xs font-semibold text-white hover:border-gp-blue/50 hover:text-gp-blue transition-all"
          >
            🛍️ Visite nossa loja
          </Link>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold text-white mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gp-gray hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gp-dark-border">
        <div className="max-w-[1440px] mx-auto px-6 py-4 text-xs text-gp-gray text-center">
          © {new Date().getFullYear()} GoalPulse. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

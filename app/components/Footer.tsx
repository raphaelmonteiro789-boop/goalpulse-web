export default function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#0A0A0A] px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">

          {/* Brand */}
          <div>
            <span className="text-xl font-black">
              <span className="text-white">GP</span>
              <span className="text-[#FFD700]">⚡</span>
              <span className="text-[#0066FF] ml-1">GoalPulse</span>
            </span>
            <p className="text-sm text-[#888888] mt-2 max-w-xs leading-relaxed">
              A Inteligência do Futebol. Notícias, placares e IA em um só lugar.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                titulo: 'Plataforma',
                links: ['Notícias', 'Jogos Ao Vivo', 'Copa 2026', 'GoalPulse TV', 'Pulse AI'],
              },
              {
                titulo: 'Empresa',
                links: ['Sobre', 'Contato', 'Carreiras'],
              },
              {
                titulo: 'Legal',
                links: ['Privacidade', 'Termos de Uso', 'Cookies'],
              },
            ].map(({ titulo, links }) => (
              <div key={titulo}>
                <h4 className="text-sm font-semibold text-white mb-3">{titulo}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-[#888888] hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#555555]">
            © {new Date().getFullYear()} GoalPulse. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#555555]">
            GP⚡ GoalPulse — A Inteligência do Futebol
          </p>
        </div>

      </div>
    </footer>
  );
}

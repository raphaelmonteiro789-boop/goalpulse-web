type NoticiaCardProps = {
  titulo: string;
  resumo: string;
  categoria?: string;
};

function NoticiaCard({ titulo, resumo, categoria }: NoticiaCardProps) {
  return (
    <div className="bg-[#111827] border border-[#1f2937] p-5 rounded-xl hover:border-[#0066FF]/50 hover:bg-[#1a2235] transition-all duration-200 cursor-pointer group">
      {categoria && (
        <span className="inline-block text-xs font-semibold text-[#0066FF] bg-[#0066FF]/10 border border-[#0066FF]/20 px-2 py-0.5 rounded mb-3">
          {categoria}
        </span>
      )}
      <h3 className="font-bold text-base text-white leading-snug mb-2 group-hover:text-[#0066FF] transition-colors">
        {titulo}
      </h3>
      <p className="text-[#9ca3af] text-sm leading-relaxed">
        {resumo}
      </p>
    </div>
  );
}

const noticias = [
  {
    id: 1,
    categoria: "BRASILEIRÃO",
    titulo: "Flamengo vence clássico e assume liderança",
    resumo: "Rubro-Negro conquista vitória importante no Brasileirão com gol nos acréscimos.",
  },
  {
    id: 2,
    categoria: "CHAMPIONS LEAGUE",
    titulo: "Champions League 2026: confrontos das quartas definidos",
    resumo: "Sorteio define os duelos das quartas de final da maior competição europeia.",
  },
  {
    id: 3,
    categoria: "MERCADO DA BOLA",
    titulo: "Mercado da Bola: as principais transferências da semana",
    resumo: "Veja as movimentações mais importantes do futebol mundial nesta janela de transferências.",
  },
];

export default function SecaoNoticias() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#0066FF] uppercase tracking-widest mb-1">
              Últimas
            </p>
            <h2 className="text-2xl font-bold text-white">
              🔥 Notícias em Destaque
            </h2>
          </div>
          <button className="text-sm text-[#0066FF] hover:text-white transition-colors font-medium">
            Ver todas →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {noticias.map((n) => (
            <NoticiaCard
              key={n.id}
              titulo={n.titulo}
              resumo={n.resumo}
              categoria={n.categoria}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

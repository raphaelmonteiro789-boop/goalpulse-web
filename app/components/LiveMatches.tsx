type Jogo = {
  id: number;
  timeCasa: string;
  timeVisitante: string;
  placarCasa: number;
  placarVisitante: number;
  competicao: string;
  minuto: string;
};

const jogos: Jogo[] = [
  {
    id: 1,
    timeCasa: 'Flamengo',
    timeVisitante: 'Palmeiras',
    placarCasa: 2,
    placarVisitante: 1,
    competicao: 'Brasileirão Série A',
    minuto: "78'",
  },
  {
    id: 2,
    timeCasa: 'Real Madrid',
    timeVisitante: 'Barcelona',
    placarCasa: 1,
    placarVisitante: 1,
    competicao: 'La Liga',
    minuto: "63'",
  },
  {
    id: 3,
    timeCasa: 'Brasil',
    timeVisitante: 'Argentina',
    placarCasa: 2,
    placarVisitante: 0,
    competicao: 'Copa do Mundo 2026',
    minuto: "45'",
  },
];

function JogoCard({ jogo }: { jogo: Jogo }) {
  return (
    <div className="bg-[#111111] border border-[#FF3B30]/30 rounded-xl p-5 hover:border-[#FF3B30]/60 transition-all">

      {/* Competição + badge ao vivo */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#888888] font-medium">{jogo.competicao}</span>
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF3B30]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-pulse" />
          {jogo.minuto}
        </div>
      </div>

      {/* Times e placar */}
      <div className="flex items-center justify-between gap-3">
        <span className="flex-1 text-sm font-bold text-white text-right">{jogo.timeCasa}</span>

        <div className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-xl">
          <span className="text-2xl font-black text-white">{jogo.placarCasa}</span>
          <span className="text-[#555555] font-bold">×</span>
          <span className="text-2xl font-black text-white">{jogo.placarVisitante}</span>
        </div>

        <span className="flex-1 text-sm font-bold text-white">{jogo.timeVisitante}</span>
      </div>

    </div>
  );
}

export default function LiveMatches() {
  return (
    <section id="jogos" className="px-6 py-12 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#FF3B30] uppercase tracking-widest mb-1">
              Tempo Real
            </p>
            <h2 className="text-2xl font-bold text-white">
              🔴 Jogos Ao Vivo
            </h2>
          </div>
          <button className="text-sm text-[#0066FF] hover:text-white transition-colors font-medium">
            Todos os jogos →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {jogos.map((jogo) => (
            <JogoCard key={jogo.id} jogo={jogo} />
          ))}
        </div>

      </div>
    </section>
  );
}

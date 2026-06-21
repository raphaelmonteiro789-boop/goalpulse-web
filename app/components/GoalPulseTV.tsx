type Video = {
  id: number;
  titulo: string;
  duracao: string;
  tipo: string;
  icone: string;
};

const videos: Video[] = [
  { id: 1, titulo: 'Melhores Momentos: Brasil 2×0 Argentina | Copa 2026', duracao: '8:32', tipo: 'MELHORES MOMENTOS', icone: '⚡' },
  { id: 2, titulo: 'Análise Tática: Como o Brasil dominou o meio-campo', duracao: '12:15', tipo: 'ANÁLISE', icone: '📊' },
  { id: 3, titulo: 'Entrevista exclusiva: Vinicius Jr após a vitória', duracao: '5:47', tipo: 'ENTREVISTA', icone: '🎙️' },
];

function VideoCard({ video, destaque }: { video: Video; destaque?: boolean }) {
  return (
    <div className={`bg-[#111111] border border-[#222222] rounded-xl overflow-hidden hover:border-[#0066FF]/40 transition-all cursor-pointer group ${destaque ? 'md:col-span-2' : ''}`}>

      {/* Thumbnail */}
      <div className={`relative bg-[#1A1A1A] flex items-center justify-center ${destaque ? 'h-52' : 'h-36'}`}>
        <span className="text-5xl opacity-20">📺</span>

        {/* Play */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <div className="w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duração */}
        <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-xs font-mono rounded">
          {video.duracao}
        </span>

        {/* Tipo */}
        <span className="absolute top-2 left-2 text-lg">{video.icone}</span>
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="text-xs font-semibold text-[#0066FF] mb-2 block">{video.tipo}</span>
        <h3 className="text-sm font-bold text-white group-hover:text-[#0066FF] transition-colors leading-snug line-clamp-2">
          {video.titulo}
        </h3>
        <p className="text-xs text-[#555555] mt-2">GoalPulse TV</p>
      </div>

    </div>
  );
}

export default function GoalPulseTV() {
  const [destaque, ...resto] = videos;
  return (
    <section id="tv" className="px-6 py-12 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#0066FF] uppercase tracking-widest mb-1">
              Multimídia
            </p>
            <h2 className="text-2xl font-bold text-white">
              📺 GoalPulse TV
            </h2>
          </div>
          <button className="text-sm text-[#0066FF] hover:text-white transition-colors font-medium">
            Ver canal →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {destaque && <VideoCard video={destaque} destaque />}
          {resto.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>

      </div>
    </section>
  );
}

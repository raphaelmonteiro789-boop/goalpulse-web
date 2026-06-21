export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16 px-6">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,102,255,0.15) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF3B30]/10 border border-[#FF3B30]/30 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-pulse" />
          <span className="text-xs font-bold text-[#FF3B30] tracking-widest uppercase">Jogos Ao Vivo</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
          <span className="text-white">A Inteligência</span>
          <br />
          <span style={{
            backgroundImage: 'linear-gradient(90deg, #0066FF, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            do Futebol
          </span>
        </h1>
        <p className="text-[#888888] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Notícias, resultados, estatísticas e{' '}
          <span className="text-[#0066FF] font-semibold">Inteligência Artificial</span>{' '}
          do futebol em um só lugar.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#noticias" className="px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-xl transition-colors text-sm">
            Ver Notícias
          </a>
          <a href="#pulse-ai" className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#222] border border-[#333] hover:border-[#0066FF]/50 text-white font-semibold rounded-xl transition-all text-sm">
            🤖 Pulse AI
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {[
            { valor: '500+', label: 'Ligas monitoradas' },
            { valor: '24/7', label: 'Cobertura ao vivo' },
            { valor: 'IA', label: 'Análises inteligentes' },
          ].map(({ valor, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-[#0066FF]">{valor}</div>
              <div className="text-xs text-[#555555] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

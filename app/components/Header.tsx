export default function Header() {
  return (
    <header className="bg-[#0A0A0A] border-b border-[#222222] px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-white">GP</span>
            <span className="text-[#FFD700]">⚡</span>
            <span className="text-[#0066FF] ml-1">GoalPulse</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {['Notícias', 'Ao Vivo', 'Copa 2026', 'GoalPulse TV', 'Pulse AI'].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 text-sm text-[#888888] hover:text-white hover:bg-[#1A1A1A] rounded-lg transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Live badge + CTA */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF3B30]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30] animate-pulse" />
            AO VIVO
          </div>
          <button className="px-4 py-2 text-sm font-semibold bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-lg transition-colors">
            Entrar
          </button>
        </div>

      </div>
    </header>
  );
}

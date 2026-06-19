export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      <header className="bg-zinc-900 border-b border-zinc-800 p-5">
        <h1 className="text-4xl font-bold text-center">
          GP⚡ GoalPulse
        </h1>
        <p className="text-center text-gray-400 mt-2">
          A Inteligência do Futebol
        </p>
        <nav className="mt-4 flex justify-center gap-6 text-sm">
  <a href="#">Notícias</a>
  <a href="#">Jogos</a>
  <a href="#">GoalPulse TV</a>
  <a href="#">Pulse AI</a>
</nav>
      </header>
<section className="p-6">
  <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 text-center">
    <h2 className="text-4xl font-bold mb-3">
      ⚡ Bem-vindo ao GoalPulse
    </h2>

    <p className="text-gray-300 mb-6">
      Notícias, resultados, estatísticas e inteligência artificial do futebol em um só lugar.
    </p>

    <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400">
      Ver Notícias
    </button>
  </div>
</section>
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          🔥 Notícias em Destaque
        </h2>

        <div className="bg-zinc-900 p-4 rounded-xl mb-3">
          Mbappé marca dois gols e lidera vitória.
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl mb-3">
          Brasil confirma vaga para próxima fase.
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          Flamengo anuncia novo reforço.
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          ⚽ Jogos Ao Vivo
        </h2>

        <div className="bg-zinc-900 p-4 rounded-xl">
          Brasil 2 x 1 Argentina • 78'
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          🏆 Copa do Mundo 2026
        </h2>

        <div className="bg-zinc-900 p-4 rounded-xl">
          Acompanhe jogos, grupos, artilharia e classificação.
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          📺 GoalPulse TV
        </h2>

        <div className="bg-zinc-900 p-4 rounded-xl">
          Vídeos, resumos e destaques.
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          🤖 Pulse AI
        </h2>

        <div className="bg-zinc-900 p-4 rounded-xl">
          Pergunte qualquer coisa sobre futebol.
        </div>
      </section>

      <footer className="bg-zinc-900 text-center p-6 mt-10 border-t border-zinc-800">
        © 2026 GoalPulse • GP⚡
      </footer>

    </main>
  );
}
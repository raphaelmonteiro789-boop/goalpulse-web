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

        <div className="bg-zinc-900 p-5 rounded-xl mb-3 border border-zinc-800 hover:border-blue-500">
  <h3 className="font-bold text-lg">
    Mbappé marca dois gols e lidera vitória
  </h3>
  <p className="text-gray-400 mt-2">
    Craque francês foi o destaque da partida.
  </p>
</div>

<div className="bg-zinc-900 p-5 rounded-xl mb-3 border border-zinc-800 hover:border-green-500">
  <h3 className="font-bold text-lg">
    Brasil confirma vaga para próxima fase
  </h3>
  <p className="text-gray-400 mt-2">
    Seleção garante classificação antecipada.
  </p>
</div>

<div className="bg-zinc-900 p-5 rounded-xl mb-3 border border-zinc-800 hover:border-red-500">
  <h3 className="font-bold text-lg">
    Flamengo anuncia novo reforço
  </h3>
  <p className="text-gray-400 mt-2">
    Clube apresenta contratação para a temporada.
  </p>
</div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          ⚽ Jogos Ao Vivo
        </h2>
<div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
  <div className="flex justify-between items-center">
    <span className="font-bold">🇧🇷 Brasil</span>
    <span className="text-yellow-400 font-bold">2 x 1</span>
    <span className="font-bold">🇦🇷 Argentina</span>
  </div>

  <div className="text-center text-sm text-gray-400 mt-2">
    Ao Vivo • 78'
  </div>
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

  <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
    <h3 className="font-bold text-lg">
      Melhores Momentos da Rodada
    </h3>

    <div className="bg-black rounded-lg h-52 flex items-center justify-center mt-4">
      ▶️ Vídeo em destaque
    </div>

    <p className="text-gray-400 mt-3">
      Assista aos gols, lances e entrevistas mais importantes do futebol.
    </p>
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
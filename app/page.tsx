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
      </header>

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
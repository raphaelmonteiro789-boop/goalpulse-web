export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">
        GP⚡ GoalPulse
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        A Inteligência do Futebol
      </p>

      <div className="flex gap-4">
        <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
          Notícias
        </button>

        <button className="bg-blue-600 px-6 py-3 rounded-xl font-bold">
          Jogos Ao Vivo
        </button>

        <button className="bg-green-600 px-6 py-3 rounded-xl font-bold">
          GoalPulse TV
        </button>
      </div>
    </main>
  );
}
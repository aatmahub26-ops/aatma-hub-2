export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <section className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Aatma HUB
        </h1>

        <p className="text-xl text-zinc-400 mb-8">
          India's Trusted Digital Gaming Top-Up Platform
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold">
            Explore Games
          </button>

          <button className="px-6 py-3 border border-zinc-700 rounded-xl">
            Join Community
          </button>
        </div>
      </section>
    </main>
  );
}

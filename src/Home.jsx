import './App.css'

 export default function Home() {
  return (
    <div className="w-full bg-amber-50">

      {/* HERO SECTION */}
      <section className="px-6 py-20  lg:py-32 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Learn languages <span className="text-cyan-500">the easy way.</span>
        </h1>

        <p className="mt-6 text-xl text-stone-800 max-w-2xl mx-auto">
          Lessons based on what you're doing right now. Zero efforts, zero stress.
          Just natural learning while living your day.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 text-xl rounded-xl bg-cyan-500 text-white font-semibold hover:text-stone-800 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300"
          >
            Start for free
          </a>
          <a
            href="#"
            className="px-6 py-3  text-xl rounded-xl  bg-stone-800 text-white font-semibold hover:bg-lime-300 hover:text-stone-800 hover:shadow-lg hover:shadow-lime-500"
          >
            View plans
          </a>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="px-6 py-16 bg-amber-50  scrolling-bg">
        <div className="max-w-7xl mx-auto p-8 rounded-xl bg-cyan-100 shadow-sm ">
          <h2 className="text-3xl font-bold text-center mb-12 ">
            Why people love Lurny 🦦
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* CARD 1 */}
            <div className="p-8 rounded-xl bg-white shadow-sm  hover:shadow-cyan-300 hover:shadow-lg ">
              <div className="text-4xl mb-4">🚶🏻</div>
              <h3 className="font-semibold text-xl mb-2">A lesson whenever</h3>
              <p className="text-stone-800">
                Learn a new language anywhere, anytime.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-8 rounded-xl bg-white shadow-sm  hover:shadow-cyan-300 hover:shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-semibold text-xl mb-2">Learn While Doing</h3>
              <p className="text-stone-800">
                Pick what you're doing (cooking, cleaning, gym…) and learn with <span className='text-indigo-600 font-bold hover:text-cyan-500'>contextual learning</span>.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-8 rounded-xl bg-white shadow-sm hover:shadow-cyan-300 hover:shadow-lg">
              <div className="text-4xl mb-4">🌎</div>
              <h3 className="font-semibold text-xl mb-2">Real Language</h3>
              <p className="text-stone-800">
                No boring phrases, only real speaking part of daily life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="px-6 py-20 text-center mx:">
        <h2 className="text-3xl font-bold mb-4">
          Start learning <span className='text-cyan-400 text-shadow-stone-600 text-shadow-lg'>now</span>
        </h2>
        <p className="text-stone-800 mb-8">
          It's free, simple and designed for people with zero time.
        </p>

        <a
          href="#"
          className="px-8 py-4 rounded-xl bg-cyan-500 text-white font-semibold hover:text-stone-800 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}


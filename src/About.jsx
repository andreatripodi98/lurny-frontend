import lurnyLogo from "./assets/lurnylogo.png";

export default function About() {
  return (
    <div className="bg-amber-50">

      {/* ============ HERO SECTION ============ */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        
        {/* Blob sfocato */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 flex justify-center overflow-hidden blur-3xl"
        >
          <div
            className="w-[50rem] h-[40rem] rounded-full"
            style={{
              clipPath:
                "polygon(72% 18%, 100% 41%, 93% 89%, 52% 100%, 18% 85%, 0 35%, 18% 0, 50% 10%)",
            }}
          ></div>
        </div>

              {/* Hero content */}
        
        <div className="mx-auto max-w-3xl text-center pt-12">
          <img
            src={lurnyLogo}
            alt="Lurny"
            className="h-20 mx-auto mb-6"
          />

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The Story Behind Lurny 🦦
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A learning method shaped by real life, designed for people who want
            to learn while living, not while fighting with grammar books.
          </p>
        </div>
      </section>

      {/* ============ BIG IMAGE ============ */}
      <div className="mt-20 sm:mt-28 mx-auto max-w-6xl px-6">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000"
          alt="Lurny Hero"
          className="w-full rounded-3xl shadow-lg object-cover aspect-[16/7]"
        />
      </div>

      {/* ============ CONTENT SECTIONS ============ */}
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 space-y-32">

        {/* WHO I AM */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Who I Am
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              I’m Andrea! A developer and someone who has always learned
              languages in a very personal way: living them. I’ve never relied
              on classic studying. Instead, I picked words from context, daily
              habits, conversations, songs, and whatever life threw at me.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
            alt="Teamwork"
            className="rounded-2xl shadow-md object-cover w-full aspect-[4/3]"
          />
        </section>

        {/* WHY I DO IT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200"
            alt="Learning"
            className="rounded-2xl shadow-md object-cover w-full aspect-[4/3] order-last lg:order-first"
          />

          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Why I’m Building This
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              I always wanted a tool that followed my rhythm. Not something
              demanding, not another task,  but a companion.  
              Lurny was born from my own frustration with apps that expect
              discipline instead of adapting to the way the brain actually works:
              exposure, repetition, context and low-pressure learning.
            </p>
          </div>
        </section>

        {/* PROJECTS / VISION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
              Vision & Future
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              My long-term vision is simple:  
              make language learning effortless.  
              Not something you “set time aside for”, something that blends into
              your lifestyle across your daily activities.
              Lurny is evolving step by step, growing from a personal experiment
              to a platform meant for real people with real lives.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
            alt="Vision"
            className="rounded-2xl shadow-md object-cover w-full aspect-[4/3]"
          />
        </section>

      </div>
    </div>
  );
}

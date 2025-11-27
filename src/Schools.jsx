export default function Schools() {
  return (
    <div className="w-full bg-amber-50 text-stone-900">

      
      <section className="text-center px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Our Lurny Partner Schools
        </h1>

        <p className="mt-6 text-xl text-stone-700 max-w-3xl mx-auto">
          Lurny collaborates with selected educational institutions to offer a 
          modern, flexible and immersive approach to language learning.  
          Our “Lurny Schools” represent a network of trusted partners who share 
          a single vision: making languages accessible to everyone.
        </p>
      </section>

      
      <section className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            A Modern Approach to Language Education
          </h2>
          <p className="text-stone-700 leading-relaxed text-lg">
            Lurny Schools implement an innovative methodology that blends digital
            lessons, contextual content and practical activities.  
            Students learn through daily experiences, turning everyday actions
            into meaningful, natural language practice.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://raisingchildren.net.au/__data/assets/image/0014/102821/Secondary-schools-things-to-consider-wide.jpg"
            alt="Modern School"
            className="w-full h-full object-cover"
          />
        </div>

      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="rounded-xl overflow-hidden shadow-lg order-last md:order-first">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94"
            alt="Campus"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            A Growing Network of Trusted Partners
          </h2>
          <p className="text-stone-700 leading-relaxed text-lg">
            Each partner institution integrates the Lurny method into its activities,
            providing students with consistent, results-oriented learning paths.  
            Our network continues to expand, driven by the shared goal of making 
            language learning simple, effective and meaningful.
          </p>
        </div>

      </section>

      
      <section className="px-6 py-20 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Modern Facilities, Motivated Students
        </h2>

        <p className="text-stone-700 max-w-3xl mx-auto mb-12 leading-relaxed text-lg">
          Lurny Schools offer welcoming, contemporary spaces designed for smooth 
          and natural learning. Digital laboratories, study rooms and coworking areas 
          create an environment that enhances productivity and autonomy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-xl font-semibold mb-2">Interactive Labs</h3>
            <p className="text-stone-700">
              Dedicated digital spaces for hands-on activities and immersive practice.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
            <p className="text-stone-700">
              Qualified educators who guide students through personalized learning paths.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Flexible Method</h3>
            <p className="text-stone-700">
              A learning model that adapts to each student’s pace, goals and lifestyle.
            </p>
          </div>

        </div>
      </section>

      
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Discover Lurny Partner Schools
        </h2>

        <p className="text-stone-700 max-w-2xl mx-auto mb-8 text-lg">
          Explore the Lurny network and find the institution that best fits your 
          learning style and objectives.
        </p>

        <a
          href="#"
          className="px-8 py-4 rounded-xl bg-cyan-500 text-white font-semibold
                     hover:bg-cyan-200 hover:text-stone-900 hover:shadow-lg hover:shadow-cyan-300
                     transition"
        >
          Explore our network
        </a>
      </section>

    </div>
  );
}

import notFoundImg from "./assets/notfound.png";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full">
      
      <img
        src={notFoundImg}
        alt="not found"
        className="absolute inset-0 w-full h-full object-contain bg-trasparent"
      />

      
      <div className="absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:py-40">
        

        <h1 className="mt-4 text-5xl font-bold text-white sm:text-7xl">
          Page not found
        </h1>

        <p className="mt-6 text-lg text-white/70 sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-10 flex justify-center">
          <a href="/" className="text-sm font-semibold text-white">
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}





export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-transparent"
    >

      {/* Animated Background */}
      <div className="fixed inset-0 -z-20 overflow-hidden bg-black">

        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-purple-700/30 rounded-full blur-[140px] animate-blob" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-pink-600/20 rounded-full blur-[140px] animate-blob animation-delay-2000" />

        <div className="absolute top-[30%] left-[40%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px] animate-blob animation-delay-4000" />

      </div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6 font-light">
        </p>

        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
          WELCOME HOME 
          <br />
          <span className="italic font-light">
            WHAT WORDS CANNOT EXPRESS, ART REVEALS
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#gallery"
            className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold tracking-wider hover:bg-white/90 transition-all duration-200"
          >
            Explore Gallery
          </a>

          <a
            href="#shop"
            className="px-8 py-3 rounded-full border border-white/40 text-white text-sm font-light tracking-wider hover:border-white hover:bg-white/10 transition-all duration-200"
          >
            Shop Now
          </a>
        </div>
      </div>

    </section>
  );
}
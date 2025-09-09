export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative">
      {/* Background image of dispatcher */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/Images/agent large.983Z.png')" }}
      ></div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          The UK's £200B+ SME service economy is crippled by a hidden 'Efficiency Tax'.
        </h1>

        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-body">
          Aegis provides the AI-native "co-worker" that eliminates it, turning manual chaos into orchestrated logistics.
        </p>

        <div className="pt-6">
          <a
            href="mailto:invest@aegis-os.com?subject=Investment Memorandum Request"
            className="bg-[--accent] hover:opacity-90 text-white px-8 py-4 rounded-md font-semibold text-lg transition-opacity duration-300 shadow-lg inline-block"
          >
            Request the Investment Memorandum
          </a>
        </div>
      </div>
    </section>
  );
}
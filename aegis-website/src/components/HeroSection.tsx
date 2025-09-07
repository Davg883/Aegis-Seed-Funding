'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern/Visual */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-cyan-500 rounded-full blur-xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            The AI Operating System
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              for the Real Economy
            </span>
          </h1>
          
          {/* Sub-headline */}
          <h2 className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            We are building the AI 'Design Partner' for the UK's underserved SME service sector, 
            eradicating the <span className="font-semibold text-white">£6+ 'Efficiency Tax'</span> that 
            cripples their profitability.
          </h2>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            {/* Primary CTA */}
            <a 
              href="/Images/White Paper.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
            >
              Read Our White Paper
            </a>
            
            {/* Secondary CTA */}
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Join Our Mission
            </button>
          </div>
          
          {/* Featured Video Placeholder */}
          <div className="mt-16 relative">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-8 shadow-2xl text-center">
                <div className="bg-slate-800 rounded-lg p-12 mb-4">
                  <div className="text-6xl mb-4">🎬</div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Seed Funding Pitch Video
                  </h4>
                  <p className="text-gray-300 mb-6">
                    Watch our comprehensive pitch presentation showcasing the Aegis Logistics opportunity.
                  </p>
                  <p className="text-sm text-gray-400">
                    Video file too large for GitHub hosting. Contact us for full presentation.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-6 text-center">
                Transforming the real economy through AI innovation
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
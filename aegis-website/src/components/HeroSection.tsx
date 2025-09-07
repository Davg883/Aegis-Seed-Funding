'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Load Imgur embed script
    const script = document.createElement('script');
    script.src = '//s.imgur.com/min/embed.js';
    script.async = true;
    script.charset = 'utf-8';
    document.head.appendChild(script);
    
    // Add custom CSS to control iframe sizing
    const style = document.createElement('style');
    style.textContent = `
      .imgur-embed-pub iframe {
        max-width: 100% !important;
        max-height: 500px !important;
        width: auto !important;
        height: auto !important;
      }
      @media (max-width: 768px) {
        .imgur-embed-pub iframe {
          max-height: 300px !important;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Cleanup script and style on unmount
      const existingScript = document.querySelector('script[src="//s.imgur.com/min/embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      const existingStyle = document.querySelector('style');
      if (existingStyle && existingStyle.textContent?.includes('imgur-embed-pub')) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);
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
            We are building the AI &lsquo;Design Partner&rsquo; for the UK&rsquo;s underserved SME service sector, 
            eradicating the <span className="font-semibold text-white">£6+ &lsquo;Efficiency Tax&rsquo;</span> that 
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
          
          {/* Featured Video - Imgur Embed */}
          <div className="mt-16 relative">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl p-4 shadow-2xl">
                <div className="bg-white rounded-lg p-2 overflow-hidden">
                  {isClient ? (
                    <div className="relative" style={{ maxWidth: '800px', margin: '0 auto' }}>
                      <blockquote 
                        className="imgur-embed-pub" 
                        lang="en" 
                        data-id="iAZYmvW"
                        style={{ 
                          maxWidth: '100%', 
                          height: 'auto',
                          transform: 'scale(0.85)',
                          transformOrigin: 'center top',
                          margin: '0 auto'
                        }}
                      >
                        <a href="https://imgur.com/iAZYmvW">
                          View post on imgur.com
                        </a>
                      </blockquote>
                    </div>
                  ) : (
                    <div className="bg-gray-200 rounded-lg p-12 text-center">
                      <div className="text-4xl mb-4">🎬</div>
                      <p className="text-gray-600">Loading video...</p>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-6 text-center">
                Transforming the real economy through AI innovation
              </p>
            </div>
          </div>

          {/* AI Development Showcase - New Images */}
          <div className="mt-16 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our AI Development in Action
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real-time development of our agentic AI systems and operational outputs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* AI Studio Development */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-2xl">
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <img 
                      src="/Images/Google_AI_Studio_2025-09-07T15_44_14.540Z.png" 
                      alt="AI Development Studio - Building Intelligent Agents"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Live AI Development
                    </h4>
                    <p className="text-blue-100 text-sm">
                      Building our proprietary AI agents in Google AI Studio
                    </p>
                  </div>
                </div>

                {/* Multi-Agent System */}
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-2xl">
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <img 
                      src="/Images/agents.761Z.png" 
                      alt="Multi-Agent AI System - Coordinated Intelligence Network"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Multi-Agent Orchestration
                    </h4>
                    <p className="text-purple-100 text-sm">
                      Coordinated AI agents working together for optimal efficiency
                    </p>
                  </div>
                </div>
              </div>

              {/* Single Agent Detail */}
              <div className="mt-8">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 shadow-2xl max-w-4xl mx-auto">
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <img 
                      src="/Images/agent%20large.983Z.png" 
                      alt="Detailed AI Agent Architecture - Advanced Learning System"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Advanced Agent Architecture
                    </h4>
                    <p className="text-green-100 text-sm">
                      Deep dive into our sophisticated AI agent design and capabilities
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-gray-400">
                  Concrete evidence of our technical execution and AI development capabilities
                </p>
              </div>
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
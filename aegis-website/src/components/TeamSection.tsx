'use client';

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
            A Founding Team of Proven Operators
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">DG</span>
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-2">David Grannum</h4>
            <p className="text-lg font-semibold text-blue-600 mb-4">Founder & CEO</p>
            <p className="text-sm text-gray-500 mb-4">The Operator-Visionary</p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Tri-sector expert with operational experience (Solent Fuels), corporate strategy (Texaco), 
              and AI architectural vision.
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">SS</span>
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Sai Sunkara</h4>
            <p className="text-lg font-semibold text-purple-600 mb-4">Co-Founder & CTO</p>
            <p className="text-sm text-gray-500 mb-4">The AI Architect</p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              World-class AI systems builder (ex-Cisco) with proven blueprint for 
              agentic AI and optimisation technology.
            </p>
          </div>

          <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
            <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AF</span>
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Adam Fraser-Harris</h4>
            <p className="text-lg font-semibold text-green-600 mb-4">Co-Founder & CFO</p>
            <p className="text-sm text-gray-500 mb-4">The Financial Operator</p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Venture-backed CFO & CEO (ex-blow LTD) with track record of scaling 
              SaaS companies with rigorous financial discipline.
            </p>
          </div>
        </div>

        {/* Team Credentials Visualization */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 shadow-lg">
          <h4 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Proven Track Record & Credentials
          </h4>
          
          <div className="flex justify-center mb-6">
            <img 
              src="/Images/Team Score.390Z.png" 
              alt="Founding Team Credentials and Track Record"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-blue-600">World-Class Expertise:</span> The rare combination of 
              operational depth, technical excellence, and financial rigor needed to execute at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

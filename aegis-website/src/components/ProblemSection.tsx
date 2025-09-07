'use client';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Unsexy, £200B+ Opportunity
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
            The High Cost of Inefficiency
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Millions of UK SMEs are trapped in a 'swivel chair interface', manually bridging 
            disconnected systems. We call this the <span className="font-semibold text-red-600">'Efficiency Tax'.</span>
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Metric 1 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💸</span>
            </div>
            <div className="text-4xl font-bold text-red-600 mb-2">£6+</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">per transaction</div>
            <div className="text-gray-600">wasted on manual work</div>
          </div>

          {/* Metric 2 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏢</span>
            </div>
            <div className="text-4xl font-bold text-blue-600 mb-2">£200B+</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">GVA from UK's</div>
            <div className="text-gray-600">SME service economy</div>
          </div>

          {/* Metric 3 */}
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">of this market</div>
            <div className="text-gray-600">technologically underserved by Big Tech</div>
          </div>
        </div>

        {/* Visual Diagram - Strategic Opportunity Image */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h4 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            The £200B+ Opportunity Landscape
          </h4>
          
          <div className="flex justify-center mb-6">
            <img 
              src="/Images/Oppertunity.508Z.png" 
              alt="The Unsexy £200B+ Opportunity - Efficiency Tax Visualization"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              <span className="font-semibold text-red-600">The Reality:</span> Millions of SMEs trapped in manual 'swivel chair' workflows
              <br/>
              <span className="font-semibold text-green-600">The Solution:</span> AI-powered operational transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
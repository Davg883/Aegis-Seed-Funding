'use client';

export default function PhoenixProtocolSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Phoenix Protocol
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
            Our Moat is Our Method
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are de-risking our venture through our proprietary AI Skunkworks on the Isle of Wight.
          </p>
        </div>

        <div className="space-y-8">
          <h4 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Three-Phase Approach
          </h4>

          {/* Strategic Timeline Visualization */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/Images/Timeline.728Z.png" 
                alt="Phoenix Protocol Timeline - Three-Phase De-risked Strategy"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-orange-600">Strategic Execution:</span> Our de-risked approach 
                ensures revenue generation while building towards scale.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">Phase 0</div>
                <div className="text-lg font-semibold">The Phoenix Hub</div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-3">Profitable AI Creative Studio</h5>
                <p className="text-gray-700 text-sm">
                  Generate immediate revenue while testing our AI methodology with real customers.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">Phase 1</div>
                <div className="text-lg font-semibold">Aegis Skunkworks</div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-3">Live Logistics Laboratory</h5>
                <p className="text-gray-700 text-sm">
                  Deploy Aegis OS with our logistics partner, proving 10x+ efficiency gains.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">Phase 2</div>
                <div className="text-lg font-semibold">National Scale</div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-3">B2B SaaS Platform</h5>
                <p className="text-gray-700 text-sm">
                  Launch nationally with proven playbook, funded by Series A.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
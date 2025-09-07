'use client';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Introducing the Aegis OS
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl text-gray-700 font-light mb-6">
            An AI Co-Worker, Not Another Dashboard
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Aegis Operating System is not just another piece of software. It is an 
            <span className="font-semibold text-blue-600">AI Design Partner</span> that automates and co-designs 
            entire operational workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🧠</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">AI Orchestrator Brain</h4>
            <p className="text-gray-700 leading-relaxed">
              Our agentic AI autonomously plans, schedules, and optimises your entire logistics 
              workflow in real-time.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">🔗</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Deep Workflow Integration</h4>
            <p className="text-gray-700 leading-relaxed">
              Aegis embeds directly into your core operations, becoming your central nervous system.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl text-white">⚡</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Proprietary Data Flywheel</h4>
            <p className="text-gray-700 leading-relaxed">
              Every transaction makes your system smarter, creating a compounding intelligence advantage.
            </p>
          </div>
        </div>

        {/* Aegis OS Dashboard Visualization */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 shadow-lg">
          <h4 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            The Aegis OS in Action
          </h4>
          
          <div className="flex justify-center mb-6">
            <img 
              src="/Images/Dashboard.031Z.png" 
              alt="Aegis OS Dashboard - AI-Powered Logistics Management Interface"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-blue-600">Real-time Intelligence:</span> See how our AI orchestrates 
              your entire operation from a single, intuitive interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

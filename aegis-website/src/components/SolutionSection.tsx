export default function SolutionSection() {
  return (
    <section className="py-20 bg-[--background]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[--primary] mb-6">
            From Manual Chaos to AI Orchestration
          </h2>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8 text-[--primary]">
            Day in the Life: Before & After Workflow
          </h3>
          <div className="flex justify-center">
            {/* Actual "Before & After" Workflow Diagram */}
            <img 
              src="/Images/Info Graphic.png" 
              alt="Before & After Workflow Diagram" 
              className="max-w-full h-auto rounded-lg shadow-md border border-gray-300"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-[--primary] mb-3">Manual Process</h3>
            <ul className="space-y-2 text-[--foreground]">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>1+ hours spent on repetitive tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>High error rates requiring corrections</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Manual data entry across multiple systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Communication delays between teams</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-[--primary] mb-3">AI Orchestration</h3>
            <ul className="space-y-2 text-[--foreground]">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Tasks completed in &lt;1 minute</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Automated error detection and correction</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Seamless integration across all systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Real-time coordination and updates</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-[--primary] mb-3">Time Savings</h3>
            <ul className="space-y-2 text-[--foreground]">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>&gt;1 Hour → &lt;1 Minute per transaction</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>90%+ reduction in manual effort</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Zero error rate after implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Real-time visibility across operations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
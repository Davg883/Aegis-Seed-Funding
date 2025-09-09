export default function MarketOpportunitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[--primary] mb-6">
            A £200 Billion Market Ripe for Disruption
          </h2>
        </div>

        <div className="bg-[--background] rounded-xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8 text-[--primary]">
            Market Opportunity Funnel
          </h3>
          <div className="flex justify-center">
            {/* Actual Opportunity Funnel diagram */}
            <img 
              src="/Images/Oppertunity.508Z.png" 
              alt="Opportunity Funnel Diagram (TAM/SAM/SOM)" 
              className="max-w-full h-auto rounded-lg shadow-md border border-gray-300"
            />
          </div>
        </div>

        <div className="prose max-w-3xl mx-auto text-[--foreground]">
          <p className="text-lg mb-6">
            The UK's SME service economy represents a massive £200B+ market opportunity, largely underserved by current logistics solutions. 
            Traditional providers focus on enterprise clients, leaving this vital sector fragmented and inefficient.
          </p>
          
          <p className="text-lg mb-6">
            Our bottom-up go-to-market strategy targets the most underserved segments first:
          </p>
          
          <ul className="list-disc pl-8 mb-6 space-y-3">
            <li>
              <strong>TAM (Total Addressable Market):</strong> £200B+ of SME service transactions across the UK
            </li>
            <li>
              <strong>SAM (Serviceable Addressable Market):</strong> £50B+ within logistics-heavy sectors (transport, construction, healthcare support)
            </li>
            <li>
              <strong>SOM (Serviceable Obtainable Market):</strong> £2B+ initial focus on regional transport and distribution networks
            </li>
          </ul>
          
          <p className="text-lg">
            With our de-risked Phoenix Protocol approach, we're positioned to capture significant market share while building a defensible moat 
            through our proprietary technology and data advantages.
          </p>
        </div>
      </div>
    </section>
  );
}
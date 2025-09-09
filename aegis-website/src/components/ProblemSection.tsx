export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--primary] mb-4">
            The &pound;200B+ Problem Hiding in Plain Sight
          </h2>
          <p className="text-xl text-[--foreground] max-w-3xl mx-auto">
            The UKs SME service economy is crippled by the "SME Efficiency Tax"&mdash;a systemic issue born from fragmented software and manual, error-prone workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="p-8">
            <div className="font-serif text-5xl font-bold text-[--accent] mb-2">&pound;6+</div>
            <h3 className="text-lg font-semibold text-[--primary] mb-2">Wasted Per Transaction</h3>
            <p className="text-[--foreground]">On manual, repetitive tasks and correcting errors.</p>
          </div>

          <div className="p-8">
            <div className="font-serif text-5xl font-bold text-[--accent] mb-2">&pound;200B+</div>
            <h3 className="text-lg font-semibold text-[--primary] mb-2">Untapped GVA</h3>
            <p className="text-[--foreground]">Locked within the UKs vital SME service economy.</p>
          </div>

          <div className="p-8">
            <div className="font-serif text-5xl font-bold text-[--accent] mb-2">95%</div>
            <h3 className="text-lg font-semibold text-[--primary] mb-2">Market Blind Spot</h3>
            <p className="text-[--foreground]">Incumbents are focused on enterprise, ignoring the SME backbone.</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-8">
          <h4 className="text-2xl font-serif font-semibold text-center mb-8 text-[--primary]">
            A System Architected for Inefficiency
          </h4>
          <div className="flex justify-center">
            <img 
              src="/Images/Oppertunity.508Z.png" 
              alt="Visualization of the SME Efficiency Tax"
              className="max-w-full h-auto rounded-lg shadow-md border border-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

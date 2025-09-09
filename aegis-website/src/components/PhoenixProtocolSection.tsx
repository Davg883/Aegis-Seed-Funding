'use client';

import { useState } from 'react';

export default function PhoenixProtocolSection() {
  const [activeModal, setActiveModal] = useState<null | 'phase0' | 'phase1' | 'phase2'>(null);

  const closeModal = () => setActiveModal(null);
  
  const handlePhaseClick = (phase: 'phase0' | 'phase1' | 'phase2') => {
    setActiveModal(phase);
  };

  const PhaseCard = ({ phase, title, description, onClick, color }) => (
    <div 
      className="bg-white rounded-lg border border-slate-200 p-6 text-center cursor-pointer hover:border-[--primary] hover:shadow-xl transition-all duration-300"
      onClick={onClick}
    >
      <h3 className={`font-serif text-2xl font-bold text-[--${color}] mb-2`}>{phase}</h3>
      <h4 className="text-lg font-semibold text-[--primary] mb-3">{title}</h4>
      <p className="text-[--foreground]">{description}</p>
    </div>
  );

  const Modal = ({ children, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[--primary] mb-4">
            The Phoenix Protocol
          </h2>
          <p className="text-xl text-[--foreground] max-w-3xl mx-auto">
            Our moat is our method. A de-risked, three-phase protocol designed for extreme capital efficiency and systematic market validation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <PhaseCard 
            phase="Phase 0"
            title="The Phoenix Hub"
            description="A profitable AI creative studio to generate immediate revenue and battle-test our methodology."
            onClick={() => handlePhaseClick('phase0')}
            color="accent"
          />
          <PhaseCard 
            phase="Phase 1"
            title="Aegis Skunkworks"
            description="A live logistics laboratory to deploy Aegis OS and prove 10x+ efficiency gains."
            onClick={() => handlePhaseClick('phase1')}
            color="accent"
          />
          <PhaseCard 
            phase="Phase 2"
            title="National Scale"
            description="A national B2B SaaS platform launch, funded by a successful Series A."
            onClick={() => handlePhaseClick('phase2')}
            color="accent"
          />
        </div>

        <div className="bg-slate-50 rounded-xl p-8">
          <h4 className="text-2xl font-serif font-semibold text-center mb-8 text-[--primary]">
            De-Risked Strategic Timeline
          </h4>
          <div className="flex justify-center">
            <img 
              src="/Images/Timeline.728Z.png" 
              alt="Phoenix Protocol Timeline"
              className="max-w-full h-auto rounded-lg shadow-md border border-slate-200"
            />
          </div>
        </div>
      </div>

      {activeModal && (
        <Modal onClose={closeModal}>
          {/* Modal Content Here */}
        </Modal>
      )}
    </section>
  );
}

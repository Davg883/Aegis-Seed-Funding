'use client';

import { useState } from 'react';

export default function PhoenixProtocolSection() {
  const [activeModal, setActiveModal] = useState<null | 'phase0' | 'phase1' | 'phase2'>(null);

  const closeModal = () => setActiveModal(null);
  
  const handlePhaseClick = (phase: 'phase0' | 'phase1' | 'phase2') => {
    console.log('Phase clicked:', phase); // Debug log
    setActiveModal(phase);
  };
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
            <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300" onClick={() => handlePhaseClick('phase0')}>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">Phase 0</div>
                <div className="text-lg font-semibold">The Phoenix Hub</div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-3">Profitable AI Creative Studio</h5>
                <p className="text-gray-700 text-sm mb-4">
                  Generate immediate revenue while testing our AI methodology with real customers.
                </p>
                <div className="flex items-center text-green-600 font-semibold text-sm">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300" onClick={() => handlePhaseClick('phase1')}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">Phase 1</div>
                <div className="text-lg font-semibold">Aegis Skunkworks</div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-3">Live Logistics Laboratory</h5>
                <p className="text-gray-700 text-sm mb-4">
                  Deploy Aegis OS with our logistics partner, proving 10x+ efficiency gains.
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300" onClick={() => handlePhaseClick('phase2')}>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">Phase 2</div>
                <div className="text-lg font-semibold">National Scale</div>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold text-gray-900 mb-3">B2B SaaS Platform</h5>
                <p className="text-gray-700 text-sm mb-4">
                  Launch nationally with proven playbook, funded by Series A.
                </p>
                <div className="flex items-center text-purple-600 font-semibold text-sm">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlays */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {activeModal === 'phase0' && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Phase 0: The Phoenix Hub</h3>
                    <p className="text-xl text-green-600 font-semibold">Profitable AI Creative Studio</p>
                  </div>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  This section describes &ldquo;Phase 0: Operation Christmas Launch&rdquo;, a strategically designed initial phase aimed at generating immediate revenue and rigorously testing our core methodology in a live commercial environment.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Immediate Revenue Generation & Cash Flow Positive from Day One:</h4>
                    <p className="text-gray-700">The &ldquo;Prompt to Print by Solent AI&rdquo; studio in Seaview is engineered for exceptional capital efficiency, designed to be cash-flow positive within the first quarter. It generates immediate, high-margin revenue through the sale of high-end personalised gifts like bespoke biographical books and custom art. This non-dilutive revenue stream is crucial for funding subsequent R&D phases.</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Live AI Methodology Validation & Human-AI Co-Creation:</h4>
                    <p className="text-gray-700">The studio functions as a &ldquo;live R&D lab&rdquo; or &ldquo;dojo&rdquo;. Here, we battle-test and codify our unique human-AI co-creation process with real, paying customers, effectively de-risking our product-market fit. The core of this is the &ldquo;Vibe Weaver&rdquo; meta-prompt system, our proprietary IP that guides clients in translating their desires into effective AI prompts.</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Funding for Core B2B R&D:</h4>
                    <p className="text-gray-700">Profits generated from &ldquo;Operation Christmas Launch&rdquo; are directly reinvested to fund the core B2B research and development for the Aegis OS. This capital-efficient model means we use a proven business to fund our deep-tech innovation, reducing reliance on external capital in the initial stages.</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Team Training & Process Refinement:</h4>
                    <p className="text-gray-700">The studio serves as a critical training ground for our &ldquo;AI Creative Guides&rdquo;. It allows us to perfect internal processes and Standard Operating Procedures (SOPs) for building AI agents and delivering exceptional customer experiences on a manageable scale. This methodical approach to codifying learnings is essential for securing patentable IP.</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Foundation for Scalable IP & Future Franchise Model:</h4>
                    <p className="text-gray-700">The human-AI collaboration methodology perfected in the studio, whether for a bespoke UHNWI biographical book or personalised gifts, forms the fundamental intellectual property for orchestrating AI agents across various domains. Furthermore, the &ldquo;Phoenix Hub&rdquo; itself is designed as the pilot for a highly scalable, low-overhead &ldquo;AI Creative Guide&rdquo; franchise model, representing a powerful secondary revenue stream and national brand-building platform.</p>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'phase1' && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Phase 1: Aegis Skunkworks</h3>
                    <p className="text-xl text-blue-600 font-semibold">Live Logistics Laboratory</p>
                  </div>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  This section, corresponding to &ldquo;Phase 1: The AI Skunkworks&rdquo;, details the crucial step of deploying our core technology in a real-world setting to demonstrate its transformative impact.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Profit-Funded R&D & Capital Efficiency:</h4>
                    <p className="text-gray-700">This entire phase is strategically funded by the profits generated from &ldquo;Operation Christmas Launch&rdquo;. This self-sustaining approach highlights the exceptional capital efficiency of the &ldquo;Phoenix Protocol&rdquo;.</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Real-World ROI Validation with a Foundational Partner:</h4>
                    <p className="text-gray-700">We will deploy the Aegis OS with a foundational logistics partner on the Isle of Wight. The primary objective is to generate a robust, data-proven case study demonstrating a greater than 10x Return on Investment (ROI) in efficiency gains. This validates our core value proposition of elevating human operators from tactical chaos to strategic control.</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Primary Asset for Series A Financing:</h4>
                    <p className="text-gray-700">The validated case study, with its quantifiable efficiency gains, is the single most important asset for securing our Series A financing. It provides concrete, real-world evidence of our technology&rsquo;s effectiveness and market viability, significantly de-risking the investment opportunity.</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Robust Technology Stack for Real-World Control:</h4>
                    <p className="text-gray-700">The Aegis OS is being built with Rust as its core language, chosen for its compile-time guarantees of safety and reliability, providing a &ldquo;verifiable execution layer&rdquo; essential for a system controlling real-world assets. Our AI model strategy employs a cost-efficient &ldquo;mixture-of-models,&rdquo; starting with best-in-class proprietary APIs and evolving to include open-source options as we scale.</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Foundation for Scalable Expansion & Data Flywheel:</h4>
                    <p className="text-gray-700">Proving the model in a tangible vertical like logistics creates an undeniable precedent, enabling rapid expansion into adjacent SME service verticals with immense credibility. This operational deployment also rapidly builds our proprietary data flywheel, which, combined with our unique IP in orchestrating AI, creates a long-term competitive moat. By the end of this phase, Aegis Logistics will be a multi-product company with a clear, de-risked path to its first enterprise client.</p>
                  </div>
                </div>
              </div>
            )}

            {activeModal === 'phase2' && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Phase 2: National Scale</h3>
                    <p className="text-xl text-purple-600 font-semibold">B2B SaaS Platform</p>
                  </div>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  This section outlines our strategy for scaling the Aegis OS nationally, leveraging proven methodologies and strong investment backing.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Fuelled by Series A Investment for National Launch:</h4>
                    <p className="text-gray-700">The national launch of the Aegis OS platform is directly funded by the successful Series A financing, which is secured based on the compelling, data-proven case study from the &ldquo;Live Logistics Laboratory&rdquo; phase.</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• National Deployment Targeting Underserved SMEs (&ldquo;Blue Ocean&rdquo; Strategy):</h4>
                    <p className="text-gray-700">Aegis OS will be deployed across the UK, specifically targeting the vast, fragmented, and technologically underserved SME service sector. This &ldquo;Blue Ocean&rdquo; / &ldquo;Walmart, not Apple&rdquo; strategy allows us to avoid hyper-competitive markets and establish ourselves as the category-defining leader.</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Proven & Codified Methodology for Reliability:</h4>
                    <p className="text-gray-700">The platform is built upon a &ldquo;proven playbook&rdquo; – the human-AI co-creation methodology and Standard Operating Procedures (SOPs) that were rigorously battle-tested and refined in the &ldquo;Profitable AI Creative Studio&rdquo; and validated in the &ldquo;Live Logistics Laboratory&rdquo;. This ensures reliability and replicability in our B2B offering.</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Delivering 10x+ Efficiency Gains & Unlocking Human Potential:</h4>
                    <p className="text-gray-700">Aegis OS is positioned as an &ldquo;AI Design Partner&rdquo; that doesn&rsquo;t replace but rather elevates human operators from tactical chaos to strategic control. It consistently delivers greater than 10x efficiency gains and unlocks significant trapped human potential within SMEs.</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Scalable IP & Proprietary Data Flywheel for Competitive Moat:</h4>
                    <p className="text-gray-700">This phase focuses on rapidly building out our proprietary data flywheel, where every transaction orchestrated by Aegis generates unique operational data that continuously improves the system. We will leverage our unique, patentable IP, such as the &ldquo;Vibe Weaver&rdquo; meta-prompt system and our Rust-based, type-safe tooling architecture, for deep workflow integration and a long-term competitive advantage.</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">• Becoming the &ldquo;AI for SMEs&rdquo; Standard:</h4>
                    <p className="text-gray-700">The long-term vision is to establish Aegis Logistics as the trusted, go-to AI partner for the UK&rsquo;s SME economy. By rapidly expanding into adjacent SME service verticals with immense credibility, built on trust and a community-first approach, we aim to become the standard for AI in this crucial sector.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
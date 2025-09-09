'use client';

import { useState } from 'react';

export default function InvestmentOpportunitySection() {
  return (
    <section className="py-20 bg-[--background]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[--primary] mb-6">
            Join Us in Building The Thing That Comes Next
          </h2>
          
          <div className="prose max-w-3xl mx-auto text-[--foreground]">
            <p className="text-lg mb-8">
              Aegis is currently raising a £1,500,000 seed round to execute our de-risked go-to-market protocol. 
              We are seeking thesis-aligned partners who understand the massive opportunity in applying foundational AI 
              to empower the real economy.
            </p>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200 mb-8">
              <h3 className="text-2xl font-serif font-semibold text-[--primary] mb-4">
                Request the Investment Memorandum
              </h3>
              <p className="text-lg mb-6">
                For access to the full investment memorandum and financial model, please contact us at:
              </p>
              <a 
                href="mailto:invest@aegis-os.com" 
                className="text-xl font-semibold text-[--accent] hover:underline"
              >
                invest@aegis-os.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 text-center text-[--foreground]">
            <p className="font-serif text-lg mb-2">Aegis</p>
            <p className="text-sm">&copy; 2025 Aegis. All rights reserved.</p>
            <p className="text-xs mt-2">Building the AI Operating System for the Real Economy.</p>
        </div>
      </footer>
    </section>
  );
}

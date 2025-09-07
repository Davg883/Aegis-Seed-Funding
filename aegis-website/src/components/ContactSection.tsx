'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest. We shall be in touch shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Building the Future
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
            of the Real Economy
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 mb-8">
              <h4 className="text-2xl font-bold mb-6">Investment Opportunity</h4>
              <p className="text-blue-100 leading-relaxed mb-6">
                Aegis Logistics is currently raising a <span className="font-bold text-white">£1.5M seed round</span> 
                to execute our de-risked go-to-market strategy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">De-risked Strategy</h5>
                    <p className="text-blue-100 text-sm">Revenue-generating from day one</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Massive Market</h5>
                    <p className="text-blue-100 text-sm">£200B+ GVA opportunity</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Proven Team</h5>
                    <p className="text-blue-100 text-sm">Tri-sector expertise</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-xl p-6">
              <h5 className="text-lg font-semibold mb-4">Direct Contact</h5>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm">📧</span>
                </div>
                <a href="mailto:invest@aegislogistics.ai" className="text-blue-400 hover:text-blue-300 font-medium">
                  invest@aegislogistics.ai
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 text-gray-900">
            <h4 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="Tell us about your interest in Aegis Logistics..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl p-8">
            <h4 className="text-2xl font-bold mb-4">Ready to Transform the Real Economy?</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <a 
                href="/Images/White Paper.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block"
              >
                Download White Paper
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold">
                Schedule a Meeting
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h5 className="text-2xl font-bold mb-2">Aegis Logistics</h5>
            <p className="text-gray-400 mb-4">The AI Operating System for the Real Economy</p>
            <p className="text-sm text-gray-500">
              © 2025 Aegis Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
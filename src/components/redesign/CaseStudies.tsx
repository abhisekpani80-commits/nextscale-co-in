'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RollingButton } from '@/components/ui/RollingButton';

type Category = 'Clinical' | 'Local Service' | 'B2B';

interface CaseStudy {
  name: string;
  type: string;
  built: string;
  result: string;
}

const caseStudiesData: Record<Category, CaseStudy[]> = {
  'Clinical': [
    {
      name: 'Lumière Skin Clinic',
      type: 'Dermatology',
      built: 'Website + AI WhatsApp agent',
      result: '40% more bookings'
    },
    {
      name: 'Meridian Dental',
      type: 'Dental Clinic',
      built: 'Digital growth + Google Business',
      result: '4.2 → 4.8 rating'
    }
  ],
  'Local Service': [
    {
      name: 'Studio Aperture',
      type: 'Wedding Photographer',
      built: 'Portfolio + booking flow',
      result: 'Fully booked 2 months out'
    },
    {
      name: 'Ananya Counselling',
      type: 'Therapist',
      built: 'Website + appointment automation',
      result: '55% fewer no-shows'
    }
  ],
  'B2B': [
    {
      name: 'Vantage Realty',
      type: 'Real Estate',
      built: 'Custom website + lead capture',
      result: '3× more enquiries'
    },
    {
      name: 'ExamOS Platform',
      type: 'EdTech Product',
      built: 'Full-stack AI platform',
      result: '500+ users in beta'
    }
  ]
};

const tabs: Category[] = ['Clinical', 'Local Service', 'B2B'];

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState<Category>('Clinical');

  return (
    <section id="case-studies" className="py-24 bg-[#0b0b0e]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-heading">
            Real Results, Real Businesses
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-[#f97316] text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Min height ensures layout doesn't jump during absolute positioning transitions */}
        <div className="relative min-h-[300px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 absolute inset-0 h-fit"
            >
              {caseStudiesData[activeTab].map((study, index) => (
                <div
                  key={index}
                  className="bg-[#111116] border border-white/5 rounded-2xl p-8 hover:border-[#f97316]/30 transition-colors flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-white font-heading">{study.name}</h3>
                    <span className="px-3 py-1 bg-white/5 text-white/50 text-xs rounded-full whitespace-nowrap ml-4">
                      {study.type}
                    </span>
                  </div>
                  
                  <div className="mb-8 flex-grow">
                    <p className="text-white/60 mb-4 text-sm md:text-base font-body">
                      {study.built}
                    </p>
                    <div className="text-3xl md:text-4xl font-extrabold text-[#f97316] font-heading">
                      {study.result}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <RollingButton 
                      href={`/case-studies#${study.name.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="outline" 
                      className="w-full justify-center"
                    >
                      View Case Study
                    </RollingButton>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

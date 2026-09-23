'use client';

import React from 'react';
import SpotlightCard from '@/components/SpotlightCard';
import CountUp from '@/components/CountUp';

const stats = [
  { value: 80, suffix: '%', label: 'Faster Go-Live', desc: 'Ship your digital presence in days, not months' },
  { value: 35, suffix: '%+', label: 'More Conversions', desc: 'Optimized funnels that turn visitors into customers' },
  { value: 55, suffix: '%', label: 'Cost Reduction', desc: 'Automate repetitive tasks and reduce operational overhead' },
  { value: 10, suffix: 'x', label: 'ROI on AI Agents', desc: 'Agents that pay for themselves within the first month' }
];

export function Metrics() {
  return (
    <section className="py-24 bg-[#0b0b0e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <SpotlightCard key={index} spotlightColor="rgba(249, 115, 22, 0.15)">
              <div className="p-8 text-center flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#f97316] to-[#fbbf24] bg-clip-text text-transparent flex items-center justify-center">
                  <CountUp to={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mt-2">{stat.label}</h3>
                <p className="text-sm text-white/40 mt-1">{stat.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

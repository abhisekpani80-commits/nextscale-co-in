'use client';

import React from 'react';
import { Marquee } from '@/components/ui/Marquee';

const services = [
  'AI AGENTS',
  'CUSTOM WEBSITES',
  'WHATSAPP BOTS',
  'LEAD FUNNELS',
  'SEO & GROWTH',
  'PROCESS AUTOMATION',
  'CRM INTEGRATION',
  'DIGITAL INFRASTRUCTURE',
];

export function ServicesMarquee() {
  return (
    <section className="w-full py-6 border-y border-white/5 bg-[#0b0b0e] overflow-hidden">
      <Marquee duration={30} pauseOnHover={false}>
        {services.map((service, idx) => (
          <React.Fragment key={idx}>
            <span className="uppercase font-bold text-white/80 tracking-wide text-sm whitespace-nowrap px-4">
              {service}
            </span>
            <span className="text-[#f97316] text-sm px-4">✦</span>
          </React.Fragment>
        ))}
      </Marquee>
    </section>
  );
}

"use client";

import React from "react";

const CLIENTS_ROW_1 = [
  "Muscletrail Nutrition",
  "SKIL Events & Travel",
  "Chalk Studio Interiors",
  "AWL India Logistics",
  "Aysha Dental Care",
  "Tiaraa Luxury Resorts",
  "Mobility Infotech",
  "YouWeCan Foundation",
];

const CLIENTS_ROW_2 = [
  "Next.js 16 Enterprise",
  "Meta Cloud WhatsApp API",
  "Google Maps Pack #1",
  "Tailwind CSS v4",
  "Supabase Architecture",
  "AEO & AI Search",
  "99/100 PSI Speed",
  "Sub-second Edge Hosting",
];

export function GravityDualTicker() {
  return (
    <section className="py-14 bg-[#07090e] border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ffa011]">
          Trusted Worldwide & Engineered on Modern Tech
        </span>
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
          High-Growth Brands Scaled By Our Systems
        </h2>
      </div>

      <div className="space-y-4">
        {/* Top Row: Moves Left */}
        <div className="marquee-container">
          <div className="marquee-track-left">
            {[...CLIENTS_ROW_1, ...CLIENTS_ROW_1].map((client, idx) => (
              <div
                key={`r1-${idx}`}
                className="px-6 py-3 rounded-xl bg-[#12151e] border border-white/10 text-sm font-bold text-neutral-300 whitespace-nowrap hover:border-[#ff3ba1] hover:text-white transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Moves Right */}
        <div className="marquee-container">
          <div className="marquee-track-right">
            {[...CLIENTS_ROW_2, ...CLIENTS_ROW_2].map((tech, idx) => (
              <div
                key={`r2-${idx}`}
                className="px-6 py-3 rounded-xl bg-[#12151e] border border-white/10 text-sm font-bold text-neutral-400 whitespace-nowrap hover:border-[#ffa011] hover:text-white transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

const STATS = [
  { value: "5–7", label: "Day Delivery Velocity", suffix: "Days" },
  { value: "99", label: "PageSpeed Insights Score", suffix: "/100" },
  { value: "24/7", label: "Autonomous AI Availability", suffix: "Live" },
  { value: "100%", label: "Source Code Ownership", suffix: "Yours" },
];

export function GravityStatsCounter() {
  return (
    <section className="py-20 bg-[#0c0f17] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff3ba1] to-[#ffa011]">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-2">
                {stat.label}
              </div>
              <div className="text-xs uppercase font-bold tracking-widest text-neutral-400 mt-1">
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

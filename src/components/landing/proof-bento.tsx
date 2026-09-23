"use client";

import React from "react";
import { TrendingUp, CheckCircle2, ArrowUpRight } from "lucide-react";

export function ProofBento() {
  const stats = [
    {
      metric: "< 1s",
      label: "Instant Mobile Load",
      description: "Opens in the blink of an eye on any smartphone. Zero visitor drop-offs.",
      tag: "SPEED",
      color: "text-blue-600",
    },
    {
      metric: "< 30s",
      label: "Customer Reply Speed",
      description: "Every potential buyer answered and qualified in seconds, day or night.",
      tag: "24/7 REPLIES",
      color: "text-sky-600",
    },
    {
      metric: "+184%",
      label: "Client Bookings Lift",
      description: "Measured across 30+ client deployments after plugging after-hours leaks.",
      tag: "REVENUE",
      color: "text-blue-700",
    },
    {
      metric: "7 Days",
      label: "Complete Launch Time",
      description: "From discovery audit to live client inquiries with 100% full handover.",
      tag: "DELIVERY",
      color: "text-indigo-600",
    },
  ];

  return (
    <section id="proof-metrics" className="py-20 md:py-32 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Business Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Proof in numbers, not marketing slogans.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every build is measured against real commercial impact: visitor retention, fast response times, and booked sales revenue.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all shadow-md group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                  {stat.tag}
                </span>
                <div className={`text-4xl sm:text-5xl font-black font-mono tracking-tight mt-6 ${stat.color}`}>
                  {stat.metric}
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Case Study Panel */}
        <div className="mt-8 rounded-3xl bg-[#0F172A] text-white border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sky-400">
                <span>Featured Client Success</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Multi-Location Healthcare &amp; Aesthetics Group: +184% Bookings in 45 Days
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Replaced their slow legacy website with an instant mobile storefront and 24/7 WhatsApp booking assistant. 40% of high-ticket consultations were booked between 9 PM and 7 AM without staff intervention.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Pages load 10x faster on mobile
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  0 lost after-hours customer inquiries
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  Shipped live in 7 calendar days
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href="https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20see%20relevant%20case%20studies%20for%20my%20industry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md"
              >
                <span>Read Full Case Story</span>
                <ArrowUpRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

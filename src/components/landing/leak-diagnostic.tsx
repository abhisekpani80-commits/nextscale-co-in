"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, AlertTriangle } from "lucide-react";

export function LeakDiagnostic() {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(3500);
  const [dealValue, setDealValue] = useState<number>(2500);

  // Benchmarks:
  // Typical slow website converts at 1.2% (with 50% dropping off due to delayed follow up)
  // NextScale frontdoor + backoffice converts at 3.2% with immediate sub-minute triage
  const currentLeads = Math.round(monthlyVisitors * 0.012);
  const nextScaleLeads = Math.round(monthlyVisitors * 0.034);
  const recoveredLeads = Math.max(0, nextScaleLeads - currentLeads);
  const monthlyRevenueRecovered = recoveredLeads * dealValue;
  const annualRevenueRecovered = monthlyRevenueRecovered * 12;

  const prefilledWhatsappText = encodeURIComponent(
    `Hi NextScale! I ran the Revenue Leak Diagnostic. With ${monthlyVisitors.toLocaleString()} monthly visitors and a $${dealValue.toLocaleString()} average deal size, it shows ~$${monthlyRevenueRecovered.toLocaleString()}/mo in recoverable pipeline. I'd like to book an audit.`
  );

  return (
    <section id="diagnostic" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            How much revenue is slipping through your website right now?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Most businesses don&apos;t have a traffic problem—they have an inquiry response problem. When buyers don&apos;t get immediate answers, they purchase from competitors. Drag the sliders to see your recoverable revenue.
          </p>
        </div>

        {/* Diagnostic Simulator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 bg-white">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="visitors-slider-blue" className="text-sm font-bold text-slate-900">
                    Monthly Website Visitors
                  </label>
                  <span className="text-lg font-mono font-black text-blue-600">
                    {monthlyVisitors.toLocaleString()}
                  </span>
                </div>
                <input
                  id="visitors-slider-blue"
                  type="range"
                  min="500"
                  max="30000"
                  step="250"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  aria-label="Monthly Website Visitors"
                  className="w-full h-2.5 bg-slate-100 border border-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>500</span>
                  <span>15,000</span>
                  <span>30,000+</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="deal-size-slider-blue" className="text-sm font-bold text-slate-900">
                    Average Deal or Client Value
                  </label>
                  <span className="text-lg font-mono font-black text-blue-600">
                    ${dealValue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="deal-size-slider-blue"
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  aria-label="Average Deal or Client Value"
                  className="w-full h-2.5 bg-slate-100 border border-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>$500</span>
                  <span>$7,500</span>
                  <span>$15,000+</span>
                </div>
              </div>

              {/* Diagnosis Callout */}
              <div className="rounded-2xl p-4 sm:p-5 bg-blue-50/50 border border-blue-200/60 space-y-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      The Leak Diagnosis
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      When visitors wait for slow pages or have to fill out long forms, approximately <span className="font-semibold text-rose-600">{recoveredLeads} qualified opportunities</span> exit to competitors each month.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Calculation Output (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#0F172A] text-white flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  ESTIMATED RECOVERABLE CAPACITY
                </span>
                
                <div className="mt-3">
                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                    +${monthlyRevenueRecovered.toLocaleString()}
                    <span className="text-xs sm:text-sm font-normal text-slate-400"> / month</span>
                  </div>
                  <div className="text-xs text-sky-400 font-medium mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>~${annualRevenueRecovered.toLocaleString()} annualized addition</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Extra Booked Calls/mo</span>
                    <span className="font-mono font-bold text-white">+{recoveredLeads} clients</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Client Response Speed</span>
                    <span className="font-mono font-bold text-sky-400">&lt; 30 seconds</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Implementation Time</span>
                    <span className="font-mono font-bold text-blue-400">7 Days</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`https://wa.me/919556436685?text=${prefilledWhatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-sky-500 hover:brightness-105 shadow-md shadow-blue-500/25 active:scale-[0.98] transition-all"
                >
                  <span>Plug These Leaks With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  Opens WhatsApp with your calculated diagnostic parameters.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

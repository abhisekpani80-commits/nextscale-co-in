"use client";

import React from "react";
import { MessageSquare, Check, ArrowRight, Globe, Users } from "lucide-react";

export function SystemsArchitecture() {
  return (
    <section id="architecture" className="py-20 md:py-32 relative bg-slate-50/40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Users className="w-3.5 h-3.5" />
            <span>Two Synchronized Growth Engines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            A website that attracts buyers. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              An assistant that closes them.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A fast website without an instant reply system loses buyers to faster competitors. An automated assistant without a credible storefront never gets messages. We deploy both simultaneously.
          </p>
        </div>

        {/* The Two Architectural Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pillar 1: Digital Storefront */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-lg shadow-slate-100 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  ENGINE 01 // STOREFRONT
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  High-Converting Digital Storefront
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Designed specifically to turn casual website traffic into serious inquiries. Opens instantly on mobile phones, establishes immediate authority, and eliminates visitor drop-offs.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  "Opens instantly on 4G/5G mobile phones anywhere in the world",
                  "Direct 1-tap WhatsApp booking links placed at peak buying moments",
                  "Clean, executive presentation that justifies premium pricing",
                  "Zero confusing menus or bloated pages—every section drives action",
                  "You 100% own all website assets—no monthly agency hostage fees",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Business Stat Box */}
              <div className="rounded-2xl p-4 bg-slate-50 border border-slate-200 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-mono font-black text-blue-600">&lt; 1s</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Mobile Load</div>
                </div>
                <div>
                  <div className="text-lg font-mono font-black text-slate-800">99.4%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Visitor Retention</div>
                </div>
                <div>
                  <div className="text-lg font-mono font-black text-blue-700">+140%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">More Inquiries</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/919556436685?text=Hi%20NextScale!%20I'm%20interested%20in%20a%20High-Converting%20Storefront%20build."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <span>Build Digital Storefront</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Pillar 2: Automated WhatsApp Concierge */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-lg shadow-slate-100 flex flex-col justify-between hover:border-sky-300 hover:shadow-xl transition-all group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  ENGINE 02 // 24/7 CONCIERGE
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  24/7 WhatsApp Client Concierge
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Never lose a high-value customer because nobody replied on time. An intelligent assistant that answers inquiries, qualifies client budgets, and books appointments around the clock.
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  "Instant reply in under 30 seconds, 24 hours a day, 365 days a year",
                  "Answers customer pricing, service, and FAQ questions automatically",
                  "Filters out non-serious price-shoppers before they waste your time",
                  "Syncs confirmed bookings directly into your calendar without back-and-forth",
                  "Instantly alerts your phone when a high-value VIP client arrives",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Concierge Status Box */}
              <div className="rounded-2xl p-4 bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-600"></span>
                  </span>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Concierge Active 24/7/365
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Average customer reply time: 24s
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md">
                  100% UPTIME
                </span>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/919556436685?text=Hi%20NextScale!%20I'm%20interested%20in%20a%2024%2F7%20WhatsApp%20Concierge."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <span>Add 24/7 WhatsApp Concierge</span>
                <ArrowRight className="w-4 h-4 text-sky-600" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

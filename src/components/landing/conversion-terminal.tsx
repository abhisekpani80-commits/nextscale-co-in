"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Zap, Clock, Mail, MapPin } from "lucide-react";
import { MagneticCtaButton } from "@/components/ui/magnetic-cta-button";

export function ConversionTerminal() {
  return (
    <section id="contact" className="py-20 md:py-32 relative bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Card */}
        <div className="rounded-3xl bg-[#0B0F19] text-white border border-slate-800 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle ambient glow in background using luxury blue palette */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/25 via-sky-500/15 to-indigo-500/10 blur-3xl pointer-events-none -z-0" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-600/10 blur-2xl pointer-events-none -z-0" />

          <div className="relative z-10 space-y-8">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-semibold text-sky-300">
              <Zap className="w-3.5 h-3.5 text-sky-400" />
              <span>Limited Availability • 2 Sprint Slots Open This Month</span>
            </div>

            {/* Headline */}
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
                Ready to stop losing paying clients to slow responses?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Book a 15-minute diagnostic call directly with our founding team. We will show you exactly where you are losing potential clients, calculate your revenue recovery, and map out a fixed 7-day sprint to launch.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <MagneticCtaButton
                href="https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20book%20a%20Revenue%20Diagnosis%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto"
              >
                Instant WhatsApp Consultation
              </MagneticCtaButton>

              <a
                href="mailto:biz.abhisek@gmail.com?subject=NextScale%207-Day%20Sprint%20Inquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Email Founder Directly</span>
              </a>
            </div>

            {/* Guarantee & Direct Info Strip */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>7-Day Fixed Delivery or No Final Invoice</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Sub-15 Minute Inquiry Response Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Bhubaneswar HQ • Serving Global Clients</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

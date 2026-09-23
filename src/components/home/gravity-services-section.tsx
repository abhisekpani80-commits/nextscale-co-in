"use client";

import React, { useState } from "react";
import { GravityTiltCard } from "@/components/ui/gravity-tilt-card";
import { Globe, Bot, Zap, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    id: "websites",
    title: "Sub-Second Next.js Websites",
    tagline: "Speed, Credibility & Search Dominance",
    badge: "99/100 PSI SPEED",
    icon: Globe,
    color: "#ff3ba1",
    desc: "Custom bespoke websites engineered on Next.js 16. Fast, responsive, and designed to turn cold visitors into high-ticket clients without lag.",
    bullets: [
      "Guaranteed sub-second page loads (<0.8s FCP)",
      "Technical SEO & schema structured markup",
      "Tailored UI/UX designed in Figma",
      "100% source code ownership handed over",
    ],
    link: "/services/websites",
  },
  {
    id: "ai-agents",
    title: "24/7 WhatsApp AI Receptionists",
    tagline: "Autonomous Patient & Client Booking",
    badge: "24/7 LIVE AUTONOMY",
    icon: Bot,
    color: "#ffa011",
    desc: "Autonomous conversational AI connected to the official Meta WhatsApp Cloud API. Answers FAQs, qualifies leads, and books appointments on your Google Calendar 24/7.",
    bullets: [
      "Zero human lag: instant 5-second replies",
      "Calendar sync (Google, Outlook, Cal.com)",
      "Automated WhatsApp appointment reminders",
      "Reduces clinic & agency admin costs by 70%",
    ],
    link: "/services/ai-agents",
  },
  {
    id: "growth",
    title: "Local SEO & Revenue Domination",
    tagline: "Google Map Pack & Generative Search",
    badge: "HIGH ROI COMPOUNDING",
    icon: Zap,
    color: "#ff7054",
    desc: "Dominate Google search results and AI answer engines (ChatGPT, Gemini, Perplexity). We optimize your entity authority and automate 5-star review collection.",
    bullets: [
      "Google Business Profile optimization (#1 Map Pack)",
      "AI-SEO & Answer Engine Optimization (AEO)",
      "Automated 5-star review WhatsApp triggers",
      "Monthly empirical ranking & traffic reports",
    ],
    link: "/services/digital-growth",
  },
  {
    id: "turnkey",
    title: "Turnkey B2B Digital Suites",
    tagline: "The Full Stack Revenue Operating System",
    badge: "SHIPPED IN 7 DAYS",
    icon: Layers,
    color: "#a855f7",
    desc: "A complete done-for-you digital engine for healthcare clinics, luxury real estate developers, and high-growth service firms.",
    bullets: [
      "Complete web platform + AI WhatsApp receptionist",
      "Automated lead sync directly into your CRM",
      "Custom brand identity & pitch presentation",
      "Full setup live and converting in 7 days",
    ],
    link: "/services",
  },
];

export function GravityServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 bg-[#07090e] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff3ba1] flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-[#ff3ba1] star-blink" />
              Empirical Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              Systems Designed For <br />
              <span className="text-gravity-gradient">Compounding Revenue.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 max-w-md">
            No cookie-cutter templates. We craft high-speed digital infrastructure tailored to your exact business unit.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <GravityTiltCard key={srv.id} className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      style={{ backgroundColor: `${srv.color}15`, color: srv.color }}
                      className="size-12 rounded-xl flex items-center justify-center"
                    >
                      <Icon className="size-6" />
                    </div>
                    <span
                      style={{ borderColor: `${srv.color}40`, color: srv.color }}
                      className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest border uppercase bg-black/40"
                    >
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black uppercase text-white mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#ffa011] mb-4">
                    {srv.tagline}
                  </p>
                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                    {srv.desc}
                  </p>

                  <div className="space-y-2.5 mb-8 border-t border-white/5 pt-6">
                    {srv.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="size-4 text-[#ffa011] shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={srv.link}
                  className="btn-gravity-secondary w-full flex items-center justify-center gap-2 py-3 text-xs"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </GravityTiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

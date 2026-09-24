"use client";

import React, { useState, useEffect } from "react";
import { Star, MousePointerClick } from "lucide-react";
import { AccordionGallery, GalleryItem } from "@/components/ui/accordion-gallery";

const REVIEWS: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop",
    author: "Dr. R. Sengupta",
    role: "Managing Director",
    company: "Apex Aesthetic & Healthcare Clinics",
    industry: "Healthcare & Clinics",
    metric: "+184% Bookings in 45 Days",
    quote:
      "40% of our high-paying patients now book treatments between 10 PM and 6 AM. The WhatsApp AI booking bot alone repaid our entire investment within three weeks.",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
    author: "Ananya Mehta",
    role: "Co-Founder & COO",
    company: "CognitiveFlow B2B Solutions",
    industry: "B2B Software & AI",
    metric: "2.4X More Booked Sales Demos",
    quote:
      "Our previous agency spent 4 months on a slow site that lost us deals. NextScale launched in 7 days, and our sales team's calendar filled up twice as fast.",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop",
    author: "Vikram Das",
    role: "Principal Partner",
    company: "Vanguard Private Capital",
    industry: "Private Equity & Wealth",
    metric: "7-Day Total Launch",
    quote:
      "Zero corporate fluff or wasted meetings. They found our conversion leaks on Monday, authored razor-sharp messaging on Tuesday, and had everything live by Sunday. Extraordinary execution.",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
    author: "Rohan Malhotra",
    role: "Founder & CEO",
    company: "Zenith Real Estate & PropTech",
    industry: "Luxury Real Estate",
    metric: "4.2x Faster Client Qualification",
    quote:
      "High-net-worth property buyers message on weekends and late evenings. Having an intelligent assistant qualify budgets and schedule walkthroughs on WhatsApp transformed our sales velocity.",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop",
    author: "Dr. Elena Rostova",
    role: "VP of Operations",
    company: "NexaBio Diagnostics",
    industry: "Diagnostic Labs",
    metric: "₹38L Monthly Lost Sales Recovered",
    quote:
      "We were losing dozens of corporate health clients due to a confusing 11-step form. NextScale replaced it with a simple WhatsApp route that cut customer drop-offs completely.",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=900&auto=format&fit=crop",
    author: "Arjun Somani",
    role: "Executive Director",
    company: "Somani Express Logistics",
    industry: "Commercial Logistics",
    metric: "< 30s Quote-to-Booking",
    quote:
      "In logistics, whoever delivers the first pricing quote wins the contract. NextScale gave our clients instant pricing quotes and direct dispatch booking in under 30 seconds.",
    stars: 5,
  },
];

export function TestimonialShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <section id="proof" className="py-20 md:py-32 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>Real Founder &amp; Business Results</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Built for operators who care about{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              actual revenue.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Read what happens when business owners replace slow, unresponsive websites with an instant client booking engine.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
            <MousePointerClick className="w-3.5 h-3.5 text-blue-600" />
            <span>{isMobile ? "Tap any portrait to expand their story" : "Hover or tap any client portrait to expand their story"}</span>
          </div>
        </div>

        {/* React Bits AccordionGallery with 6 Business Reviews */}
        <div className="w-full">
          <AccordionGallery
            items={REVIEWS}
            defaultIndex={1}
            accentColor="#2563EB"
            overlayColor="#071229"
            textColor="#FFFFFF"
            height={isMobile ? 420 : 500}
            gap={12}
            radius={22}
            expandRatio={0.46}
            trigger={isMobile ? "click" : "hover"}
            grayscale={false}
          />
        </div>

        {/* Bottom Social Proof Strip */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-around gap-6 text-center text-xs sm:text-sm text-slate-600">
          <div>
            <strong className="block text-2xl font-black text-slate-900 font-mono">100%</strong>
            <span>Guaranteed 7-Day Delivery</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-200" />
          <div>
            <strong className="block text-2xl font-black text-slate-900 font-mono">&lt; 30s</strong>
            <span>Client Inquiry Response Speed</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-200" />
          <div>
            <strong className="block text-2xl font-black text-slate-900 font-mono">2.4X</strong>
            <span>Average Increase in Booked Calls</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-200" />
          <div>
            <strong className="block text-2xl font-black text-slate-900 font-mono">Zero</strong>
            <span>Ongoing Agency Hostage Fees</span>
          </div>
        </div>

      </div>
    </section>
  );
}

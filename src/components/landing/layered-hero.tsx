"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare, Zap, CheckCircle2 } from "lucide-react";
import { MagneticCtaButton } from "@/components/ui/magnetic-cta-button";

interface Slide {
  id: string;
  badge: string;
  line1: string;
  line2: string;
  lineGradient: string;
  description: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  activeConsoleTab: "frontdoor" | "backoffice" | "architecture" | "sprint";
  metricLabel: string;
  metricValue: string;
}

const SLIDES: Slide[] = [
  {
    id: "instant-replies",
    badge: "24/7 CLIENT CAPTURE",
    line1: "Never lose a high-value client.",
    line2: "Instant answers day & night.",
    lineGradient: "Turn visitors into booked sales.",
    description: "Most business websites lose over 60% of potential buyers because nobody replies after hours. We build fast, modern websites paired with an AI bot in WhatsApp that answers questions and books clients for you 24/7.",
    primaryCtaText: "Get More Booked Clients",
    primaryCtaUrl: "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20get%20more%20booked%20clients%20for%20my%20business.",
    activeConsoleTab: "frontdoor",
    metricLabel: "Client Availability",
    metricValue: "24/7 Instant",
  },
  {
    id: "whatsapp-ai-bot",
    badge: "INSTANT WHATSAPP BOT",
    line1: "A buyer messages at 11 PM.",
    line2: "You reply at 9 AM.",
    lineGradient: "They bought from your competitor.",
    description: "78% of customers buy from the first business that responds. Our WhatsApp AI bot answers questions, shares pricing, qualifies serious buyers, and books appointments on your calendar in under 30 seconds.",
    primaryCtaText: "Add 24/7 WhatsApp AI Bot",
    primaryCtaUrl: "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20add%20a%2024%2F7%20WhatsApp%20AI%20bot.",
    activeConsoleTab: "backoffice",
    metricLabel: "Average Reply Speed",
    metricValue: "< 30s",
  },
  {
    id: "predictable-revenue",
    badge: "ZERO WASTED MARKETING",
    line1: "More qualified clients.",
    line2: "Zero wasted advertising.",
    lineGradient: "Predictable revenue growth.",
    description: "Stop burning money on marketing that leads nowhere. We connect your website directly with an automatic WhatsApp bot so every visitor turns into real appointments and paying customers.",
    primaryCtaText: "Check Your Missed Revenue",
    primaryCtaUrl: "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20audit%20our%20missed%20revenue.",
    activeConsoleTab: "architecture",
    metricLabel: "More Consultations",
    metricValue: "+184%",
  },
  {
    id: "7-day-launch",
    badge: "GUARANTEED 7-DAY DELIVERY",
    line1: "No 6-month agency contracts.",
    line2: "No endless talking meetings.",
    lineGradient: "Ready to take clients in 7 days.",
    description: "From finding your revenue leaks on Monday to launching your new website and WhatsApp AI bot next Monday. Guaranteed 7-day launch, 100% full code ownership, and zero monthly agency fees.",
    primaryCtaText: "Reserve 7-Day Sprint Slot",
    primaryCtaUrl: "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20reserve%20a%207-Day%20Sprint.",
    activeConsoleTab: "sprint",
    metricLabel: "Delivery Time",
    metricValue: "7 Days",
  },
];

export function LayeredHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = React.useRef<number | null>(null);

  // Auto-move slides every 4 seconds (pauses on user hover/touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Touch swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) >= 40) {
      if (delta < 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden bg-white text-[#0b0f19]">
      {/* Background Soft Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-blue-600/10 via-sky-400/8 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Interactive Stage with Side Arrow Navigation */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* Left Arrow Button (Desktop Side) */}
          <button
            onClick={prevSlide}
            type="button"
            aria-label="Previous slide"
            className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full items-center justify-center bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-md hover:shadow-lg transition-all z-20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button (Desktop Side) */}
          <button
            onClick={nextSlide}
            type="button"
            aria-label="Next slide"
            className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full items-center justify-center bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-md hover:shadow-lg transition-all z-20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Live System Badge (Pill) */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/90 backdrop-blur-sm text-xs font-semibold text-blue-700 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span>{slide.badge}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-normal">
                Impact: <strong className="font-mono text-slate-900 font-bold">{slide.metricValue}</strong>
              </span>
            </div>
          </div>

          {/*
            ── CSS GRID STACK: FIXES MOBILE SCREEN SHAKE COMPLETELY ──
            All slides share col-start-1 row-start-1. The container naturally
            matches the tallest slide, so the container height NEVER jumps or shakes
            when auto-advancing slides. Nothing is cut off on any mobile device.
          */}
          <div className="relative">
            <div className="grid grid-cols-1 grid-rows-1">
              {SLIDES.map((s, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <div
                    key={s.id}
                    className={`col-start-1 row-start-1 flex flex-col items-center justify-start text-center space-y-6 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                        : "opacity-0 translate-y-2 pointer-events-none z-0"
                    }`}
                    aria-hidden={!isActive}
                  >
                    {/* Presentation Headline */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-[#0b0f19] leading-[1.12] sm:leading-[1.04]">
                      {s.line1} <br />
                      <span className="text-slate-500 font-semibold">{s.line2}</span>{" "}
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                          {s.lineGradient}
                        </span>
                        <span
                          className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 opacity-90"
                          aria-hidden="true"
                        />
                      </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
                      {s.description}
                    </p>

                    {/* Action Row */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
                      <MagneticCtaButton
                        href={s.primaryCtaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                        icon={<MessageSquare className="w-4 h-4 fill-current shrink-0" />}
                      >
                        {s.primaryCtaText}
                      </MagneticCtaButton>

                      <a
                        href="#diagnostic"
                        className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all duration-200 active:scale-[0.98]"
                      >
                        <span>Check Missed Revenue</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Controls & Dots */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              type="button"
              aria-label="Previous slide"
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-700 shadow-2xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-2">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentSlide
                      ? "w-8 h-2 bg-gradient-to-r from-blue-700 to-sky-500 shadow-xs shadow-blue-500/40"
                      : "w-2.5 h-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              type="button"
              aria-label="Next slide"
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-700 shadow-2xs active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide Index Counter */}
            <span className="text-xs font-mono text-slate-400 font-semibold ml-2">
              0{currentSlide + 1} / 0{SLIDES.length}
            </span>
          </div>

        </div>

        {/* Business System Console Synchronized With Slide */}
        <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-slate-50 p-2 sm:p-3 border border-slate-200 shadow-xl">
            <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 overflow-hidden">

              {/* Console Header Bar */}
              <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span className="ml-2 text-[11px] font-mono font-medium text-slate-500">
                    NEXTSCALE // 24/7 SALES SYSTEM
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-blue-600">
                    AUTOMATED BOOKING SYSTEM
                  </span>
                </div>
              </div>

              {/* Console Dual Engine Grid */}
              <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

                {/* Engine A: High-Speed Website */}
                <div
                  className={`rounded-2xl p-5 sm:p-6 border transition-all ${
                    slide.activeConsoleTab === "frontdoor" || slide.activeConsoleTab === "architecture"
                      ? "bg-blue-50/40 border-blue-500/40 shadow-md shadow-blue-500/5"
                      : "bg-slate-50/50 border-slate-200 opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900">
                          01 · High-Converting Business Website
                        </h3>
                        <span className="text-[11px] text-slate-500">Built to turn visitors into buyers</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-blue-100 text-blue-700 border border-blue-200">
                      ZERO LEAKS
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Opens instantly on any smartphone. Clean layout and clear buttons guide serious buyers straight to message or book without delay.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Mobile Retention</span>
                      <span className="font-mono font-bold text-blue-600">99.4% Stay on Page</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Inquiry Increase</span>
                      <span className="font-mono font-bold text-blue-600">+140% More Inquiries</span>
                    </div>
                  </div>
                </div>

                {/* Engine B: 24/7 WhatsApp AI Bot */}
                <div
                  className={`rounded-2xl p-5 sm:p-6 border transition-all ${
                    slide.activeConsoleTab === "backoffice" || slide.activeConsoleTab === "sprint"
                      ? "bg-blue-50/40 border-blue-500/40 shadow-md shadow-blue-500/5"
                      : "bg-slate-50/50 border-slate-200 opacity-80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900">
                          02 · 24/7 WhatsApp AI Bot
                        </h3>
                        <span className="text-[11px] text-slate-500">Never miss an after-hours buyer</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-blue-100 text-blue-700 border border-blue-200">
                      LIVE 24/7
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    Replies in under 30 seconds, answers pricing and service questions, filters out time-wasters, and books consultations directly to your calendar.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">After-Hours Bookings</span>
                      <span className="font-mono font-bold text-blue-600">40%+ Booked at Night</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Average Reply Speed</span>
                      <span className="font-mono font-bold text-blue-600">&lt; 30 Seconds</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Console Footnote */}
              <div className="px-6 py-3 bg-slate-50/50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Both systems deployed and live for your business in 7 calendar days</span>
                </div>
                <div className="font-mono text-[11px] text-slate-400">
                  Fixed Price • 100% Full Code Ownership
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

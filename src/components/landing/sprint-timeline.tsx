"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Compass,
  MessageSquare,
  Rocket,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";

interface StepData {
  num: string;
  day: string;
  dayLabel: string;
  title: string;
  description: string;
  icon: typeof Search;
  points: string[];
  deliverables: string[];
  numColor: string;
  accentColor: string;
}

const STEPS: StepData[] = [
  {
    num: "01",
    day: "DAY 01",
    dayLabel: "DAY 01",
    title: "Audit & Opportunity Map",
    description:
      "We analyze your current website, pinpoint exactly where you are losing potential buyers, and calculate your revenue recovery potential.",
    icon: Search,
    points: [
      "Lost inquiry analysis",
      "Speed & drop-off report",
      "Customer buying journey map",
    ],
    deliverables: [
      "Website conversion audit",
      "Lost inquiry analysis",
      "Revenue opportunity map",
    ],
    numColor: "text-blue-600",
    accentColor: "from-blue-600 to-sky-500",
  },
  {
    num: "02",
    day: "DAYS 02–03",
    dayLabel: "DAY 03",
    title: "Offer & Persuasive Copy",
    description:
      "We author clear, high-converting sales messaging and design an executive layout that immediately justifies your premium prices.",
    icon: Compass,
    points: [
      "Persuasive sales copywriting",
      "High-trust layout designs",
      "Clear pricing & offer structure",
    ],
    deliverables: [
      "Offer positioning",
      "Sales messaging",
      "Conversion-focused layout",
    ],
    numColor: "text-blue-600",
    accentColor: "from-blue-600 to-sky-500",
  },
  {
    num: "03",
    day: "DAYS 04–05",
    dayLabel: "DAY 05",
    title: "Build & WhatsApp AI Bot Setup",
    description:
      "We build your custom high-converting website and configure your 24/7 WhatsApp AI bot with your services, pricing, and calendar.",
    icon: MessageSquare,
    points: [
      "Fast-loading business website",
      "24/7 WhatsApp AI bot setup",
      "Calendar sync & test bookings",
    ],
    deliverables: [
      "High-converting website",
      "WhatsApp AI bot",
      "Calendar + service setup",
    ],
    numColor: "text-blue-600",
    accentColor: "from-blue-600 to-sky-500",
  },
  {
    num: "04",
    day: "DAYS 06–07",
    dayLabel: "DAY 07",
    title: "Live Launch & Handover",
    description:
      "We launch your new systems live to the public, verify real client inquiry flows on mobile, and hand over 100% full ownership and login keys to you.",
    icon: Rocket,
    points: [
      "Public live launch",
      "Mobile booking verification",
      "100% full ownership handover",
    ],
    deliverables: [
      "Production launch",
      "Mobile verification",
      "Full ownership handover",
    ],
    numColor: "text-blue-600",
    accentColor: "from-blue-600 to-sky-500",
  },
];

const EASING = [0.22, 1, 0.36, 1] as const;

export function SprintTimeline() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Hover and active stage tracking
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Mouse spotlight state inside this section only
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, active: false });

  // Auto-scroll progress advancement when section is in view
  useEffect(() => {
    if (!isInView || hoveredIdx !== null) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isInView, hoveredIdx]);

  // Current active index is either hovered card or scroll/timer stage
  const effectiveActive = hoveredIdx !== null ? hoveredIdx : activeStage;
  const isFinalComplete = effectiveActive === 3;

  // Handle cursor spotlight movement
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
    setHoveredIdx(null);
  };

  // Progress percentage calculation
  const getProgressPercentage = () => {
    switch (effectiveActive) {
      case 0:
        return 12.5;
      case 1:
        return 37.5;
      case 2:
        return 68.5;
      case 3:
        return 100;
      default:
        return 12.5;
    }
  };

  return (
    <section
      id="sprint"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 md:py-32 relative bg-slate-50/60 border-y border-slate-200 overflow-hidden"
    >
      {/* 1. Subtle Mouse-Following Cursor Spotlight (Desktop Only) */}
      {!prefersReduced && mousePos.active && (
        <div
          className="pointer-events-none absolute inset-0 hidden md:block transition-opacity duration-500 -z-0"
          style={{
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.055), transparent 65%)`,
          }}
        />
      )}

      {/* Background Micro Dot Grid Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] -z-10"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. Section Header with Smooth Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: EASING }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 shadow-xs">
            <Rocket className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>The 7-Day Sprint Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.12]">
            From audit to taking clients in{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
              7 calendar days.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No 6-month bloated agency retainers. No endless steering meetings. A tight, focused sprint that deploys your new client acquisition engine in one week.
          </p>

          {/* 3. 7-Day Progression Indicator Bar */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-mono font-semibold text-slate-600">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-sans hidden sm:inline">
                Sprint Velocity:
              </span>
              {STEPS.map((s, idx) => {
                const isActive = idx <= effectiveActive;
                const isCurrent = idx === effectiveActive;
                return (
                  <React.Fragment key={s.dayLabel}>
                    <button
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      className={`flex items-center gap-1.5 transition-all duration-200 focus:outline-hidden ${
                        isCurrent
                          ? "text-blue-600 font-bold scale-105"
                          : isActive
                          ? "text-slate-800"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                      aria-label={`Jump to stage ${s.dayLabel}`}
                    >
                      <span
                        className={`size-2 rounded-full transition-all duration-300 ${
                          isCurrent
                            ? "bg-blue-600 ring-4 ring-blue-100"
                            : isActive
                            ? "bg-blue-600"
                            : "bg-slate-300"
                        }`}
                      />
                      <span>{s.dayLabel}</span>
                    </button>
                    {idx < STEPS.length - 1 && (
                      <ChevronRight className="w-3 h-3 text-slate-300 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}

              {/* Completion badge */}
              {isFinalComplete && (
                <span className="ml-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-bold text-blue-700 animate-in fade-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-3 h-3 text-blue-600" /> Complete
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* 4. Desktop Visual Connected Progress Line (Behind Cards) */}
        <div className="hidden lg:block relative mb-8 px-8">
          <div className="relative h-1 w-full bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-400 rounded-full"
              initial={{ width: "12.5%" }}
              animate={{ width: `${getProgressPercentage()}%` }}
              transition={{ duration: 0.45, ease: EASING }}
            />
          </div>

          {/* Milestone markers on track */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 flex justify-between pointer-events-none">
            {STEPS.map((step, idx) => {
              const isPastOrActive = idx <= effectiveActive;
              const isCurrent = idx === effectiveActive;
              return (
                <div
                  key={step.num}
                  className="flex flex-col items-center"
                  style={{ width: "25%", transform: idx === 0 ? "translateX(0)" : idx === 3 ? "translateX(0)" : "none" }}
                >
                  <div
                    className={`size-3.5 rounded-full border-2 transition-all duration-300 bg-white ${
                      isCurrent
                        ? "border-blue-600 ring-4 ring-blue-500/20 scale-125"
                        : isPastOrActive
                        ? "border-blue-600 bg-blue-600"
                        : "border-slate-300 bg-white"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Desktop Grid & Mobile Connected Vertical Timeline */}
        <div className="relative">
          {/* Mobile Vertical Spine (hidden on desktop) */}
          <div className="lg:hidden absolute left-[1.1rem] top-8 bottom-8 w-0.5 bg-slate-200 -z-0">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-600 via-blue-500 to-sky-400 rounded-full origin-top"
              initial={{ height: "15%" }}
              animate={{ height: `${getProgressPercentage()}%` }}
              transition={{ duration: 0.45, ease: EASING }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pl-10 lg:pl-0">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isCardActive = idx === effectiveActive;
              const isPast = idx < effectiveActive;
              const isExpanded = expandedCard === idx || hoveredIdx === idx;

              return (
                <motion.div
                  key={step.num}
                  initial={{
                    opacity: 0,
                    y: prefersReduced ? 0 : 25,
                    scale: prefersReduced ? 1 : 0.98,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }
                      : { opacity: 0, y: 25, scale: 0.98 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: prefersReduced ? 0 : idx * 0.14,
                    ease: EASING,
                  }}
                  onMouseEnter={() => {
                    setHoveredIdx(idx);
                    setActiveStage(idx);
                  }}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => {
                    setActiveStage(idx);
                    setExpandedCard(expandedCard === idx ? null : idx);
                  }}
                  className={`relative rounded-3xl bg-white border p-6 sm:p-7 flex flex-col justify-between transition-all duration-350 cursor-pointer ${
                    isCardActive
                      ? "border-blue-500/80 shadow-xl shadow-blue-500/10 -translate-y-1.5 sm:-translate-y-2 ring-1 ring-blue-500/20"
                      : isPast
                      ? "border-slate-200/90 shadow-sm opacity-95 hover:border-slate-300"
                      : "border-slate-200/80 shadow-xs opacity-85 hover:opacity-100 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Subtle active radial backdrop inside card */}
                  {isCardActive && (
                    <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-blue-50/50 via-transparent to-transparent opacity-80" />
                  )}

                  {/* Mobile Indicator Node (on the vertical spine) */}
                  <div className="lg:hidden absolute -left-[2.25rem] top-7 -translate-x-1/2 flex items-center justify-center">
                    <span
                      className={`size-4 rounded-full border-2 bg-white transition-all duration-300 ${
                        isCardActive
                          ? "border-blue-600 ring-4 ring-blue-100 scale-110"
                          : isPast
                          ? "border-blue-600 bg-blue-600"
                          : "border-slate-300"
                      }`}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Step Header: Number + Day Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-2xl sm:text-3xl font-black font-mono transition-colors duration-200 ${
                            isCardActive ? "text-blue-600 scale-105" : "text-slate-900"
                          }`}
                        >
                          {step.num}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                          Stage {idx + 1}/4
                        </span>
                      </div>

                      <span
                        className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border transition-colors duration-200 ${
                          isCardActive
                            ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                            : "bg-slate-100 text-slate-700 border-slate-200"
                        }`}
                      >
                        {step.day}
                      </span>
                    </div>

                    {/* Icon Container with Micro-Animations */}
                    <div
                      className={`size-11 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                        isCardActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                          : "bg-blue-50 border border-blue-100 text-blue-600"
                      }`}
                    >
                      <motion.div
                        animate={
                          isCardActive && !prefersReduced
                            ? idx === 0
                              ? { x: [-2, 2, -1, 0] }
                              : idx === 1
                              ? { rotate: [-10, 10, -4, 0] }
                              : idx === 2
                              ? { scale: [1, 1.1, 1] }
                              : { y: [0, -3.5, -2], rotate: [0, 3, 0] }
                            : { x: 0, y: 0, rotate: 0, scale: 1 }
                        }
                        transition={{
                          duration: 0.6,
                          ease: EASING,
                          repeat: isCardActive ? Infinity : 0,
                          repeatDelay: 2.8,
                        }}
                      >
                        <Icon className="size-5 shrink-0" />
                      </motion.div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight transition-colors group-hover:text-blue-600">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {step.description}
                    </p>

                    {/* 6. Expandable "WHAT HAPPENS" Deliverables Area */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: EASING }}
                          className="overflow-hidden rounded-2xl bg-blue-50/60 border border-blue-100 p-3.5"
                        >
                          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-blue-700 mb-2">
                            <Sparkles className="size-3 text-blue-600 shrink-0" />
                            <span>What Happens</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {step.deliverables.map((item, dIdx) => (
                              <li key={dIdx} className="flex items-center gap-1.5">
                                <span className="size-1 rounded-full bg-blue-600 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 7. Bottom Deliverable Checklist */}
                  <div className="relative z-10 pt-5 mt-5 border-t border-slate-100 space-y-2">
                    {step.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center gap-2 text-xs text-slate-600 font-medium"
                      >
                        <CheckCircle2
                          className={`size-3.5 shrink-0 transition-colors duration-200 ${
                            isCardActive ? "text-blue-600" : "text-slate-400"
                          }`}
                        />
                        <span>{pt}</span>
                      </div>
                    ))}

                    {/* Expand/Collapse affordance micro-hint */}
                    <div className="pt-1 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span className="text-[10px] uppercase font-semibold">
                        {isExpanded ? "Deliverables Active" : "Hover / Tap to expand"}
                      </span>
                      <ChevronRight
                        className={`size-3 transition-transform duration-200 ${
                          isExpanded ? "rotate-90 text-blue-600" : ""
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 8. Final Completion & 7-Day Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASING }}
          className="mt-14 max-w-3xl mx-auto"
        >
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:px-7 sm:py-4.5 rounded-3xl border transition-all duration-300 ${
              isFinalComplete
                ? "bg-white border-blue-300 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/20"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-3 text-left">
              <div className="size-10 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="size-5 text-blue-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">
                    Our 7-Day Sprint Guarantee
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase font-mono">
                    Zero Risk
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  If we don&apos;t ship your client-ready system within 7 calendar days, you don&apos;t pay the final balance.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20reserve%20a%207-Day%20Sprint%20slot%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Reserve Sprint Slot</span>
              <ChevronRight className="size-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

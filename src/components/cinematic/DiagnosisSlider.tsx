'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Card3D } from '@/components/ui/Card3D';

const EASING = [0.22, 1, 0.36, 1] as const;

interface SlideData {
  id: string;
  tabLabel: string;
  cureTag: string;
  tagColor: string;
  titleBase: string;
  titleHighlight: string;
  description: string;
  bullets: { title: string; desc: string }[];
  href: string;
  visualType: 'lighthouse' | 'whatsapp';
}

const slides: SlideData[] = [
  {
    id: 'front-door',
    tabLabel: '01 / The Digital Front Door',
    cureTag: 'Cure 01 / Acquisition',
    tagColor: '#ec4899',
    titleBase: 'The Digital',
    titleHighlight: 'Front Door',
    description: 'Your website is your highest-stakes operational asset. If it takes 3+ seconds to load, buries your phone number, or talks like a brochure, high-intent prospects move to your competitor in one tap.',
    bullets: [
      {
        title: 'Sub-Second Next.js Web Application:',
        desc: 'Guaranteed 95+ PageSpeed scores engineered with edge caching to stop mobile bounce rates permanently.',
      },
      {
        title: 'High-Intent Conversion Architecture:',
        desc: 'Strategic copy hierarchy that positions your business as the obvious authority in your market.',
      },
      {
        title: 'Local Search & Map Pack Dominance:',
        desc: 'Technical schema markup and review integration that puts you in the top 3 spots when clients search near them.',
      },
    ],
    href: 'https://wa.me/919556436685?text=Hi%20NextScale!%20Tell%20me%20more%20about%20The%20Digital%20Front%20Door%20build.',
    visualType: 'lighthouse',
  },
  {
    id: 'back-office',
    tabLabel: '02 / The Automated Back Office',
    cureTag: 'Cure 02 / Operations',
    tagColor: '#f97316',
    titleBase: 'The Automated',
    titleHighlight: 'Back Office',
    description: 'Getting leads without instant replies loses sales. Our 24/7 WhatsApp AI bot connects directly to your WhatsApp Business number to answer questions and book appointments without staff delays.',
    bullets: [
      {
        title: 'Instant 24/7 WhatsApp AI Replies:',
        desc: 'Greets inquiries instantly in under 30 seconds, answers pricing and service questions, and qualifies serious buyers.',
      },
      {
        title: 'Automated Calendar & CRM Handshake:',
        desc: 'Books confirmed appointment slots directly into Google Calendar and notifies your clinical or sales team in real time.',
      },
      {
        title: 'No-Show Reduction Engine:',
        desc: 'Timed WhatsApp reminders that cut clinic and consultation appointment drop-offs by up to 50%.',
      },
    ],
    href: 'https://wa.me/919556436685?text=Hi%20NextScale!%20Show%20me%20how%20The%20Automated%20Back%20Office%20works.',
    visualType: 'whatsapp',
  },
];

export default function DiagnosisSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slide = slides[activeIndex];

  const navigate = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  const nextSlide = () => {
    navigate((activeIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    navigate((activeIndex - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: EASING,
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
      transition: {
        duration: 0.6,
        ease: EASING,
      },
    }),
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-12 relative">
      {/* Tabs / Selectors */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full overflow-hidden w-full sm:w-auto">
          {slides.map((s, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={s.id}
                onClick={() => navigate(idx)}
                className={`relative px-5 py-2.5 text-xs sm:text-sm font-heading font-bold rounded-full transition-colors duration-300 flex-1 sm:flex-none text-center ${
                  isActive ? 'text-white' : 'text-[#8e8e9c] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.1] rounded-full"
                    transition={{ duration: 0.6, ease: EASING }}
                  />
                )}
                <span className="relative z-10">{s.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="size-10 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="size-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="size-10 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="size-5" />
          </motion.button>
        </div>
      </div>

      {/* Main Slider Area */}
      <div className="relative min-h-[600px] sm:min-h-[500px]">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full relative"
          >
            {/* Active Card Container */}
            <div className="bg-[#111116] border border-white/[0.08] rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              {/* Glowing border accent on active */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${slide.tagColor}15, transparent 70%)`,
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none rounded-3xl" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Text Column */}
                <div className="lg:col-span-6 relative z-10">
                  <div className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] mb-5">
                    <span style={{ color: slide.tagColor }}>●</span>
                    <span>{slide.cureTag}</span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl leading-snug mb-5">
                    {slide.titleBase} <span className="text-gradient">{slide.titleHighlight}</span>
                  </h3>

                  <p className="text-[#8e8e9c] text-base sm:text-lg leading-relaxed mb-6">
                    {slide.description}
                  </p>

                  <ul className="flex flex-col gap-4 mb-8">
                    {slide.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-[#8e8e9c] text-sm sm:text-base leading-relaxed">
                        <span className="shrink-0 size-6 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 flex items-center justify-center text-[#f97316] font-black text-xs mt-0.5">
                          +
                        </span>
                        <span>
                          <strong className="text-white">{bullet.title}</strong> {bullet.desc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <MagneticButton
                      href={slide.href}
                      text="See How It Works"
                      variant="outline"
                      className="text-sm sm:text-base py-3 px-6 font-semibold"
                    />
                  </div>
                </div>

                {/* Visual Column */}
                <div className="lg:col-span-6 relative z-10">
                  <Card3D tiltIntensity={8} spotlightColor={slide.tagColor === '#ec4899' ? "rgba(249, 115, 22, 0.16)" : "rgba(6, 182, 212, 0.18)"}>
                    {slide.visualType === 'lighthouse' ? (
                      <div className="w-full bg-[#111116] border border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex justify-between items-center border-b border-white/[0.08] pb-4 mb-6">
                          <span className="font-heading font-extrabold text-sm sm:text-base text-white">
                            Lighthouse Core Web Vitals
                          </span>
                          <span className="bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                            PASSED 100/100
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center">
                            <div className="font-heading font-black text-xl sm:text-2xl text-emerald-400">0.4s</div>
                            <div className="text-xs text-[#8e8e9c] mt-1 font-medium">LCP (Speed)</div>
                          </div>
                          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center">
                            <div className="font-heading font-black text-xl sm:text-2xl text-emerald-400">0ms</div>
                            <div className="text-xs text-[#8e8e9c] mt-1 font-medium">FID (Input)</div>
                          </div>
                          <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center">
                            <div className="font-heading font-black text-xl sm:text-2xl text-emerald-400">0.00</div>
                            <div className="text-xs text-[#8e8e9c] mt-1 font-medium">CLS (Shift)</div>
                          </div>
                        </div>

                        <div className="bg-[#f97316]/[0.08] border border-[#f97316]/25 rounded-xl p-4 flex items-center justify-between">
                          <div>
                            <div className="font-heading font-bold text-sm sm:text-base text-white">
                              Mobile Conversion Lift
                            </div>
                            <div className="text-xs text-[#8e8e9c] mt-0.5">
                              Bounce rate reduced from 68% to 19%
                            </div>
                          </div>
                          <div className="font-heading font-black text-2xl sm:text-3xl text-[#fbbf24]">
                            +140%
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full bg-[#111116] border border-white/[0.08] rounded-2xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="w-full bg-[#0d0d12] border border-white/[0.08] rounded-xl overflow-hidden font-body">
                          {/* Chat Header */}
                          <div className="flex items-center justify-between p-3.5 sm:p-4 bg-white/[0.03] border-b border-white/[0.08]">
                            <div className="flex items-center gap-3">
                              <div className="size-10 rounded-full bg-gradient-to-br from-[#ec4899] via-[#f97316] to-[#fbbf24] flex items-center justify-center text-[#0b0b0e] font-black text-sm">
                                NS
                              </div>
                              <div>
                                <div className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                                  <span>NextScale WhatsApp AI</span>
                                  <CheckCircle2 className="size-3.5 text-[#06b6d4] fill-[#06b6d4]/20" />
                                </div>
                                {/* SINGLE RESERVED COOL CYAN ACCENT WITH PULSE */}
                                <div className="inline-flex items-center gap-1.5 text-xs text-[#06b6d4] font-medium">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
                                  <span>Online • Active 24/7</span>
                                </div>
                              </div>
                            </div>
                            <span className="text-[0.7rem] text-[#545462] font-mono hidden sm:inline">
                              WhatsApp Business API
                            </span>
                          </div>

                          {/* Chat Body */}
                          <div className="p-4 sm:p-5 flex flex-col gap-3.5 bg-[#0d0d12]">
                            {/* Incoming */}
                            <div className="self-start max-w-[88%] p-3 sm:p-3.5 rounded-2xl rounded-bl-sm bg-white/[0.07] text-white text-xs sm:text-sm leading-relaxed">
                              Hi, we run 3 clinic locations and keep missing weekend patient inquiries. Can you automate intake and calendar booking?
                              <div className="text-[0.68rem] text-[#545462] text-right mt-1">11:14 PM</div>
                            </div>

                            {/* Outgoing AI */}
                            <div className="self-end max-w-[88%] p-3 sm:p-3.5 rounded-2xl rounded-br-sm bg-gradient-to-br from-[#ec4899]/15 to-[#f97316]/15 border border-[#f97316]/25 text-white text-xs sm:text-sm leading-relaxed">
                              Hello! Yes, our multi-clinic router syncs patient slots into Google Calendar across all 3 branches automatically. What is your average monthly inquiry volume?
                              <div className="text-[0.68rem] text-amber-200/60 text-right mt-1">11:14 PM • Replied in 0.8s</div>
                            </div>

                            {/* Incoming reply */}
                            <div className="self-start max-w-[88%] p-3 sm:p-3.5 rounded-2xl rounded-bl-sm bg-white/[0.07] text-white text-xs sm:text-sm leading-relaxed">
                              About 500-650 inquiries per month.
                              <div className="text-[0.68rem] text-[#545462] text-right mt-1">11:15 PM</div>
                            </div>

                            {/* Automated Action Card */}
                            <div className="bg-white/[0.04] border border-dashed border-[#f97316]/40 rounded-xl p-3 text-xs text-[#8e8e9c]">
                              <div className="text-[0.68rem] font-bold text-[#fbbf24] uppercase tracking-wider mb-1">
                                AUTOMATED AI ACTION
                              </div>
                              <div className="text-white font-semibold mb-0.5">
                                ✓ Qualified: Enterprise Multi-Clinic Tier
                              </div>
                              <div>
                                Calendar slot provisionally locked for tomorrow at 11:30 AM IST. Direct SMS alert sent to clinic manager.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Card3D>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="flex sm:hidden items-center justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="size-12 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white"
        >
          <ChevronLeft className="size-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="size-12 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white"
        >
          <ChevronRight className="size-6" />
        </motion.button>
      </div>
    </div>
  );
}

export { DiagnosisSlider };

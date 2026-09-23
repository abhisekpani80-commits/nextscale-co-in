"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { KineticHeading } from "@/components/cinematic/KineticHeading";
import { FloatingHero3D } from "@/components/cinematic/FloatingHero3D";

interface SlideData {
  titleLine1: string;
  titleMuted: string;
  titleGradient: string;
  subhead: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

const SLIDES: SlideData[] = [
  {
    titleLine1: "Your Website Looks Great.",
    titleMuted: "It Just Isn't ",
    titleGradient: "Booking Anyone.",
    subhead:
      "A gorgeous site that leaks 92% of mobile traffic is an expensive business card. We engineer sub-second Digital Front Doors that capture high-intent buyers before they bounce.",
    primaryCtaText: "Plug Front Door Leaks",
    primaryCtaUrl:
      "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20fix%20our%20website%20conversion%20leaks.",
    secondaryCtaText: "Explore The Two Cures",
    secondaryCtaHref: "#diagnosis",
  },
  {
    titleLine1: "A Lead Messages at 11PM.",
    titleMuted: "You Reply at 9AM. ",
    titleGradient: "They're Gone.",
    subhead:
      "78% of B2B deals go to the first respondent. Our 24/7 WhatsApp AI Back Office qualifies budgets, answers clinical FAQs, and locks Google Calendar appointments while your staff sleeps.",
    primaryCtaText: "Deploy Back Office AI",
    primaryCtaUrl:
      "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20deploy%20a%2024%2F7%20WhatsApp%20AI%20receptionist.",
    secondaryCtaText: "See Live Triage Demo",
    secondaryCtaHref: "#diagnosis",
  },
  {
    titleLine1: "Two Systems.",
    titleMuted: "Zero Leaks.",
    titleGradient: "One Clinic. ",
    subhead:
      "Stop running disconnected marketing experiments. We align your front-end customer acquisition and back-office operations into a compounding, automated revenue engine.",
    primaryCtaText: "Book Complete Diagnosis",
    primaryCtaUrl:
      "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20book%20a%20full%20Revenue%20Architecture%20Diagnosis.",
    secondaryCtaText: "View Verified Results",
    secondaryCtaHref: "#proof",
  },
  {
    titleLine1: "You Don't Need More Ad Spend.",
    titleMuted: "You Need a ",
    titleGradient: "Tighter Bucket.",
    subhead:
      "Pouring traffic into an unoptimized funnel burns cash. We audit your lead-to-close pipeline, eliminate drop-offs, and double conversion yield with existing visitor volume.",
    primaryCtaText: "Audit Your Pipeline",
    primaryCtaUrl:
      "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20audit%20our%20conversion%20bucket.",
    secondaryCtaText: "Our 4-Step Sprint",
    secondaryCtaHref: "#process",
  },
];

export function ClinicHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  // Scroll parallax depth layers
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const textLayerY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const visualLayerY = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const visualLayerScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const currentSlide = SLIDES[activeSlide];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative pt-12 md:pt-16 pb-20 md:pb-32 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="container-clinic relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Foreground Left: Editorial Kinetic Typography & Magnetic Controls */}
          <motion.div 
            style={{ y: textLayerY, opacity: opacityFade }}
            className="lg:col-span-6 xl:col-span-7 relative z-20 flex flex-col justify-center"
          >
            {/* Pill Eyebrow with pulse */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-bold uppercase tracking-widest text-[#e2e2f0] mb-8 w-fit backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#fbbf24] shadow-[0_0_10px_rgba(249,115,22,0.9)] animate-pulse" />
              <span>Revenue Architecture & Operational Growth Clinic</span>
            </motion.div>

            {/* Kinetic Oversized Headline */}
            <div className="mb-6 min-h-[170px] sm:min-h-[190px] md:min-h-[220px] flex items-center">
              <KineticHeading
                line1={currentSlide.titleLine1}
                lineMuted={currentSlide.titleMuted}
                lineGradient={currentSlide.titleGradient}
                activeKey={activeSlide}
              />
            </div>

            {/* Subhead with smooth crossfade */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#8e8e9c] text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl font-normal"
              >
                {currentSlide.subhead}
              </motion.p>
            </AnimatePresence>

            {/* Magnetic CTAs Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <MagneticButton
                href={currentSlide.primaryCtaUrl}
                text={currentSlide.primaryCtaText}
                variant="primary"
                className="text-sm sm:text-base font-bold py-3.5 px-7 shadow-[0_10px_35px_rgba(249,115,22,0.35)]"
              />
              <MagneticButton
                href={currentSlide.secondaryCtaHref}
                text={currentSlide.secondaryCtaText}
                variant="outline"
                className="text-sm sm:text-base py-3.5 px-6 font-semibold border-white/20 text-white hover:bg-white/5"
              />
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 pt-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-10 h-10 rounded-full bg-[#15151c]/80 backdrop-blur-sm border border-white/[0.1] text-white flex items-center justify-center hover:bg-white/15 hover:scale-105 active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-2">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === activeSlide
                        ? "w-10 bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#fbbf24]"
                        : "w-4 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-10 h-10 rounded-full bg-[#15151c]/80 backdrop-blur-sm border border-white/[0.1] text-white flex items-center justify-center hover:bg-white/15 hover:scale-105 active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>

          {/* Center/Right: Cinematic 3D Floating Systems Composition */}
          <motion.div 
            style={{ y: visualLayerY, scale: visualLayerScale }}
            className="lg:col-span-6 xl:col-span-5 relative flex flex-col items-center z-10"
          >
            <FloatingHero3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

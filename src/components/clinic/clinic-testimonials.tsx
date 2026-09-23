"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Before NextScale, our clinic lost at least 10 to 15 weekend patient leads every month because nobody was answering WhatsApp. Their system now qualifies patients and books our Google Calendar instantly. Paid for itself within 14 days.",
    author: "Dr. R. Mehta",
    role: "Managing Director, Meridian Healthcare Group",
    initials: "DM",
  },
  {
    quote:
      "Most agencies deliver bloated WordPress themes with 25 plugins that crawl on mobile. NextScale shipped our custom Next.js site in 6 days with a 99 Lighthouse score. Fast, sharp, zero fluff.",
    author: "Ankit K.",
    role: "Co-Founder, Vantage B2B Studio",
    initials: "AK",
  },
  {
    quote:
      "The transparency was refreshing. No ongoing hostage fees, 100% code handover on GitHub, and direct communication on WhatsApp with the engineer writing the code.",
    author: "Siddharth P.",
    role: "Principal, Aura Wellness Clinics",
    initials: "SP",
  },
];

export function ClinicTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container-clinic">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <p className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#8e8e9c] mb-3">
            Client Verdicts
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            Operational Impact. <br />
            <span className="text-gradient">Measured in Closed Revenue.</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto min-h-[380px] sm:min-h-[340px] flex items-center justify-center">
          <div className="relative w-full flex items-center justify-center">
            {TESTIMONIALS.map((item, idx) => {
              const isActive = idx === activeIndex;
              const isPrev = idx === (activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
              const isNext = idx === (activeIndex + 1) % TESTIMONIALS.length;

              let cardStyle = "opacity-0 pointer-events-none scale-75";
              if (isActive) {
                cardStyle =
                  "relative z-20 opacity-100 scale-100 bg-white text-[#0a0a0c] shadow-[0_25px_60px_rgba(0,0,0,0.6)]";
              } else if (isPrev) {
                cardStyle =
                  "hidden md:block absolute -translate-x-1/2 z-10 opacity-35 scale-85 bg-[#111116] text-white border border-white/[0.08]";
              } else if (isNext) {
                cardStyle =
                  "hidden md:block absolute translate-x-1/2 z-10 opacity-35 scale-85 bg-[#111116] text-white border border-white/[0.08]";
              }

              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full max-w-xl rounded-3xl p-7 sm:p-10 transition-all duration-500 cursor-pointer ${cardStyle}`}
                >
                  <div
                    className={`text-4xl font-serif leading-none mb-3 ${
                      isActive ? "text-[#0a0a0c]/30" : "text-white/20"
                    }`}
                  >
                    “
                  </div>

                  <p
                    className={`text-base sm:text-lg leading-relaxed mb-6 font-medium ${
                      isActive ? "text-[#0a0a0c]" : "text-white/80"
                    }`}
                  >
                    {item.quote}
                  </p>

                  <div className="flex items-center gap-3.5">
                    <div className="size-11 rounded-full bg-gradient-to-br from-[#ec4899] via-[#f97316] to-[#fbbf24] flex items-center justify-center font-heading font-black text-sm text-[#0b0b0e]">
                      {item.initials}
                    </div>
                    <div>
                      <div
                        className={`font-heading font-extrabold text-sm sm:text-base ${
                          isActive ? "text-[#0a0a0c]" : "text-white"
                        }`}
                      >
                        {item.author}
                      </div>
                      <div
                        className={`text-xs ${
                          isActive ? "text-[#4b4b57]" : "text-[#8e8e9c]"
                        }`}
                      >
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous Testimonial"
            className="w-10 h-10 rounded-full bg-[#15151c] border border-white/[0.1] text-white flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-gradient-to-r from-[#ec4899] via-[#f97316] to-[#fbbf24]"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next Testimonial"
            className="w-10 h-10 rounded-full bg-[#15151c] border border-white/[0.1] text-white flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Card3D } from "@/components/ui/Card3D";

function useCountUp(target: number, duration = 1600, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [target, duration, shouldStart]);

  return count;
}

export function ClinicProof() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count99 = useCountUp(99, 1500, hasIntersected);
  const count60 = useCountUp(60, 1400, hasIntersected);
  const count7 = useCountUp(7, 1200, hasIntersected);

  return (
    <section
      ref={sectionRef}
      id="proof"
      className="py-20 sm:py-28 relative overflow-hidden text-center"
    >
      <div className="container-clinic">
        
        {/* Outlined Giant Numeral BEHIND Statement */}
        <div className="relative flex items-center justify-center min-h-[220px] sm:min-h-[260px] mb-14 md:mb-18">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-[7rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] leading-none select-none pointer-events-none z-0 tracking-tighter text-transparent will-change-transform"
            style={{
              WebkitTextStroke: "1.5px rgba(249, 115, 22, 0.16)",
            }}
            aria-hidden="true"
          >
            2X
          </motion.div>

          <h2 className="relative z-10 max-w-3xl mx-auto font-heading font-black text-2xl sm:text-3xl md:text-5xl leading-tight">
            We Turn Missed Leads Into Booked Calls — <br />
            <span className="text-gradient">Automatically, Within Minutes.</span>
          </h2>
        </div>

        {/* 3 Stat Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 99/100 */}
          <Card3D tiltIntensity={12} spotlightColor="rgba(249, 115, 22, 0.22)">
            <div className="bg-[#111116] border border-white/[0.08] rounded-2xl p-7 sm:p-8 relative overflow-hidden h-full">
              <div className="font-heading font-black text-4xl sm:text-5xl leading-none mb-3">
                <span className="text-gradient">{count99}</span>
                <span className="text-[#fbbf24] text-2xl sm:text-3xl font-black">/100</span>
              </div>
              <div className="text-sm sm:text-base text-[#8e8e9c] font-medium">
                Google PageSpeed Rating Guaranteed
              </div>
            </div>
          </Card3D>

          {/* Card 2: < 60s */}
          <Card3D tiltIntensity={12} spotlightColor="rgba(6, 182, 212, 0.22)">
            <div className="bg-[#111116] border border-white/[0.08] rounded-2xl p-7 sm:p-8 relative overflow-hidden h-full">
              <div className="font-heading font-black text-4xl sm:text-5xl leading-none text-white mb-3">
                &lt; {count60}s
              </div>
              <div className="text-sm sm:text-base text-[#8e8e9c] font-medium">
                WhatsApp AI Reply Window
              </div>
            </div>
          </Card3D>

          {/* Card 3: 7 Days */}
          <Card3D tiltIntensity={12} spotlightColor="rgba(236, 72, 153, 0.22)">
            <div className="bg-[#111116] border border-white/[0.08] rounded-2xl p-7 sm:p-8 relative overflow-hidden h-full">
              <div className="font-heading font-black text-4xl sm:text-5xl leading-none text-gradient mb-3">
                {count7} Days
              </div>
              <div className="text-sm sm:text-base text-[#8e8e9c] font-medium">
                Average Rapid Sprint Deployment
              </div>
            </div>
          </Card3D>

        </div>

      </div>
    </section>
  );
}

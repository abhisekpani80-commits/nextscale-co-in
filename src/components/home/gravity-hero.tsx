"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Volume2, VolumeX, ShieldCheck, Zap } from "lucide-react";

export function GravityHero() {
  const [scrollPos, setScrollPos] = useState(0);
  const [muted, setMuted] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const videoBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoBoxRef.current) return;
    const rect = videoBoxRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const openModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tap-in-modal"));
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#07090e]">
      {/* Background Ambient Radial Glows (88gravity aesthetic) */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-r from-[#ff3ba1]/15 to-[#ffa011]/15 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white backdrop-blur-md">
            <Sparkles className="size-3.5 text-[#ff3ba1] star-blink" />
            <span>Autonomous Web & AI Architecture</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffa011]/10 border border-[#ffa011]/30 text-xs font-bold text-[#ffa011]">
            <Zap className="size-3.5" />
            <span>Live in 5–7 Days</span>
          </span>
        </div>

        {/* Big Punch Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] max-w-5xl">
          We Engineer <br />
          <span className="text-gravity-gradient">Autonomous AI & High-Performance</span> <br />
          Web Systems That Scale.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
          Sub-second Next.js web applications, 24/7 WhatsApp AI receptionists, and local SEO domination. 
          No agency retainers. Just clean, compounding pipeline.
        </p>

        {/* Dual Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={openModal}
            className="btn-gravity flex items-center justify-center gap-2 py-4 px-8 text-sm"
          >
            <span>Tap In With Founders</span>
            <ArrowRight className="size-4" />
          </button>
          
          <a
            href="#services"
            className="btn-gravity-secondary flex items-center justify-center gap-2 py-4 px-8 text-sm"
          >
            <span>Explore Systems</span>
          </a>
        </div>

        {/* Interactive Video Showreel with Custom Floating Audio Cursor */}
        <div className="mt-14 relative rounded-2xl overflow-hidden border border-white/10 bg-[#12151e] shadow-2xl">
          <div
            ref={videoBoxRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
            onClick={() => setMuted(!muted)}
            className="relative h-64 sm:h-96 md:h-[480px] w-full flex items-center justify-center cursor-pointer group bg-gradient-to-br from-[#131722] to-[#080a10]"
          >
            {/* Showreel Graphic Canvas */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ff3ba1_1px,transparent_1px)] [background-size:24px_24px]" />
            
            <div className="relative text-center z-10 px-4">
              <div className="size-16 sm:size-20 mx-auto rounded-full bg-gradient-to-r from-[#ff3ba1] to-[#ffa011] p-[2px] pulse-ring flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="size-full rounded-full bg-[#07090e] flex items-center justify-center text-white">
                  {muted ? <VolumeX className="size-6 text-[#ffa011]" /> : <Volume2 className="size-6 text-[#ff3ba1]" />}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
                Next Scale Experience Showreel
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Click anywhere to {muted ? "Unmute Sound" : "Mute Sound"} · 100% Client Code Ownership
              </p>
            </div>

            {/* Custom Video Floating Cursor (88gravity style) */}
            {cursorVisible && (
              <div
                style={{
                  left: `${cursorPos.x}px`,
                  top: `${cursorPos.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                className="hidden lg:flex pointer-events-none absolute z-30 px-3.5 py-1.5 rounded-full bg-black/90 border border-[#ff3ba1] text-xs font-black uppercase text-white shadow-xl items-center gap-1.5 backdrop-blur-md"
              >
                <span className="size-2 rounded-full bg-[#ffa011] animate-ping" />
                <span>{muted ? "Sound On" : "Sound Off"}</span>
              </div>
            )}
          </div>
        </div>

        {/* Scroll-Driven Bi-Directional Parquee Marquee (88gravity Core Motion) */}
        <div className="mt-16 overflow-hidden py-4 border-y border-white/10 select-none">
          {/* First Line: Moves Right with scroll */}
          <div
            style={{
              transform: `translateX(${scrollPos * 0.25}px) translateX(-20%)`,
              transition: "transform 0.05s linear",
            }}
            className="text-4xl sm:text-6xl font-black uppercase whitespace-nowrap tracking-wider text-neutral-500/30 flex gap-8"
          >
            <span>AUTONOMOUS AI AGENTS</span>
            <span className="text-[#ff3ba1]">✦</span>
            <span>SUB-SECOND WEBSITES</span>
            <span className="text-[#ffa011]">✦</span>
            <span>LOCAL SEO DOMINATION</span>
            <span className="text-[#ff3ba1]">✦</span>
            <span>7-DAY SHIP VELOCITY</span>
          </div>

          {/* Second Line: Moves Left with scroll */}
          <div
            style={{
              transform: `translateX(${scrollPos * -0.25}px)`,
              transition: "transform 0.05s linear",
            }}
            className="mt-2 text-4xl sm:text-6xl font-black uppercase whitespace-nowrap tracking-wider text-neutral-400/25 flex gap-8"
          >
            <span>NO BLOATED RETAINERS</span>
            <span className="text-[#ffa011]">✦</span>
            <span>100% CODE OWNERSHIP</span>
            <span className="text-[#ff3ba1]">✦</span>
            <span>ZERO HUMAN LAG</span>
            <span className="text-[#ffa011]">✦</span>
            <span>MEASURABLE REVENUE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

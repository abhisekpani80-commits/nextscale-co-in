"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowUpRight, Bot, Globe, Zap, Layers } from "lucide-react";

export function GravityHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Lock background scroll when mobile curtain is open
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const openModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tap-in-modal"));
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-9 rounded-xl bg-gradient-to-tr from-[#ff3ba1] to-[#ffa011] p-[2px] shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform">
              <div className="size-full bg-[#07090e] rounded-[10px] flex items-center justify-center font-black text-lg text-white">
                N
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff3ba1] group-hover:to-[#ffa011] transition-all">
                NEXT SCALE
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#ffa011]">
                Live In 7 Days
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              About
            </Link>

            {/* Services Dropdown (4 Clusters) */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-neutral-300 group-hover:text-white py-2 transition-colors">
                <span>Services</span>
                <span className="size-1.5 rounded-full bg-[#ff3ba1] star-blink" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] p-6 rounded-2xl bg-[#12151e] border border-white/10 shadow-2xl backdrop-blur-2xl opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 grid grid-cols-2 gap-4">
                <Link
                  href="/services/websites"
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all flex gap-3"
                >
                  <div className="size-9 rounded-lg bg-pink-500/10 text-[#ff3ba1] flex items-center justify-center shrink-0">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      Sub-Second Websites
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-pink-500/20 text-[#ff3ba1] font-black">99/100 PSI</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">High-converting Next.js platforms built for speed & SEO.</p>
                  </div>
                </Link>

                <Link
                  href="/services/ai-agents"
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all flex gap-3"
                >
                  <div className="size-9 rounded-lg bg-amber-500/10 text-[#ffa011] flex items-center justify-center shrink-0">
                    <Bot className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      WhatsApp AI Agents
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-[#ffa011] font-black star-blink">24/7 LIVE</span>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">Autonomous conversational booking & support bots.</p>
                  </div>
                </Link>

                <Link
                  href="/services/digital-growth"
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all flex gap-3"
                >
                  <div className="size-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Zap className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Local SEO & Growth</div>
                    <p className="text-xs text-neutral-400 mt-1">Map pack dominance, GEO schema & compounding revenue.</p>
                  </div>
                </Link>

                <Link
                  href="/services"
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all flex gap-3"
                >
                  <div className="size-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <Layers className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Turnkey Systems</div>
                    <p className="text-xs text-neutral-400 mt-1">Full-stack digital suites for clinics, real estate & SaaS.</p>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              href="/case-studies"
              className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              Case Studies
            </Link>

            <Link
              href="/pricing"
              className="text-sm font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={openModal}
              className="btn-gravity flex items-center gap-2"
            >
              <span>Tap In</span>
              <ArrowUpRight className="size-4" />
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden size-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Curtain Drawer Overlay (88gravity style) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07090e] p-6 pt-24 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-[#ffa011] mb-2">
              Explore Next Scale
            </div>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/about"
              className="block text-3xl font-black text-white hover:text-[#ff3ba1] transition-colors"
            >
              About Agency
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/services"
              className="block text-3xl font-black text-white hover:text-[#ff3ba1] transition-colors"
            >
              Services & AI
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/case-studies"
              className="block text-3xl font-black text-white hover:text-[#ff3ba1] transition-colors"
            >
              Proof & Work
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/pricing"
              className="block text-3xl font-black text-white hover:text-[#ff3ba1] transition-colors"
            >
              Pricing Plans
            </Link>
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href="/contact"
              className="block text-3xl font-black text-white hover:text-[#ff3ba1] transition-colors"
            >
              Contact Direct
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="btn-gravity w-full py-4 text-center text-base font-black uppercase"
            >
              Tap In With Founders ✦
            </button>
          </div>
        </div>
      )}
    </>
  );
}

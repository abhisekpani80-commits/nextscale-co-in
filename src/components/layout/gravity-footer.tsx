"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MapPin, Phone, Mail } from "lucide-react";

export function GravityFooter() {
  const openModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tap-in-modal"));
    }
  };

  return (
    <footer className="bg-[#05060a] border-t border-white/10 pt-20 pb-28 md:pb-16 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="size-9 rounded-xl bg-gradient-to-tr from-[#ff3ba1] to-[#ffa011] p-[2px]">
                <div className="size-full bg-[#07090e] rounded-[10px] flex items-center justify-center font-black text-lg text-white">
                  N
                </div>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                NEXT SCALE
              </span>
            </Link>
            
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              We engineer sub-second Next.js web applications, 24/7 WhatsApp AI receptionists, and local SEO engines for ambitious businesses worldwide. Shipped in 7 days.
            </p>

            <div className="pt-2">
              <button
                onClick={openModal}
                className="btn-gravity flex items-center gap-2 py-3 px-6 text-xs"
              >
                <span>Tap In With Us</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ffa011] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Studio</Link></li>
              <li><Link href="/services/websites" className="hover:text-white transition-colors">Next.js Web Systems</Link></li>
              <li><Link href="/services/ai-agents" className="hover:text-white transition-colors">WhatsApp AI Agents</Link></li>
              <li><Link href="/services/digital-growth" className="hover:text-white transition-colors">Local SEO & AEO</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & ROI</Link></li>
            </ul>
          </div>

          {/* Contact & HQ */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#ff3ba1] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-[#ffa011]" />
                <a href="tel:+919556436685" className="hover:text-white transition-colors">+91 9556436685</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-[#ffa011]" />
                <a href="mailto:biz.abhisek@gmail.com" className="hover:text-white transition-colors">biz.abhisek@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-[#ff3ba1] shrink-0 mt-0.5" />
                <span>Bhubaneswar, Odisha, India · Serving Globally</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Next Scale Technologies. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="hover:text-neutral-300">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-neutral-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

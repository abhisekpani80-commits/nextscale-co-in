"use client";

import React from "react";
import { Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export function MobileBottomBar() {
  const openModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-tap-in-modal"));
    }
  };

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden flex items-center justify-between p-1.5 rounded-2xl bg-[#0c0f17]/95 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80">
      <a
        href="tel:+919556436685"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-neutral-300 hover:text-white"
      >
        <Phone className="size-3.5 text-[#ffa011]" />
        <span>Call</span>
      </a>

      <div className="w-[1px] h-5 bg-white/10" />

      <a
        href="https://wa.me/919556436685?text=Hi%20Next%20Scale!%20I\'d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
      >
        <MessageSquare className="size-3.5 text-emerald-400" />
        <span>WhatsApp</span>
      </a>

      <div className="w-[1px] h-5 bg-white/10" />

      <button
        onClick={openModal}
        className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#ff3ba1] to-[#ffa011] text-xs font-black uppercase text-white shadow-lg shadow-pink-500/30 flex items-center justify-center gap-1"
      >
        <span>Tap In</span>
        <ArrowUpRight className="size-3.5" />
      </button>
    </div>
  );
}

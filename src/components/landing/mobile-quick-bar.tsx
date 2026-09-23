"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Calculator } from "lucide-react";

export function MobileQuickBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/97 backdrop-blur-lg border-t border-slate-200 shadow-2xl animate-in slide-in-from-bottom duration-200"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center gap-2 p-3">
        <a
          href="#diagnostic"
          className="flex-1 flex items-center justify-center gap-1.5 min-h-[48px] rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 active:scale-[0.98] transition-transform touch-manipulation"
        >
          <Calculator className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Leak Audit</span>
        </a>

        <a
          href="https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20book%20a%20Revenue%20Architecture%20Diagnosis."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 min-h-[48px] rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 shadow-md shadow-blue-500/25 active:scale-[0.98] transition-transform touch-manipulation"
        >
          <MessageSquare className="w-4 h-4 fill-current shrink-0" />
          <span>WhatsApp Founder</span>
        </a>
      </div>
    </div>
  );
}

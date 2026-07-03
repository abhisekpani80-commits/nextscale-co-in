"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const YoutubeIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
  </svg>
);

export function YoutubeComingSoon() {
  const [toast, setToast] = useState(false);
  return (
    <div className="relative inline-flex">
      <button
        onClick={() => { setToast(true); setTimeout(() => setToast(false), 2400); }}
        className="mt-6 h-11 gap-2 inline-flex items-center rounded-xl border px-5 text-sm font-semibold transition-all duration-200 hover:border-red-500/40 hover:text-red-400"
        style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)", background: "rgba(16,20,30,0.6)" }}
      >
        <YoutubeIcon className="size-4" style={{ color: "#ff4444" }} />
        Follow on YouTube
        <ArrowUpRight className="size-4" />
      </button>
      {toast && (
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1.5 text-[11px] font-semibold pointer-events-none z-50"
          style={{ background: "rgba(14,18,28,0.97)", border: "1px solid rgba(255,68,68,0.3)", color: "#ff6666", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          Coming Soon ✦
        </div>
      )}
    </div>
  );
}

"use client";

import React from "react";

export function MetricTape() {
  const items = [
    "Sub-Second Digital Front Doors",
    "24/7 Autonomous WhatsApp AI",
    "99/100 Google PageSpeed Rating",
    "Zero Code Vendor Lock-in",
    "7-Day Rapid Sprint Delivery",
    "Calendar Direct Booking Sync",
    "Revenue Leak Elimination",
    "Custom Next.js 16 + React 19 IP",
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-slate-200/80 bg-slate-50/60">
      <div className="flex select-none whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-4">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-slate-700">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}

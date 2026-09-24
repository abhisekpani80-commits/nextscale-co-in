"use client";

import React from "react";

export function MetricTape() {
  const items = [
    "Sub-Second Fast Websites",
    "24/7 WhatsApp AI Bot",
    "99/100 Google PageSpeed",
    "100% Full Code Ownership",
    "Guaranteed 7-Day Launch",
    "Direct Calendar Booking",
    "Zero Lost Customer Inquiries",
    "Modern High-Speed Technology",
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

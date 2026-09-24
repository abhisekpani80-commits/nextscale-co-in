const OUTCOMES = [
  "Fast & Sub-Second",
  "Zero Revenue Leaks",
  "24/7 WhatsApp AI Bot",
  "Frictionless Intake",
  "Systemized Growth",
  "Instant Calendar Booking",
  "100% Code Handover",
];

export function ClinicOutcomesMarquee() {
  return (
    <section
      className="w-full overflow-hidden relative py-3 bg-[#0d0d11] border-y border-white/[0.08] flex"
      aria-label="Key Outcomes Marquee"
    >
      <div className="flex items-center gap-8 whitespace-nowrap will-change-transform animate-[marqueeScroll_22s_linear_infinite]">
        {[...OUTCOMES, ...OUTCOMES].map((outcome, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 font-heading font-bold text-xs sm:text-[0.85rem] tracking-wider uppercase text-[#8e8e9c]"
          >
            <span>{outcome}</span>
            <span className="text-[#f97316] text-sm">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}

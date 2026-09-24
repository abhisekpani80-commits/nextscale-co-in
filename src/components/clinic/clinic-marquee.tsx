const OFFERINGS = [
  "Digital Front Doors",
  "Sub-Second Web Apps",
  "24/7 WhatsApp AI Bot",
  "Automated Back Office",
  "Google Local Map Domination",
  "Calendar CRM Sync",
  "High-Yield Copywriting",
  "Zero Code Vendor Lock-in",
];

export function ClinicMarquee() {
  return (
    <section
      className="w-full overflow-hidden relative py-4 bg-[#111116] border-y border-white/[0.08] flex"
      aria-label="Core Offerings Marquee"
    >
      {/* Side Fades */}
      <div className="absolute top-0 left-0 w-16 sm:w-28 h-full bg-gradient-to-r from-[#111116] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-28 h-full bg-gradient-to-l from-[#111116] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="flex items-center gap-10 whitespace-nowrap will-change-transform animate-[marqueeScroll_32s_linear_infinite] hover:[animation-play-state:paused]">
        {[...OFFERINGS, ...OFFERINGS].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-6 font-heading font-extrabold text-xs sm:text-sm uppercase tracking-widest text-white/90 select-none"
          >
            <span>{item}</span>
            <span
              className="w-3 h-3 inline-block bg-gradient-to-br from-[#ec4899] via-[#f97316] to-[#fbbf24]"
              style={{
                clipPath:
                  "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)",
              }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

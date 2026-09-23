"use client";

const ITEMS = [
  "Custom websites",
  "WhatsApp AI receptionists",
  "Local SEO",
  "Lead automation",
  "Booking systems",
  "CRM integration",
  "99/100 PageSpeed",
  "Founder-led delivery",
  "Bhubaneswar · IN",
  "Serving worldwide",
];

export function StudioMarquee() {
  const stream = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-hidden
      className="border-y overflow-hidden py-6 md:py-8"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-ink)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="marquee-neon">
        {stream.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-6 md:gap-10 px-6 md:px-10 shrink-0"
          >
            <span className="text-[22px] md:text-[34px] font-light tracking-tight text-[color:var(--color-text)]">
              {label}
            </span>
            <span
              className="text-[24px] md:text-[36px] leading-none"
              style={{ color: "var(--color-neon)", textShadow: "0 0 8px var(--color-neon-mid), 0 0 20px var(--color-neon-dim)" }}
            >
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

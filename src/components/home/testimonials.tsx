import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/site";

const QUOTE_ICON = () => (
  <svg
    viewBox="0 0 32 24"
    fill="none"
    className="size-7 shrink-0"
    aria-hidden
  >
    <path
      d="M0 24V14.4C0 9.6 1.6 5.6 4.8 2.4 8 .8 11.2 0 14.4 0v4.8C12 4.8 10 5.6 8.4 7.2 6.8 8.8 6 10.8 6 13.2h6V24H0zm18 0V14.4c0-4.8 1.6-8.8 4.8-12C25.6.8 28.8 0 32 0v4.8c-2.4 0-4.4.8-6 2.4-1.6 1.6-2.4 3.6-2.4 6H30V24H18z"
      fill="currentColor"
    />
  </svg>
);

// Map each testimonial to a subtle accent color
const ACCENTS = [
  { border: "rgba(39,208,237,0.15)", glow: "rgba(39,208,237,0.06)", icon: "#27d0ed" },
  { border: "rgba(167,139,250,0.15)", glow: "rgba(167,139,250,0.06)", icon: "#a78bfa" },
  { border: "rgba(224,64,251,0.15)", glow: "rgba(224,64,251,0.06)", icon: "#e040fb" },
];

export function Testimonials() {
  return (
    <section
      className="relative isolate overflow-hidden border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Top ambient glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[48rem] max-w-full -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "rgba(39,208,237,0.05)" }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-28">
        <SectionHeading
          kicker="Social proof"
          title={
            <>
              Clients who{" "}
              <span className="text-primary">saw results</span>, not just
              deliverables.
            </>
          }
          description="Real businesses. Real outcomes. Here's what they said."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:mt-14">
          {TESTIMONIALS.map((t, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={t.author} delay={i * 0.08} className="h-full">
                <figure
                  className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(14,18,28,0.7)",
                    border: `1px solid ${accent.border}`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Hover glow overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(ellipse at top, ${accent.glow} 0%, transparent 65%)`,
                    }}
                  />

                  {/* Quote icon */}
                  <div style={{ color: accent.icon, opacity: 0.6 }}>
                    <QUOTE_ICON />
                  </div>

                  {/* Quote text */}
                  <blockquote
                    className="relative flex-1 text-[15px] leading-relaxed tracking-[-0.01em]"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <figcaption
                    className="flex items-center gap-3 border-t pt-4"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    {/* Avatar initial circle */}
                    <div
                      className="flex size-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold"
                      style={{
                        background: accent.glow,
                        border: `1px solid ${accent.border}`,
                        color: accent.icon,
                      }}
                    >
                      {t.author[0]}
                    </div>
                    <div>
                      <div
                        className="text-[13px] font-semibold tracking-[-0.02em]"
                        style={{ color: "rgba(255,255,255,0.85)" }}
                      >
                        {t.author}
                      </div>
                      <div
                        className="text-[11px] tracking-[-0.01em]"
                        style={{ color: "rgba(255,255,255,0.30)" }}
                      >
                        {t.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

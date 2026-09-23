import { Reveal } from "@/components/ui/neon-reveal";
import { STATS } from "@/lib/site";

export function TrustStatement() {
  return (
    <section className="container-ns py-16 md:py-24" style={{ position: "relative", zIndex: 1 }}>
      <div className="neon-divider mb-16 md:mb-24" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-4">
          <Reveal>
            <div className="t-eyebrow flex items-center">
              <span className="neon-line" />
              What we build
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal delay={80}>
            <p
              className="text-[22px] md:text-[28px] leading-[1.35] tracking-[-0.015em]"
              style={{ color: "var(--color-text)", maxWidth: "760px" }}
            >
              We turn ambitious business ideas into digital experiences that work.
              Custom-built websites and AI receptionists — designed for the
              businesses that want to be taken seriously online.
            </p>
          </Reveal>

          {/* 4 positioning stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div
                  className="pt-6 border-t relative"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  {i === 0 && (
                    <span
                      aria-hidden
                      className="absolute -top-1.5 left-0 size-2 rounded-full"
                      style={{
                        background: "var(--color-neon)",
                        boxShadow: "0 0 0 0 var(--color-neon-mid)",
                        animation: "glow-ping 2.2s ease-out infinite",
                      }}
                    />
                  )}
                  <div
                    className="text-[28px] md:text-[34px] font-semibold tracking-tight"
                    style={{
                      color: i === 0 ? "var(--color-neon)" : "var(--color-text)",
                      textShadow:
                        i === 0
                          ? "0 0 8px var(--color-neon-mid)"
                          : "none",
                    }}
                  >
                    {s.value}
                    <span style={{ color: "inherit", fontWeight: 600 }}>
                      {s.suffix}
                    </span>
                  </div>
                  <div className="text-[12px] t-eyebrow mt-2">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

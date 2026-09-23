import { Target, Code2, MessageSquareHeart, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/neon-reveal";
import type { LucideIcon } from "lucide-react";

const POINTS: ({ n: string; title: string; body: string; icon: LucideIcon })[] = [
  {
    n: "01",
    title: "Business-first, not template-first",
    body: "Every project starts with how your business actually works. We design around real customers, real journeys, and the outcomes that matter to you.",
    icon: Target,
  },
  {
    n: "02",
    title: "Custom-built, never generic",
    body: "No themes, no page builders, no shortcuts. Your website and AI agent are written from scratch so they fit your business — not a template marketplace.",
    icon: Code2,
  },
  {
    n: "03",
    title: "Direct, clear communication",
    body: "You talk to the people building the product. No account managers, no junior hand-offs, no weekly decks. Replies within hours, not days.",
    icon: MessageSquareHeart,
  },
  {
    n: "04",
    title: "Modern technology, real value",
    body: "We pick the right tool for the job — not the trendiest. The result is faster, more reliable, and easier to maintain than off-the-shelf alternatives.",
    icon: Wrench,
  },
];

export function WhySection() {
  return (
    <section
      className="container-ns py-20 md:py-32"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="neon-divider mb-14 md:mb-20" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-14 md:mb-20">
        <div className="md:col-span-4">
          <Reveal>
            <div className="t-eyebrow flex items-center">
              <span className="neon-line" />
              Why NextScale
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal delay={80}>
            <h2 className="t-display text-[36px] md:text-[56px] lg:text-[64px] heading-glow">
              A small studio that takes your{" "}
              <span style={{ fontStyle: "italic", fontWeight: 300, color: "var(--color-neon)" }}>
                business
              </span>{" "}
              seriously.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* 2×2 grid */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid var(--color-line)" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.n} delay={i * 80}>
                <div
                  className="p-8 md:p-10 border-b md:border-b border-r last:border-r-0 md:[&:nth-child(2n)]:border-r-0 border-[color:var(--color-line)] transition-colors duration-300 hover:bg-[color:var(--color-card-hover)]"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="size-10 rounded-lg grid place-items-center shrink-0"
                      style={{
                        border: "1px solid var(--color-neon)",
                        boxShadow:
                          "0 0 10px var(--color-neon-dim), inset 0 0 8px rgba(0,245,255,0.04)",
                        background: "var(--color-card)",
                      }}
                      aria-hidden
                    >
                      <Icon
                        className="size-5"
                        strokeWidth={1.75}
                        style={{ color: "var(--color-neon)" }}
                      />
                    </div>
                    <span
                      className="font-mono text-[12px] tracking-wider"
                      style={{
                        color: "var(--color-neon)",
                        textShadow: "0 0 6px var(--color-neon-mid)",
                      }}
                    >
                      {p.n}
                    </span>
                  </div>
                  <h3 className="text-[22px] md:text-[24px] font-semibold tracking-tight mb-3">
                    {p.title}
                  </h3>
                  <p
                    className="text-[15px] md:text-[16px] leading-[1.65]"
                    style={{ color: "var(--color-text-mute)", maxWidth: "460px" }}
                  >
                    {p.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

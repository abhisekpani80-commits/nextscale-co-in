"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SystemVisualization } from "./system-visualization";
import { Reveal } from "@/components/ui/neon-reveal";

/** Text-to-image URL builder — prompt is URL-encoded at runtime. */
const tti = (prompt: string, size: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;

export const HERO_CONCEPT_IMAGE = tti(
  "Futuristic AI systems dashboard on pure black background, cyan neon circuit connections, holographic data visualization grid, cinematic lighting, minimal glowing UI panels, cyberpunk dark studio aesthetic, no text, cinematic 16:9 composition",
  "landscape_16_9"
);

export function PremiumHero() {
  return (
    <section
      className="relative pt-[120px] md:pt-[150px] pb-20 md:pb-28 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Scan-line overlay */}
      <div className="hero-scan" aria-hidden />

      <div className="container-ns">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <Reveal delay={0}>
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                {/* Neon dot with ping */}
                <span
                  className="relative inline-block size-2.5 rounded-full"
                  style={{ background: "var(--color-neon)" }}
                  aria-hidden
                >
                  <span
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ background: "var(--color-neon)", opacity: 0.6 }}
                  />
                </span>
                <span className="t-eyebrow">
                  Digital systems studio · Bhubaneswar · Worldwide
                </span>
              </div>
            </Reveal>

            {/* Headline — key word gets neon glow */}
            <Reveal delay={80}>
              <h1
                className="t-display text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] heading-glow mb-6 md:mb-8"
                style={{ maxWidth: "900px" }}
              >
                Digital systems built for your{" "}
                <span
                  className="relative"
                  style={{ color: "var(--color-neon)" }}
                >
                  <span
                    style={{
                      textShadow:
                        "0 0 12px var(--color-neon), 0 0 30px var(--color-neon-mid), 0 0 60px var(--color-neon-dim)",
                    }}
                  >
                    next stage
                  </span>
                </span>{" "}
                of growth.
              </h1>
            </Reveal>

            {/* Subhead */}
            <Reveal delay={160}>
              <p
                className="t-body text-[17px] md:text-[19px] mb-10 md:mb-12"
                style={{ maxWidth: "540px" }}
              >
                Custom websites and WhatsApp AI receptionists for businesses that
                want to look professional, work smarter, and grow faster.{" "}
                <span style={{ color: "var(--color-neon)", fontWeight: 500 }}>
                  Engineered, not generated.
                </span>
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="#contact" className="btn-neon-fill btn-pulse h-14 px-8 text-[15px]">
                  Start a project
                  <ArrowUpRight className="size-4" strokeWidth={2.5} />
                </Link>
                <Link href="#work" className="btn-ghost h-14 px-7 text-[15px]">
                  Explore our work
                  <ArrowRight className="size-4" strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>

            {/* Credibility strip — distinct from StudioMarquee keywords */}
            <Reveal delay={320}>
              <div
                className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-6 gap-y-3"
                style={{ color: "var(--color-text-dim)" }}
              >
                {["Live in 7 days", "100% code ownership", "Delivered worldwide"].map(
                  (item, i) => (
                    <span key={item} className="flex items-center gap-2">
                      {i > 0 && (
                        <span
                          className="size-1 rounded-full"
                          style={{ background: "var(--color-magenta)", boxShadow: "0 0 4px var(--color-magenta-glow)" }}
                          aria-hidden
                        />
                      )}
                      <span className="t-eyebrow" style={{ color: "var(--color-text-dim)" }}>
                        {item}
                      </span>
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          {/* Right — concept image + floating System visualization panel */}
          <div className="lg:col-span-5">
            <Reveal delay={200} direction="right">
              <div className="relative">
                {/* Hero concept image — full card */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px]"
                  style={{
                    border: "1px solid var(--color-line-hover)",
                    boxShadow:
                      "0 30px 80px rgba(0,0,0,0.8), 0 0 60px rgba(0,245,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={HERO_CONCEPT_IMAGE}
                    alt="NextScale AI systems concept visualization"
                    fetchPriority="high"
                    width={1280}
                    height={800}
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      background:
                        "radial-gradient(120% 80% at 50% 0%, rgba(0,245,255,0.12), transparent 60%), var(--color-card)",
                    }}
                  />
                  {/* LCP preload hint */}
                  <link rel="preload" as="image" href={HERO_CONCEPT_IMAGE} />
                  {/* Vignette + scan overlay */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.92) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "linear-gradient(rgba(0,245,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.06) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                      maskImage:
                        "radial-gradient(ellipse 110% 90% at 50% 30%, black 30%, transparent 85%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 110% 90% at 50% 30%, black 30%, transparent 85%)",
                      mixBlendMode: "screen",
                      opacity: 0.5,
                    }}
                  />
                  {/* Bottom hero label */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3 z-10">
                    <div>
                      <div className="t-eyebrow mb-1.5">Studio concept render</div>
                      <div className="text-[14px] md:text-[15px] leading-tight" style={{ color: "var(--color-text)" }}>
                        Engineered systems. Engineered{" "}
                        <span style={{ color: "var(--color-neon)", textShadow: "0 0 8px var(--color-neon-mid)" }}>
                          growth.
                        </span>
                      </div>
                    </div>
                    <div
                      className="hidden sm:flex items-center gap-2 px-3 h-8 rounded-full"
                      style={{
                        border: "1px solid var(--color-magenta)",
                        background: "rgba(255,45,120,0.08)",
                        boxShadow: "0 0 10px var(--color-magenta-dim)",
                      }}
                    >
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full"
                        style={{
                          background: "var(--color-magenta)",
                          boxShadow: "0 0 6px var(--color-magenta-glow)",
                        }}
                      />
                      <span className="t-eyebrow !text-[10px]" style={{ color: "var(--color-magenta)" }}>
                        Hero · Neon
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating console panel (SystemVisualization) on top */}
                <div
                  className="mt-5 md:mt-6 lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:pointer-events-none"
                  aria-hidden={false}
                >
                  <div
                    className="w-[92%] max-w-[480px] lg:scale-[0.78] lg:origin-center lg:translate-y-[2%] lg:shadow-[0_40px_120px_rgba(0,0,0,0.6)] pointer-events-auto"
                  >
                    <SystemVisualization />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

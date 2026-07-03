"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { waLink } from "@/lib/site";

const PERKS = [
  { icon: Zap, text: "Reply in < 1 hour" },
  { icon: Sparkles, text: "No long contracts" },
  { icon: ArrowRight, text: "First call is free" },
];

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      {/* Full bleed gradient glow behind section */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(39,208,237,0.07) 0%, rgba(167,139,250,0.05) 40%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24 lg:py-32">
        <Reveal>
          {/* Gradient border card */}
          <div
            className="relative overflow-hidden rounded-3xl p-px"
            style={{
              background:
                "linear-gradient(135deg, rgba(39,208,237,0.5) 0%, rgba(167,139,250,0.4) 40%, rgba(224,64,251,0.4) 100%)",
            }}
          >
            {/* Inner card */}
            <div
              className="relative overflow-hidden rounded-[23px] px-5 py-14 text-center sm:px-12 sm:py-20"
              style={{
                background:
                  "linear-gradient(160deg, rgba(14,18,28,0.99) 0%, rgba(10,12,20,1) 100%)",
              }}
            >
              {/* Radial top glow inside card */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-64"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(39,208,237,0.12) 0%, transparent 70%)",
                }}
              />
              {/* Subtle animated orbs */}
              <div
                className="pointer-events-none absolute -left-24 -top-24 size-64 rounded-full blur-3xl"
                style={{ background: "rgba(39,208,237,0.06)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full blur-3xl"
                style={{ background: "rgba(224,64,251,0.06)" }}
              />

              <div className="relative">
                {/* Eyebrow pill */}
                <div className="mb-6 flex justify-center">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em]"
                    style={{
                      background: "rgba(39,208,237,0.08)",
                      border: "1px solid rgba(39,208,237,0.2)",
                      color: "#27d0ed",
                    }}
                  >
                    <span
                      className="size-1.5 rounded-full animate-pulse"
                      style={{ background: "#27d0ed" }}
                    />
                    Available for new projects
                  </span>
                </div>

                {/* Headline */}
                <h2
                  className="mx-auto max-w-3xl text-balance font-bold leading-[1.0] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
                >
                  Let's build something{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #27d0ed 0%, #a78bfa 50%, #e040fb 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    the world notices.
                  </span>
                </h2>

                {/* Sub copy */}
                <p
                  className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed tracking-[-0.01em]"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  Whether you need an AI agent live in 48 hours or a website that converts — we ship fast, build premium, and measure success in your results.
                </p>

                {/* Perk pills */}
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  {PERKS.map((p) => (
                    <span
                      key={p.text}
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium tracking-[-0.01em]"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      <p.icon className="size-3 text-primary" />
                      {p.text}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-13 items-center justify-center gap-2 rounded-xl px-7 text-[14px] font-bold tracking-[-0.02em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(39,208,237,0.3)] active:scale-[0.98]"
                    style={{
                      background:
                        "linear-gradient(90deg, #27d0ed 0%, #a78bfa 100%)",
                      color: "#06080c",
                      height: "52px",
                    }}
                  >
                    <MessageCircle className="size-4 shrink-0" />
                    Start on WhatsApp
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-13 items-center justify-center gap-2 rounded-xl px-7 text-[14px] font-semibold tracking-[-0.02em] transition-all duration-300 hover:border-white/20 hover:bg-white/5 active:scale-[0.98]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                      height: "52px",
                    }}
                  >
                    Contact form
                  </Link>
                </div>

                {/* Footer micro-link */}
                <Link
                  href="/careers"
                  className="group mt-8 inline-flex items-center gap-1.5 text-[12px] tracking-[-0.01em] transition-colors hover:text-white/70"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Looking to join the team?{" "}
                  <span className="underline underline-offset-2">We're hiring</span>
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

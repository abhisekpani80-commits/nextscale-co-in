import Link from "next/link";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PRODUCTS, SERVICES } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ─── Colour tokens ────────────────────────────────────────────────────────── */

const PRIMARY = "#27d0ed";
const PURPLE = "#a78bfa";
const PINK = "#e040fb";

/* ─── Per-product design tokens ────────────────────────────────────────────── */

const productTokens: Record<
  string,
  {
    gradientFrom: string;
    gradientTo: string;
    glowColor: string;
    iconBg: string;
    iconColor: string;
    taglineFrom: string;
    taglineTo: string;
  }
> = {
  ExamOS: {
    gradientFrom: PRIMARY,
    gradientTo: PURPLE,
    glowColor: "rgba(39,208,237,0.18)",
    iconBg: "rgba(39,208,237,0.12)",
    iconColor: PRIMARY,
    taglineFrom: PRIMARY,
    taglineTo: PURPLE,
  },
  Aura: {
    gradientFrom: PURPLE,
    gradientTo: PINK,
    glowColor: "rgba(167,139,250,0.18)",
    iconBg: "rgba(224,64,251,0.12)",
    iconColor: PINK,
    taglineFrom: PURPLE,
    taglineTo: PINK,
  },
};

const defaultProductToken = {
  gradientFrom: PRIMARY,
  gradientTo: PURPLE,
  glowColor: "rgba(39,208,237,0.18)",
  iconBg: "rgba(39,208,237,0.12)",
  iconColor: PRIMARY,
  taglineFrom: PRIMARY,
  taglineTo: PURPLE,
};

/* ─── Status badge ──────────────────────────────────────────────────────────── */

const statusConfig: Record<
  string,
  { label: string; bg: string; color: string; ring: string; dot: string }
> = {
  Live: {
    label: "Live",
    bg: "rgba(34,197,94,0.10)",
    color: "#4ade80",
    ring: "rgba(34,197,94,0.25)",
    dot: "#4ade80",
  },
  Beta: {
    label: "Beta",
    bg: "rgba(39,208,237,0.10)",
    color: PRIMARY,
    ring: "rgba(39,208,237,0.25)",
    dot: PRIMARY,
  },
  "Coming Soon": {
    label: "Coming Soon",
    bg: "rgba(167,139,250,0.10)",
    color: PURPLE,
    ring: "rgba(167,139,250,0.25)",
    dot: PURPLE,
  },
};

/* ─── Service accent cycling ────────────────────────────────────────────────── */

const serviceAccents = [
  { iconBg: "rgba(39,208,237,0.10)", iconColor: PRIMARY, dot: PRIMARY },
  { iconBg: "rgba(167,139,250,0.10)", iconColor: PURPLE, dot: PURPLE },
  { iconBg: "rgba(224,64,251,0.10)", iconColor: PINK, dot: PINK },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */

export function ProductServiceSplit() {
  return (
    <section className="relative border-t border-border bg-grid">
      <div className="bg-radial-fade">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          {/* ── Section header ── */}
          <SectionHeading
            kicker="What we build"
            title={
              <>
                A product company that also{" "}
                <span style={{ color: PRIMARY }}>solves problems</span>.
              </>
            }
            description="We ship our own products and build digital infrastructure for businesses. Two engines, one team."
          />

          {/* ── Products ── */}
          <Reveal className="mt-16">
            <div className="mb-5 flex items-center justify-between">
              <h3
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Our products
              </h3>
              <Link
                href="/products"
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                style={{ color: PRIMARY }}
              >
                Explore all
                <ArrowRight
                  className="size-3 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {PRODUCTS.map((p) => {
                const tok = productTokens[p.name] ?? defaultProductToken;
                const badge = statusConfig[p.status] ?? statusConfig["Beta"];
                const Icon = p.icon;

                return (
                  <div
                    key={p.name}
                    className="group relative rounded-2xl p-px transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${tok.gradientFrom}, ${tok.gradientTo})`,
                    }}
                  >
                    {/* Inner card */}
                    <div
                      className="relative flex h-full flex-col rounded-[15px] p-6 transition-all duration-300 group-hover:-translate-y-1"
                      style={{
                        background: "rgba(14,18,28,0.97)",
                        boxShadow: `0 0 0 0 ${tok.glowColor}`,
                      }}
                    >
                      {/* Hover glow overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[15px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(400px circle at 50% 0%, ${tok.glowColor}, transparent 70%)`,
                        }}
                      />

                      {/* Top row: icon + badge */}
                      <div className="relative flex items-start justify-between">
                        {/* Icon glow circle */}
                        <div
                          className="flex size-12 items-center justify-center rounded-xl ring-1"
                          style={{
                            background: tok.iconBg,
                            color: tok.iconColor,
                            boxShadow: `0 0 0 1px ${tok.iconColor}30, 0 0 20px ${tok.glowColor}`,
                          }}
                        >
                          <Icon className="size-5" />
                        </div>

                        {/* Status badge */}
                        <span
                          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ring-1"
                          style={{
                            background: badge.bg,
                            color: badge.color,
                            boxShadow: `0 0 0 1px ${badge.ring}`,
                          }}
                        >
                          <span
                            className="inline-block size-1.5 rounded-full"
                            style={{ background: badge.dot }}
                          />
                          {badge.label}
                        </span>
                      </div>

                      {/* Product name */}
                      <h4
                        className="relative mt-5 font-heading text-2xl font-bold"
                        style={{ letterSpacing: "-0.04em", color: "#ffffff" }}
                      >
                        {p.name}
                      </h4>

                      {/* Tagline in gradient text */}
                      <p
                        className="relative mt-1 text-sm font-semibold"
                        style={{
                          background: `linear-gradient(90deg, ${tok.taglineFrom}, ${tok.taglineTo})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {p.tagline}
                      </p>

                      {/* Description */}
                      <p
                        className="relative mt-3 flex-1 text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.40)" }}
                      >
                        {p.description}
                      </p>

                      {/* Arrow CTA */}
                      <div className="relative mt-6">
                        <Link
                          href={p.href}
                          className="group/btn inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200"
                          style={{
                            background: `linear-gradient(135deg, ${tok.gradientFrom}18, ${tok.gradientTo}18)`,
                            color: tok.iconColor,
                            border: `1px solid ${tok.iconColor}25`,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          View product
                          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* ── Services ── */}
          <Reveal delay={0.08} className="mt-14">
            <div className="mb-5 flex items-center justify-between">
              <h3
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Our services
              </h3>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                style={{ color: PINK }}
              >
                View all
                <ArrowRight
                  className="size-3 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, idx) => {
                const accent = serviceAccents[idx % serviceAccents.length];
                const Icon = s.icon;

                return (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="group relative flex flex-col gap-4 rounded-2xl p-5 transition-all duration-300"
                    style={{
                      background: "rgba(14,18,28,0.80)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Hover border brightening — done via a pseudo element substitute */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        border: `1px solid ${accent.iconColor}35`,
                        inset: "-1px",
                      }}
                    />

                    {/* Subtle top glow on hover */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(300px circle at 50% -20%, ${accent.iconColor}10, transparent 70%)`,
                      }}
                    />

                    {/* Icon box + title row */}
                    <div className="relative flex items-center gap-3">
                      <div
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: accent.iconBg,
                          color: accent.iconColor,
                          boxShadow: `0 0 0 1px ${accent.iconColor}25`,
                        }}
                      >
                        <Icon className="size-4.5" />
                      </div>
                      <h4
                        className="font-heading text-base font-semibold text-white"
                        style={{ letterSpacing: "-0.03em" }}
                      >
                        {s.name}
                      </h4>
                      <ArrowUpRight
                        className="ml-auto size-4 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        style={{ color: accent.iconColor }}
                      />
                    </div>

                    {/* Description */}
                    <p
                      className="relative text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {s.description}
                    </p>

                    {/* Bullet points */}
                    <ul className="relative mt-auto flex flex-col gap-2">
                      {s.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center gap-2 text-xs"
                          style={{ color: "rgba(255,255,255,0.50)" }}
                        >
                          <span
                            className="inline-flex size-1.5 shrink-0 rounded-full"
                            style={{ background: accent.dot }}
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

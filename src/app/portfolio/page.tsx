"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";
import { PORTFOLIO, STATS } from "@/lib/site";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Websites", "AI Agents", "Products", "Digital Growth"] as const;
type Filter = (typeof FILTERS)[number];

const INITIAL_COUNT = 6;

const categoryColor: Record<string, string> = {
  Websites: "rgba(39, 208, 237, 0.15)",
  "AI Agents": "rgba(224, 64, 251, 0.15)",
  Products: "rgba(99, 255, 180, 0.15)",
  "Digital Growth": "rgba(255, 186, 73, 0.15)",
};
const categoryTextColor: Record<string, string> = {
  Websites: "#27d0ed",
  "AI Agents": "#e040fb",
  Products: "#63ffb4",
  "Digital Growth": "#ffba49",
};

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = PORTFOLIO.filter(
    (p) => active === "All" || p.category === active
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  // Reset showAll when filter changes
  const handleFilter = (f: Filter) => {
    setActive(f);
    setShowAll(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-20">
        <DotGridBackdrop />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[38rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <SectionHeading
            align="center"
            kicker="Portfolio"
            title={<>Real projects. <span className="text-primary">Real results.</span></>}
            description="Every website, AI agent and product we've shipped — across clinics, real estate, photography and beyond."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="font-heading text-2xl font-semibold text-primary">{s.value}{s.suffix}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap gap-2 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-200",
                active === f
                  ? "border-primary bg-primary/15 text-primary shadow-[0_0_16px_rgba(39,208,237,0.15)]"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => {
            const bgColor = categoryColor[item.category] ?? "rgba(39,208,237,0.1)";
            const textColor = categoryTextColor[item.category] ?? "#27d0ed";

            const CardWrapper = item.liveUrl
              ? ({ children }: { children: React.ReactNode }) => (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {children}
                  </div>
                );

            return (
              <CardWrapper key={`${item.title}-${item.category}-${i}`}>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider backdrop-blur-sm border"
                      style={{
                        background: bgColor,
                        color: textColor,
                        borderColor: `${textColor}30`,
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Demo badge */}
                  {item.isDemo && (
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-white/10 border border-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/70 backdrop-blur-sm">
                        Demo
                      </span>
                    </div>
                  )}

                  {/* Live URL arrow overlay */}
                  {item.liveUrl && (
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center justify-center size-8 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm">
                        <ArrowUpRight className="size-4 text-white" />
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>
                    {item.liveUrl && (
                      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-0.5" />
                    )}
                  </div>

                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/70">
                    {item.clientType}
                  </p>

                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.built}
                  </p>

                  {item.result && (
                    <div className="mt-1 flex items-center gap-1.5 rounded-lg w-fit px-2.5 py-1.5 border"
                      style={{
                        background: "rgba(39,208,237,0.06)",
                        borderColor: "rgba(39,208,237,0.15)",
                      }}
                    >
                      <TrendingUp className="size-3 text-primary shrink-0" />
                      <span className="text-[11px] font-semibold text-primary">{item.result}</span>
                    </div>
                  )}
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* View All / Show Less */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="group flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground backdrop-blur transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_20px_rgba(39,208,237,0.1)]"
            >
              {showAll ? (
                <>
                  Show less
                  <ChevronUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  View all {filtered.length} projects
                  <ChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-primary/15 bg-primary/5 p-10 text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(39,208,237,0.08),transparent_70%)]" />
          <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">Want this for your business?</p>
          <h3 className="relative font-heading text-2xl font-semibold mb-4">
            Let's build something you're proud of.
          </h3>
          <p className="relative text-muted-foreground mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Website, AI agent, or full digital setup — we ship in days, not months.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(39,208,237,0.3)] active:scale-[0.98]"
          >
            Start a project <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

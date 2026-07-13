"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { PORTFOLIO, STATS } from "@/lib/site";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Websites", "AI Agents", "Products", "Digital Growth"] as const;
type Filter = (typeof FILTERS)[number];

const INITIAL_COUNT = 6;

// Compliant, high-contrast category theme mapping
const categoryColor: Record<string, string> = {
  Websites: "rgba(26, 86, 219, 0.08)",
  "AI Agents": "rgba(112, 43, 222, 0.08)",
  Products: "rgba(11, 122, 86, 0.08)",
  "Digital Growth": "rgba(180, 83, 9, 0.08)",
};
const categoryTextColor: Record<string, string> = {
  Websites: "#1A56DB",
  "AI Agents": "#702BDE",
  Products: "#0B7A56",
  "Digital Growth": "#B45309",
};

export default function PortfolioPage() {
  const [active, setActive] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = PORTFOLIO.filter(
    (p) => active === "All" || p.category === active
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const handleFilter = (f: Filter) => {
    setActive(f);
    setShowAll(false);
  };

  return (
    <>
      <PageHero
        kicker="Portfolio"
        title={<>Real projects. <span className="text-primary">Real results.</span></>}
        description="Every website, AI agent and product we've shipped — across clinics, real estate, photography and beyond."
      />

      {/* Stats */}
      <section className="border-b border-[#E8E6E1] bg-[#F4F3F0]">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="font-heading text-2xl font-semibold text-[#1A56DB]">{s.value}{s.suffix}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B6860]">{s.label}</span>
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
                  ? "border-[#1A56DB] bg-blue-50 text-[#1A56DB] shadow-sm"
                  : "border-[#E8E6E1] text-[#6B6860] hover:border-[#1A56DB]/40 hover:text-[#0F0E0D]"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => {
            const bgColor = categoryColor[item.category] ?? "rgba(26, 86, 219, 0.08)";
            const textColor = categoryTextColor[item.category] ?? "#1A56DB";
            const cardClass = "group relative flex flex-col overflow-hidden rounded-2xl border border-[#E8E6E1] bg-white transition-all duration-300 hover:border-[#1A56DB]/30 hover:shadow-md hover:-translate-y-1";

            const cardInner = (
              <>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider border shadow-sm"
                      style={{
                        background: "#FFFFFF",
                        color: textColor,
                        borderColor: "#E8E6E1",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Demo badge */}
                  {item.isDemo && (
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-black/60 border border-white/20 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-sm">
                        Demo
                      </span>
                    </div>
                  )}

                  {/* Live URL / Case Study arrow overlay */}
                  {(item.liveUrl || item.slug) && (
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center justify-center size-8 rounded-full bg-white/95 border border-[#E8E6E1] shadow-sm">
                        <ArrowUpRight className="size-4 text-[#0F0E0D]" />
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-5 flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-base font-semibold leading-snug text-[#0F0E0D] transition-colors duration-300 group-hover:text-[#1A56DB]">
                        {item.title}
                      </h3>
                      {(item.liveUrl || item.slug) && (
                        <ArrowUpRight className="size-4 shrink-0 text-[#6B6860] transition-all duration-300 group-hover:text-[#1A56DB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-0.5" />
                      )}
                    </div>

                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#6B6860] mt-1 mb-2">
                      {item.clientType}
                    </p>

                    <p className="text-sm text-[#6B6860] leading-relaxed">
                      {item.built}
                    </p>
                  </div>

                  {item.result && (
                    <div className="mt-4 flex items-center gap-1.5 rounded-lg w-fit px-2.5 py-1.5 border border-emerald-100 bg-emerald-50/50"
                    >
                      <TrendingUp className="size-3 text-[#0B7A56] shrink-0" />
                      <span className="text-[11px] font-semibold text-[#0B7A56]">{item.result}</span>
                    </div>
                  )}
                </div>
              </>
            );

            if (item.slug) {
              return (
                <Reveal key={`${item.title}-${item.category}-${i}`} delay={i * 0.05}>
                  <Link href={`/case-studies/${item.slug}`} className={cardClass}>
                    {cardInner}
                  </Link>
                </Reveal>
              );
            }

            if (item.isDemo && item.liveUrl) {
              return (
                <Reveal key={`${item.title}-${item.category}-${i}`} delay={i * 0.05}>
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {cardInner}
                  </a>
                </Reveal>
              );
            }

            return (
              <Reveal key={`${item.title}-${item.category}-${i}`} delay={i * 0.05}>
                <div className={cardClass}>
                  {cardInner}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* View All / Show Less */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="group flex items-center gap-2 rounded-full border border-[#E8E6E1] bg-white px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-[#6B6860] transition-all duration-300 hover:border-[#1A56DB] hover:text-[#1A56DB]"
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
        <div className="mt-20 rounded-3xl border border-[#E8E6E1] bg-white p-10 text-center relative overflow-hidden shadow-sm">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.03),transparent_70%)]" />
          <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Want this for your business?</p>
          <h3 className="relative font-heading text-2xl font-semibold mb-4 text-[#0F0E0D]">
            Let's build something you're proud of.
          </h3>
          <p className="relative text-[#6B6860] mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Website, AI agent, or full digital setup — we ship in days, not months.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-sm"
          >
            Start a project <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

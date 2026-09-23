"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { PORTFOLIO, STATS, waLink } from "@/lib/site";

const FILTERS = ["All", "Websites", "AI Agents", "Products", "Digital Growth"] as const;
type Filter = (typeof FILTERS)[number];

const INITIAL_COUNT = 6;

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
    <div className="bg-white min-h-screen text-slate-900">
      <PageHero
        kicker="Work & Portfolio"
        title={<>Real projects. <span className="text-blue-600">Verified outcomes.</span></>}
        description="Every website, AI agent, and product we have shipped — across clinics, real estate, photography, edtech, and local businesses."
      />

      {/* Stats Bar */}
      <section className="border-b border-slate-200 bg-slate-50/70 px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-slate-200 pl-4 first:border-l-0 first:pl-0 sm:pl-8">
                <div className="font-heading text-4xl font-extrabold leading-none tracking-tight sm:text-5xl text-slate-900">
                  {s.value}<span className="text-blue-600">{s.suffix}</span>
                </div>
                <div className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          
          {/* Interactive Filter Tabs */}
          <div className="mb-12 flex flex-wrap gap-2.5 justify-center">
            {FILTERS.map((f) => {
              const count = f === "All" ? PORTFOLIO.length : PORTFOLIO.filter((p) => p.category === f).length;
              const isSelected = active === f;

              return (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-sm -translate-y-0.5"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span>{f}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[0.65rem] font-bold ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Card Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => {
              const cardClass = "group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg";

              const cardInner = (
                <>
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-blue-700 shadow-xs">
                        {item.category}
                      </span>
                    </div>

                    {/* Demo Badge */}
                    {item.isDemo && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="rounded-full bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-wider text-white">
                          Demo Site
                        </span>
                      </div>
                    )}

                    {/* Arrow Indicator Overlay */}
                    {(item.liveUrl || item.slug) && (
                      <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="flex size-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        {(item.liveUrl || item.slug) && (
                          <ArrowUpRight className="size-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
                        )}
                      </div>

                      <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {item.clientType}
                      </p>

                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {item.built}
                      </p>
                    </div>

                    {item.result && (
                      <div className="mt-5 flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 w-fit">
                        <TrendingUp className="size-3.5 text-emerald-700 shrink-0" />
                        <span className="font-mono text-xs font-bold uppercase text-emerald-800">
                          {item.result}
                        </span>
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

          {/* View All / Show Less Button */}
          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-slate-800 transition"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="size-4" />
                  </>
                ) : (
                  <>
                    View All {filtered.length} Projects <ChevronDown className="size-4" />
                  </>
                )}
              </button>
            </div>
          )}

          {/* Bottom CTA Card */}
          <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-14 text-center text-white shadow-xl shadow-blue-900/10">
            <Reveal>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                Want results like this?
              </span>
              <h3 className="mt-3 font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl text-white">
                Let&apos;s build yours next.
              </h3>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-300">
                Website, AI receptionist, or full digital growth setup — shipped in days, not months.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={waLink("Hi Next Scale! I saw your portfolio and want to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5"
                >
                  Start a project <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

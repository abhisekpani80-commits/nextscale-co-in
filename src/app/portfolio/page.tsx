"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, TrendingUp, ChevronDown, ChevronUp, Sparkles, Filter as FilterIcon } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { PORTFOLIO, STATS, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Websites", "AI Agents", "Products", "Digital Growth"] as const;
type Filter = (typeof FILTERS)[number];

const INITIAL_COUNT = 6;

const categoryColors: Record<string, string> = {
  Websites: "#FFB7C5",
  "AI Agents": "#9DD9FF",
  Products: "#B8E986",
  "Digital Growth": "#FFC72E",
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
        kicker="Work & Portfolio"
        title={<>Real projects. <span className="text-[#FF4D00]">Verified outcomes.</span></>}
        description="Every website, AI agent, and product we have shipped — across clinics, real estate, photography, edtech, and local businesses."
      />

      {/* Stats Bar */}
      <section className="border-b-2 border-[#141414] bg-[#FFC72E] px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="border-l-2 border-[#141414] pl-4 first:border-l-0 first:pl-0 sm:pl-8">
                <div className="font-display text-4xl font-black leading-none tracking-[-0.08em] sm:text-6xl text-[#141414]">
                  {s.value}{s.suffix}
                </div>
                <div className="mt-2 font-display text-xs font-black uppercase tracking-[0.1em] text-[#141414]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF3E5] px-5 py-16 sm:px-8 sm:py-24">
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
                  className={`flex items-center gap-2 rounded-full border-2 border-[#141414] px-4 py-2 font-display text-xs font-black uppercase transition-all ${
                    isSelected
                      ? "bg-[#141414] text-[#FAF3E5] shadow-[3px_3px_0_#FF4D00] -translate-y-0.5"
                      : "bg-[#FFFCF5] text-[#141414] hover:bg-[#FFC72E] shadow-[2px_2px_0_#141414]"
                  }`}
                >
                  <span>{f}</span>
                  <span className={`rounded-full px-2 py-0.2 font-display text-[0.6rem] font-black ${
                    isSelected ? "bg-[#FF4D00] text-white" : "bg-[#141414]/10 text-[#141414]"
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
              const categoryBg = categoryColors[item.category] ?? "#FFFCF5";
              const cardClass = "group relative flex flex-col overflow-hidden rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] shadow-[5px_5px_0_#141414] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[7px_7px_0_#FF4D00]";

              const cardInner = (
                <>
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden border-b-2 border-[#141414] bg-[#141414]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        style={{ backgroundColor: categoryBg }}
                        className="rounded-full border-2 border-[#141414] px-3 py-1 font-display text-[0.65rem] font-black uppercase text-[#141414] shadow-[2px_2px_0_#141414]"
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Demo Badge */}
                    {item.isDemo && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="rounded-full border-2 border-[#141414] bg-[#141414] px-2.5 py-1 font-display text-[0.6rem] font-black uppercase text-[#FAF3E5]">
                          Demo Site
                        </span>
                      </div>
                    )}

                    {/* Arrow Indicator Overlay */}
                    {(item.liveUrl || item.slug) && (
                      <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="flex size-9 items-center justify-center rounded-full border-2 border-[#141414] bg-[#FF4D00] text-white shadow-[2px_2px_0_#141414]">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-2xl font-black uppercase leading-none tracking-[-0.05em] text-[#141414] group-hover:text-[#FF4D00] transition-colors">
                          {item.title}
                        </h3>
                        {(item.liveUrl || item.slug) && (
                          <ArrowUpRight className="size-4 shrink-0 text-[#141414] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        )}
                      </div>

                      <p className="mt-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-[#5B5146]">
                        {item.clientType}
                      </p>

                      <p className="mt-3 text-sm font-medium leading-6 text-[#5B5146]">
                        {item.built}
                      </p>
                    </div>

                    {item.result && (
                      <div className="mt-5 flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#B8E986] px-3.5 py-1.5 w-fit shadow-[2px_2px_0_#141414]">
                        <TrendingUp className="size-3.5 text-[#141414] shrink-0" />
                        <span className="font-display text-xs font-black uppercase text-[#141414]">
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
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FFFCF5] px-6 py-3 font-display text-xs font-black uppercase text-[#141414] shadow-[4px_4px_0_#141414] transition hover:-translate-y-0.5 hover:bg-[#FFC72E]"
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
          <div className="mt-20 rounded-3xl border-2 border-[#141414] bg-[#141414] p-8 sm:p-14 text-center text-[#FAF3E5] shadow-[8px_8px_0_#FF4D00]">
            <Reveal>
              <span className="font-display text-xs font-black uppercase tracking-[0.16em] text-[#FFC72E]">
                Want results like this?
              </span>
              <h3 className="mt-3 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl">
                Let&apos;s build yours next.
              </h3>
              <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#FAF3E5]/70">
                Website, AI receptionist, or full digital growth setup — shipped in days, not months.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={waLink("Hi Next Scale! I saw your portfolio and want to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#FAF3E5] bg-[#FAF3E5] px-6 py-3.5 font-display text-xs font-black uppercase text-[#141414] shadow-[4px_4px_0_#FF4D00] transition hover:-translate-y-1 hover:bg-[#FFC72E]"
                >
                  Start a project <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

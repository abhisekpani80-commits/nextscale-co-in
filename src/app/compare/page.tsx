import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Check, X, ShieldCheck, ArrowRight } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { COMPARISONS_DATA, waLink } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Balanced Tech & Agency Comparisons — Next Scale",
  description: "Evidence-based comparisons: Next Scale vs traditional web development agencies, and AI automation vs manual workflows.",
  path: "/compare",
});

export default function ComparePage() {
  const reviewDate = "2026-07-01";

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-24">
      <PageHero
        kicker="Comparisons"
        title={<>Evidence-based <span className="text-blue-600">software &amp; workflow comparisons</span>.</>}
        description="We audit tech architectures and workflow efficiency metrics to help growing businesses make correct decisions."
      />

      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-20 flex flex-col gap-20">
        
        {/* Verification banner */}
        <section className="bg-white border border-slate-200 p-5 rounded-2xl shadow-xs flex items-center justify-between text-xs text-slate-600 font-semibold">
          <span>Last reviewed: {reviewDate} by Abhisek Pani</span>
          <span className="text-emerald-600 flex items-center gap-1">
            <ShieldCheck className="size-3.5" /> Checked &amp; Verified
          </span>
        </section>

        {/* Comparisons list */}
        <div className="flex flex-col gap-12">
          {COMPARISONS_DATA.map((comp, idx) => (
            <Reveal key={comp.slug} delay={idx * 0.1}>
              <section className="bg-white border border-slate-200 p-8 rounded-3xl shadow-xs flex flex-col gap-6">
                <div>
                  <h2 className="font-heading text-xl font-bold text-slate-900">
                    {comp.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2">
                    {comp.summary}
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 mt-2">
                  {/* Pros list */}
                  <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-1.5">
                      <Check className="size-4" strokeWidth={2.5} /> Advantages
                    </h3>
                    <ul className="flex flex-col gap-2 text-xs font-semibold text-emerald-700">
                      {comp.pros.map((p, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="mt-1 size-1 shrink-0 rounded-full bg-emerald-600" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons list */}
                  <div className="bg-red-50 border border-red-200 p-5 rounded-2xl">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-red-800 mb-3 flex items-center gap-1.5">
                      <X className="size-4" strokeWidth={2.5} /> Limitations
                    </h3>
                    <ul className="flex flex-col gap-2 text-xs font-semibold text-red-700">
                      {comp.cons.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="mt-1 size-1 shrink-0 rounded-full bg-red-600" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verdict */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl mt-2 text-xs leading-relaxed text-slate-600">
                  <strong className="text-slate-900 uppercase font-mono tracking-wider block mb-1">Our Verdict:</strong>
                  {comp.verdict}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* Global CTA block */}
        <section className="text-center mt-8 border-t border-slate-200 pt-12">
          <p className="text-xs text-slate-600 mb-6">
            Have questions about migrating from legacy CMS systems (like WordPress) or setting up custom software automations?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink("Hi Abhisek! I would like to consult about replacing traditional agency setup with your modern software / AI solutions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 px-8 text-base font-bold shadow-md hover:scale-[1.02] transition-all duration-200"
            >
              Start your consultation <ArrowRight className="size-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 px-8 text-base font-bold shadow-xs transition-all duration-200"
            >
              Explore Pricing <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 px-8 text-base font-bold shadow-xs transition-all duration-200"
            >
              Our Services <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}

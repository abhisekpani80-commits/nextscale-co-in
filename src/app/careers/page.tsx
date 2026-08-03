import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Users, Sparkles, Check, Zap } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ROLES, WHY_JOIN, PROCESS_STEPS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers — Join Next Scale",
  description:
    "100% work-from-home roles in sales, development, content, AI, video editing, and SEO. Remote-first, outcome-driven team.",
  path: "/careers",
  keywords: ["remote jobs India", "work from home developer jobs", "sales rep remote India", "AI builder jobs"],
});

export default function CareersPage() {
  const totalOpenings = ROLES.reduce((a, r) => a + r.openings, 0);

  return (
    <>
      <PageHero
        kicker="Careers & Roles"
        title={<>Work from home. <span className="text-[#FF4D00]">Build real things.</span></>}
        description="100% remote. Flexible hours. Fair compensation discussed personally on a call — we match numbers to people, not rigid corporate tiers."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#141414] bg-[#B8E986] px-3.5 py-1.5 font-display text-xs font-black uppercase text-[#141414] shadow-[3px_3px_0_#141414]">
            <Home className="size-3.5" /> 100% Work From Home
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#141414] bg-[#FFC72E] px-3.5 py-1.5 font-display text-xs font-black uppercase text-[#141414] shadow-[3px_3px_0_#141414]">
            <Users className="size-3.5" /> {totalOpenings}+ Open Positions
          </span>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 flex flex-col gap-24">

        {/* Why join */}
        <div>
          <Reveal>
            <p className="section-label mb-3">Why join us</p>
            <h2 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl text-[#141414] mb-8">
              No corporate fog. Just speed &amp; growth.
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_JOIN.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="flex flex-col justify-between rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[5px_5px_0_#141414] transition hover:-translate-y-1">
                  <div className="flex size-12 items-center justify-center rounded-xl border-2 border-[#141414] bg-[#FFC72E]">
                    <w.icon className="size-6 text-[#141414]" />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-display text-xl font-black uppercase text-[#141414]">{w.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#5B5146]">{w.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Open roles */}
        <div>
          <Reveal>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="section-label">Current Openings</p>
                <h2 className="mt-2 font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl text-[#141414]">
                  Pick your role.
                </h2>
              </div>
              <span className="hidden font-display text-xs font-black uppercase tracking-[0.1em] text-[#5B5146] sm:block">
                Compensation discussed on call
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.06}>
                <article className="group rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0_#141414] transition duration-200 hover:-translate-y-1">
                  {/* Role Header */}
                  <div className="flex flex-col gap-4 border-b-2 border-[#141414] pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-2xl font-black uppercase tracking-[-0.04em] text-[#141414]">
                          {role.title}
                        </h3>
                        <span className="rounded-full border border-[#141414] bg-[#B8E986] px-3 py-1 font-display text-[0.65rem] font-black uppercase text-[#141414]">
                          {role.status}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="font-display text-xs font-bold uppercase text-[#5B5146]">{role.type}</span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#141414] bg-[#9DD9FF] px-2.5 py-0.5 font-display text-[0.65rem] font-black uppercase text-[#141414]">
                          <Users className="size-3" /> {role.openings} openings
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[#5B5146]">{role.description}</p>
                    </div>

                    {role.status === "Open" && (
                      <div className="shrink-0 sm:text-right">
                        <Link
                          href={`/careers/apply?role=${role.slug}`}
                          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#141414] px-6 py-3 font-display text-xs font-black uppercase text-[#FAF3E5] shadow-[3px_3px_0_#FF4D00] transition hover:bg-[#FF4D00]"
                        >
                          Apply Now <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Details Grid */}
                  <div className="grid gap-6 pt-6 sm:grid-cols-3">
                    {/* What we need */}
                    <div>
                      <p className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#141414] mb-3">
                        What We Need
                      </p>
                      <ul className="space-y-2">
                        {role.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-xs font-medium text-[#5B5146]">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-[#FF4D00]" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What we expect */}
                    <div>
                      <p className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#141414] mb-3">
                        What We Expect
                      </p>
                      <ul className="space-y-2">
                        {role.expect.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-xs font-medium text-[#5B5146]">
                            <Zap className="mt-0.5 size-3.5 shrink-0 text-[#FFC72E]" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What you get */}
                    <div>
                      <p className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#141414] mb-3">
                        What You Get
                      </p>
                      <ul className="space-y-2">
                        {role.perks.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-xs font-medium text-[#5B5146]">
                            <Sparkles className="mt-0.5 size-3.5 shrink-0 text-[#B8E986]" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <Reveal>
            <p className="section-label mb-2">Hiring Process</p>
            <h2 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.06em] sm:text-5xl text-[#141414] mb-10">
              4 Steps to Join.
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-5 shadow-[4px_4px_0_#141414]">
                  <span className="font-display text-5xl font-black text-[#FF4D00]">{step.step}</span>
                  <h4 className="mt-4 font-display text-lg font-black uppercase text-[#141414]">{step.title}</h4>
                  <p className="mt-2 text-xs font-medium leading-5 text-[#5B5146]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="bg-[#141414] rounded-3xl p-8 sm:p-14 text-center text-[#FAF3E5] border-2 border-[#141414] shadow-[8px_8px_0_#FF4D00]">
          <Reveal>
            <span className="font-display text-xs font-black uppercase tracking-[0.16em] text-[#FFC72E]">
              Ready to build?
            </span>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] sm:text-7xl">
              Apply in 2 minutes.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#FAF3E5]/70">
              No 10-page application forms. Tell us who you are, share your best work, and let&apos;s talk.
            </p>
            <div className="mt-7">
              <Link
                href="/careers/apply"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#FAF3E5] bg-[#FAF3E5] px-7 py-3.5 font-display text-xs font-black uppercase text-[#141414] shadow-[4px_4px_0_#FF4D00] transition hover:-translate-y-1 hover:bg-[#FFC72E]"
              >
                Apply Now <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Users, Sparkles, Check, Zap } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ROLES, WHY_JOIN, PROCESS_STEPS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers — Join Next Scale Labs",
  description:
    "100% remote engineering, AI agent development, growth, and creative roles at Next Scale. Build modern Next.js 16 systems and conversational LLMs.",
  path: "/careers",
  keywords: ["remote AI developer jobs", "Next.js jobs remote", "AI agent engineer India", "growth partner jobs remote"],
});

export default function CareersPage() {
  const totalOpenings = ROLES.reduce((a, r) => a + r.openings, 0);

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <PageHero
        kicker="Careers & Core Team"
        title={<>Work from anywhere. <span className="text-blue-600">Build AI that ships.</span></>}
        description="We are a lean, engineer-led startup studio. Zero corporate bureaucracy, zero pointless meetings. You work directly with founders, ship real products in 7-day sprints, and get compensated fairly."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-700">
            <Home className="size-3.5" /> 100% Remote / WFH
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-700">
            <Users className="size-3.5" /> {totalOpenings} Active Openings (Hiring Now)
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 font-mono text-xs font-semibold text-blue-700">
            <Zap className="size-3.5" /> 48h Application Response
          </span>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 flex flex-col gap-24">

        {/* Why join */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-3">Why join us</p>
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-4xl text-slate-900 mb-8">
              No corporate fog. Just speed &amp; growth.
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_JOIN.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    <w.icon className="size-6" />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-heading text-lg font-bold text-slate-900">{w.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{w.description}</p>
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
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-2">Current Openings</p>
                <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-4xl text-slate-900">
                  Pick your role.
                </h2>
              </div>
              <span className="hidden font-mono text-xs font-semibold text-slate-500 sm:block">
                Competitive compensation + performance equity
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.06}>
                <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md">
                  {/* Role Header */}
                  <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
                          {role.title}
                        </h3>
                        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase text-emerald-800">
                          {role.status}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs font-semibold text-slate-500">{role.type}</span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 font-mono text-[0.65rem] font-bold uppercase text-blue-700">
                          <Users className="size-3" /> {role.openings} {role.openings === 1 ? "Spot Open" : "Spots Open"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{role.description}</p>
                    </div>

                    {role.status === "Open" && (
                      <div className="shrink-0 sm:text-right">
                        <Link
                          href={`/careers/apply?role=${role.slug}`}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:-translate-y-0.5"
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
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-900 mb-3">
                        What We Need
                      </p>
                      <ul className="space-y-2">
                        {role.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What we expect */}
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-900 mb-3">
                        What We Expect
                      </p>
                      <ul className="space-y-2">
                        {role.expect.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                            <Zap className="mt-0.5 size-3.5 shrink-0 text-blue-600" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What you get */}
                    <div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-900 mb-3">
                        What You Get
                      </p>
                      <ul className="space-y-2">
                        {role.perks.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                            <Sparkles className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 font-semibold mb-2">Hiring Process</p>
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-4xl text-slate-900 mb-10">
              4 Steps to Join.
            </h2>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                  <span className="font-heading text-4xl font-extrabold text-blue-600">{step.step}</span>
                  <h4 className="mt-4 font-heading text-base font-bold uppercase text-slate-900">{step.title}</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-center text-white border border-slate-800 shadow-xl shadow-blue-900/10">
          <Reveal>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
              Ready to build?
            </span>
            <h2 className="mt-3 font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl text-white">
              Apply in 2 minutes.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-300">
              No 10-page application forms. Tell us who you are, share your best work, and let&apos;s talk.
            </p>
            <div className="mt-7">
              <Link
                href="/careers/apply"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:-translate-y-0.5"
              >
                Apply Now <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Users } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { ROLES, WHY_JOIN, PROCESS_STEPS } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers — Join Nextscale",
  description: "100% work-from-home roles in sales, development, content, AI, video editing and SEO. Compensation discussed on a call.",
};

export default function CareersPage() {
  const totalOpenings = ROLES.reduce((a, r) => a + r.openings, 0);

  return (
    <>
      <PageHero
        kicker="Careers"
        title={<>Work from home. <span className="text-primary">Build something real.</span></>}
        description="100% remote. Flexible hours. Compensation is discussed personally on a call — we match the right number to the right person."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E6E1] bg-white px-3 py-1.5 text-[12px] font-medium text-[#6B6860]">
            <Home className="size-3.5 text-[#1A56DB]" /> 100% Work From Home
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E6E1] bg-white px-3 py-1.5 text-[12px] font-medium text-[#6B6860]">
            <Users className="size-3.5 text-[#1A56DB]" /> {totalOpenings}+ open positions
          </span>
        </div>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 flex flex-col gap-24">

        {/* Why join */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-8">Why join us</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_JOIN.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="flex gap-4 rounded-xl border border-[#E8E6E1] bg-white p-5 shadow-sm">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-[#1A56DB]">
                    <w.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-[#0F0E0D]">{w.title}</h3>
                    <p className="mt-1 text-xs text-[#6B6860] leading-relaxed">{w.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Open roles */}
        <div>
          <Reveal>
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB]">Open roles</p>
              <p className="mt-2 text-sm text-[#6B6860]">Salary &amp; compensation is discussed personally on a call — we match numbers to people, not job titles.</p>
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.06}>
                <TiltCard intensity={3}>
                  <div className="group rounded-2xl border border-[#E8E6E1] bg-white shadow-sm hover:border-[#1A56DB]/30 transition-all duration-300 overflow-hidden">
                    {/* Card header */}
                    <div className="flex flex-col gap-4 p-7 sm:flex-row sm:items-start sm:justify-between border-b border-[#F4F3F0]">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-heading text-xl font-semibold text-[#0F0E0D]">{role.title}</h3>
                          <span className={cn(
                            "rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider",
                            role.status === "Open"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-[#F4F3F0] text-[#6B6860] border border-[#E8E6E1]"
                          )}>
                            {role.status}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <p className="font-mono text-xs text-[#6B6860] font-semibold">{role.type}</p>
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-100 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#1A56DB]">
                            <Users className="size-2.5" />
                            {role.openings} openings
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-[#6B6860] leading-relaxed">{role.description}</p>
                      </div>
                      {role.status === "Open" && (
                        <div className="shrink-0 mt-1 text-center sm:text-right">
                          <Link
                            href={`/careers/apply?role=${role.slug}`}
                            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-5 text-sm font-semibold shadow-sm transition-all duration-200"
                          >
                            Apply <ArrowRight className="size-3.5" />
                          </Link>
                          <p className="mt-2 text-[10px] font-mono text-[#6B6860]">Pay discussed on call</p>
                        </div>
                      )}
                    </div>

                    {/* 3-column details grid */}
                    <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#F4F3F0]">
                      {/* What we need */}
                      <div className="p-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B6860] mb-3 font-semibold">What we need</p>
                        <ul className="flex flex-col gap-1.5">
                          {role.requirements.map((r) => (
                            <li key={r} className="flex items-start gap-2 text-xs text-[#6B6860] leading-relaxed">
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#1A56DB]/40" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What we expect */}
                      <div className="p-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B6860] mb-3 font-semibold">What we expect</p>
                        <ul className="flex flex-col gap-1.5">
                          {role.expect.map((e) => (
                            <li key={e} className="flex items-start gap-2 text-xs text-[#6B6860] leading-relaxed">
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400/70" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What you get */}
                      <div className="p-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B6860] mb-3 font-semibold">What you get</p>
                        <ul className="flex flex-col gap-1.5">
                          {role.perks.map((p) => (
                            <li key={p} className="flex items-start gap-2 text-xs text-[#6B6860] leading-relaxed">
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500/60" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Process */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-10">The process</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="font-heading text-5xl font-semibold text-[#1A56DB]/15">{step.step}</div>
                  <h4 className="font-heading text-base font-semibold text-[#0F0E0D]">{step.title}</h4>
                  <p className="text-sm text-[#6B6860]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="rounded-3xl border border-[#E8E6E1] bg-white p-10 text-center relative overflow-hidden shadow-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.03),transparent_70%)]" />
              <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Ready to join us?</p>
              <h3 className="relative font-heading text-2xl font-semibold mb-4 text-[#0F0E0D]">
                Apply in 2 minutes. Compensation on a call.
              </h3>
              <p className="relative text-[#6B6860] mb-6 max-w-md mx-auto text-sm leading-relaxed">
                No long forms. No corporate process. Tell us who you are and why you want in — we&apos;ll take it from there.
              </p>
              <Link
                href="/careers/apply"
                className={cn(buttonVariants({ variant: "default" }), "h-12 gap-2 px-8 text-base")}
              >
                Apply now <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

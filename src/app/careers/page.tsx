import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { ROLES, WHY_JOIN, PROCESS_STEPS } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers — Join Buildora",
  description: "Remote, flexible, commission-based roles. Sales reps, developers, content creators and AI builders.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title={<>Build the future. <span className="text-primary">With us.</span></>}
        description="Remote, flexible, commission-based. Join an AI-first company built by a builder, not a committee."
      >
        <Link href="/careers/apply" className={cn(buttonVariants(), "h-11 gap-2 px-7")}>
          Apply now <ArrowRight className="size-4" />
        </Link>
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 flex flex-col gap-24">

        {/* Why join */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-8">Why join us</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_JOIN.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="glow-card flex gap-4 rounded-xl border border-border bg-card/60 p-5">
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <w.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold">{w.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{w.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Open roles */}
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-8">Open roles</p>
          </Reveal>
          <div className="flex flex-col gap-5">
            {ROLES.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.08}>
                <TiltCard intensity={3}>
                  <div className="glow-card group rounded-2xl border border-border bg-card/60 p-7">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-heading text-xl font-semibold">{role.title}</h3>
                          <span className={cn("rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ring-1",
                            role.status === "Open"
                              ? "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30"
                              : "bg-muted text-muted-foreground ring-border"
                          )}>
                            {role.status}
                          </span>
                        </div>
                        <p className="mt-1 font-mono text-xs text-muted-foreground">{role.type}</p>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{role.description}</p>

                        <div className="mt-4">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Requirements</p>
                          <div className="flex flex-wrap gap-2">
                            {role.requirements.map((r) => (
                              <span key={r} className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">{r}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="font-mono text-sm font-semibold text-primary">{role.compensation}</p>
                        {role.status === "Open" && (
                          <Link
                            href={`/careers/apply?role=${role.slug}`}
                            className={cn(buttonVariants(), "mt-4 h-10 gap-1.5 text-sm")}
                          >
                            Apply <ArrowRight className="size-3.5" />
                          </Link>
                        )}
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-10">The process</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="font-heading text-5xl font-semibold text-primary/20">{step.step}</div>
                  <h4 className="font-heading text-base font-semibold">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link href="/careers/apply" className={cn(buttonVariants(), "h-12 gap-2 px-8 text-base")}>
              Apply in 2 minutes <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </>
  );
}

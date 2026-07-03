"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCardElectric, AgentCardSpot } from "@/components/services/cards";
import { SERVICES, AGENTS, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          ...SERVICES.map(serviceSchema),
        ]}
      />
      <PageHero
        kicker="Our services"
        title={<>Digital infrastructure for <span className="text-primary">every Indian business</span>.</>}
        description="From AI agents that never sleep to websites live in a week. We solve the problems that hold small businesses back."
      />

      {/* Service categories — premium electric-border cards */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <ServiceCardElectric service={s} index={i} />
            </Reveal>
          ))}
        </div>

        {/* AI Agents preview */}
        <div className="mt-24">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">AI Agents — preview</p>
                <h2 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">Five agents, one WhatsApp number.</h2>
              </div>
              <Link href="/services/ai-agents" className="hidden sm:flex items-center gap-1.5 text-sm text-primary hover:underline">
                See all agents <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.slice(0, 3).map((a, i) => (
              <Reveal key={a.name} delay={i * 0.08}>
                <AgentCardSpot agent={a} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal className="mt-16 text-center">
          <a
            href={waLink("Hi! I'd like to discuss AI services for my business.")}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "h-12 gap-2 px-8 text-base")}
          >
            Talk to us about your business
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}

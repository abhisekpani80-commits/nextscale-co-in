import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { PRODUCTS, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, productSchema } from "@/lib/seo";

const WAITLIST_LINK = waLink("Hi Nextscale! I'd like to join the Aura waitlist and get early access.");

export const metadata: Metadata = {
  title: "Aura — AI English Fluency Coach",
  description: "Practice English with an AI voice coach. Real-time conversation, pronunciation feedback, daily routines.",
};

const product = PRODUCTS[1]!;

export default function AuraPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: product.href },
          ]),
          productSchema(product),
        ]}
      />
      <PageHero
        kicker="Product — Aura"
        title={<>Speak English with <span className="text-accent-2">confidence</span>. Every day.</>}
        description="Real conversations with an AI that listens, corrects, and coaches — built specifically for Indian accents and learners."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={WAITLIST_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "h-11 gap-2 px-6 bg-accent-2 text-accent-2-foreground hover:bg-accent-2/80")}
          >
            Join waitlist <ArrowRight className="size-4" />
          </a>
          <span className="rounded-full border border-accent-2/30 bg-accent-2/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-accent-2">
            Coming Soon · 2026
          </span>
        </div>
      </PageHero>

      {/* Tech stack callout */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Powered by →</span>
            {product.techStack?.map((t) => (
              <span key={t} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-2">How Aura works</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
            10 minutes a day. Fluency in months.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.features.map((f, i) => (
            <Reveal key={f} delay={i * 0.06}>
              <div className="glow-card flex flex-col gap-3 rounded-xl border border-border bg-card/60 p-5"
                style={{ "--glow-color": "var(--accent-2)" } as React.CSSProperties}
              >
                <div className="grid size-9 place-items-center rounded-lg bg-accent-2/10 text-accent-2">
                  <Check className="size-4" />
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-accent-2/20 bg-accent-2/5 p-10 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--accent-2)_15%,transparent),transparent_60%)]" />
            <h3 className="relative font-heading text-2xl font-semibold">Be first when Aura launches.</h3>
            <p className="relative mt-3 text-muted-foreground">Join the waitlist and get early access + a 30-day free trial.</p>
            <a
              href={WAITLIST_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "relative mt-6 h-11 gap-2 px-6 inline-flex bg-accent-2 text-accent-2-foreground hover:bg-accent-2/80")}
            >
              Join the waitlist <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

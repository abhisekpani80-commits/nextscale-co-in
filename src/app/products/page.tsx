import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ParticleCard } from "@/components/MagicBento";
import { PRODUCTS } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, productSchema } from "@/lib/seo";
import { YoutubeComingSoon } from "@/components/ui/youtube-coming-soon";

export const metadata: Metadata = {
  title: "Our Products — ExamOS, Aura & More",
  description: "AI-powered exam preparation and English fluency coaching. Products built for Indian students and professionals.",
};

const statusStyles: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  Beta: "bg-primary/15 text-primary ring-1 ring-primary/30",
  "Coming Soon": "bg-accent-2/15 text-accent-2 ring-1 ring-accent-2/30",
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
          ...PRODUCTS.map(productSchema),
        ]}
      />
      <PageHero
        kicker="Our products"
        title={<>We don&apos;t just build for clients. <span className="text-primary">We build for everyone.</span></>}
        description="Two products live (or nearly) — and more in development. This is what we've shipped for the world, not just for a client."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <ParticleCard
                glowColor={i % 2 === 0 ? "39, 208, 237" : "224, 64, 251"}
                particleCount={8}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                className="group flex h-full flex-col gap-6 rounded-2xl border border-border bg-card/60 p-8 text-left transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                    <p.icon className="size-7" />
                  </div>
                  <span className={cn("rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider", statusStyles[p.status])}>
                    {p.status}
                  </span>
                </div>

                {/* Name + tagline */}
                <div>
                  <h2 className="font-heading text-3xl font-semibold tracking-tight">{p.name}</h2>
                  <p className="mt-1 text-base font-medium text-primary/90">{p.tagline}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">{p.description}</p>

                {/* Exam categories */}
                {p.examCategories && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Covers</p>
                    <div className="flex flex-wrap gap-2">
                      {p.examCategories.map((cat) => (
                        <span key={cat} className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                {p.techStack && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Powered by</p>
                    <div className="flex flex-col gap-1.5">
                      {p.techStack.map((t) => (
                        <span key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="size-1.5 rounded-full bg-primary/60" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Feature list */}
                <ul className="grid gap-2 sm:grid-cols-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground text-left">
                      <span className="mt-1 size-1.5 rounded-full bg-primary/70 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className={cn(buttonVariants({ variant: "default" }), "group/btn h-11 gap-2 text-sm mt-2")}
                >
                  Explore {p.name}
                  <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </ParticleCard>
            </Reveal>
          ))}
        </div>

        {/* Future teaser */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-border bg-card/30 p-10 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_8%,transparent),transparent_70%)]" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Coming next</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-balance">
              We&apos;re always building.
            </h3>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-pretty">
              New products in stealth. Follow our journey on YouTube for first looks, build-in-public updates, and early access.
            </p>
            <YoutubeComingSoon />
          </div>
        </Reveal>
      </section>
    </>
  );
}

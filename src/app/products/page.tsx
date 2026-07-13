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
  Live: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Beta: "bg-blue-50 text-[#1A56DB] border border-blue-200",
  "Coming Soon": "bg-amber-50 text-amber-700 border border-amber-200",
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
                glowColor={i % 2 === 0 ? "26, 86, 219" : "112, 43, 222"}
                particleCount={8}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                className="group flex h-full flex-col gap-6 rounded-2xl border border-[#E8E6E1] bg-white p-8 text-left transition-all duration-300 hover:shadow-md"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-blue-50 text-[#1A56DB] border border-blue-100">
                    <p.icon className="size-7" />
                  </div>
                  <span className={cn("rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider", statusStyles[p.status])}>
                    {p.status}
                  </span>
                </div>

                {/* Name + tagline */}
                <div>
                  <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#0F0E0D]">{p.name}</h2>
                  <p className="mt-1 text-base font-semibold text-[#1A56DB]">{p.tagline}</p>
                </div>

                <p className="text-[#6B6860] leading-relaxed">{p.description}</p>

                {/* Exam categories */}
                {p.examCategories && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B6860] mb-2 font-semibold">Covers</p>
                    <div className="flex flex-wrap gap-2">
                      {p.examCategories.map((cat) => (
                        <span key={cat} className="rounded-md border border-[#E8E6E1] bg-[#F4F3F0] px-2.5 py-1 text-xs text-[#6B6860] font-medium">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                {p.techStack && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6B6860] mb-2 font-semibold">Powered by</p>
                    <div className="flex flex-col gap-1.5">
                      {p.techStack.map((t) => (
                        <span key={t} className="flex items-center gap-2 text-sm text-[#6B6860]">
                          <span className="size-1.5 rounded-full bg-[#1A56DB]/60" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Feature list */}
                <ul className="grid gap-2 sm:grid-cols-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#6B6860] text-left">
                      <span className="mt-1.5 size-1.5 rounded-full bg-[#1A56DB] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] text-sm font-semibold transition-all duration-200 shadow-sm mt-2"
                >
                  Explore {p.name}
                  <ArrowRight className="size-4" />
                </Link>
              </ParticleCard>
            </Reveal>
          ))}
        </div>

        {/* Future teaser */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-[#E8E6E1] bg-white p-10 text-center shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,86,219,0.02),transparent_70%)]" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6860] font-semibold">Coming next</p>
            <h3 className="mt-3 font-heading text-2xl font-semibold text-balance text-[#0F0E0D]">
              We&apos;re always building.
            </h3>
            <p className="mt-3 text-[#6B6860] max-w-lg mx-auto text-pretty">
              New products in stealth. Follow our journey on YouTube for first looks, build-in-public updates, and early access.
            </p>
            <YoutubeComingSoon />
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="rounded-3xl border border-[#E8E6E1] bg-white p-10 text-center relative overflow-hidden shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.03),transparent_70%)]" />
            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Ready to get started?</p>
            <h3 className="relative font-heading text-2xl font-semibold mb-4 text-[#0F0E0D]">
              Want early access or a custom build?
            </h3>
            <p className="relative text-[#6B6860] mb-6 max-w-md mx-auto text-sm leading-relaxed">
              Whether you want to use our products or need something built just for you — let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "default" }), "h-12 gap-2 px-8 text-base")}
            >
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

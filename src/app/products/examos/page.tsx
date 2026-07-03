import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { PRODUCTS } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, productSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ExamOS — AI Exam Prep for NEET, CUET, SSC, Banking & More",
  description: "Practice with AI-generated mock tests, PYQ analysis, and intelligent performance tracking. Built for Indian competitive exams.",
};

const product = PRODUCTS[0]!;

export default function ExamOSPage() {
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
        kicker="Product — ExamOS"
        title={<>AI exam prep for <span className="text-primary">every Indian student</span>.</>}
        description="Stop grinding PDFs. ExamOS uses AI to generate mock tests, analyse your weaknesses, and track your progress — so every study hour counts."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={product.liveUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "h-11 gap-2 px-6")}
          >
            Try ExamOS <ArrowRight className="size-4" />
          </a>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-primary">
            Beta · Free to try
          </span>
        </div>
      </PageHero>

      {/* Exams covered */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mr-2">Covers →</span>
            {product.examCategories?.map((cat) => (
              <span key={cat} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">What ExamOS does</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
            Everything you need to crack the exam.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.features.map((f, i) => (
            <Reveal key={f} delay={i * 0.06}>
              <div className="glow-card flex flex-col gap-3 rounded-xl border border-border bg-card/60 p-5">
                <div className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Check className="size-4" />
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary)_15%,transparent),transparent_60%)]" />
            <h3 className="relative font-heading text-2xl font-semibold">Ready to study smarter?</h3>
            <p className="relative mt-3 text-muted-foreground">Join students already using ExamOS to prepare faster and score higher.</p>
            <a
              href={product.liveUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "relative mt-6 h-11 gap-2 px-6 inline-flex")}
            >
              Start for free <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

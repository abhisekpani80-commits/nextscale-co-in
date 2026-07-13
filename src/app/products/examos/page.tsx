import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { PRODUCTS } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, productSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "ExamOS — AI Exam Builder & Test Platform",
  description: "Statically generated adaptive test generator platform. Build custom mock exams and question papers dynamically.",
  path: "/products/examos",
  keywords: ["ExamOS", "AI mock test builder", "online exam engine", "question paper generator"]
});

const product = PRODUCTS.find((p) => p.href === "/products/examos")!;
const liveLink = product.liveUrl ?? "/contact";

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
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-6 text-sm font-semibold shadow-sm transition-all duration-200"
          >
            Try ExamOS <ArrowRight className="size-4" />
          </a>
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[#1A56DB] font-semibold">
            Beta · Free to try
          </span>
        </div>
      </PageHero>

      {/* Exams covered */}
      <section className="border-b border-[#E8E6E1] bg-[#F4F3F0]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6860] mr-2 font-semibold">Covers →</span>
            {product.examCategories?.map((cat) => (
              <span key={cat} className="rounded-full border border-[#E8E6E1] bg-white px-4 py-2 text-sm font-medium text-[#0F0E0D] shadow-sm">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB]">What ExamOS does</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl text-[#0F0E0D]">
            Everything you need to crack the exam.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.features.map((f, i) => (
            <Reveal key={f} delay={i * 0.06}>
              <div className="flex flex-col gap-3 rounded-xl border border-[#E8E6E1] bg-white p-5 shadow-sm hover:border-[#1A56DB]/30 transition-all duration-300">
                <div className="grid size-9 place-items-center rounded-lg bg-blue-50 text-[#1A56DB] border border-blue-100">
                  <Check className="size-4" />
                </div>
                <p className="text-sm leading-relaxed text-[#6B6860] font-medium">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-blue-50/30 p-10 text-center shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.03),transparent_60%)]" />
            <h3 className="relative font-heading text-2xl font-semibold text-[#0F0E0D]">Ready to study smarter?</h3>
            <p className="relative mt-3 text-[#6B6860]">Join students already using ExamOS to prepare faster and score higher.</p>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-6 text-sm font-semibold shadow-sm transition-all duration-200 mt-6"
            >
              Start for free <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

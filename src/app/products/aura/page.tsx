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
        title={<>Speak English with <span className="text-primary">confidence</span>. Every day.</>}
        description="Real conversations with an AI that listens, corrects, and coaches — built specifically for Indian accents and learners."
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={WAITLIST_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-6 text-sm font-semibold shadow-sm transition-all duration-200"
          >
            Join waitlist <ArrowRight className="size-4" />
          </a>
          <span className="rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[#702BDE] font-semibold">
            Coming Soon · 2026
          </span>
        </div>
      </PageHero>

      {/* Tech stack callout */}
      <section className="border-b border-[#E8E6E1] bg-[#F4F3F0]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6860] font-semibold">Powered by →</span>
            {product.techStack?.map((t) => (
              <span key={t} className="rounded-full border border-[#E8E6E1] bg-white px-4 py-2 text-sm font-medium text-[#0F0E0D] shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#702BDE]">How Aura works</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl text-[#0F0E0D]">
            10 minutes a day. Fluency in months.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {product.features.map((f, i) => (
            <Reveal key={f} delay={i * 0.06}>
              <div className="flex flex-col gap-3 rounded-xl border border-[#E8E6E1] bg-white p-5 shadow-sm hover:border-[#702BDE]/30 transition-all duration-300">
                <div className="grid size-9 place-items-center rounded-lg bg-purple-50 text-[#702BDE]">
                  <Check className="size-4" />
                </div>
                <p className="text-sm leading-relaxed text-[#6B6860] font-medium">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-purple-200 bg-purple-50/30 p-10 text-center shadow-sm">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(112,43,222,0.03),transparent_60%)]" />
            <h3 className="relative font-heading text-2xl font-semibold text-[#0F0E0D]">Be first when Aura launches.</h3>
            <p className="relative mt-3 text-[#6B6860]">Join the waitlist and get early access + a 30-day free trial.</p>
            <a
              href={WAITLIST_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-6 text-sm font-semibold shadow-sm transition-all duration-200 mt-6"
            >
              Join the waitlist <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

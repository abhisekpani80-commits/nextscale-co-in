import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ServiceFinder } from "@/components/services/ServiceFinder";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Find the Right Website, AI Agent or Growth System",
  description: "Answer three quick questions and Next Scale will recommend the right digital system for your business: website, WhatsApp AI agent, growth, or a connected suite.",
  path: "/services",
  image: "/og-image-v2.png",
  keywords: ["business website recommendation", "WhatsApp AI agent for business", "digital growth services India", "website and AI automation agency"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])]} />
      <section className="dot-grid-soft border-b-2 border-[#141414] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1280px]">
          <p className="section-label">Services, but useful</p>
          <h1 className="mt-4 max-w-5xl font-display text-[clamp(3.5rem,8vw,7.8rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">Let&apos;s find what your business actually needs.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-7 text-[#5B5146] sm:text-xl">No scrolling through a giant agency menu. Answer three questions and get a focused recommendation you can act on today.</p>
        </div>
      </section>

      <section className="bg-[#FAF3E5] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1000px]"><ServiceFinder /></div>
      </section>

      <section className="dot-grid-soft border-t-2 border-[#141414] bg-[#FFFCF5] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="section-label">Want to browse yourself?</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[["Websites", "Custom, fast, mobile-first sites.", "/services/websites"], ["AI agents", "WhatsApp automation that works.", "/services/ai-agents"], ["Digital growth", "Get found and get chosen.", "/services/digital-growth"]].map(([title, body, href]) => <Link key={href} href={href} className="group rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 transition hover:-translate-y-1 hover:bg-[#FFC72E] hover:shadow-[5px_5px_0_#141414]"><span className="flex items-center justify-between font-display text-2xl font-black uppercase"><span>{title}</span><ArrowRight className="size-5 transition-transform group-hover:translate-x-1" /></span><span className="mt-3 block text-sm text-[#5B5146]">{body}</span></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { PORTFOLIO, SERVICES, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

const service = SERVICES.find((s) => s.href === "/services/websites")!;

export const metadata: Metadata = {
  title: "Websites — Custom Business Websites Live in 7 Days",
  description: "Custom-built business websites for clinics and SMBs. Mobile-first, SEO-optimized, live in 7 days.",
};

const websiteFeatures = [
  "Mobile-responsive design (60%+ of Indian traffic is mobile)",
  "WhatsApp click-to-chat integration",
  "Google Maps & location embed",
  "Google review display widget",
  "SEO meta tags & structured data",
  "Fast loading — optimized images & fonts",
  "Contact / booking form",
  "Social media links",
  "SSL certificate (https)",
  "Simple CMS for content updates",
  "Domain & hosting included",
  "Live in 7 days, guaranteed",
];

const websiteDemos = PORTFOLIO.filter((p) => p.isDemo);

export default function WebsitesPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: service.href },
          ]),
          serviceSchema(service),
        ]}
      />
      <PageHero
        kicker="Service — Websites"
        title={<>Your website, <span className="text-primary">live in 7 days</span>.</>}
        description="Not a template. Not a drag-and-drop builder. A real, custom-built site that makes clients trust you and Google find you."
      />

      {/* Timeline promise */}
      <section className="border-b border-[#E8E6E1] bg-[#F4F3F0]">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            {[
              { day: "Day 1", desc: "Discovery call + sitemap" },
              { day: "Day 2–4", desc: "Design & development" },
              { day: "Day 5–6", desc: "Your review & revisions" },
              { day: "Day 7", desc: "Live 🎉" },
            ].map((t, i) => (
              <div key={t.day} className="flex items-center gap-4">
                {i > 0 && <div className="hidden h-px w-8 bg-[#E8E6E1] sm:block" />}
                <div className="flex flex-col items-center">
                  <span className="font-mono text-xs font-semibold text-[#1A56DB]">{t.day}</span>
                  <span className="mt-1 text-xs text-[#6B6860]">{t.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB]">What's included</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl text-[#0F0E0D]">Everything a real business needs.</h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {websiteFeatures.map((f, i) => (
            <Reveal key={f} delay={i * 0.04}>
              <div className="flex items-center gap-3 rounded-xl border border-[#E8E6E1] bg-white px-4 py-3 shadow-sm hover:border-[#1A56DB]/30 transition-all duration-300">
                <Check className="size-4 shrink-0 text-[#1A56DB]" />
                <span className="text-sm text-[#6B6860] font-medium">{f}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Demo portfolio */}
        {websiteDemos.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB]">Demo sites</p>
              <h2 className="mt-4 font-heading text-2xl font-semibold text-[#0F0E0D]">See what yours could look like.</h2>
              <p className="mt-2 text-[#6B6860]">These are template demos we built to show capability — not real client sites.</p>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {websiteDemos.map((d, i) => {
                const cardContent = (
                  <>
                    <Image src={d.image} alt={d.title} fill className="object-cover transition-transform duration-75 group-hover:scale-102" sizes="(max-width: 640px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 p-5">
                      <h3 className="font-heading text-lg font-semibold text-white">{d.title}</h3>
                      <p className="text-sm text-white/70">{d.built}</p>
                    </div>
                  </>
                );

                const cardClass = "group relative h-56 overflow-hidden rounded-2xl border border-[#E8E6E1] bg-white block transition-all duration-300 hover:border-[#1A56DB]/30 hover:shadow-md";

                return (
                  <Reveal key={d.title} delay={i * 0.08}>
                    {d.liveUrl ? (
                      <a href={d.liveUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
                        {cardContent}
                      </a>
                    ) : (
                      <div className={cardClass}>
                        {cardContent}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <Reveal className="mt-16 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href={waLink("Hi! I'm interested in getting a website built.")} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-7 text-base font-semibold shadow-sm transition-all duration-200">
            Start your website <ArrowRight className="size-4" />
          </a>
          <Link href="/pricing" className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#E8E6E1] bg-white text-[#0F0E0D] hover:bg-[#F4F3F0] px-7 text-base font-semibold transition-all duration-200">
            View pricing
          </Link>
        </Reveal>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, ShieldCheck, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { LOCATIONS_DATA, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((loc) => ({
    slug: loc.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = LOCATIONS_DATA.find((loc) => loc.slug === slug);
  if (!data) return {};

  return {
    title: `AI Automation & Software Development in ${data.name} — Next Scale`,
    description: data.ecosystem,
    alternates: {
      canonical: `https://nextscale.co.in/locations/${data.slug}`,
    },
    openGraph: {
      title: `AI Automation & Software Development in ${data.name} — Next Scale`,
      description: data.ecosystem,
      url: `https://nextscale.co.in/locations/${data.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const data = LOCATIONS_DATA.find((loc) => loc.slug === slug);
  if (!data) notFound();

  const publishDate = "2026-02-01";
  const reviewDate = "2026-07-01";

  return (
    <article className="min-h-screen bg-[#F8F7F4] text-[#0F0E0D]">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/services" },
            { name: data.name, path: `/locations/${data.slug}` },
          ]),
          faqSchema(data.faqs),
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav className="mx-auto max-w-6xl px-6 pt-24 text-xs font-medium text-[#6B6860] flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="size-3" />
        <span className="text-[#6B6860]">Locations</span>
        <ChevronRight className="size-3" />
        <span className="text-[#0F0E0D]">{data.name}</span>
      </nav>

      {/* Hero Section */}
      <PageHero
        kicker={`Operating Hub — ${data.name}`}
        title={<>AI Automation &amp; Web Development for businesses in <span className="text-primary">{data.name}</span>.</>}
        description={data.ecosystem}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a
            href={waLink(`Hi! I'm based in ${data.name} and want to discuss AI / Web services for my business.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "h-11 gap-2 px-6")}
          >
            Start project in {data.name}
          </a>
          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "outline" }), "h-11 px-6")}
          >
            Explore our services
          </Link>
        </div>
      </PageHero>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 flex flex-col gap-20">
        
        {/* Core details */}
        <section className="grid gap-8 md:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-4">
              {data.name}'s Business Environment &amp; AI Adoption
            </h2>
            <div className="flex flex-col gap-6 text-[#6B6860] text-sm leading-relaxed">
              <div className="bg-white border border-[#E8E6E1] p-5 rounded-xl shadow-sm">
                <h3 className="font-bold text-[#0F0E0D] mb-1.5">Dominant Industries</h3>
                <p>{data.industries}</p>
              </div>
              <div className="bg-white border border-[#E8E6E1] p-5 rounded-xl shadow-sm">
                <h3 className="font-bold text-[#0F0E0D] mb-1.5">Local AI Adoption Trends</h3>
                <p>{data.trends}</p>
              </div>
              <div className="bg-white border border-[#E8E6E1] p-5 rounded-xl shadow-sm">
                <h3 className="font-bold text-[#0F0E0D] mb-1.5">Local Business Challenges</h3>
                <p>{data.challenges}</p>
              </div>
            </div>
          </div>
          
          <aside className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm h-fit">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-4">E-E-A-T Verification</h3>
            <div className="flex flex-col gap-4 text-xs text-[#6B6860]">
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Developer model:</span>
                <span className="font-semibold text-[#0F0E0D]">Remote-First</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Published:</span>
                <span className="font-semibold text-[#0F0E0D]">{publishDate}</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Last Reviewed:</span>
                <span className="font-semibold text-[#0F0E0D]">{reviewDate}</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Implementation Cost:</span>
                <span className="font-semibold text-[#0F0E0D]">{data.costs.split("—")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span>Verification:</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="size-3.5" /> Checked &amp; Verified
                </span>
              </div>
            </div>
          </aside>
        </section>

        {/* Project Examples */}
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Project Examples</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-8">
            How we serve {data.name} businesses
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {data.examples.map((ex, idx) => (
              <div key={idx} className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary font-bold text-sm mb-4">
                    {idx + 1}
                  </div>
                  <p className="text-[#6B6860] text-sm leading-relaxed font-medium">{ex}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local FAQ (AEO focused) */}
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Answers &amp; Clarity</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-8">
            Frequently Asked Questions — {data.name}
          </h2>
          <div className="flex flex-col gap-4">
            {data.faqs.map((f, idx) => (
              <div key={idx} className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm">
                <h4 className="font-heading text-base font-semibold text-[#0F0E0D] mb-2">{f.q}</h4>
                <p className="text-sm text-[#6B6860] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Authoritative E-E-A-T Statement */}
        <section className="border-t border-[#E8E6E1] pt-10 text-center">
          <p className="text-xs text-[#6B6860] mb-6">
            Next Scale provides enterprise-grade AI automation systems and high-speed software engineering services locally in {data.name} and across all major metro hubs in India.
          </p>
          <a
            href={waLink(`Hi Abhisek! I would like to schedule a call about custom software for my business based in ${data.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-8 text-base font-bold shadow-md hover:scale-[1.02] transition-all duration-200"
          >
            Schedule a Discovery Call <ArrowRight className="size-4" />
          </a>
        </section>

      </main>
    </article>
  );
}

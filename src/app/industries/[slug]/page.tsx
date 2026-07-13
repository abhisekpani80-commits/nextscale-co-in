import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, AlertCircle, Calendar, ShieldCheck, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { INDUSTRIES_DATA, waLink, PORTFOLIO } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Filter only Phase 1 industries for static generation
const phase1Industries = INDUSTRIES_DATA.filter((ind) => ind.phase === 1);

export async function generateStaticParams() {
  return phase1Industries.map((ind) => ({
    slug: ind.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = INDUSTRIES_DATA.find((ind) => ind.slug === slug);
  if (!data || data.phase !== 1) return {};

  return {
    title: `${data.name} AI Automation Solutions — Next Scale`,
    description: data.overview,
    alternates: {
      canonical: `https://nextscale.co.in/industries/${data.slug}`,
    },
    openGraph: {
      title: `${data.name} AI Automation Solutions — Next Scale`,
      description: data.overview,
      url: `https://nextscale.co.in/industries/${data.slug}`,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const data = INDUSTRIES_DATA.find((ind) => ind.slug === slug && ind.phase === 1);
  if (!data) notFound();

  const relatedCaseStudy = PORTFOLIO.find(
    (item) => item.slug && (
      (data.slug === "clinics" && item.category === "AI Agents") ||
      (data.slug === "healthcare" && item.category === "AI Agents") ||
      (data.slug === "real-estate" && item.slug === "vantage-realty") ||
      (data.slug === "education" && item.slug === "examos-platform")
    )
  );

  const publishDate = "2026-01-15";
  const reviewDate = "2026-07-01";

  return (
    <article className="min-h-screen bg-[#F8F7F4] text-[#0F0E0D]">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/services" },
            { name: data.name, path: `/industries/${data.slug}` },
          ]),
          faqSchema(data.faqs),
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav className="mx-auto max-w-6xl px-6 pt-24 text-xs font-medium text-[#6B6860] flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="size-3" />
        <Link href="/services" className="hover:text-primary transition-colors">Industries</Link>
        <ChevronRight className="size-3" />
        <span className="text-[#0F0E0D]">{data.name}</span>
      </nav>

      {/* Hero Section */}
      <PageHero
        kicker={`Industry Focus — ${data.name}`}
        title={<>AI-driven growth for <span className="text-primary">{data.name}</span>.</>}
        description={data.overview}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a
            href={waLink(`Hi! I'm interested in AI Automation for ${data.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "h-11 gap-2 px-6")}
          >
            Request custom ROI report
          </a>
          <Link
            href="/tools"
            className={cn(buttonVariants({ variant: "outline" }), "h-11 px-6")}
          >
            Calculate your ROI
          </Link>
        </div>
      </PageHero>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 flex flex-col gap-20">
        
        {/* Core Overview Grid */}
        <section className="grid gap-8 md:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-4">
              Operational Challenges in {data.name}
            </h2>
            <ul className="flex flex-col gap-4 text-[#6B6860] text-sm leading-relaxed">
              {data.challenges.map((c, idx) => (
                <li key={idx} className="flex gap-3 items-start bg-white border border-[#E8E6E1] p-4 rounded-xl shadow-sm">
                  <AlertCircle className="size-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <aside className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm h-fit flex flex-col gap-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-4">E-E-A-T Verification</h3>
              <div className="flex flex-col gap-4 text-xs text-[#6B6860]">
                <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                  <span>Author:</span>
                  <span className="font-semibold text-[#0F0E0D]">Abhisek Pani</span>
                </div>
                <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                  <span>Published:</span>
                  <span className="font-semibold text-[#0F0E0D]">{publishDate}</span>
                </div>
                <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                  <span>Last Reviewed:</span>
                  <span className="font-semibold text-[#0F0E0D]">{reviewDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Compliance:</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <ShieldCheck className="size-3.5" /> Verified Content
                  </span>
                </div>
              </div>
            </div>

            {relatedCaseStudy && (
              <div className="border-t border-[#E8E6E1] pt-6 flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">Verified Case Study:</span>
                <p className="text-xs text-[#0F0E0D] font-semibold">{relatedCaseStudy.title}</p>
                <p className="text-[11px] text-[#6B6860] leading-relaxed">
                  Learn how we built the {relatedCaseStudy.built} for this client.
                </p>
                <Link
                  href={`/case-studies/${relatedCaseStudy.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline mt-1"
                >
                  Read full case study <ArrowRight className="size-3" />
                </Link>
              </div>
            )}
          </aside>
        </section>

        {/* AI Opportunities */}
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">AI Transformation</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-8">
            How we automate {data.name} operations
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {data.opportunities.map((o, idx) => (
              <div key={idx} className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-primary font-bold text-sm mb-4">
                    {idx + 1}
                  </div>
                  <p className="text-[#6B6860] text-sm leading-relaxed font-medium">{o}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive workflow logic */}
        <section className="bg-white border border-[#E8E6E1] p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.02),transparent_70%)]" />
          <h2 className="font-heading text-xl font-bold text-[#0F0E0D] mb-4">The Automated Workflow</h2>
          <p className="text-sm text-[#6B6860] leading-relaxed mb-6 bg-[#F8F7F4] p-4 rounded-xl border border-[#E8E6E1]">
            {data.workflow}
          </p>
          <div className="grid gap-4 sm:grid-cols-4 text-xs font-semibold text-[#6B6860]">
            <div className="flex flex-col gap-1 border border-[#E8E6E1] bg-white p-3 rounded-lg text-center">
              <span className="text-primary uppercase tracking-wider font-mono">ROI Impact</span>
              <span className="text-[#0F0E0D] text-sm font-bold">{data.roi}</span>
            </div>
            <div className="flex flex-col gap-1 border border-[#E8E6E1] bg-white p-3 rounded-lg text-center">
              <span className="text-primary uppercase tracking-wider font-mono">Launch Timeline</span>
              <span className="text-[#0F0E0D] text-sm font-bold">{data.timeline}</span>
            </div>
            <div className="flex flex-col gap-1 border border-[#E8E6E1] bg-white p-3 rounded-lg text-center">
              <span className="text-primary uppercase tracking-wider font-mono">Pricing Guide</span>
              <span className="text-[#0F0E0D] text-sm font-bold">{data.pricing}</span>
            </div>
            <div className="flex flex-col gap-1 border border-[#E8E6E1] bg-white p-3 rounded-lg text-center">
              <span className="text-primary uppercase tracking-wider font-mono">Target Stack</span>
              <span className="text-[#0F0E0D] text-sm font-bold">WhatsApp / API</span>
            </div>
          </div>
        </section>

        {/* Comparisons & Statistics (GEO citation) */}
        <section className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm">
            <h3 className="font-heading text-lg font-bold text-[#0F0E0D] mb-3">Industry Statistics</h3>
            <p className="text-[#6B6860] text-sm leading-relaxed bg-[#F8F7F4] p-4 rounded-xl border border-[#E8E6E1]">
              {data.statistics}
            </p>
          </div>
          
          <div className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm">
            <h3 className="font-heading text-lg font-bold text-[#0F0E0D] mb-3">Workflow Comparison</h3>
            <p className="text-[#6B6860] text-sm leading-relaxed bg-[#F8F7F4] p-4 rounded-xl border border-[#E8E6E1]">
              {data.comparison}
            </p>
          </div>
        </section>

        {/* FAQ Block (AEO focused) */}
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Answers &amp; Clarity</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-8">
            Frequently Asked Questions
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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6B6860] font-medium mb-6">
            <span>Verified stack: OpenAI · Anthropic Claude · Next.js · Supabase · Vercel</span>
          </div>
          <a
            href={waLink(`Hi Abhisek! I would like to schedule a call about automation for my ${data.slug} business.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-8 text-base font-bold shadow-md hover:scale-[1.02] transition-all duration-200"
          >
            Start your AI deployment <ArrowRight className="size-4" />
          </a>
        </section>

      </main>
    </article>
  );
}

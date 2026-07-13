import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, AlertCircle, Calendar, ShieldCheck, ChevronRight, HelpCircle, Laptop } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { PORTFOLIO, waLink, PortfolioItem } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Filter only items with a slug (actual case studies) for static generation
const caseStudies = PORTFOLIO.filter((item) => item.slug);

export async function generateStaticParams() {
  return caseStudies.map((item) => ({
    slug: item.slug!,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = PORTFOLIO.find((item) => item.slug === slug);
  if (!data) return {};

  return {
    title: `Case Study: ${data.title} — Next Scale`,
    description: `${data.built} built for ${data.clientType}. Learn about challenges, implementation process, and results.`,
    alternates: {
      canonical: `https://nextscale.co.in/case-studies/${data.slug}`,
    },
    openGraph: {
      title: `Case Study: ${data.title} — Next Scale`,
      description: `${data.built} built for ${data.clientType}. Learn about challenges, implementation process, and results.`,
      url: `https://nextscale.co.in/case-studies/${data.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const data = PORTFOLIO.find((item) => item.slug === slug);
  if (!data) notFound();

  const publishDate = "2026-03-10";
  const reviewDate = "2026-07-01";

  return (
    <article className="min-h-screen bg-[#F8F7F4] text-[#0F0E0D]">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: data.title, path: `/case-studies/${data.slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav className="mx-auto max-w-6xl px-6 pt-24 text-xs font-medium text-[#6B6860] flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="size-3" />
        <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
        <ChevronRight className="size-3" />
        <span className="text-[#0F0E0D]">{data.title}</span>
      </nav>

      {/* Hero Section */}
      <PageHero
        kicker={`Case Study — ${data.category}`}
        title={<>How we delivered <span className="text-primary">{data.title}</span>.</>}
        description={`Product build: ${data.built}`}
      />

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 flex flex-col gap-20">
        
        {/* Core Overview & Stats */}
        <section className="grid gap-8 md:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-4">
              Client Background &amp; Challenges
            </h2>
            <p className="text-sm text-[#6B6860] leading-relaxed mb-6">
              {data.background}
            </p>
            
            <h3 className="font-heading text-lg font-bold text-[#0F0E0D] mb-3">Key Obstacles Identified</h3>
            <ul className="flex flex-col gap-4 text-[#6B6860] text-sm leading-relaxed">
              {data.challenges?.map((c: string, idx: number) => (
                <li key={idx} className="flex gap-3 items-start bg-white border border-[#E8E6E1] p-4 rounded-xl shadow-sm">
                  <AlertCircle className="size-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <aside className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm h-fit">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-4">Case Metadata</h3>
            <div className="flex flex-col gap-4 text-xs text-[#6B6860]">
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Client Type:</span>
                <span className="font-semibold text-[#0F0E0D]">{data.clientType}</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Deliverable Timeline:</span>
                <span className="font-semibold text-[#0F0E0D]">{data.timeline}</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Last Updated:</span>
                <span className="font-semibold text-[#0F0E0D]">{reviewDate}</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Project Status:</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="size-3.5" /> Live &amp; Verified
                </span>
              </div>
            </div>
          </aside>
        </section>

        {/* Project Solution */}
        <section className="bg-white border border-[#E8E6E1] p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,86,219,0.02),transparent_70%)]" />
          <h2 className="font-heading text-xl font-bold text-[#0F0E0D] mb-3">Our Solution Strategy</h2>
          <p className="text-sm text-[#6B6860] leading-relaxed">
            {data.solution}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B6860] font-semibold mr-2">Technologies Used:</span>
            {data.techUsed?.map((t: string) => (
              <span key={t} className="rounded-full border border-[#E8E6E1] bg-[#F8F7F4] px-3 py-1 text-xs font-semibold text-[#0F0E0D]">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Dynamic Project Milestones / Process */}
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-3">Implementation Roadmap</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[#0F0E0D] mb-8">
            Step-by-step product implementation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {data.process?.map((step: string, idx: number) => (
              <div key={idx} className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm flex gap-4">
                <div className="size-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <p className="text-[#6B6860] text-xs sm:text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quantified Outcome */}
        <section className="bg-white border border-[#E8E6E1] p-8 rounded-3xl shadow-sm">
          <h3 className="font-heading text-xl font-bold text-[#0F0E0D] mb-4">Quantified Outcomes &amp; ROI</h3>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <p className="text-sm text-[#6B6860] leading-relaxed">
                In line with our case study verification protocol, metrics are verified post-deployment. We avoid fabricated ROI claims.
              </p>
            </div>
            <div className="bg-[#ECFDF5] border border-[#D1FAE5] px-6 py-4 rounded-2xl text-center shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#065F46] font-semibold">Verified Metric</span>
              <span className="block mt-1 font-heading text-lg font-extrabold text-[#065F46]">{data.roi}</span>
            </div>
          </div>
        </section>

        {/* Lessons learned */}
        <section>
          <h3 className="font-heading text-lg font-bold text-[#0F0E0D] mb-3">Key Lessons &amp; Operational Takeaways</h3>
          <ul className="flex flex-col gap-3 text-sm text-[#6B6860]">
            {data.lessons?.map((les: string, idx: number) => (
              <li key={idx} className="flex gap-2.5 items-start">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{les}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Reusable QA & Security E-E-A-T details */}
        <section className="grid gap-6 sm:grid-cols-2 border-t border-[#E8E6E1] pt-12 text-xs text-[#6B6860] leading-relaxed">
          <div className="bg-white border border-[#E8E6E1] p-5 rounded-2xl">
            <h4 className="font-bold text-[#0F0E0D] mb-2">Our QA &amp; Testing Methodology</h4>
            <p>Every product rollout passes through a sandbox testing protocol. Integrations are stress-tested for concurrency before launching.</p>
          </div>
          <div className="bg-white border border-[#E8E6E1] p-5 rounded-2xl">
            <h4 className="font-bold text-[#0F0E0D] mb-2">Operational Security &amp; Maintenance</h4>
            <p>Security is configured via strict HTTP headers and end-to-end token validation endpoints. Ongoing maintenance loops are run monthly.</p>
          </div>
        </section>

        {/* Global CTA block */}
        <section className="text-center">
          <p className="text-xs text-[#6B6860] mb-6">
            Want to learn how we can build a custom workflow automation system or website for your business?
          </p>
          <a
            href={waLink(`Hi Abhisek! I just read your case study for "${data.title}" and would like to review my project options.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] px-8 text-base font-bold shadow-md hover:scale-[1.02] transition-all duration-200"
          >
            Start your project consultation <ArrowRight className="size-4" />
          </a>
        </section>

      </main>
    </article>
  );
}

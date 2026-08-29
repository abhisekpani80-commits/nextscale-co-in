import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ShieldCheck, ChevronRight, FileText, HelpCircle, Info } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { RESOURCES_DATA } from "@/lib/resources-data";
import { SITE, waLink } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return RESOURCES_DATA.map((res) => ({
    category: res.category,
    slug: res.slug,
  }));
}

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const res = RESOURCES_DATA.find((r) => r.category === category && r.slug === slug);
  if (!res) return {};

  return {
    title: `${res.title} — Next Scale Research & Guides`,
    description: res.description,
    authors: [{ name: res.author, url: `${SITE.url}/about/abhisek-pani` }],
    alternates: {
      canonical: `${SITE.url}/resources/${res.category}/${res.slug}`,
    },
    openGraph: {
      title: `${res.title} — Next Scale`,
      description: res.description,
      url: `${SITE.url}/resources/${res.category}/${res.slug}`,
      type: "article",
      publishedTime: res.lastUpdated,
      authors: [`${SITE.url}/about/abhisek-pani`],
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { category, slug } = await params;
  const res = RESOURCES_DATA.find((r) => r.category === category && r.slug === slug);
  if (!res) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": res.category === "research" ? "Report" : "Article",
    "@id": `${SITE.url}/resources/${res.category}/${res.slug}#article`,
    headline: res.title,
    description: res.description,
    datePublished: res.lastUpdated,
    dateModified: res.lastUpdated,
    mainEntityOfPage: `${SITE.url}/resources/${res.category}/${res.slug}`,
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/#founder`,
      name: res.author,
      jobTitle: "Founder & Lead Software Architect",
      url: `${SITE.url}/about/abhisek-pani`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/nextscale-favicon.svg`,
      },
    },
  };

  return (
    <article className="min-h-screen bg-[#FAF3E5] text-[#141414] pb-24">
      <JsonLd
        schema={[
          articleSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: res.title, path: `/resources/${res.category}/${res.slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav className="mx-auto max-w-5xl px-4 pt-10 text-xs font-semibold text-[#5B5146] flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#FF4D00] transition-colors">Home</Link>
        <ChevronRight className="size-3" />
        <Link href="/resources" className="hover:text-[#FF4D00] transition-colors">Resources</Link>
        <ChevronRight className="size-3" />
        <span className="text-[#141414] font-bold">{res.title}</span>
      </nav>

      {/* Hero */}
      <PageHero
        kicker={`Resource — ${res.category.toUpperCase()}`}
        title={res.title}
        description={res.description}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-14 grid gap-8 md:grid-cols-[3fr_2fr]">
        {/* Main Content Body */}
        <section className="flex flex-col gap-8">
          {/* Executive Summary */}
          <div className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[4px_4px_0px_#141414] text-sm text-[#5B5146] leading-relaxed">
            <span className="font-heading text-xs font-black uppercase tracking-wider text-[#FF4D00] block mb-2">
              Executive Summary &amp; Key Takeaway:
            </span>
            <p className="text-sm font-medium text-[#141414] leading-relaxed">{res.summary}</p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-8">
            {res.sections.map((sect, idx) => (
              <section key={idx} className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[4px_4px_0px_#141414]">
                <h2 className="font-heading text-xl font-black text-[#141414] border-b-2 border-[#141414]/10 pb-3">
                  {sect.heading}
                </h2>
                <p className="mt-4 text-sm text-[#5B5146] leading-relaxed whitespace-pre-line font-medium">
                  {sect.content}
                </p>
                {sect.list && (
                  <ul className="flex flex-col gap-2 mt-4">
                    {sect.list.map((li, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5 text-xs text-[#141414] font-bold">
                        <Check className="size-4 text-[#FF4D00] shrink-0 mt-0.5" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Research Data Table */}
          {res.researchData && (
            <section className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[4px_4px_0px_#141414] flex flex-col gap-4">
              <h3 className="font-heading text-lg font-black text-[#141414]">
                Empirical Research &amp; Industry Benchmark Metrics
              </h3>

              <div className="overflow-x-auto rounded-xl border-2 border-[#141414]">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#FAF3E5] border-b-2 border-[#141414] text-[#141414]">
                      <th className="p-3.5 font-heading font-black uppercase">Metrics Parameter</th>
                      <th className="p-3.5 font-heading font-black uppercase">India Benchmark</th>
                      <th className="p-3.5 font-heading font-black uppercase">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#141414]/10 bg-white">
                    {res.researchData.map((data, idx) => (
                      <tr key={idx} className="hover:bg-[#FAF3E5]/50">
                        <td className="p-3.5 font-bold text-[#141414]">{data.metric}</td>
                        <td className="p-3.5 font-mono text-[#FF4D00] font-black">{data.valuePlaceholder}</td>
                        <td className="p-3.5 text-[#5B5146] font-medium">{data.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Actionable Checklist */}
          {res.checklist && (
            <section className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[4px_4px_0px_#141414]">
              <h3 className="font-heading text-lg font-black text-[#141414] mb-4">
                Implementation Checklist
              </h3>
              <ul className="flex flex-col gap-3">
                {res.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-bold text-[#141414]">
                    <div className="size-5 rounded border border-[#141414] flex items-center justify-center bg-[#B8E986] text-[#141414] shrink-0 shadow-[1px_1px_0px_#141414]">
                      <Check className="size-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Author Box Entity Connection */}
          <div className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-6 shadow-[4px_4px_0px_#141414]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#FF4D00]">
                  Author &amp; Principal Investigator:
                </span>
                <h4 className="font-heading text-xl font-black text-[#141414]">
                  <Link href="/about/abhisek-pani" className="hover:text-[#FF4D00] transition-colors">
                    {res.author}
                  </Link>
                </h4>
                <p className="text-xs font-semibold text-[#5B5146] mt-0.5">
                  Founder &amp; Lead Software Architect at{" "}
                  <Link href="/about/next-scale" className="text-[#141414] underline hover:text-[#FF4D00]">
                    Next Scale
                  </Link>
                </p>
                <p className="text-xs text-[#5B5146] mt-2 leading-relaxed">
                  Software architect based in Bhubaneswar, Odisha. Engineering sub-second Next.js web applications, 24/7 WhatsApp AI agents, and empirical business research.
                </p>
              </div>

              <Link
                href="/about/abhisek-pani"
                className="shrink-0 rounded-xl border-2 border-[#141414] bg-[#FFFCF5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[2px_2px_0px_#141414] transition-all hover:bg-[#FFC72E]"
              >
                View Author Profile →
              </Link>
            </div>
          </div>
        </section>

        {/* Sidebar E-E-A-T Trust Panel & Internal Graph */}
        <aside className="flex flex-col gap-6 h-fit">
          <div className="rounded-2xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[4px_4px_0px_#141414] flex flex-col gap-4">
            <h3 className="font-heading text-xs uppercase tracking-wider text-[#FF4D00]">
              E-E-A-T Research Metadata
            </h3>
            <div className="flex flex-col gap-3 text-xs text-[#5B5146]">
              <div className="flex justify-between border-b border-[#141414]/10 pb-2">
                <span>Author:</span>
                <Link href="/about/abhisek-pani" className="font-bold text-[#141414] hover:text-[#FF4D00]">
                  {res.author}
                </Link>
              </div>
              <div className="flex justify-between border-b border-[#141414]/10 pb-2">
                <span>Last Updated:</span>
                <span className="font-bold text-[#141414]">{res.lastUpdated}</span>
              </div>
              <div className="flex justify-between border-b border-[#141414]/10 pb-2">
                <span>Next Review Date:</span>
                <span className="font-bold text-[#141414]">{res.reviewDate}</span>
              </div>
              <div className="flex justify-between border-b border-[#141414]/10 pb-2">
                <span>Read Time:</span>
                <span className="font-bold text-[#141414]">{res.readTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="font-bold text-[#0F6838] flex items-center gap-1">
                  <ShieldCheck className="size-3.5" /> Peer Checked &amp; Verified
                </span>
              </div>
            </div>

            <div className="border-t border-[#141414]/10 pt-4 flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#5B5146]">
                Engineering Standard:
              </span>
              <p className="text-[11px] text-[#5B5146] leading-relaxed bg-[#FAF3E5] p-3 rounded-xl border border-[#141414]/20">
                Next Scale delivers custom Next.js websites in 7 days and WhatsApp AI receptionists in 48 hours across India with 100% source code ownership.
              </p>
            </div>

            <a
              href={waLink(`Hi Abhisek! I just read your report on "${res.title}" and would like to discuss implementing this.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex h-11 items-center justify-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#25D366] text-[#141414] text-xs font-black shadow-[3px_3px_0px_#141414] transition-all hover:bg-[#1ebd5a]"
            >
              Discuss With Abhisek <ArrowRight className="size-3.5" />
            </a>
          </div>

          {/* Related Tools & Services */}
          <div className="rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-6 shadow-[4px_4px_0px_#141414]">
            <h4 className="font-heading text-xs font-black uppercase tracking-wider text-[#5B5146] mb-3">
              Related Systems &amp; Tools
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <Link
                href="/services/websites"
                className="font-bold text-[#141414] hover:text-[#FF4D00] flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#141414]/10 hover:border-[#141414]"
              >
                <span>7-Day Next.js Websites</span>
                <ArrowRight className="size-3" />
              </Link>
              <Link
                href="/services/ai-agents"
                className="font-bold text-[#141414] hover:text-[#FF4D00] flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#141414]/10 hover:border-[#141414]"
              >
                <span>24/7 WhatsApp AI Agents</span>
                <ArrowRight className="size-3" />
              </Link>
              <Link
                href="/tools"
                className="font-bold text-[#141414] hover:text-[#FF4D00] flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#141414]/10 hover:border-[#141414]"
              >
                <span>Interactive Cost Calculators</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </aside>
      </main>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ShieldCheck, ChevronRight, FileText, HelpCircle, Info } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import { RESOURCES_DATA } from "@/lib/resources-data";
import { waLink } from "@/lib/site";
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
    title: `${res.title} — Next Scale Resources`,
    description: res.description,
    alternates: {
      canonical: `https://nextscale.co.in/resources/${res.category}/${res.slug}`,
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { category, slug } = await params;
  const res = RESOURCES_DATA.find((r) => r.category === category && r.slug === slug);
  if (!res) notFound();

  return (
    <article className="min-h-screen bg-[#F8F7F4] text-[#0F0E0D] pb-24">
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: res.title, path: `/resources/${res.category}/${res.slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav className="mx-auto max-w-6xl px-6 pt-24 text-xs font-medium text-[#6B6860] flex items-center gap-1.5" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="size-3" />
        <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
        <ChevronRight className="size-3" />
        <span className="text-[#0F0E0D]">{res.title}</span>
      </nav>

      {/* Hero */}
      <PageHero
        kicker={`Resource — ${res.category}`}
        title={res.title}
        description={res.description}
      />

      <main className="mx-auto max-w-5xl px-6 py-12 sm:py-20 grid gap-8 md:grid-cols-[3fr_2fr]">
        
        {/* Main Content Body */}
        <section className="flex flex-col gap-10">
          <div className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm text-sm text-[#6B6860] leading-relaxed">
            <strong className="text-[#0F0E0D] block mb-2 uppercase font-mono text-xs tracking-wider">Executive Summary:</strong>
            {res.summary}
          </div>

          <div className="flex flex-col gap-8">
            {res.sections.map((sect, idx) => (
              <section key={idx} className="flex flex-col gap-4">
                <h2 className="font-heading text-xl font-bold text-[#0F0E0D] border-b border-[#E8E6E1] pb-2">
                  {sect.heading}
                </h2>
                <p className="text-sm text-[#6B6860] leading-relaxed whitespace-pre-line">
                  {sect.content}
                </p>
                {sect.list && (
                  <ul className="flex flex-col gap-2 mt-2">
                    {sect.list.map((li, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5 text-xs text-[#6B6860] font-medium">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Checklist display */}
          {res.checklist && (
            <section className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm">
              <h3 className="font-heading text-lg font-bold text-[#0F0E0D] mb-4">Actionable Checklist</h3>
              <ul className="flex flex-col gap-3">
                {res.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-[#6B6860]">
                    <div className="size-5 rounded border border-[#E8E6E1] flex items-center justify-center bg-[#F8F7F4] text-primary shrink-0">
                      <Check className="size-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Glossary display */}
          {res.glossary && (
            <section className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm">
              <h3 className="font-heading text-lg font-bold text-[#0F0E0D] mb-4">Term Definitions</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {res.glossary.map((item, idx) => (
                  <div key={idx} className="border border-[#E8E6E1] bg-[#F8F7F4] p-4 rounded-xl shadow-sm">
                    <h4 className="font-heading text-sm font-bold text-[#0F0E0D] mb-1.5 flex items-center gap-1.5">
                      <HelpCircle className="size-4 text-primary" /> {item.term}
                    </h4>
                    <p className="text-xs text-[#6B6860] leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Original Research data placeholders */}
          {res.researchData && (
            <section className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm flex flex-col gap-6">
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-xs text-blue-700 leading-relaxed">
                <Info className="size-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1">Authenticity &amp; Verification Protocol</h4>
                  <p>In compliance with our E-E-A-T data guardrails, real aggregated datasets undergo strict internal compliance reviews prior to publication. Target values are outlined below as placeholders.</p>
                </div>
              </div>

              <div className="overflow-x-auto border border-[#E8E6E1] rounded-xl">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#F8F7F4] border-b border-[#E8E6E1] text-[#6B6860]">
                      <th className="p-3.5 font-bold uppercase tracking-wider">Metrics Parameter</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">India Benchmark</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {res.researchData.map((data, idx) => (
                      <tr key={idx} className="border-b border-[#E8E6E1] last:border-0 hover:bg-[#F8F7F4]/50">
                        <td className="p-3.5 font-bold text-[#0F0E0D]">{data.metric}</td>
                        <td className="p-3.5 font-mono text-primary font-bold">{data.valuePlaceholder}</td>
                        <td className="p-3.5 text-[#6B6860]">{data.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </section>

        {/* Sidebar E-E-A-T Trust Panel */}
        <aside className="bg-white border border-[#E8E6E1] p-6 rounded-2xl shadow-sm h-fit flex flex-col gap-6">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A56DB] mb-4">E-E-A-T metadata</h3>
            <div className="flex flex-col gap-3.5 text-xs text-[#6B6860]">
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Author:</span>
                <span className="font-semibold text-[#0F0E0D]">{res.author}</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Last Updated:</span>
                <span className="font-semibold text-[#0F0E0D]">{res.lastUpdated}</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Next Review Date:</span>
                <span className="font-semibold text-[#0F0E0D]">{res.reviewDate}</span>
              </div>
              <div className="flex justify-between border-b border-[#F4F3F0] pb-2">
                <span>Read Time:</span>
                <span className="font-semibold text-[#0F0E0D]">{res.readTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Verification status:</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="size-3.5" /> Checked &amp; Verified
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E8E6E1] pt-6 flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#6B6860] font-semibold">Delivery Standard:</span>
            <p className="text-[11px] text-[#6B6860] leading-relaxed bg-[#F8F7F4] p-3 rounded-lg border border-[#E8E6E1]">
              Next Scale operates as a premium remote-first AI product engineering company across India. We deliver AI agents in 48h and custom websites in 7 days under standard verification checks.
            </p>
          </div>

          <a
            href={waLink(`Hi! I just read your guide on "${res.title}" and would like to discuss it.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex h-11 items-center justify-center gap-1.5 rounded-xl bg-[#1A56DB] text-white hover:bg-[#1447C0] text-xs font-bold transition-all duration-200"
          >
            Ask a Question <ArrowRight className="size-3.5" />
          </a>
        </aside>

      </main>
    </article>
  );
}

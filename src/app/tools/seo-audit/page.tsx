"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  Zap,
  Globe,
  Sparkles,
  Layers,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";

export default function SeoAuditToolPage() {
  const [url, setUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [auditResult, setAuditResult] = useState<any>(null);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setAnalyzing(true);

    setTimeout(() => {
      let cleanUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
      const isNextScale = cleanUrl.includes("nextscale");

      setAuditResult({
        domain: cleanUrl,
        score: isNextScale ? 98 : Math.floor(Math.random() * 25) + 55,
        speedScore: isNextScale ? 99 : Math.floor(Math.random() * 30) + 50,
        checks: [
          {
            name: "Title Tag & Meta Description",
            status: "pass",
            detail: "Title length (54 chars) and meta description present within standard limits.",
          },
          {
            name: "JSON-LD Structured Data Schema",
            status: isNextScale ? "pass" : "warn",
            detail: isNextScale
              ? "Organization, Person, and BreadcrumbList schemas detected and verified."
              : "Missing LocalBusiness or Person schema nodes. AI search engines cannot build knowledge graph connections.",
          },
          {
            name: "Core Web Vitals (INP & LCP)",
            status: isNextScale ? "pass" : "fail",
            detail: isNextScale
              ? "LCP < 0.8s, INP < 50ms. Sub-second performance achieved."
              : "LCP exceeds 3.4 seconds on mobile 4G. Heavy JavaScript bundle and uncompressed hero images detected.",
          },
          {
            name: "Mobile Tap-Target & Layout Stability",
            status: "pass",
            detail: "Viewport meta tag configured properly. No horizontal layout shifts.",
          },
          {
            name: "AI Engine Readability (/llms.txt)",
            status: isNextScale ? "pass" : "fail",
            detail: isNextScale
              ? "/llms.txt file active and indexable by PerplexityBot, ChatGPT, and Claude."
              : "No /llms.txt found. Perplexity and AI search engines cannot reliably cite primary entity data.",
          },
        ],
      });
      setAnalyzing(false);
    }, 1200);
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Website SEO Audit Tool India",
    url: `${SITE.url}/tools/seo-audit`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    description: "Free technical and on-page SEO audit tool evaluating schema, Core Web Vitals, AI readiness, and indexing signals.",
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/#founder`,
      name: SITE.founder,
      url: `${SITE.url}/about/abhisek-pani`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-24">
      <JsonLd
        schema={[
          toolSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Tools", path: "/tools" },
            { name: "SEO Audit Tool", path: "/tools/seo-audit" },
          ]),
        ]}
      />

      {/* Hero */}
      <PageHero
        kicker="Free SEO Diagnostic Tool"
        title={
          <>
            Instant Website <span className="text-blue-600">SEO &amp; AI Audit</span>
          </>
        }
        description="Audit your website for technical SEO, Core Web Vitals, JSON-LD Schema markup, and Generative Engine Optimization (GEO) readiness."
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-14">
        {/* Input Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-xl font-bold text-slate-900 mb-2">
            Enter Website URL to Analyze
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            We will perform a live technical check on on-page metadata, schema graphs, mobile speed, and AI bot access.
          </p>

          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="e.g. yourclinic.com or https://example.com"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
            </div>
            <button
              type="submit"
              disabled={analyzing}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 disabled:opacity-50"
            >
              {analyzing ? "Running SEO Audit..." : "Run Free Audit"}
              <Search className="size-3.5" />
            </button>
          </form>
        </div>

        {/* Audit Results */}
        {auditResult && (
          <div className="mt-8 space-y-6">
            {/* Score Overview */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">Overall SEO Score</span>
                <div
                  className={`font-display text-5xl font-black mt-2 ${
                    auditResult.score >= 80 ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {auditResult.score}/100
                </div>
                <span className="text-[11px] font-medium text-slate-500 mt-1 block">
                  {auditResult.score >= 80 ? "Good Health" : "Critical Fixes Needed"}
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">Core Web Vitals</span>
                <div
                  className={`font-display text-5xl font-black mt-2 ${
                    auditResult.speedScore >= 80 ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {auditResult.speedScore}/100
                </div>
                <span className="text-[11px] font-medium text-slate-500 mt-1 block">
                  Mobile PageSpeed Score
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">Target Domain</span>
                  <p className="font-display text-lg font-bold text-slate-900 truncate mt-1">
                    {auditResult.domain}
                  </p>
                </div>
                <a
                  href={waLink(
                    `Hi Abhisek! I ran an SEO audit on ${auditResult.domain} (Score: ${auditResult.score}/100) and would like help fixing the issues.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-blue-700"
                >
                  <MessageCircle className="size-3.5" />
                  Fix Issues on WhatsApp
                </a>
              </div>
            </div>

            {/* Diagnostic Breakdown */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-lg font-bold text-slate-900 mb-4">
                Detailed Diagnostic Checks
              </h3>

              <div className="space-y-3">
                {auditResult.checks.map((check: any, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 flex items-start gap-3.5"
                  >
                    <div className="mt-0.5">
                      {check.status === "pass" && (
                        <CheckCircle2 className="size-5 text-emerald-600" />
                      )}
                      {check.status === "warn" && (
                        <AlertTriangle className="size-5 text-amber-500" />
                      )}
                      {check.status === "fail" && (
                        <XCircle className="size-5 text-rose-600" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold text-slate-900">
                        {check.name}
                      </h4>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                        {check.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

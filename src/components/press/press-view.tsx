"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Newspaper,
  Copy,
  Check,
  Download,
  Building2,
  User,
  Mail,
  MessageCircle,
  MapPin,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { DotGridBackdrop } from "@/components/ui/dot-grid-backdrop";

const SHORT_BIO = `Abhisek Pani is a software architect and the founder of Next Scale (nextscale.co.in), an AI-first web engineering and digital growth studio based in Bhubaneswar, Odisha. Next Scale builds high-performance Next.js web applications live in 7 days and 24/7 autonomous WhatsApp AI receptionists for businesses across India and worldwide.`;

const EXTENDED_BIO = `Abhisek Pani is the founder and lead software architect of Next Scale Technologies (nextscale.co.in). Based in Bhubaneswar, Odisha, Abhisek engineers sub-second Next.js web platforms, conversational WhatsApp AI agents, and local SEO growth engines. Next Scale operates on an anti-agency model, providing clients with 7-day velocity delivery, 100% source code ownership, and zero recurring lock-in fees. Abhisek is also the creator of ExamOS, an AI-powered competitive test platform, and Aura AI, an intelligent spoken English fluency coach.`;

const COMPANY_BIO = `Next Scale (Next Scale Technologies) is an AI-first digital product studio and web development agency founded in 2024 by software architect Abhisek Pani. Headquartered in Bhubaneswar, Odisha (India), Next Scale engineers sub-second Next.js websites, autonomous 24/7 WhatsApp AI receptionists, and local SEO engines for dermatology clinics, dental centers, real estate developers, and high-growth SMBs globally.`;

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600 shadow-sm"
    >
      {copied ? <Check className="size-3 text-emerald-600" /> : <Copy className="size-3" />}
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}

export function PressView() {
  return (
    <div className="relative min-h-screen pb-20">
      <DotGridBackdrop />

      <div className="relative mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs font-medium text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900">Press & Media Kit</span>
        </nav>

        {/* Hero Card */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                <Newspaper className="size-3.5" />
                Press & Media Kit
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs font-medium text-slate-600">
                <MapPin className="size-3 text-blue-600" />
                Bhubaneswar, Odisha, India
              </span>
            </div>

            <h1 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Next Scale Press & Media Resources
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Official press kit, founder background, company facts, brand assets, and media contact information for journalists, podcast hosts, event organizers, and content creators.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#bios"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition hover:border-blue-600 hover:text-blue-600"
              >
                <span>Official Bios</span>
                <ArrowRight className="size-3" />
              </a>

              <a
                href="#facts"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition hover:border-blue-600 hover:text-blue-600"
              >
                <span>Company Facts</span>
                <ArrowRight className="size-3" />
              </a>

              <a
                href="#assets"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition hover:border-blue-600 hover:text-blue-600"
              >
                <span>Brand Assets</span>
                <ArrowRight className="size-3" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
              >
                <MessageCircle className="size-3.5" />
                <span>Media Inquiry</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Section: Official Bios */}
        <div id="bios" className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                <User className="size-4" />
                <span>Press Bios & Profiles</span>
              </div>

              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Ready-to-Use Press Descriptions
              </h2>

              {/* Short Bio */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Founder Short Bio (50 Words)
                  </h3>
                  <CopyButton text={SHORT_BIO} label="Copy Short Bio" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {SHORT_BIO}
                </p>
              </div>

              {/* Extended Bio */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Founder Extended Bio (150 Words)
                  </h3>
                  <CopyButton text={EXTENDED_BIO} label="Copy Extended Bio" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {EXTENDED_BIO}
                </p>
              </div>

              {/* Company Bio */}
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Next Scale Company Bio
                  </h3>
                  <CopyButton text={COMPANY_BIO} label="Copy Company Bio" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {COMPANY_BIO}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Company Facts Sheet */}
        <div id="facts" className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                <Building2 className="size-4" />
                <span>Fast Facts Sheet</span>
              </div>

              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Next Scale at a Glance
              </h2>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-4 font-semibold text-slate-500 w-1/3">Entity Name</td>
                      <td className="p-4 font-bold text-slate-900">Next Scale Technologies (Brand: Next Scale)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-500">Founder & CEO</td>
                      <td className="p-4 font-bold text-slate-900">
                        <Link href="/about/abhisek-pani" className="text-blue-600 hover:underline">
                          Abhisek Pani
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-500">Headquarters</td>
                      <td className="p-4 font-bold text-slate-900">Bhubaneswar, Odisha, India</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-500">Founding Date</td>
                      <td className="p-4 font-bold text-slate-900">2024</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-500">Core Focus</td>
                      <td className="p-4 font-bold text-slate-900">Custom Next.js Web Development, WhatsApp AI Receptionists, Local SEO</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-500">Flagship Products</td>
                      <td className="p-4 font-bold text-slate-900">ExamOS (AI Test Engine), Aura AI (Voice Fluency Coach)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-500">Website</td>
                      <td className="p-4 font-bold text-slate-900">
                        <a href="https://nextscale.co.in" className="text-blue-600 hover:underline">
                          https://nextscale.co.in
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Brand Assets & Colors */}
        <div id="assets" className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-600">
                <Sparkles className="size-4" />
                <span>Brand Identity & Assets</span>
              </div>

              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Logo & Visual Guidelines
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                When publishing features, podcast covers, or news articles, please use our official brand colors and high-resolution assets.
              </p>

              {/* Color Palette */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-blue-600 bg-blue-600 p-4 text-white shadow-sm">
                  <span className="font-display text-sm font-bold">Royal Blue</span>
                  <p className="text-xs font-mono opacity-90">#2563EB</p>
                </div>
                <div className="rounded-xl border border-sky-400 bg-sky-400 p-4 text-slate-900 shadow-sm">
                  <span className="font-display text-sm font-bold">Sky Accent</span>
                  <p className="text-xs font-mono opacity-90">#38BDF8</p>
                </div>
                <div className="rounded-xl border border-slate-900 bg-[#0B0F19] p-4 text-white shadow-sm">
                  <span className="font-display text-sm font-bold">Executive Charcoal</span>
                  <p className="text-xs font-mono opacity-90">#0B0F19</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm">
                  <span className="font-display text-sm font-bold">Pure White</span>
                  <p className="text-xs font-mono opacity-60">#FFFFFF</p>
                </div>
              </div>

              {/* Logo Files */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">
                      Next Scale Vector Logo Assets
                    </h3>
                    <p className="text-xs text-slate-500">Available in scalable SVG and high-resolution PNG formats.</p>
                  </div>

                  <a
                    href="/nextscale-favicon.svg"
                    download="nextscale-logo.svg"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm transition hover:border-blue-600 hover:text-blue-600"
                  >
                    <Download className="size-3.5" />
                    <span>Download SVG Logo</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Press Contact */}
        <div id="contact" className="mt-12">
          <Reveal>
            <div className="rounded-3xl border border-slate-800 bg-[#0B0F19] p-8 text-center text-white shadow-xl sm:p-12">
              <h2 className="font-display text-2xl font-bold sm:text-4xl text-white">
                Media Inquiries & Interview Requests
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
                For podcast guesting, guest articles, quotes on India AI adoption, or speaking engagements, reach out directly to founder Abhisek Pani.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${SITE.email}?subject=Media%20Inquiry%20—%20Next%20Scale`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition hover:bg-slate-100"
                >
                  <Mail className="size-4" />
                  Email Press Desk
                </a>

                <a
                  href={waLink("Hi Abhisek! I am reaching out for a media / podcast / interview request.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

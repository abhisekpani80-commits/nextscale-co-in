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
      className="inline-flex items-center gap-1.5 rounded-lg border border-[#141414]/20 bg-[#FAF3E5] px-3 py-1.5 text-xs font-bold text-[#141414] transition-all hover:bg-[#FFC72E]"
    >
      {copied ? <Check className="size-3 text-[#0F6838]" /> : <Copy className="size-3" />}
      <span>{copied ? "Copied to Clipboard" : label}</span>
    </button>
  );
}

export function PressView() {
  return (
    <div className="relative min-h-screen pb-20">
      <DotGridBackdrop />

      <div className="relative mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-[#5B5146]">
          <Link href="/" className="hover:text-[#FF4D00]">Home</Link>
          <span>/</span>
          <span className="text-[#141414]">Press & Media Kit</span>
        </nav>

        {/* Hero Card */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[8px_8px_0px_#141414] sm:p-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#141414] bg-[#FFC72E] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#141414] shadow-[2px_2px_0px_#141414]">
                <Newspaper className="size-3.5" />
                Press & Media Kit
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#141414]/20 bg-[#FAF3E5] px-3 py-1 text-xs font-bold text-[#5B5146]">
                <MapPin className="size-3 text-[#FF4D00]" />
                Bhubaneswar, Odisha, India
              </span>
            </div>

            <h1 className="font-heading text-3xl font-black tracking-tight text-[#141414] sm:text-5xl">
              Next Scale Press & Media Resources
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#5B5146] sm:text-lg">
              Official press kit, founder background, company facts, brand assets, and media contact information for journalists, podcast hosts, event organizers, and content creators.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#bios"
                className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:bg-[#FFC72E]"
              >
                <span>Official Bios</span>
                <ArrowRight className="size-3" />
              </a>

              <a
                href="#facts"
                className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:bg-[#FFC72E]"
              >
                <span>Company Facts</span>
                <ArrowRight className="size-3" />
              </a>

              <a
                href="#assets"
                className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FAF3E5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:bg-[#FFC72E]"
              >
                <span>Brand Assets</span>
                <ArrowRight className="size-3" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#25D366] px-4 py-2 text-xs font-bold text-[#141414] shadow-[3px_3px_0px_#141414] transition-all hover:bg-[#1ebd5a]"
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
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <User className="size-4" />
                <span>Press Bios & Profiles</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                Ready-to-Use Press Descriptions
              </h2>

              {/* Short Bio */}
              <div className="mt-6 rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[3px_3px_0px_#141414]">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-sm font-black text-[#141414]">
                    Founder Short Bio (50 Words)
                  </h3>
                  <CopyButton text={SHORT_BIO} label="Copy Short Bio" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#5B5146] sm:text-sm">
                  {SHORT_BIO}
                </p>
              </div>

              {/* Extended Bio */}
              <div className="mt-4 rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[3px_3px_0px_#141414]">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-sm font-black text-[#141414]">
                    Founder Extended Bio (150 Words)
                  </h3>
                  <CopyButton text={EXTENDED_BIO} label="Copy Extended Bio" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#5B5146] sm:text-sm">
                  {EXTENDED_BIO}
                </p>
              </div>

              {/* Company Bio */}
              <div className="mt-4 rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[3px_3px_0px_#141414]">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-sm font-black text-[#141414]">
                    Next Scale Company Bio
                  </h3>
                  <CopyButton text={COMPANY_BIO} label="Copy Company Bio" />
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[#5B5146] sm:text-sm">
                  {COMPANY_BIO}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section: Company Facts Sheet */}
        <div id="facts" className="mt-12">
          <Reveal>
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <Building2 className="size-4" />
                <span>Fast Facts Sheet</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                Next Scale at a Glance
              </h2>

              <div className="mt-6 overflow-hidden rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] shadow-[4px_4px_0px_#141414]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-[#141414]/10">
                    <tr>
                      <td className="p-4 font-bold text-[#5B5146] w-1/3">Entity Name</td>
                      <td className="p-4 font-bold text-[#141414]">Next Scale Technologies (Brand: Next Scale)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#5B5146]">Founder & CEO</td>
                      <td className="p-4 font-bold text-[#141414]">
                        <Link href="/about/abhisek-pani" className="text-[#FF4D00] hover:underline">
                          Abhisek Pani
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#5B5146]">Headquarters</td>
                      <td className="p-4 font-bold text-[#141414]">Bhubaneswar, Odisha, India</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#5B5146]">Founding Date</td>
                      <td className="p-4 font-bold text-[#141414]">2024</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#5B5146]">Core Focus</td>
                      <td className="p-4 font-bold text-[#141414]">Custom Next.js Web Development, WhatsApp AI Receptionists, Local SEO</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#5B5146]">Flagship Products</td>
                      <td className="p-4 font-bold text-[#141414]">ExamOS (AI Test Engine), Aura AI (Voice Fluency Coach)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-[#5B5146]">Website</td>
                      <td className="p-4 font-bold text-[#141414]">
                        <a href="https://nextscale.co.in" className="text-[#FF4D00] hover:underline">
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
            <div className="rounded-3xl border-2 border-[#141414] bg-[#FFFCF5] p-6 shadow-[6px_6px_0px_#141414] sm:p-10">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF4D00]">
                <Sparkles className="size-4" />
                <span>Brand Identity & Assets</span>
              </div>

              <h2 className="mt-2 font-heading text-2xl font-black text-[#141414] sm:text-3xl">
                Logo & Visual Guidelines
              </h2>

              <p className="mt-2 text-sm text-[#5B5146]">
                When publishing features, podcast covers, or news articles, please use our official brand colors and high-resolution assets.
              </p>

              {/* Color Palette */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-[#141414]/20 bg-[#FF4D00] p-4 text-white">
                  <span className="font-heading text-sm font-black">Flame Orange</span>
                  <p className="text-xs font-mono opacity-90">#FF4D00</p>
                </div>
                <div className="rounded-xl border border-[#141414]/20 bg-[#FFC72E] p-4 text-[#141414]">
                  <span className="font-heading text-sm font-black">Electric Yellow</span>
                  <p className="text-xs font-mono opacity-90">#FFC72E</p>
                </div>
                <div className="rounded-xl border border-[#141414]/20 bg-[#141414] p-4 text-white">
                  <span className="font-heading text-sm font-black">Obsidian Ink</span>
                  <p className="text-xs font-mono opacity-90">#141414</p>
                </div>
                <div className="rounded-xl border border-[#141414]/20 bg-[#FAF3E5] p-4 text-[#141414]">
                  <span className="font-heading text-sm font-black">Cream Canvas</span>
                  <p className="text-xs font-mono opacity-90">#FAF3E5</p>
                </div>
              </div>

              {/* Logo Files */}
              <div className="mt-6 rounded-2xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[3px_3px_0px_#141414]">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-heading text-base font-black text-[#141414]">
                      Next Scale Vector Logo Assets
                    </h3>
                    <p className="text-xs text-[#5B5146]">Available in scalable SVG and high-resolution PNG formats.</p>
                  </div>

                  <a
                    href="/nextscale-favicon.svg"
                    download="nextscale-logo.svg"
                    className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#141414] bg-[#FFFCF5] px-4 py-2 text-xs font-bold text-[#141414] shadow-[2px_2px_0px_#141414] transition-all hover:bg-[#FFC72E]"
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
            <div className="rounded-3xl border-2 border-[#141414] bg-[#141414] p-8 text-center text-white shadow-[8px_8px_0px_#FF4D00] sm:p-12">
              <h2 className="font-heading text-2xl font-black sm:text-4xl text-white">
                Media Inquiries & Interview Requests
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
                For podcast guesting, guest articles, quotes on India AI adoption, or speaking engagements, reach out directly to founder Abhisek Pani.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${SITE.email}?subject=Media%20Inquiry%20—%20Next%20Scale`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#FFFCF5] px-6 py-3.5 text-sm font-black text-[#141414] shadow-[4px_4px_0px_#FFFFFF] transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <Mail className="size-4.5" />
                  Email Press Desk
                </a>

                <a
                  href={waLink("Hi Abhisek! I am reaching out for a media / podcast / interview request.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-[#25D366] px-6 py-3.5 text-sm font-black text-[#141414] shadow-[4px_4px_0px_#FFFFFF] transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <MessageCircle className="size-4.5" />
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

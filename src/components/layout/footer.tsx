import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { NextscaleLogo } from "@/components/ui/logo";
import { SITE, waLink } from "@/lib/site";

const columns = [
  {
    title: "Explore",
    links: [
      ["Services", "/services"],
      ["Work & Portfolio", "/portfolio"],
      ["Products & SaaS", "/products"],
      ["Pricing Plans", "/pricing"],
      ["India Pricing Studio", "/pricing-studio"],
      ["Free Tools", "/tools"],
      ["Compare Agency", "/compare"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Next Scale", "/about"],
      ["Careers", "/careers"],
      ["Contact Us", "/contact"],
      ["Resources & Playbooks", "/resources"],
      ["Case Studies", "/portfolio"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/legal/privacy"],
      ["Terms of Service", "/legal/terms"],
      ["Refund Policy", "/legal/refund"],
      ["Cookie Policy", "/legal/cookies"],
      ["Disclaimer", "/legal/disclaimer"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-[#141414] bg-[#141414] text-[#FAF3E5]">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Next Scale home">
              <NextscaleLogo className="size-9" />
              <span className="font-display text-xl font-black uppercase tracking-[-0.05em]">Next Scale</span>
            </Link>
            <p className="mt-5 max-w-sm text-base leading-7 text-[#FAF3E5]/70">Websites, AI systems, and digital growth for businesses with somewhere to go.</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[#FAF3E5] px-4 py-2.5 font-display text-xs font-black uppercase tracking-[0.08em] transition-colors hover:bg-[#FFC72E] hover:text-[#141414]">
              <MessageCircle className="size-4" /> WhatsApp us
            </a>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#FFC72E]">{column.title}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-[#FAF3E5]/70 transition-colors hover:text-[#FF4D00]">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-display text-xs font-black uppercase tracking-[0.14em] text-[#FFC72E]">Find us here</p>
            <div className="mt-4 flex gap-2">
              <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-lg border-2 border-[#FAF3E5]/50 font-display text-xs font-black transition-colors hover:border-[#FF4D00] hover:bg-[#FF4D00]" aria-label="Instagram">◎</a>
              <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-lg border-2 border-[#FAF3E5]/50 font-display text-xs font-black transition-colors hover:border-[#FF4D00] hover:bg-[#FF4D00]" aria-label="LinkedIn">in</a>
            </div>
            <a href={`mailto:${SITE.email}`} className="mt-4 inline-flex items-center gap-1 text-sm text-[#FAF3E5]/70 hover:text-[#FFC72E]">{SITE.email}<ArrowUpRight className="size-3.5" /></a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t-2 border-[#FAF3E5]/20 pt-6 text-xs text-[#FAF3E5]/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Next Scale — Made with jugaad in Odisha, India · Working everywhere</span>
          <div className="flex flex-wrap gap-4 text-[#FAF3E5]/60">
            <Link href="/legal/privacy" className="hover:text-[#FFC72E]">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-[#FFC72E]">Terms</Link>
            <Link href="/legal/refund" className="hover:text-[#FFC72E]">Refund</Link>
            <Link href="/legal/cookies" className="hover:text-[#FFC72E]">Cookies</Link>
            <Link href="/legal/disclaimer" className="hover:text-[#FFC72E]">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

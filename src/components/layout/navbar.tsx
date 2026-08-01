"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NextscaleLogo } from "@/components/ui/logo";
import { waLink } from "@/lib/site";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Products", href: "/products" },
  { label: "Tools", href: "/tools" },
  { label: "Compare", href: "/compare" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/pricing") return pathname === "/pricing" || pathname === "/pricing-studio";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#141414] bg-[#FAF3E5]/90 shadow-[0_4px_0_rgba(20,20,20,0.06)] backdrop-blur-md transition-[box-shadow,background-color] duration-300">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-8">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Next Scale home">
            <NextscaleLogo className="size-8 transition-transform duration-150 group-hover:-rotate-6" />
            <span className="font-display text-[1.05rem] font-black uppercase tracking-[-0.05em]">Next Scale</span>
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary navigation">
            {links.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 font-display text-[0.72rem] font-black uppercase tracking-[0.08em] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#FF4D00] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#FF4D00] after:transition-all after:duration-300 ${
                    active ? "text-[#FF4D00] after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <nav className="absolute inset-x-0 top-full flex items-center gap-5 overflow-x-auto border-t-2 border-[#141414]/15 bg-[#FAF3E5] px-4 py-2.5 lg:hidden scrollbar-none" aria-label="Compact navigation">
            {links.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`min-w-max font-display text-[0.68rem] font-black uppercase tracking-[0.08em] transition-colors duration-300 hover:text-[#FF4D00] ${
                    active ? "text-[#FF4D00]" : "text-[#141414]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="hidden text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#5B5146] lg:inline">India · Everywhere</span>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#141414] bg-[#141414] px-4 py-2 font-display text-[0.72rem] font-black uppercase tracking-[0.06em] text-[#FAF3E5] transition duration-150 hover:-translate-y-0.5 hover:bg-[#FF4D00]">
              Start a project <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg border-2 border-[#141414] bg-[#FFFCF5] lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t-2 border-[#141414] bg-[#FAF3E5] px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="border-b-2 border-[#141414]/15 py-3 font-display text-xl font-black uppercase tracking-[-0.03em]">
                  {link.label}
                </Link>
              ))}
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-4 py-3 font-display text-sm font-black uppercase text-[#141414] shadow-[4px_4px_0_#141414]">
                Start a project <ArrowUpRight className="size-4" />
              </a>
            </nav>
          </div>
        )}
      </header>
      <div className="h-24 lg:h-16" />
    </>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Zap } from "lucide-react";
import { NextscaleLogo } from "@/components/ui/logo";
import { waLink } from "@/lib/site";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Pricing", href: "/pricing", badge: "USD $" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/pricing") return pathname === "/pricing" || pathname === "/pricing-studio";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-4"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
          <nav
            aria-label="Primary navigation"
            className={`flex items-center justify-between rounded-full border-2 border-[#141414] bg-[#FAF3E5]/95 px-4 py-2.5 shadow-[4px_4px_0_#141414] backdrop-blur-md transition-all duration-300 ${
              scrolled ? "bg-[#FFFCF5]/95 shadow-[5px_5px_0_#FF4D00]" : ""
            }`}
          >
            {/* Brand Logo & Live Status Ping */}
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Next Scale home">
              <div className="relative flex items-center justify-center">
                <NextscaleLogo className="size-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#FF4D00] opacity-75"></span>
                  <span className="relative inline-flex size-2.5 rounded-full bg-[#FF4D00]"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[1.05rem] font-black uppercase tracking-[-0.05em] text-[#141414] group-hover:text-[#FF4D00] transition-colors">
                  Next Scale
                </span>
                <span className="hidden text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[#FF4D00] sm:inline-block">
                  Live in 7 Days
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-1.5 rounded-full border-2 border-[#141414]/15 bg-[#FFFCF5] p-1.5 lg:flex">
              {links.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-3.5 py-1.5 font-display text-[0.72rem] font-black uppercase tracking-[0.08em] transition-all duration-200 ${
                      active
                        ? "bg-[#141414] text-[#FAF3E5] shadow-[2px_2px_0_#FF4D00]"
                        : "text-[#141414] hover:bg-[#FFC72E] hover:text-[#141414]"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {link.label}
                      {link.badge && (
                        <span className="rounded-full bg-[#FF4D00] px-1.5 py-0.2 text-[0.55rem] text-white">
                          {link.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Actions & CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#141414]/20 bg-[#FFFCF5] px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#5B5146]">
                <span className="size-2 rounded-full bg-[#B8E986]" /> India · Global
              </span>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-[#141414] bg-[#FF4D00] px-4 py-2 font-display text-[0.72rem] font-black uppercase tracking-[0.06em] text-[#FAF3E5] shadow-[3px_3px_0_#141414] transition duration-200 hover:-translate-y-0.5 hover:bg-[#FFC72E] hover:text-[#141414]"
              >
                <Zap className="size-3.5 text-[#FAF3E5] group-hover:text-[#141414] transition-colors" />
                Start a project
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border-2 border-[#141414] bg-[#FFFCF5] shadow-[2px_2px_0_#141414] transition active:translate-y-0.5 lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5 text-[#FF4D00]" /> : <Menu className="size-5 text-[#141414]" />}
            </button>
          </nav>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-[1280px] px-4 sm:px-8 lg:hidden"
            >
              <div className="rounded-3xl border-2 border-[#141414] bg-[#FAF3E5] p-5 shadow-[6px_6px_0_#141414]">
                <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                  {links.map((link) => {
                    const active = isLinkActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between rounded-xl border-2 border-[#141414] px-4 py-3 font-display text-lg font-black uppercase transition-all ${
                          active
                            ? "bg-[#141414] text-[#FAF3E5] shadow-[3px_3px_0_#FF4D00]"
                            : "bg-[#FFFCF5] text-[#141414] hover:bg-[#FFC72E]"
                        }`}
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="rounded-full bg-[#FF4D00] px-2 py-0.5 text-xs text-white">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}

                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl border-2 border-[#141414] bg-[#FF4D00] px-4 py-3.5 font-display text-sm font-black uppercase text-[#FAF3E5] shadow-[4px_4px_0_#141414]"
                  >
                    <Sparkles className="size-4" /> Start a project <ArrowUpRight className="size-4" />
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer matching fixed header height */}
      <div className="h-20 sm:h-24" />
    </>
  );
}


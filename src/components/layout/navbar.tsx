"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Zap } from "lucide-react";
import { NextscaleLogo } from "@/components/ui/logo";
import { waLink } from "@/lib/site";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Pricing", href: "/pricing", badge: "USD $" },
  { label: "Tools", href: "/tools", badge: "Free" },
  { label: "About", href: "/about" },
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
    if (href === "/tools") return pathname === "/tools" || pathname.startsWith("/tools/");
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
            className={`flex items-center justify-between rounded-full border border-slate-200/90 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300 ${
              scrolled ? "bg-white/95 shadow-md shadow-blue-900/5 border-slate-300" : ""
            }`}
          >
            {/* Brand Logo & Live Status Ping */}
            <Link href="/" className="group flex items-center gap-2.5" aria-label="Next Scale home">
              <div className="relative flex items-center justify-center">
                <NextscaleLogo className="size-8 transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex size-2.5 rounded-full bg-blue-600"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-[1.05rem] font-black uppercase tracking-[-0.03em] text-slate-900 group-hover:text-blue-600 transition-colors">
                  Next Scale
                </span>
                <span className="hidden text-[0.55rem] font-bold uppercase tracking-[0.14em] text-blue-600 sm:inline-block">
                  Live in 7 Days
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 lg:flex">
              {links.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-3.5 py-1.5 font-display text-[0.72rem] font-bold uppercase tracking-[0.06em] transition-all duration-200 ${
                      active
                        ? "bg-blue-600 text-white shadow-xs"
                        : "text-slate-600 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {link.label}
                      {link.badge && (
                        <span className="rounded-full bg-blue-100 text-blue-700 px-1.5 py-0.2 text-[0.55rem] font-bold">
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
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50 px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-[0.1em] text-blue-700">
                <span className="size-2 rounded-full bg-blue-600 animate-pulse" /> 2 Slots Open
              </span>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-4 py-2 font-display text-[0.72rem] font-bold uppercase tracking-[0.06em] text-white shadow-md shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                <Zap className="size-3.5 text-sky-200" />
                Start a project
                <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-slate-200 bg-slate-100 shadow-xs transition active:scale-95 lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5 text-blue-600" /> : <Menu className="size-5 text-slate-800" />}
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
              <div className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-xl backdrop-blur-lg">
                <div className="flex flex-col gap-2">
                  {links.map((link) => {
                    const active = isLinkActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-sm font-bold uppercase tracking-wider transition ${
                          active
                            ? "bg-blue-600 text-white"
                            : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                        }`}
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs font-bold">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-blue-500/20"
                  >
                    <Zap className="size-4" />
                    Start a project on WhatsApp
                  </a>

                  <div className="flex items-center justify-around pt-2 text-xs font-semibold text-slate-500">
                    <Link href="/careers" onClick={() => setMobileOpen(false)} className="hover:text-blue-600 transition">
                      Careers
                    </Link>
                    <span>·</span>
                    <Link href="/compare" onClick={() => setMobileOpen(false)} className="hover:text-blue-600 transition">
                      Compare Agency
                    </Link>
                    <span>·</span>
                    <Link href="/resources" onClick={() => setMobileOpen(false)} className="hover:text-blue-600 transition">
                      Resources
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

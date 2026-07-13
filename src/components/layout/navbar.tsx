"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE, waLink } from "@/lib/site";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "#FFFFFF" : "transparent",
          borderBottom: scrolled ? "1px solid #E8E6E1" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div
          className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6"
        >
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="text-[18px] font-extrabold tracking-tight text-[#0F0E0D] hover:opacity-80 transition-opacity"
            aria-label="NextScale home"
          >
            NextScale
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[#0F0E0D] hover:text-[#1A56DB] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[6px] bg-[#1A56DB] px-5 py-[10px] text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#1447C0]"
            >
              WhatsApp us →
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className="block h-[2px] w-6 bg-[#0F0E0D] transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              className="block h-[2px] w-6 bg-[#0F0E0D] transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-6 bg-[#0F0E0D] transition-all duration-300 origin-center"
              style={{
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileOpen ? "400px" : "0",
            background: "#FFFFFF",
            borderBottom: mobileOpen ? "1px solid #E8E6E1" : "none",
          }}
        >
          <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-[15px] font-medium text-[#0F0E0D] hover:text-[#1A56DB] border-b border-[#E8E6E1] last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-[6px] bg-[#1A56DB] px-5 py-3 text-[15px] font-semibold text-white hover:bg-[#1447C0] transition-colors"
            >
              WhatsApp us →
            </a>
          </nav>
        </div>
      </header>
      {/* Spacer so content doesn't hide under fixed header */}
      <div className="h-16" />
    </>
  );
}

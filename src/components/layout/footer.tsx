"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { SITE, waLink } from "@/lib/site";

type IconProps = React.SVGProps<SVGSVGElement>;

const LinkedInIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.5 1.8 1.8 0 0 1 0 3.5zM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.6-1.8 1.3-.1.2-.1.5-.1.8V19h-3V8h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1V19z" />
  </svg>
);

const GitHubIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const XIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M18.9 1.2h3.7l-8 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.4h2L6.5 3.3H4.4l13.2 17.3z" />
  </svg>
);

const InstagramIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const socials = [
  { label: "LinkedIn", Icon: LinkedInIcon, href: SITE.socials.linkedin },
  { label: "GitHub", Icon: GitHubIcon, href: SITE.socials.github },
  { label: "X / Twitter", Icon: XIcon, href: SITE.socials.twitter },
  { label: "Instagram", Icon: InstagramIcon, href: SITE.socials.instagram },
];

const serviceLinks = [
  { label: "AI Agents", href: "/services/ai-agents" },
  { label: "Websites", href: "/services/websites" },
  { label: "Digital Growth", href: "/services/digital-growth" },
  { label: "Pricing Plans", href: "/pricing" },
];

const resourceLinks = [
  { label: "Guides & SOPs", href: "/resources" },
  { label: "Calculators & Tools", href: "/tools" },
  { label: "Comparisons", href: "/compare" },
  { label: "Original Research", href: "/resources/research/ai-adoption-report" },
];

const companyLinks = [
  { label: "About Next Scale", href: "/about" },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Sales", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Refund Policy", href: "/legal/refund" },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      style={{ background: "#0F0E0D" }}
      className={`footer-root${isVisible ? " footer-visible" : ""}`}
    >
      {/* Animated gradient top border */}
      <div className="footer-top-border" aria-hidden="true" />

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="footer-col" style={{ transitionDelay: "0ms" }}>
            <Link
              href="/"
              onClick={handleLogoClick}
              className="footer-brand-logo"
              aria-label="NextScale home"
            >
              NextScale
            </Link>
            <p
              className="mt-3 text-[14px] leading-relaxed footer-tagline"
            >
              We build custom websites and AI automation systems for businesses across India.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-icon"
                >
                  <s.Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>

            {/* Contact details */}
            <div className="mt-5 text-[13px] flex flex-col gap-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 95564 36685</a>
            </div>

            {/* Made with love */}
            <p className="mt-6 text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              Made with ❤️ in India
            </p>
          </div>

          {/* Col 2 — Services links */}
          <div className="footer-col" style={{ transitionDelay: "80ms" }}>
            <p className="footer-col-heading">Services</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Resources links */}
          <div className="footer-col" style={{ transitionDelay: "160ms" }}>
            <p className="footer-col-heading">Resources</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Company links */}
          <div className="footer-col" style={{ transitionDelay: "240ms" }}>
            <p className="footer-col-heading">Company</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar mt-12 pt-6">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} NextScale. Built with Next.js + Supabase.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-2 sm:mt-0">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-bottom-legal-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

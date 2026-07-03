import type { Metadata } from "next";
import { SITE, SAME_AS, PRODUCTS, SERVICES, PRICING_FAQ } from "@/lib/site";

/**
 * Build a per-page Metadata object with sane SEO defaults: a canonical URL,
 * Open Graph + Twitter cards, and keyword hints. Pages pass only what differs
 * from the root layout; everything else is inherited or filled in here.
 */
export function pageMeta({
  title,
  description,
  path = "/",
  keywords,
  noindex,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noindex?: boolean;
}): Metadata {
  const url = new URL(path, SITE.url).toString();
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${title} — ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE.name}`,
      description,
    },
  };
}

/* ─── JSON-LD structured data (AEO / GEO) ───────────────────────────────────
 * Answer- and generative-engine optimization lean heavily on schema.org so that
 * crawlers and LLMs can extract facts unambiguously. Each helper returns a plain
 * object that the <JsonLd> component serializes into a <script type="ld+json">. */

const abs = (path = "/") => new URL(path, SITE.url).toString();

/** The publishing organization — referenced by every other entity via @id. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: abs("/icon.svg"),
    description: SITE.description,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    founder: { "@type": "Person", "@id": `${SITE.url}/#founder`, name: SITE.founder },
    sameAs: SAME_AS,
    areaServed: { "@type": "Country", name: "India" },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.region.city,
      addressRegion: SITE.region.state,
      addressCountry: SITE.region.countryCode,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE.email,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

/** The website itself, with a SearchAction so engines surface a sitelinks box. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

/** Marks a page as a node in the site hierarchy + its breadcrumb trail. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** Software/product schema for a Buildora product (ExamOS, Aura). */
export function productSchema(p: (typeof PRODUCTS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${p.name} — ${p.tagline}`,
    description: p.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    url: abs(p.href),
    featureList: p.features,
    publisher: { "@id": `${SITE.url}/#organization` },
    offers: { "@type": "Offer", availability: "https://schema.org/PreOrder", price: "0", priceCurrency: "INR" },
  };
}

/** Service schema for an offering (AI Agents, Websites, Digital Growth). */
export function serviceSchema(s: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    url: abs(s.href),
    serviceType: s.name,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
  };
}

/** FAQPage schema — a primary AEO signal. Defaults to the pricing FAQ. */
export function faqSchema(faqs: { q: string; a: string }[] = PRICING_FAQ) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Person schema for Abhisek Pani — the primary GEO/AEO entity signal.
 * Links the founder to the organization and all social profiles so Google
 * can build a Knowledge Graph entry for “Abhisek Pani” and
 * “founder of Nextscale” queries.
 */
export function founderPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#founder`,
    name: "Abhisek Pani",
    alternateName: ["Abhisek", "Abhisek Pani Nextscale"],
    url: `${SITE.url}/about`,
    email: SITE.email,
    jobTitle: "Founder & CEO",
    description:
      "Abhisek Pani is the founder and CEO of Nextscale, an AI products and digital infrastructure company based in Bhubaneswar, Odisha, India. He is a self-taught builder who creates AI agents, SaaS products, and digital growth systems for businesses across India and globally.",
    nationality: {
      "@type": "Country",
      name: "India",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    founder: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
    },
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "SaaS Products",
      "Web Development",
      "Digital Marketing",
      "EdTech",
      "Business Automation",
      "Next.js",
      "React",
      "Machine Learning",
    ],
    sameAs: SITE.founderSameAs,
    image: {
      "@type": "ImageObject",
      url: abs("/icon.svg"),
    },
  };
}

/**
 * ProfilePage schema — marks the /about page as the canonical profile page
 * for Abhisek Pani. This is a strong AEO/GEO signal for AI search engines
 * (Google SGE, Gemini, Perplexity) to surface your profile when someone
 * asks “who is Abhisek Pani” or “who founded Nextscale”.
 */
export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}/about#profilepage`,
    url: `${SITE.url}/about`,
    name: "Abhisek Pani — Founder of Nextscale",
    description:
      "Profile page of Abhisek Pani, founder and CEO of Nextscale. Learn about Abhisek’s journey as a self-taught AI builder from Odisha who created Nextscale to build AI products and digital infrastructure for businesses across India.",
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#founder` },
    mainEntity: { "@id": `${SITE.url}/#founder` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "About Abhisek Pani", item: `${SITE.url}/about` },
      ],
    },
  };
}

import type { Metadata } from "next";
import { SITE, SAME_AS, PRODUCTS, SERVICES, PRICING_FAQ, TESTIMONIALS } from "@/lib/site";

/**
 * Build a per-page Metadata object with sane SEO defaults: an absolute canonical URL,
 * Open Graph + Twitter cards, and keyword hints. Pages pass only what differs
 * from the root layout; everything else is inherited or filled in here.
 */
export function pageMeta({
  title,
  description,
  path = "/",
  keywords,
  image = "/opengraph-image",
  noindex,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
}): Metadata {
  const url = new URL(path, SITE.url).toString();
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${title} — ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${SITE.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE.name}`,
      description,
      images: [image],
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
    logo: abs("/nextscale-favicon.svg"),
    image: abs("/opengraph-image"),
    description: SITE.description,
    email: SITE.email,
    foundingDate: SITE.foundingDate,
    founder: {
      "@type": "Person",
      "@id": `${SITE.url}/#founder`,
      name: SITE.founder,
      url: `${SITE.url}/about`,
      sameAs: SITE.founderSameAs,
    },
    sameAs: SAME_AS,
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support & sales",
      telephone: `+91 ${SITE.whatsapp}`,
      email: SITE.email,
      areaServed: ["IN", "AE", "GB", "US"],
      availableLanguage: ["English", "Hindi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${SITE.url}/#offercatalog`,
      name: "Next Scale Digital & AI Systems",
      itemListElement: SERVICES.map((s, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: abs(s.href),
        },
      })),
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
    alternateName: ["NextScale", "Next Scale Technologies", "nextscale.co.in"],
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
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

/** Software/product schema for a Nextscale product (ExamOS, Aura). */
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
 * Links the founder to the organization and all social profiles.
 */
export function founderPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#founder`,
    name: "Abhisek Pani",
    givenName: "Abhisek",
    familyName: "Pani",
    alternateName: [
      "Abhisek Pani Next Scale",
      "Abhisek Pani Nextscale",
      "Abhisek Pani Founder",
      "Abhisek Pani CEO",
      "Abhisek",
    ],
    url: `${SITE.url}/about`,
    email: SITE.email,
    jobTitle: "Founder & Lead Software Architect",
    description:
      "Abhisek Pani is the founder and CEO of Next Scale (nextscale.co.in). He is a software architect who engineers sub-second Next.js web applications, autonomous WhatsApp AI agents, and digital growth infrastructure for businesses across India and globally.",
    nationality: {
      "@type": "Country",
      name: "India",
    },
    homeLocation: {
      "@type": "Place",
      name: "Bhubaneswar, Odisha, India",
    },
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    founderOf: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Autonomous WhatsApp AI Agents",
      "Next.js 16 Web Development",
      "Full-Stack Software Architecture",
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "Supabase & PostgreSQL Database Design",
      "Business Automation & Workflow Engineering",
    ],
    sameAs: SITE.founderSameAs,
    image: {
      "@type": "ImageObject",
      url: abs("/opengraph-image"),
      caption: "Abhisek Pani — Founder of Next Scale",
    },
    mainEntityOfPage: `${SITE.url}/about`,
  };
}

/**
 * ProfilePage schema — marks the /about page as the canonical profile page
 * for Abhisek Pani. This is a strong AEO/GEO signal for AI search engines
 * to surface founder info.
 */
export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}/about#profilepage`,
    url: `${SITE.url}/about`,
    name: "Abhisek Pani — Founder of Next Scale",
    description:
      "Profile page of Abhisek Pani, founder and CEO of Next Scale. Learn about Abhisek’s journey as an AI builder who created Next Scale to build AI products and digital infrastructure for businesses.",
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

/** LocalBusiness schema for rich snippet local indexing */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    legalName: SITE.legalName,
    image: abs("/opengraph-image"),
    logo: abs("/nextscale-favicon.svg"),
    priceRange: "$$",
    telephone: `+91 ${SITE.whatsapp}`,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.region.city,
      addressRegion: SITE.region.state,
      addressCountry: SITE.region.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.2961",
      longitude: "85.8245",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    url: SITE.url,
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/** Reviews schema generating dynamic Review models based on testimonials */
export function reviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Next Scale Client Reviews",
    itemListElement: TESTIMONIALS.map((t, idx) => ({
      "@type": "Review",
      position: idx + 1,
      itemReviewed: {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#localbusiness`,
        name: SITE.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: t.author,
      },
      reviewBody: t.quote,
    })),
  };
}

/** AggregateRating schema indicating overall client rating score */
export function aggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${SITE.name} Services`,
    image: abs("/icon.svg"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: TESTIMONIALS.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

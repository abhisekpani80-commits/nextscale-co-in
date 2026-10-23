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
      "Abhisek Pani Author",
      "Abhisek Pani Build Solo",
      "Abhisek",
    ],
    url: `${SITE.url}/about/abhisek-pani`,
    email: SITE.email,
    jobTitle: "Founder, Lead Software Architect & Author of Build Solo",
    description:
      "Abhisek Pani is a software architect, technology founder, and author based in Bhubaneswar, Odisha, India. He is the founder and CEO of Next Scale (nextscale.co.in) and author of Build Solo, specializing in sub-second Next.js web applications, autonomous WhatsApp AI agents, and independent solo software engineering.",
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
      "Build Solo (Solopreneurship & AI Architecture)",
      "Artificial Intelligence & Agentic Engineering",
      "Autonomous WhatsApp AI Agents",
      "Next.js 16 Web Development",
      "Full-Stack Software Architecture",
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "Supabase & PostgreSQL Database Design",
      "Business Automation & Workflow Engineering",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Works by Abhisek Pani",
      itemListElement: [
        {
          "@type": "Book",
          name: "Build Solo",
          author: "Abhisek Pani",
          description: "The Solo Builder's Blueprint for Shipping Production AI & Software at Venture Velocity.",
          inLanguage: "en",
        },
      ],
    },
    sameAs: SITE.founderSameAs,
    image: {
      "@type": "ImageObject",
      url: abs("/opengraph-image"),
      caption: "Abhisek Pani — Founder of Next Scale and Author of Build Solo",
    },
    mainEntityOfPage: `${SITE.url}/about/abhisek-pani`,
  };
}

/**
 * Schema for Build Solo by Abhisek Pani.
 */
export function founderBookSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${SITE.url}/about/abhisek-pani#build-solo`,
    name: "Build Solo",
    alternateName: "Build Solo by Abhisek Pani",
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/#founder`,
      name: "Abhisek Pani",
      url: `${SITE.url}/about/abhisek-pani`,
    },
    description:
      "Build Solo is a software engineering guide and solopreneur manifesto authored by Abhisek Pani. It breaks down how modern solo builders, developers, and founders can build and launch production-grade software, WhatsApp AI bots, and profitable businesses in record time without bloated teams.",
    genre: ["Software Engineering", "Artificial Intelligence", "Entrepreneurship", "Solopreneurship"],
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Next Scale",
      url: SITE.url,
    },
  };
}

/**
 * FAQPage Schema for Abhisek Pani profile queries.
 */
export function founderFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/about/abhisek-pani#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Abhisek Pani?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Abhisek Pani is a software architect, technology founder, and author based in Bhubaneswar, Odisha, India. He is the founder and CEO of Next Scale (nextscale.co.in) and the author of Build Solo.",
        },
      },
      {
        "@type": "Question",
        name: "What is Build Solo by Abhisek Pani?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Build Solo is an engineering methodology and book authored by Abhisek Pani. It provides a step-by-step roadmap for developers and solo founders to build, ship, and monetize high-performance web applications and AI systems independently.",
        },
      },
      {
        "@type": "Question",
        name: "What companies and products has Abhisek Pani created?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Abhisek Pani founded Next Scale (a high-speed web and WhatsApp AI studio), created ExamOS (an AI-powered exam preparation engine), Aura AI (voice intelligence tool), and authored the book Build Solo.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Abhisek Pani from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Abhisek Pani is from Bhubaneswar, Odisha, India, and works with clients and companies across India, the United States, and the UAE.",
        },
      },
    ],
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
      "Profile page of Abhisek Pani, founder and CEO of Next Scale and author of Build Solo. Learn about Abhisek’s journey as an AI builder who created Next Scale to build AI products and digital infrastructure for businesses.",
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
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
      ],
    },
  };
}

/**
 * Dedicated Personal ProfilePage Schema for /about/abhisek-pani
 */
export function founderDedicatedProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}/about/abhisek-pani#profilepage`,
    url: `${SITE.url}/about/abhisek-pani`,
    name: "Abhisek Pani — Founder & Lead Software Architect at Next Scale, Author of Build Solo",
    description:
      "Official entity and personal profile of Abhisek Pani, founder and CEO of Next Scale and author of Build Solo. Software architect engineering custom Next.js websites and autonomous WhatsApp AI agents based in Bhubaneswar, Odisha.",
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#founder` },
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE.url}/#founder`,
      name: "Abhisek Pani",
      givenName: "Abhisek",
      familyName: "Pani",
      jobTitle: "Founder, Lead Software Architect & Author of Build Solo",
      url: `${SITE.url}/about/abhisek-pani`,
      sameAs: SITE.founderSameAs,
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
      homeLocation: {
        "@type": "Place",
        name: "Bhubaneswar, Odisha, India",
      },
      knowsAbout: [
        "Build Solo",
        "Artificial Intelligence",
        "Autonomous WhatsApp AI Agents",
        "Next.js 16 Web Engineering",
        "React 19 & Full-Stack Architecture",
        "Search Engine Optimization (SEO)",
        "Generative Engine Optimization (GEO)",
        "Supabase & PostgreSQL Systems",
        "Workflow Automation & Anti-Agency Principles",
      ],
      mainEntityOfPage: `${SITE.url}/about/abhisek-pani`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
        { "@type": "ListItem", position: 3, name: "Abhisek Pani", item: `${SITE.url}/about/abhisek-pani` },
      ],
    },
  };
}

/**
 * Dedicated Company AboutPage Schema for /about/next-scale
 */
export function companyAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/about/next-scale#aboutpage`,
    url: `${SITE.url}/about/next-scale`,
    name: "About Next Scale — AI-First Web Engineering & Digital Growth Studio",
    description:
      "Next Scale is an AI-first web engineering and digital growth studio founded by Abhisek Pani in Bhubaneswar, Odisha. Delivering custom Next.js websites live in 7 days and 24/7 autonomous WhatsApp AI receptionists.",
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    mainEntity: { "@id": `${SITE.url}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
        { "@type": "ListItem", position: 3, name: "Next Scale Studio", item: `${SITE.url}/about/next-scale` },
      ],
    },
  };
}

/**
 * Press & Media Kit Schema for /press
 */
export function pressPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/press#presspage`,
    url: `${SITE.url}/press`,
    name: "Next Scale Press Kit & Media Information",
    description:
      "Official press kit, brand facts, founder biography, high-resolution logos, and media contact details for Next Scale and founder Abhisek Pani.",
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: [
      { "@id": `${SITE.url}/#organization` },
      { "@id": `${SITE.url}/#founder` },
    ],
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Press & Media Kit", item: `${SITE.url}/press` },
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

import type { MetadataRoute } from "next";
import { SITE, NAV, LEGAL_LINKS, PRODUCTS, SERVICES, PORTFOLIO, INDUSTRIES_DATA, LOCATIONS_DATA } from "@/lib/site";
import { RESOURCES_DATA } from "@/lib/resources-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => new URL(path, SITE.url).toString();

  type Entry = MetadataRoute.Sitemap[number];

  const home: Entry = { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 };

  // Top-level marketing routes carry the most weight.
  const primary: Entry[] = NAV.map((n) => ({
    url: url(n.href),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Additional core routes
  const extraCore: Entry[] = [
    { url: url("/tools"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/compare"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/products"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/resources"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/careers/apply"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  // Product & service detail pages.
  const detail: Entry[] = [...PRODUCTS, ...SERVICES].map((item) => ({
    url: url(item.href),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Case Studies
  const caseStudies: Entry[] = PORTFOLIO.filter((p) => p.slug).map((item) => ({
    url: url(`/case-studies/${item.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic Industry Pages
  const industries: Entry[] = INDUSTRIES_DATA.map((ind) => ({
    url: url(`/industries/${ind.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Dynamic Location Pages
  const locations: Entry[] = LOCATIONS_DATA.map((loc) => ({
    url: url(`/locations/${loc.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Resources & Guides
  const resources: Entry[] = RESOURCES_DATA.map((res) => ({
    url: url(`/resources/${res.category}/${res.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Legal pages
  const legal: Entry[] = LEGAL_LINKS.map((l) => ({
    url: url(l.href),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [
    home,
    ...primary,
    ...extraCore,
    ...detail,
    ...caseStudies,
    ...industries,
    ...locations,
    ...resources,
    ...legal,
  ];
}


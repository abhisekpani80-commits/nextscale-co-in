import type { MetadataRoute } from "next";
import { SITE, NAV, LEGAL_LINKS, PRODUCTS, SERVICES } from "@/lib/site";

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

  // Product & service detail pages.
  const detail: Entry[] = [...PRODUCTS, ...SERVICES].map((item) => ({
    url: url(item.href),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const apply: Entry = {
    url: url("/careers/apply"),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  };

  // Legal pages — low priority, rarely change.
  const legal: Entry[] = LEGAL_LINKS.map((l) => ({
    url: url(l.href),
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [home, ...primary, ...detail, apply, ...legal];
}

import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Crawl rules. We explicitly welcome the major AI / answer-engine crawlers
 * (GEO/AEO) so the brand can be cited in generative search, while keeping
 * Next.js internals and the API surface out of the index.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot", // OpenAI
    "OAI-SearchBot", // ChatGPT Search
    "ChatGPT-User",
    "ClaudeBot", // Anthropic
    "Claude-User",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended", // Gemini / AI Overviews
    "Applebot-Extended",
    "Bingbot",
    "CCBot", // Common Crawl
    "Amazonbot",
    "DuckAssistBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      // Grant the AI crawlers full read access to the public site.
      { userAgent: aiBots, allow: "/", disallow: ["/api/"] },
    ],
    sitemap: new URL("/sitemap.xml", SITE.url).toString(),
    host: SITE.url,
  };
}

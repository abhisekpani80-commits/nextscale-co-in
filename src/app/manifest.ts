import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — AI Products & Digital Infrastructure`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF3E5",
    theme_color: "#FAF3E5",
    lang: "en-IN",
    categories: ["business", "productivity", "technology"],
    icons: [
      { src: "/nextscale-favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}

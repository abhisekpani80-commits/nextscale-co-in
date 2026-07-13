import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact — Get a Website or AI Agent Quote",
  description:
    "Talk to Nextscale about AI agents, websites, and digital growth. WhatsApp is fastest — we reply within the hour. Bhubaneswar, India.",
  path: "/contact",
  keywords: ["contact Nextscale", "AI agent quote India", "WhatsApp business automation", "website quote India"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

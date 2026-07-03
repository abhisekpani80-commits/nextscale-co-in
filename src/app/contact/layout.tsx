import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Talk to Buildora about AI agents, websites, and digital growth. WhatsApp is fastest — we reply within the hour.",
  path: "/contact",
  keywords: ["contact Buildora", "AI agency India contact", "WhatsApp business automation"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Services — AI Agents, Websites & Digital Growth",
  description:
    "WhatsApp AI receptionists, custom websites, and digital marketing for clinics and SMBs in India.",
  path: "/services",
  keywords: [
    "AI agents India",
    "WhatsApp AI receptionist",
    "business websites India",
    "local SEO Odisha",
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

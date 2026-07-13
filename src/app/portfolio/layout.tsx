import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Portfolio — Websites & AI Agents We've Shipped",
  description:
    "Real websites, AI agents, and digital-growth projects Next Scale has shipped for clinics, real estate agents, and businesses across India. See results.",
  path: "/portfolio",
  keywords: ["website design India", "AI agent case studies", "clinic website India", "Next Scale portfolio", "business website examples"],
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

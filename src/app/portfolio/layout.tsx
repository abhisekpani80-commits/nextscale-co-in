import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Portfolio",
  description:
    "Real websites, AI agents, and digital-growth projects Buildora has shipped for clinics and businesses across India.",
  path: "/portfolio",
  keywords: ["Buildora portfolio", "AI agent case studies", "clinic website examples India"],
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

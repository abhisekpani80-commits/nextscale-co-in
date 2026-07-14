import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Pricing — AI Agents from ₹11,999 ($599)/mo, Websites from ₹19,999 ($499)",
  description: "Transparent pricing for custom Next.js websites and WhatsApp AI receptionists. Choose a plan that aligns with your business goals.",
  path: "/pricing",
  keywords: ["AI agent pricing", "website development cost India", "business automation packages"]
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

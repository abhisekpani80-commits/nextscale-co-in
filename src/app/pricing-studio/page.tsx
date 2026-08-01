import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PricingStudio } from "@/components/pricing/PricingStudio";
import { breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "India Pricing — Websites, AI Agents & Growth Systems",
  description: "India-first launch pricing for Next Scale websites, WhatsApp AI receptionists, and digital growth systems. Save up to 50% on selected packages.",
  path: "/pricing",
  image: "/og-image-v2.png",
  keywords: ["website pricing India", "WhatsApp AI agent price India", "digital marketing packages India", "business website cost India"],
});

export default function PricingStudioPage() {
  return <><JsonLd schema={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])]} /><PricingStudio /></>;
}

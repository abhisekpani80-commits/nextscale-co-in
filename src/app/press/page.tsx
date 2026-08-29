import type { Metadata } from "next";
import { PressView } from "@/components/press/press-view";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMeta, pressPageSchema, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Press & Media Kit — Next Scale & Founder Abhisek Pani",
  description:
    "Official press kit, brand facts, founder biography, high-resolution logos, and media contact details for Next Scale and founder Abhisek Pani.",
  path: "/press",
  keywords: [
    "Next Scale press kit",
    "Abhisek Pani media kit",
    "Next Scale news",
    "Abhisek Pani founder bio",
    "Next Scale brand assets",
    "AI startup Bhubaneswar press",
    "Next Scale logo download",
  ],
});

export default function PressPage() {
  return (
    <>
      <JsonLd schema={[pressPageSchema(), organizationSchema()]} />
      <PressView />
    </>
  );
}

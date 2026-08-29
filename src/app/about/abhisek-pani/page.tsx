import type { Metadata } from "next";
import { FounderEntityView } from "@/components/about/founder-entity-view";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMeta, founderDedicatedProfilePageSchema, founderPersonSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Abhisek Pani — Founder & Lead Software Architect at Next Scale",
  description:
    "Official entity and personal profile of Abhisek Pani, founder of Next Scale (nextscale.co.in). Software architect engineering sub-second Next.js web applications and autonomous WhatsApp AI agents based in Bhubaneswar, Odisha.",
  path: "/about/abhisek-pani",
  keywords: [
    "Abhisek Pani",
    "Abhisek Pani Next Scale",
    "Abhisek Pani Founder",
    "Abhisek Pani CEO",
    "Abhisek Pani Bhubaneswar",
    "Abhisek Pani Odisha",
    "Abhisek Pani software architect",
    "Abhisek Pani web developer",
    "Next Scale founder",
    "AI automation engineer Bhubaneswar",
  ],
});

export default function AbhisekPaniPage() {
  return (
    <>
      <JsonLd schema={[founderDedicatedProfilePageSchema(), founderPersonSchema()]} />
      <FounderEntityView />
    </>
  );
}

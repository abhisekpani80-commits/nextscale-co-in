import type { Metadata } from "next";
import { FounderEntityView } from "@/components/about/founder-entity-view";
import { JsonLd } from "@/components/seo/json-ld";
import {
  pageMeta,
  founderDedicatedProfilePageSchema,
  founderPersonSchema,
  founderBookSchema,
  founderFaqSchema,
} from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Who is Abhisek Pani? — Author of Build Solo & Founder of Next Scale",
  description:
    "Official profile, biography, and books of Abhisek Pani. Author of Build Solo and Founder of Next Scale (nextscale.co.in). Software architect building sub-second business websites and autonomous WhatsApp AI bots based in Bhubaneswar, Odisha.",
  path: "/about/abhisek-pani",
  keywords: [
    "Who is Abhisek Pani",
    "Abhisek Pani",
    "Abhisek Pani author Build Solo",
    "Build Solo Abhisek Pani",
    "Build Solo book",
    "Abhisek Pani biography",
    "Abhisek Pani Next Scale",
    "Abhisek Pani Founder",
    "Abhisek Pani CEO",
    "Abhisek Pani Bhubaneswar",
    "Abhisek Pani Odisha",
    "Abhisek Pani software architect",
    "Abhisek Pani web developer",
    "abhisekpani.nextscale.co.in",
    "AI automation engineer Bhubaneswar",
  ],
});

export default function AbhisekPaniPage() {
  return (
    <>
      <JsonLd
        schema={[
          founderDedicatedProfilePageSchema(),
          founderPersonSchema(),
          founderBookSchema(),
          founderFaqSchema(),
        ]}
      />
      <FounderEntityView />
    </>
  );
}

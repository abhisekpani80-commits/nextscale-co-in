import type { Metadata } from "next";
import { AboutView } from "@/components/about/about-view";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMeta, profilePageSchema, founderPersonSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Abhisek Pani — Founder & CEO of Next Scale",
  description:
    "Meet Abhisek Pani, founder and software architect behind Next Scale (nextscale.co.in). Discover the studio manifesto, anti-agency principles, and 7-day velocity delivery.",
  path: "/about",
  keywords: [
    "Abhisek Pani",
    "Abhisek Pani Next Scale",
    "Abhisek Pani Founder",
    "Abhisek Pani CEO",
    "Next Scale Founder",
    "Next Scale Technologies",
    "Abhisek Pani Bhubaneswar",
    "AI automation founder India",
    "Next.js engineer Odisha",
    "Abhisek Pani software architect",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={[profilePageSchema(), founderPersonSchema()]} />
      <AboutView />
    </>
  );
}


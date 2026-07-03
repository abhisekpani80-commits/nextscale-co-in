import type { Metadata } from "next";
import { LegalDocView } from "@/components/legal/legal-doc";
import { pageMeta } from "@/lib/seo";
import { DISCLAIMER } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: DISCLAIMER.title,
  description: DISCLAIMER.summary,
  path: "/legal/disclaimer",
});

export default function DisclaimerPage() {
  return <LegalDocView doc={DISCLAIMER} />;
}

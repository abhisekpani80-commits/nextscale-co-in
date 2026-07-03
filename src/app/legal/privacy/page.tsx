import type { Metadata } from "next";
import { LegalDocView } from "@/components/legal/legal-doc";
import { pageMeta } from "@/lib/seo";
import { PRIVACY } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: PRIVACY.title,
  description: PRIVACY.summary,
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return <LegalDocView doc={PRIVACY} />;
}

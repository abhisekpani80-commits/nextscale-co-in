import type { Metadata } from "next";
import { CompanyEntityView } from "@/components/about/company-entity-view";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMeta, companyAboutPageSchema, organizationSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Next Scale — AI-First Web Engineering & Digital Growth Studio",
  description:
    "Next Scale is an AI-first web engineering and digital growth studio founded by Abhisek Pani in Bhubaneswar, Odisha. Delivering custom Next.js websites live in 7 days and 24/7 autonomous WhatsApp AI receptionists.",
  path: "/about/next-scale",
  keywords: [
    "Next Scale",
    "Next Scale Technologies",
    "About Next Scale",
    "Next Scale Bhubaneswar",
    "Next Scale Odisha",
    "Next.js agency India",
    "WhatsApp AI agents Next Scale",
    "Abhisek Pani Next Scale",
    "custom web development Bhubaneswar",
    "AI automation studio India",
  ],
});

export default function NextScaleCompanyPage() {
  return (
    <>
      <JsonLd schema={[companyAboutPageSchema(), organizationSchema()]} />
      <CompanyEntityView />
    </>
  );
}

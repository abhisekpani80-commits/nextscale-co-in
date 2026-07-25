import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/ui/page-hero";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services & Turnkey Packages — High-Impact Web & Business Systems",
  description:
    "Explore 100+ expert services & turnkey industry packages. Custom Next.js web development, process automation, content copywriting, voice production & 24/7 autonomous AI agents.",
  path: "/services",
  keywords: [
    "Web Development Services India",
    "Turnkey Industry Packages",
    "Healthcare Clinic Web Suite",
    "Real Estate Website Packages",
    "Process Automation Agency",
    "Autonomous AI Agents",
    "Conversion Copywriting",
    "Voiceover & Audio Production",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <PageHero
        kicker="Full Agency & Technical Capabilities"
        title={
          <>
            Digital infrastructure & turnkey suites for{" "}
            <span className="text-[#1A56DB]">ambitious businesses worldwide</span>.
          </>
        }
        description="From high-speed Next.js web applications and done-for-you conversion engines to 24/7 autonomous AI agents. Explore our complete service catalog."
      />

      {/* Main Services Catalog & Interactive Navigator */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <ServicesCatalog />
      </section>
    </>
  );
}

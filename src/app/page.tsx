import { LayeredHero } from "@/components/landing/layered-hero";
import { MetricTape } from "@/components/landing/metric-tape";
import { SystemsArchitecture } from "@/components/landing/systems-architecture";
import { LeakDiagnostic } from "@/components/landing/leak-diagnostic";
import { ProofBento } from "@/components/landing/proof-bento";
import { SprintTimeline } from "@/components/landing/sprint-timeline";
import { TestimonialShowcase } from "@/components/landing/testimonial-showcase";
import { ConversionTerminal } from "@/components/landing/conversion-terminal";
import { MobileQuickBar } from "@/components/landing/mobile-quick-bar";
import { ClickSpark } from "@/components/ui/click-spark";

export default function Home() {
  return (
    <ClickSpark sparkColor="#2563EB" sparkCount={12} sparkRadius={24} buttonsOnly>
      <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-hidden font-sans antialiased">
        <div>
          {/* 1. Scrollcraft Layered Hero with Side Navigation and Dynamic Value Proposition */}
          <LayeredHero />

          {/* 2. Infinite Metric Running Tape */}
          <MetricTape />

          {/* 3. Dual-Engine Architecture (Digital Storefront + 24/7 WhatsApp Concierge) */}
          <SystemsArchitecture />

          {/* 4. Bespoke Signature Move: Interactive Revenue Leak Simulator */}
          <LeakDiagnostic />

          {/* 5. Proof Bento & Flagship Case Story */}
          <ProofBento />

          {/* 6. React Bits AccordionGallery: 6 Verified Operator Reviews */}
          <TestimonialShowcase />

          {/* 7. The 7-Day Sprint Roadmap & Delivery Guarantee */}
          <SprintTimeline />

          {/* 8. Final High-Ticket Conversion Terminal */}
          <ConversionTerminal />
        </div>

        {/* 9. Mobile Quick-Action Consultation Bar (< 768px) */}
        <MobileQuickBar />
      </div>
    </ClickSpark>
  );
}

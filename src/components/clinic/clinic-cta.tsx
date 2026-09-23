import { RollingButton } from "@/components/ui/RollingButton";

const WA_DIAGNOSIS_URL =
  "https://wa.me/919556436685?text=Hi%20NextScale!%20I'd%20like%20to%20book%20a%20Revenue%20Architecture%20Diagnosis%20for%20my%20business.";

export function ClinicCTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative text-center border-y border-white/[0.08] bg-gradient-to-b from-[#111116] via-[#111116] to-[#0b0b0e]"
    >
      <div className="container-clinic">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-5">
            Let&apos;s Fix What&apos;s Leaking In Your <br />
            <span className="text-gradient">Revenue Architecture.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#8e8e9c] leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your business on WhatsApp. We will diagnose your front-door and back-office leaks and send a fixed scope proposal within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <RollingButton
              href={WA_DIAGNOSIS_URL}
              text="Book Your Diagnosis on WhatsApp"
              variant="primary"
              className="text-sm sm:text-base font-bold py-4 px-8"
            />
            <RollingButton
              href="mailto:biz.abhisek@gmail.com"
              text="Email Direct Proposal"
              variant="outline"
              className="text-sm sm:text-base py-4 px-7 font-semibold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card3D } from "@/components/ui/Card3D";

const STEPS = [
  {
    num: "01",
    name: "Diagnose",
    desc: "We audit your website speed, conversion drop-off points, and manual response delays to map the exact revenue leak.",
  },
  {
    num: "02",
    name: "Prescribe",
    desc: "We design your custom high-speed website and set up the 24/7 WhatsApp AI bot tailored to your services and pricing.",
  },
  {
    num: "03",
    name: "Deploy",
    desc: "We build, test API webhooks, sync Google Calendar, connect DNS edge hosting, and take the live system to production.",
  },
  {
    num: "04",
    name: "Monitor",
    desc: "We provide 30 days of active prompt tuning, Core Web Vitals maintenance, and handover 100% repository code ownership.",
  },
];

export function ClinicProcess() {
  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="container-clinic">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#8e8e9c] mb-3">
            Implementation Methodology
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            The 7-Day Sprint. <br />
            <span className="text-gradient">From Diagnosis to Live.</span>
          </h2>
        </div>

        {/* Process Steps Container with dashed track line */}
        <div className="relative">
          {/* Dashed Connecting Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-0.5 z-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ec4899 40%, rgba(255,255,255,0) 0%)",
              backgroundPosition: "bottom",
              backgroundSize: "14px 2px",
              backgroundRepeat: "repeat-x",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {STEPS.map((step) => (
              <Card3D key={step.num} tiltIntensity={10} spotlightColor="rgba(249, 115, 22, 0.18)">
                <div className="flex flex-col items-start gap-4 bg-[#111116] border border-white/[0.08] rounded-2xl p-6 sm:p-7 relative h-full">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-[#ec4899] via-[#f97316] to-[#fbbf24] flex items-center justify-center font-heading font-black text-sm text-[#0b0b0e] shadow-[0_4px_12px_rgba(249,115,22,0.35)]">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8e8e9c] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

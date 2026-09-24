import { Card3D } from "@/components/ui/Card3D";

export function ClinicCaseStudy() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container-clinic">
        <div className="bg-[#18181f] border border-white/[0.14] rounded-3xl p-6 sm:p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
          
          {/* Left / Info Column */}
          <div className="lg:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] mb-4">
              <span className="text-[#fbbf24]">★</span>
              <span>Featured Diagnosis Case Study</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#8e8e9c] mb-2">
              Multi-Location Healthcare & Aesthetics Group
            </h3>

            <div className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight my-4">
              <span className="text-gradient">+184%</span> <br />
              <span className="text-white">Qualified Bookings in 45 Days</span>
            </div>

            <p className="text-[#8e8e9c] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Replaced a slow 4.6s WordPress site and delayed staff replies with a fast sub-second NextScale web app and a 24/7 WhatsApp AI bot. Night-time lead loss was reduced to zero.
            </p>

            {/* Stacked client list with thin gradient underlines */}
            <ul className="flex flex-col gap-4">
              <li className="pb-3 relative flex justify-between items-center font-heading text-sm sm:text-base font-bold text-white border-b border-white/[0.08] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-[#ec4899] after:via-[#f97316] after:to-[#fbbf24] after:opacity-40">
                <span>Meridian Specialty Clinics</span>
                <span className="font-body text-xs sm:text-sm text-[#f97316] font-semibold">
                  +210% After-Hours Bookings
                </span>
              </li>

              <li className="pb-3 relative flex justify-between items-center font-heading text-sm sm:text-base font-bold text-white border-b border-white/[0.08] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-[#ec4899] after:via-[#f97316] after:to-[#fbbf24] after:opacity-40">
                <span>Vantage B2B Architecture</span>
                <span className="font-body text-xs sm:text-sm text-[#f97316] font-semibold">
                  0.5s Global Load Velocity
                </span>
              </li>

              <li className="pb-3 relative flex justify-between items-center font-heading text-sm sm:text-base font-bold text-white border-b border-white/[0.08] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gradient-to-r after:from-[#ec4899] after:via-[#f97316] after:to-[#fbbf24] after:opacity-40">
                <span>Lumière Aesthetics Group</span>
                <span className="font-body text-xs sm:text-sm text-[#f97316] font-semibold">
                  65% No-Show Reduction
                </span>
              </li>
            </ul>
          </div>

          {/* Right / Architecture Nodes Column */}
          <div className="lg:col-span-5 relative">
            <Card3D tiltIntensity={10} spotlightColor="rgba(249, 115, 22, 0.18)">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#111116] to-[#15151c] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-center min-h-[300px]">
            <div className="font-heading text-xs font-black uppercase tracking-wider text-[#f97316] mb-5">
              System Architecture Deployed
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3.5 text-xs sm:text-sm">
                <span className="text-[#ec4899] font-bold">Node 01:</span> Edge-Cached Static Front Door
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3.5 text-xs sm:text-sm">
                <span className="text-[#f97316] font-bold">Node 02:</span> Meta Cloud WhatsApp Webhook Router
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-3.5 text-xs sm:text-sm">
                <span className="text-[#fbbf24] font-bold">Node 03:</span> Automated Calendar Slot Lock
              </div>
            </div>

            <div className="mt-8 text-xs text-[#545462] text-center font-medium">
              Deployed in 7 business days • 100% Code Handover
            </div>
          </div>
        </Card3D>
      </div>

        </div>
      </div>
    </section>
  );
}

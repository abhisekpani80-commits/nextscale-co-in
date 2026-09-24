import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function ClinicFooter() {
  return (
    <footer className="bg-[#0b0b0e] pt-16 md:pt-20 pb-10 border-t border-white/[0.08] text-sm text-[#8e8e9c]">
      <div className="container-clinic">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block mb-4"
              aria-label="NextScale Home"
            >
              <BrandLogo size="sm" showTag={true} />
            </Link>

            <p className="text-sm text-[#8e8e9c] leading-relaxed max-w-sm mb-5">
              A Revenue Architecture &amp; Operational Growth Clinic for ambitious businesses worldwide. Shipped in 7 days with zero code lock-in.
            </p>

            <div className="text-xs text-[#545462] font-medium">
              Headquartered in Bhubaneswar, Odisha 🇮🇳 • Operating Globally
            </div>
          </div>

          {/* Col 2: Systems */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Systems
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Digital Front Door
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Automated Back Office
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  WhatsApp AI Bot
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Local SEO Domination
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Sub-Second Web Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinic */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Clinic
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="#diagnosis" className="hover:text-white transition-colors">
                  The Two Cures
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-white transition-colors">
                  Proof &amp; ROI
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  7-Day Sprint Process
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919556436685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Founder Hotline
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Line */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Direct Line
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="https://wa.me/919556436685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +91 9556436685
                </a>
              </li>
              <li>
                <a
                  href="mailto:biz.abhisek@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  biz.abhisek@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abhisekpani80-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub / Open Code
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abhisek-pani-1b3592329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn / Abhisek Pani
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#545462]">
          <div>
            © 2026 NextScale Technologies. Founded by Abhisek Pani. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="hover:text-[#8e8e9c] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-[#8e8e9c] transition-colors">
              Terms of Architecture
            </Link>
            <span className="text-[#8e8e9c]">100% Code Handover</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

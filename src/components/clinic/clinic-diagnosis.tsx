"use client";

import { DiagnosisSlider } from "@/components/cinematic/DiagnosisSlider";

export function ClinicDiagnosis() {
  return (
    <section id="diagnosis" className="py-20 md:py-32 relative">
      <div className="container-clinic">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="font-heading font-bold text-xs sm:text-sm uppercase tracking-widest text-[#8e8e9c] mb-3">
            Operational Architecture
          </p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Elevate Your Growth Machine. <br />
            <span className="text-gradient">Two Systems. Zero Leaks.</span>
          </h2>
        </div>

        {/* Spatial Horizontal Depth Slider */}
        <div id="services">
          <DiagnosisSlider />
        </div>

      </div>
    </section>
  );
}

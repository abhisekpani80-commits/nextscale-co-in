"use client";

import React, { useState } from "react";

const CASES = [
  {
    name: "SKIL Events",
    logo: "https://cdn.88gravity.com/public/website/img/casestudy-logo-1.png",
    detailLogo: "https://cdn.88gravity.com/public/website/img/casedetail-logo-1.png",
    desc: "SKIL Events, a B2B event management company, engaged us for brand positioning in India & Middle East. Our strategy enhanced their brand presence and revenue growth resulting in",
    stat1: "40%",
    statLabel1: "Increase in brand visibility",
    stat2: "30%",
    statLabel2: "Rise in client enquiries",
  },
  {
    name: "AWL India",
    logo: "https://cdn.88gravity.com/public/website/img/casestudy-logo-2.png",
    detailLogo: "https://cdn.88gravity.com/public/website/img/casedetail-logo-2.png",
    desc: "To transform AWL\'s market presence in India and North America, we executed a brand repositioning strategy that strengthened their market position and enterprise relationships.",
    stat1: "50%",
    statLabel1: "Increase in brand engagement",
    stat2: "40%",
    statLabel2: "Rise in qualified leads",
  },
  {
    name: "Tiaraa Resorts",
    logo: "https://cdn.88gravity.com/public/website/img/casestudy-logo-3.png",
    detailLogo: "https://cdn.88gravity.com/public/website/img/casedetail-logo-3.png",
    desc: "We designed a cutting-edge website for Tiaraa Resorts and executed lead generation campaigns, delivering remarkable direct booking lift.",
    stat1: "30%",
    statLabel1: "Traffic boost",
    stat2: "25%",
    statLabel2: "Increase in direct bookings",
  },
  {
    name: "Muscletrail",
    logo: "https://cdn.88gravity.com/public/website/img/casestudy-logo-5.png",
    detailLogo: "https://cdn.88gravity.com/public/website/img/casedetail-logo-5.png",
    desc: "For Canadian brand Muscletrail, we developed a Gen Z-focused e-commerce store and launched lead generation campaigns on Meta and Google.",
    stat1: "35%",
    statLabel1: "Boost in website traffic",
    stat2: "28%",
    statLabel2: "Direct sales Increased",
  },
];

export function ExactCaseStudies() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = CASES[selectedIdx];

  const openEnquiry = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
    }
  };

  return (
    <section className="client-casestudy">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="heading center-heading">Unlocking Success Stories</h4>
          </div>

          {/* Left Column (Brand Logos) */}
          <div className="col-lg-4 col-md-4">
            <div className="casestudy-slide-1">
              {CASES.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`casestudy-item ${selectedIdx === idx ? "active" : ""}`}
                  style={{
                    cursor: "pointer",
                    opacity: selectedIdx === idx ? 1 : 0.45,
                    transform: selectedIdx === idx ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div>
                    <img src={item.logo} alt={item.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Active Case Details) */}
          <div className="col-lg-8 col-md-8">
            <div className="casestudy-slide-2">
              <div className="casestudy-content">
                <div className="casestudy-about">
                  <img src={current.detailLogo} alt={current.name} />
                  <span></span>
                  <p>{current.desc}</p>
                </div>

                <div className="casestudy-stats">
                  <div>
                    <label>{current.stat1}</label>
                    <p>{current.statLabel1}</p>
                  </div>
                  <div>
                    <label>{current.stat2}</label>
                    <p>{current.statLabel2}</p>
                  </div>
                </div>

                <div className="default-btn grey-btn" onClick={openEnquiry} style={{ cursor: "pointer" }}>
                  <span className="mas">Read Case Study</span>
                  <a>Read Case Study</a>
                </div>

                <img src={current.detailLogo} className="case-bglogo" alt="watermark logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src="https://cdn.88gravity.com/public/website/img/casestudy-bg.webp" className="casestudy-image" alt="blur" />
    </section>
  );
}

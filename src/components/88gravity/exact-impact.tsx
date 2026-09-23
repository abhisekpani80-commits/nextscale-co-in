"use client";

import React from "react";

export function ExactImpact() {
  const openEnquiry = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
    }
  };

  return (
    <section className="impact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 mx-auto">
            <h1 className="heading center-heading">
              Elevate Strategic Digital Impact Growth
            </h1>
          </div>

          {/* Left Column (Sticky Scroll Sections) */}
          <div className="col-lg-6 col-md-6 impact-desktopview">
            {/* Box 1 */}
            <div className="impact-move-box">
              <div className="impact-stick">
                <h2 className="heading">SEO &amp; Generative AI</h2>
                <ul className="theme-list">
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Implement schema markup and structured entity data for Google &amp; AI answer engines.
                  </li>
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Enhance content with NLP semantic relevance for Perplexity, ChatGPT &amp; Gemini citations.
                  </li>
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Technical Core Web Vitals audits achieving guaranteed 99/100 PageSpeed scores.
                  </li>
                </ul>
                <div className="default-btn grey-btn" onClick={openEnquiry} style={{ cursor: "pointer" }}>
                  <span className="mas">Explore SEO Strategy</span>
                  <a>Explore SEO Strategy</a>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="impact-move-box">
              <div className="impact-stick">
                <h2 className="heading">Autonomous WhatsApp AI</h2>
                <ul className="theme-list">
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    24/7 instantaneous conversational booking connected to Meta Cloud WhatsApp API.
                  </li>
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Google Calendar &amp; Outlook real-time synchronization with zero human lag.
                  </li>
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Automated appointment confirmation, intake form collection, and reminder sequences.
                  </li>
                </ul>
                <div className="default-btn grey-btn" onClick={openEnquiry} style={{ cursor: "pointer" }}>
                  <span className="mas">Deploy AI Agent</span>
                  <a>Deploy AI Agent</a>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="impact-move-box">
              <div className="impact-stick">
                <h2 className="heading">Brand Identity &amp; Speed</h2>
                <ul className="theme-list">
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Sub-second edge deployments turning cold traffic into qualified pipeline.
                  </li>
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Bespoke UI/UX design systems matching Silicon Valley tier precision.
                  </li>
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    100% full source code ownership handed over with zero lock-in retainers.
                  </li>
                </ul>
                <div className="default-btn grey-btn" onClick={openEnquiry} style={{ cursor: "pointer" }}>
                  <span className="mas">Uncover Brand Magic</span>
                  <a>Uncover Brand Magic</a>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="impact-move-box">
              <div className="impact-stick last-unstick">
                <h2 className="heading">Turnkey Systems</h2>
                <ul className="theme-list">
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Full-stack web application + WhatsApp bot deployed live in 7 days.
                  </li>
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    Integrated CRM, lead scoring, and automated Google review triggers.
                  </li>
                  <li>
                    <img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" />
                    High-converting sales funnels designed for clinics, real estate, and B2B SaaS.
                  </li>
                </ul>
                <div className="default-btn grey-btn" onClick={openEnquiry} style={{ cursor: "pointer" }}>
                  <span className="mas">Launch in 7 Days</span>
                  <a>Launch in 7 Days</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sticky Video Showcase) */}
          <div className="col-lg-6 col-md-6">
            <div className="impact-fixed-image">
              <video
                className="parallex-videopage"
                autoPlay
                loop
                playsInline
                muted
                preload="auto"
              >
                <source src="https://cdn.88gravity.com/website/img/video/ecom-vid.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Mobile View Slider */}
          <div className="col-12 impact-mobileview">
            <div className="impactmobile-slider">
              <div className="impact-move-box">
                <div className="impact-stick">
                  <p className="heading">SEO &amp; AI Search</p>
                  <ul className="theme-list">
                    <li><img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" /> Schema markup &amp; entity SEO.</li>
                    <li><img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" /> NLP optimization for AI engines.</li>
                    <li><img src="https://cdn.88gravity.com/public/website/img/grey-star.png" width={28} height={28} alt="star" /> 99/100 Core Web Vitals speed.</li>
                  </ul>
                  <div className="default-btn grey-btn" onClick={openEnquiry}>
                    <span className="mas">Explore SEO</span>
                    <a>Explore SEO</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://cdn.88gravity.com/public/website/img/cross-blur.webp"
        width={467}
        height={469}
        className="impact-blur"
        alt="blur"
      />
    </section>
  );
}

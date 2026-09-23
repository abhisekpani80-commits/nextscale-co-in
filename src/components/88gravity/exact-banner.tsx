"use client";

import React, { useEffect, useRef } from "react";

export function ExactBanner() {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = tiltRef.current;
    if (!container) return;
    const inner = container.querySelector(".element-effectimage") as HTMLElement;
    if (!inner) return;

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = ((y / inner.offsetHeight) * -20).toFixed(2);
      const rotateY = ((x / inner.offsetWidth) * 20).toFixed(2);
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const onMouseLeave = () => {
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const openEnquiry = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
    }
  };

  return (
    <section className="homebanner-area header-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-slider">
              <div className="home-slider-item">
                <div className="row justify-content-between align-items-center">
                  {/* Giant Headline */}
                  <div className="col-lg-12 col-md-12 order-1 order-md-1 order-lg-1">
                    <div className="home-maintext">
                      <span className="h1">
                        Strategic. Excellence.
                        <div className="gradiant-color">Global Influence.</div>
                      </span>
                    </div>
                  </div>

                  {/* Left Numbers */}
                  <div className="col-lg-3 col-md-3 order-2 order-md-2 order-lg-2">
                    <div className="homeslide-count">
                      <div className="item-number">
                        <div className="num">
                          <label className="counter">134</label>
                          <span>+</span>
                        </div>
                        <p>Partners Worldwide</p>
                      </div>

                      <div className="item-number bg-toright">
                        <div className="num">
                          <label className="counter">92</label>
                          <span>%</span>
                        </div>
                        <p>Faster Technology</p>
                      </div>
                    </div>
                  </div>

                  {/* Center 3D Tilt Artwork */}
                  <div className="col-lg-5 col-md-6 order-1 order-md-3 order-lg-3">
                    <div className="element" ref={tiltRef}>
                      <img
                        src="https://cdn.88gravity.com/public/website/img/global.webp"
                        className="img-responsive element-effectimage homebanner-desktop"
                        width={686}
                        height={814}
                        alt="3D Gravity Sphere"
                      />
                      <img
                        src="https://cdn.88gravity.com/public/website/img/global-mobileview.webp"
                        className="img-responsive element-effectimage homebanner-mobile"
                        width={460}
                        height={600}
                        alt="3D Gravity Sphere Mobile"
                      />
                    </div>
                  </div>

                  {/* Right Copy & Button */}
                  <div className="col-lg-3 col-md-3 order-3 order-md-4 order-lg-4">
                    <div className="homebanner-text">
                      <p>
                        Engineering sub-second Next.js web applications, 24/7 autonomous WhatsApp AI receptionists, and local SEO domination.
                      </p>
                      <div className="default-btn" onClick={openEnquiry} style={{ cursor: "pointer" }}>
                        <span className="mas">Plan Smarter</span>
                        <a>Plan Smarter</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 88gravity signature background ambient blurs */}
      <img src="https://cdn.88gravity.com/public/website/img/pink-blur.png" width={146} height={604} className="banner-blur-1" alt="pink blur" />
      <img src="https://cdn.88gravity.com/public/website/img/yellow-blur.png" width={121} height={540} className="banner-blur-2" alt="yellow blur" />
    </section>
  );
}

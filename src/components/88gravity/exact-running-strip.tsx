"use client";

import React from "react";

export function ExactRunningStrip() {
  const items = [
    "Next.js 16 Development",
    "WhatsApp AI Receptionists",
    "Strategy Consulting",
    "Sub-second Web Systems",
    "UI/UX Design",
    "AEO & AI Search",
    "Brand Identity",
    "Local SEO Domination",
  ];

  return (
    <section className="runing-srtip">
      <div className="marquee">
        <ul className="marquee__group">
          {items.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <li>{item}</li>
              <li>
                <img
                  src="https://cdn.88gravity.com/public/website/img/color-star.png"
                  width={43}
                  height={43}
                  alt="star"
                  className="star-blink"
                />
              </li>
            </React.Fragment>
          ))}
        </ul>

        <ul className="marquee__group" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <li>{item}</li>
              <li>
                <img
                  src="https://cdn.88gravity.com/public/website/img/color-star.png"
                  width={43}
                  height={43}
                  alt="star"
                  className="star-blink"
                />
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export function ExactNumbers() {
  return (
    <section className="home-number">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="number-head">
              <p>80%</p>
              <h3 className="heading">
                We handle over 80% of customer service interactions, taking the load off teams while making customer experiences feel magical.
              </h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="number-count-item">
              <div className="num-box">
                <label className="counter">92</label>
                <span>%</span>
              </div>
              <p>Conversion Rates</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="number-count-item">
              <div className="num-box">
                <label className="counter">70</label>
                <span>%</span>
              </div>
              <p>Client Retention Rate</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <div className="number-count-item">
              <div className="num-box">
                <span>$</span>
                <label className="counter">10</label>
                <span>M+</span>
              </div>
              <p>Investment raised by our clients</p>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://cdn.88gravity.com/public/website/img/triangle-blur.webp"
        width={481}
        height={415}
        className="number-blur"
        alt="blur"
      />
    </section>
  );
}

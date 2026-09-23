"use client";

import React from "react";
import Link from "next/link";

export function ExactFooter() {
  const openEnquiry = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
    }
  };

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-top">
              <h2 className="heading">
                Ready to make things happen?
                <br />
                <span className="gradiant-color">Let\'s build something incredible.</span>
              </h2>
              <div className="default-btn" onClick={openEnquiry} style={{ cursor: "pointer", display: "inline-block" }}>
                <span className="mas">Let\'s Talk</span>
                <a>Let\'s Talk</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row footer-middle align-items-center">
          <div className="col-lg-3 col-md-3">
            <div className="footer-logo">
              <Link href="/">
                <img
                  width={190}
                  height={46}
                  src="https://cdn.88gravity.com/website/img/whitetheme-logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <ul className="list-inline text-center footer-nav mb-0">
              <li className="list-inline-item"><Link href="/about">About</Link></li>
              <li className="list-inline-item"><Link href="/case-studies">Case Studies</Link></li>
              <li className="list-inline-item"><Link href="/resources">Blogs</Link></li>
              <li className="list-inline-item"><Link href="/contact">Tap In</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 text-right">
            <ul className="list-inline footer-social mb-0">
              <li className="list-inline-item"><a href="https://wa.me/919556436685" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></li>
              <li className="list-inline-item"><a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li className="list-inline-item"><a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="row footer-bottom">
          <div className="col-lg-6 col-md-6">
            <p>© {new Date().getFullYear()} Next Scale. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 col-md-6 text-right">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><Link href="/legal/privacy">Privacy Policy</Link></li>
              <li className="list-inline-item"><Link href="/legal/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";

export function ExactInquiryModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("UI/UX Design & Web");
  const [company, setCompany] = useState("");

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-enquiry-modal", handleOpen);
    return () => window.removeEventListener("open-enquiry-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi 88gravity/NextScale team!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nCompany: ${company}`
    );
    window.open(`https://wa.me/919556436685?text=${msg}`, "_blank");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        zIndex: 9999,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content popup-wrapper" style={{ backgroundColor: "#1a1a1a", borderRadius: 20 }}>
          <button
            type="button"
            className="btn-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>

          <div className="row no-gutters">
            <div className="col-lg-5 col-md-5 d-none d-md-block left-box p-4" style={{
              backgroundImage: 'url("https://www.88gravity.com/public/website/img/pop-bg.webp")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px 0 0 20px",
            }}>
              <div className="h-100 d-flex flex-column justify-content-between p-3 text-white">
                <div>
                  <h3 className="text-white font-weight-bold">Start Your Journey</h3>
                  <p className="text-white-50 small">Experience modern performance marketing and engineering.</p>
                </div>
                <div>
                  <p className="text-white font-weight-bold mb-1">Guaranteed 7-Day Sprint</p>
                  <p className="small text-white-50">100% Code Ownership · Zero Retainers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-7 right-box p-4">
              <div className="form-container p-3">
                <h4 className="text-white font-weight-bold mb-3">Tap In With Us</h4>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ fontSize: 16, backgroundColor: "#131313", color: "#fff", borderColor: "#333" }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="tel"
                      required
                      placeholder="Mobile / WhatsApp *"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ fontSize: 16, backgroundColor: "#131313", color: "#fff", borderColor: "#333" }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ fontSize: 16, backgroundColor: "#131313", color: "#fff", borderColor: "#333" }}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="form-control"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      style={{ fontSize: 16, backgroundColor: "#131313", color: "#fff", borderColor: "#333" }}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <select
                      className="form-control"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      style={{ fontSize: 16, backgroundColor: "#131313", color: "#fff", borderColor: "#333" }}
                    >
                      <option>UI/UX Design &amp; Web Development</option>
                      <option>WhatsApp AI Agents &amp; Automation</option>
                      <option>SEO &amp; Growth Strategies</option>
                      <option>Turnkey Digital Suite</option>
                    </select>
                  </div>

                  <div className="default-btn">
                    <span className="mas">Submit Enquiry</span>
                    <button type="submit">Submit Enquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

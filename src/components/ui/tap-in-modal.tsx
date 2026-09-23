"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Sparkles, CheckCircle, ShieldCheck } from "lucide-react";

export function TapInModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Custom Next.js Web System");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-tap-in-modal", handleOpen);
    return () => window.removeEventListener("open-tap-in-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Direct WhatsApp Handshake
    const message = encodeURIComponent(
      `Hello Next Scale team! I\'d like to Tap In for a project.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919556436685?text=${message}`, "_blank");
      setIsOpen(false);
      setSubmitted(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#12151e] border border-white/10 shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 size-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
        >
          <X className="size-5" />
        </button>

        {/* Left Brand Panel */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-[#1a1f2c] to-[#0d0f15] p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#ff3ba1]">
              <Sparkles className="size-3.5 star-blink" /> Next Scale Studio
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-black text-white leading-tight">
              Tap In With The Founders.
            </h3>
            <p className="mt-2 text-xs md:text-sm text-neutral-400">
              Get an empirical audit and sprint roadmap within 24 hours.
            </p>
          </div>

          <div className="mt-6 space-y-2 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4 text-[#ffa011]" />
              <span>Live in 5–7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="size-4 text-[#ffa011]" />
              <span>100% Source Code Handover</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-[#ff3ba1]" />
              <span>Zero Bloat Guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="w-full md:w-7/12 p-6 md:p-8">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="size-12 rounded-full bg-[#ff3ba1]/20 text-[#ff3ba1] flex items-center justify-center mb-4">
                <CheckCircle className="size-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Opening Direct WhatsApp...</h4>
              <p className="text-xs text-neutral-400 mt-2">Connecting you directly with founder Abhisek Pani.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff3ba1] transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff3ba1] transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#07090e] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff3ba1] transition-all text-base"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                  Service Needed
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#07090e] border border-white/10 text-white focus:outline-none focus:border-[#ff3ba1] transition-all text-base"
                >
                  <option>Sub-Second Next.js Web System</option>
                  <option>24/7 Autonomous WhatsApp AI Agent</option>
                  <option>Local SEO & Revenue Domination</option>
                  <option>Turnkey B2B Digital Suite</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-gravity w-full mt-4 flex items-center justify-center gap-2"
              >
                <span>Tap In Now</span>
                <Send className="size-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

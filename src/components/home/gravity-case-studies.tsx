"use client";

import React, { useState } from "react";
import { ArrowUpRight, TrendingUp, Zap, Clock } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
  {
    client: "SKIL Events & Corporate Travel",
    metric: "+170%",
    metricLabel: "Organic Search Growth",
    category: "SEO & Content Architecture",
    desc: "Engineered programmatic SEO and landing page speed optimization, lifting monthly qualified corporate event inquiries by 170%.",
    tag: "Case Study 01",
  },
  {
    client: "Dr. Aysha Specialized Dental Clinic",
    metric: "4.8x",
    metricLabel: "Appointment Booking Lift",
    category: "WhatsApp AI Receptionist",
    desc: "Integrated a 24/7 conversational WhatsApp receptionist syncing directly to Google Calendar, automating 70% of patient inquiries.",
    tag: "Case Study 02",
  },
  {
    client: "Chalk Studio Luxury Interiors",
    metric: "99/100",
    metricLabel: "Google PSI Performance Score",
    category: "Next.js Web System",
    desc: "Rebuilt legacy WordPress architecture into an edge-hosted Next.js web application, decreasing load times from 4.2s to 0.7s.",
    tag: "Case Study 03",
  },
];

export function GravityCaseStudies() {
  return (
    <section className="py-24 bg-[#07090e] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffa011] flex items-center gap-1.5">
              <TrendingUp className="size-3.5" />
              Verified Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mt-2">
              Empirical Proof. <br />
              <span className="text-gravity-gradient">Zero Vanity Metrics.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#ff3ba1] hover:text-[#ffa011] transition-colors uppercase tracking-wider"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="card-gravity p-8 flex flex-col justify-between relative group hover:border-[#ff3ba1]/60"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                    {study.tag}
                  </span>
                  <span className="text-xs font-bold text-[#ffa011]">
                    {study.category}
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff3ba1] to-[#ffa011] mb-2">
                  {study.metric}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white mb-6">
                  {study.metricLabel}
                </div>

                <h4 className="text-lg font-black text-white mb-3 group-hover:text-[#ff3ba1] transition-colors">
                  {study.client}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {study.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-neutral-400 group-hover:text-white transition-colors">
                <span>Read Story</span>
                <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import { B2BHero } from "@/components/home/b2b-hero";
import { B2BClientBar } from "@/components/home/b2b-client-bar";
import { B2BServices } from "@/components/home/b2b-services";
import { B2BProcess } from "@/components/home/b2b-process";
import { B2BWork } from "@/components/home/b2b-work";
import { B2BTestimonials } from "@/components/home/b2b-testimonials";
import { B2BStats } from "@/components/home/b2b-stats";
import { B2BCta } from "@/components/home/b2b-cta";

import { B2BFaq } from "@/components/home/b2b-faq";

export function B2BLanding() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      const parentMap = new Map<Element, Element[]>();

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const parent = el.parentElement;
          if (parent) {
            if (!parentMap.has(parent)) {
              parentMap.set(parent, []);
            }
            parentMap.get(parent)!.push(el);
          } else {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        }
      });

      parentMap.forEach((elements) => {
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add("is-visible");
          }, index * 100);
          observer.unobserve(el);
        });
      });
    }, observerOptions);

    const targets = document.querySelectorAll(".scroll-fade");
    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <>
      <B2BHero />
      <B2BClientBar />
      <B2BServices />
      <B2BProcess />
      <B2BWork />
      <B2BTestimonials />
      <B2BStats />
      <B2BFaq />
      <B2BCta />
    </>
  );
}

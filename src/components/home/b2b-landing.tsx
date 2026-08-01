"use client";

import { useEffect } from "react";
import { AnimatedStudioLanding } from "@/components/home/animated-studio-landing";

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
      <AnimatedStudioLanding />
    </>
  );
}

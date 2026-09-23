"use client";

import React, { useEffect, useRef } from "react";
import { AUTHENTIC_88GRAVITY_HTML } from "./authentic-html";

export function Authentic88GravityPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // 1. Add home-overflow class to html
    document.documentElement.classList.add("home-overflow");

    // 2. Opposing direction moving text on scroll
    const first = root.querySelector("#first") as HTMLElement | null;
    const second = root.querySelector("#second") as HTMLElement | null;

    const onScroll = () => {
      const scrollY = window.scrollY;
      window.requestAnimationFrame(() => {
        if (first) {
          first.style.transform = `translateX(${scrollY * 0.3}px) translateX(-80%)`;
        }
        if (second) {
          second.style.transform = `translateX(${scrollY * -0.3}px) translateX(-80%)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3. Sticky impact video observer
    const impactBoxes = root.querySelectorAll<HTMLElement>(".impact-move-box");
    const impactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const sectionId = target.id;
          const targetDivId = "targetDiv" + sectionId.slice(-1);
          const targetDiv = root.querySelector<HTMLElement>("#" + targetDivId);

          if (entry.isIntersecting) {
            target.classList.add("visible-imapact");
            if (targetDiv) targetDiv.classList.add("highlighted");
          } else {
            target.classList.remove("visible-imapact");
          }
        });
      },
      { root: null, threshold: 0.5 }
    );
    impactBoxes.forEach((box) => impactObserver.observe(box));

    // 4. Hero banner 3D mouse tilt on globe
    const elements = root.querySelectorAll<HTMLElement>(".element");
    const cleanupFns: Array<() => void> = [];

    elements.forEach((elem) => {
      const inner = elem.querySelector<HTMLElement>(".element-effectimage");
      if (!inner) return;

      let mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (e: MouseEvent) {
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function (el: HTMLElement) {
          this._x = el.offsetLeft + Math.floor(el.offsetWidth / 2);
          this._y = el.offsetTop + Math.floor(el.offsetHeight / 2);
        },
      };

      mouse.setOrigin(elem);

      let frameCount = 0;
      const onMouseEnter = (e: MouseEvent) => {
        mouse.setOrigin(elem);
      };
      const onMouseLeave = () => {
        inner.style.transform = "";
      };
      const onMouseMove = (e: MouseEvent) => {
        frameCount++;
        if (frameCount % 2 === 0) {
          mouse.updatePosition(e);
          const rotX = (mouse.y / inner.offsetHeight / 2).toFixed(2);
          const rotY = (mouse.x / inner.offsetWidth / 2).toFixed(2);
          inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }
      };

      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mouseleave", onMouseLeave);
      elem.addEventListener("mousemove", onMouseMove);

      cleanupFns.push(() => {
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mouseleave", onMouseLeave);
        elem.removeEventListener("mousemove", onMouseMove);
      });
    });

    // 5. Video showreel Sound On / Sound Off cursor badge
    const homeaudio = root.querySelector<HTMLElement>("#homeaudio");
    const player = root.querySelector<HTMLVideoElement>("#player");
    const hoverText = root.querySelector<HTMLElement>("#hoverText");

    if (homeaudio && hoverText) {
      const onAudioMouseMove = (e: MouseEvent) => {
        const rect = homeaudio.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        hoverText.style.left = `${x}px`;
        hoverText.style.top = `${y}px`;
      };
      const onAudioMouseOver = () => {
        hoverText.style.display = "block";
      };
      const onAudioMouseOut = () => {
        hoverText.style.display = "none";
      };
      const onVideoClick = () => {
        if (!player) return;
        if (player.muted) {
          player.muted = false;
          hoverText.textContent = "Sound Off";
        } else {
          player.muted = true;
          hoverText.textContent = "Sound On";
        }
      };

      homeaudio.addEventListener("mousemove", onAudioMouseMove);
      homeaudio.addEventListener("mouseover", onAudioMouseOver);
      homeaudio.addEventListener("mouseout", onAudioMouseOut);
      if (player) player.addEventListener("click", onVideoClick);

      cleanupFns.push(() => {
        homeaudio.removeEventListener("mousemove", onAudioMouseMove);
        homeaudio.removeEventListener("mouseover", onAudioMouseOver);
        homeaudio.removeEventListener("mouseout", onAudioMouseOut);
        if (player) player.removeEventListener("click", onVideoClick);
      });
    }

    // 6. Hamburger curtain menu (#overlay)
    const hamburger = root.querySelector<HTMLElement>(".hamburger-menu");
    const overlay = root.querySelector<HTMLElement>("#overlay");
    const headerArea = root.querySelector<HTMLElement>(".header-area");

    if (hamburger && overlay) {
      const toggleMenu = (e: Event) => {
        e.preventDefault();
        const isOpen = overlay.classList.contains("open");
        if (isOpen) {
          overlay.classList.remove("open");
          overlay.style.transitionDelay = "0.5s";
          document.documentElement.classList.remove("nonoverflow");
          if (headerArea) headerArea.classList.remove("menu-active");
        } else {
          overlay.classList.add("open");
          overlay.style.transitionDelay = "0s";
          document.documentElement.classList.add("nonoverflow");
          if (headerArea) headerArea.classList.add("menu-active");
        }
      };

      hamburger.addEventListener("click", toggleMenu);
      cleanupFns.push(() => hamburger.removeEventListener("click", toggleMenu));

      // Close menu on close button or menu link click
      const closeButtons = overlay.querySelectorAll<HTMLElement>(".close-btn, a[href^='#']");
      closeButtons.forEach((btn) => {
        const closeHandler = () => {
          overlay.classList.remove("open");
          document.documentElement.classList.remove("nonoverflow");
          if (headerArea) headerArea.classList.remove("menu-active");
        };
        btn.addEventListener("click", closeHandler);
        cleanupFns.push(() => btn.removeEventListener("click", closeHandler));
      });
    }

    // 7. Modals (Enquiry modal #enquriyModal and Video modal #videoModal)
    const modalTriggers = root.querySelectorAll<HTMLElement>('[data-toggle="modal"], [data-target="#enquriyModal"], a[href="#enquriyModal"]');
    const enquiryModal = root.querySelector<HTMLElement>("#enquriyModal");

    modalTriggers.forEach((trigger) => {
      const openModal = (e: Event) => {
        e.preventDefault();
        if (enquiryModal) {
          enquiryModal.style.display = "block";
          enquiryModal.classList.add("show");
          document.body.classList.add("modal-open");
          // Add backdrop
          let backdrop = document.querySelector(".modal-backdrop");
          if (!backdrop) {
            backdrop = document.createElement("div");
            backdrop.className = "modal-backdrop fade show";
            document.body.appendChild(backdrop);
          }
        }
      };
      trigger.addEventListener("click", openModal);
      cleanupFns.push(() => trigger.removeEventListener("click", openModal));
    });

    const modalCloses = root.querySelectorAll<HTMLElement>('[data-dismiss="modal"], .close');
    modalCloses.forEach((btn) => {
      const closeModal = (e: Event) => {
        e.preventDefault();
        if (enquiryModal) {
          enquiryModal.style.display = "none";
          enquiryModal.classList.remove("show");
        }
        const videoModal = root.querySelector<HTMLElement>("#videoModal");
        if (videoModal) {
          videoModal.style.display = "none";
          videoModal.classList.remove("show");
        }
        document.body.classList.remove("modal-open");
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) backdrop.remove();
      };
      btn.addEventListener("click", closeModal);
      cleanupFns.push(() => btn.removeEventListener("click", closeModal));
    });

    // 8. Animated counters
    const counters = root.querySelectorAll<HTMLElement>(".counter");
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement;
          if (counter.dataset.counted === "true") return;
          counter.dataset.counted = "true";

          const targetNum = parseInt(counter.textContent?.replace(/[^0-9]/g, "") || "0", 10);
          const suffix = counter.textContent?.replace(/[0-9]/g, "") || "";
          if (targetNum > 0) {
            let current = 0;
            const step = Math.max(1, Math.floor(targetNum / 40));
            const timer = setInterval(() => {
              current += step;
              if (current >= targetNum) {
                counter.textContent = targetNum + suffix;
                clearInterval(timer);
              } else {
                counter.textContent = current + suffix;
              }
            }, 30);
          }
        }
      });
    }, { threshold: 0.3 });
    counters.forEach((c) => counterObserver.observe(c));

    // 9. Sticky header on scroll
    const onStickyScroll = () => {
      if (!headerArea) return;
      if (window.scrollY > 100) {
        headerArea.classList.add("stick");
      } else {
        headerArea.classList.remove("stick");
      }
    };
    window.addEventListener("scroll", onStickyScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onStickyScroll);
      impactObserver.disconnect();
      counterObserver.disconnect();
      cleanupFns.forEach((fn) => fn());
      document.documentElement.classList.remove("home-overflow");
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="authentic-88gravity-root"
      dangerouslySetInnerHTML={{ __html: AUTHENTIC_88GRAVITY_HTML }}
    />
  );
}

// @ts-nocheck
'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { NextscaleLogo } from '@/components/ui/logo';
import './PillNav.css';

interface PillNavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface PillNavProps {
  items: PillNavItem[];
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
}

const PillNav = ({
  items,
  ease = 'power3.easeOut',
  baseColor = '#0d1016',
  pillColor = '#161a23',
  hoveredPillTextColor = '#06080c',
  pillTextColor = '#94a3b8',
  initialLoadAnimation = true
}: PillNavProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const circleRefs = useRef<HTMLElement[]>([]);
  const tlRefs = useRef<gsap.core.Timeline[]>([]);
  const activeTweenRefs = useRef<gsap.core.Tween[]>([]);
  const logoImgRef = useRef<HTMLElement>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[i]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, xPercent: -50, duration: 1.2, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 1.2, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 12), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 1.2, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[i] = tl;
      });
    };

    // Delay slightly to ensure browser has layout dimensions
    const timer = setTimeout(layout, 150);

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, {
          scale: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        gsap.to(navItems, {
          width: 'auto',
          duration: 0.6,
          ease
        });
      }
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, [items, ease, initialLoadAnimation]);

  // Handle active class changes that alter item counts/widths
  useEffect(() => {
    // Re-layout active state
    circleRefs.current.forEach((circle, i) => {
      if (!circle?.parentElement) return;
      const pill = circle.parentElement;
      const rect = pill.getBoundingClientRect();
      const { height: h } = rect;
      
      const label = pill.querySelector('.pill-label');
      const white = pill.querySelector('.pill-label-hover');
      
      const isActive = pathname === items[i].href;
      if (isActive) {
        gsap.set(circle, { scale: 1.2 });
        if (label) gsap.set(label, { y: -(h + 8) });
        if (white) gsap.set(white, { y: 0, opacity: 1 });
      } else {
        gsap.set(circle, { scale: 0 });
        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });
      }
    });
  }, [pathname, items]);

  const handleEnter = (i: number) => {
    if (pathname === items[i].href) return; // Skip active item hover
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    if (pathname === items[i].href) return; // Skip active item hover reset
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const logo = logoRef.current;
    if (!logo) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.fromTo(
      logo,
      { scale: 1 },
      {
        scale: 1.05,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out',
        overwrite: 'auto'
      }
    );
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': pillTextColor
  } as React.CSSProperties;

  return (
    <div className={`pill-nav-container ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="pill-nav" aria-label="Primary" style={cssVars}>
        <Link
          className="pill-logo"
          href="/"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          ref={el => {
            logoRef.current = el;
          }}
        >
          <div ref={logoImgRef} className="flex items-center gap-2">
            <NextscaleLogo className="size-6 shrink-0 text-primary" />
            <span className="pill-logo-text">NEXTSCALE</span>
          </div>
        </Link>

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href || `item-${i}`} role="none">
                  <Link
                    role="menuitem"
                    href={item.href}
                    className={`pill${isActive ? ' is-active' : ''}`}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={el => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
          <ul className="mobile-menu-list">
            {items.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href || `mobile-item-${i}`}>
                  <Link
                    href={item.href}
                    className={`mobile-menu-link${isActive ? ' is-active' : ''}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      toggleMobileMenu();
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default PillNav;

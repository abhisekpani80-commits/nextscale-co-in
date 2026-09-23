"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function ExactHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    if (next) {
      document.documentElement.classList.add("nonoverflow");
    } else {
      document.documentElement.classList.remove("nonoverflow");
    }
  };

  const openEnquiry = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
    }
  };

  return (
    <>
      <header className={`header-area ${isScrolled ? "sticky" : ""}`}>
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-5 col-lg-2 col-md-2">
              <div className="logo">
                <Link href="/">
                  <img
                    width={190}
                    height={46}
                    src="https://cdn.88gravity.com/website/img/whitetheme-logo.png"
                    alt="88gravity Logo"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="col-5 col-lg-8 col-md-8">
              <nav className="main-menu">
                <ul className="list-inline mb-0">
                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  {/* Services Mega Dropdown */}
                  <li className="dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#services">
                      Services
                    </a>
                    <div className="dropdown-menu finesse">
                      <div className="row mega-menu-wrapper">
                        {/* Col 1 */}
                        <div className="col-lg-3 col-md-4">
                          <div className="menu-item-box">
                            <p className="h5">Captivating Creations</p>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/1.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services/websites">UI/UX Design</a>
                                <p>Creating intuitive and engaging UI/UX designs.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/2.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services">Pitch Deck</a>
                                <p>Crafting Presentations That Captivate and Convince.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/4.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services">Copywriting</a>
                                <p>Crafting compelling copy that drives action.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/3.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services">Video &amp; Motion</a>
                                <p>Bringing Your Story to Life with Stunning Video.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Col 2 */}
                        <div className="col-lg-3 col-md-4">
                          <div className="menu-item-box">
                            <p className="h5">Impact that Lasts</p>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/8.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services">Strategy Consulting</a>
                                <p>Guiding Your Success with Expert Strategy.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/7.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services">Conversion Optimization</a>
                                <p>Turning Clicks into Conversions with Strategies.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/public/website/img/color-star.png" width={28} height={28} alt="icon" className="star-blink" />
                              </div>
                              <div className="menu-title">
                                <a href="/services/ai-agents">AEO &amp; AI-SEO</a>
                                <p>Be the Answer, Not Just a Result.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/6.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services/digital-growth">SEO Services</a>
                                <p>Boosting Visibility with Targeted SEO.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Col 3 */}
                        <div className="col-lg-3 col-md-4">
                          <div className="menu-item-box">
                            <p className="h5">Development</p>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/10.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services/websites">Web Development</a>
                                <p>Crafting Custom Next.js Websites that Deliver Results.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/11.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services">App Development</a>
                                <p>Building Innovative Apps that Drive Engagement.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/12.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services">Ecommerce</a>
                                <p>Empowering Your Business with Modern Solutions.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Col 4 */}
                        <div className="col-lg-3 col-md-4">
                          <div className="menu-item-box">
                            <p className="h5">Symbolize</p>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/13.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services">Brand Identity</a>
                                <p>Creating Memorable Brand Identities that Stand Out.</p>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="menu-icon">
                                <img src="https://cdn.88gravity.com/website/img/menu/15.webp" width={28} height={28} alt="icon" />
                              </div>
                              <div className="menu-title">
                                <a href="/services/ai-agents">AI &amp; Automation</a>
                                <p>Connecting Autonomous Workflows 24/7.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Inspiration Dropdown */}
                  <li className="dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="/case-studies">
                      Inspiration
                    </a>
                    <div className="dropdown-menu finesse work-menu">
                      <div className="row mega-menu-wrapper">
                        <div className="col-lg-12 work">
                          <p className="h5">Set your imagination free with content that inspires</p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="menu-item-box">
                            <div className="menu-item-image">
                              <img width={436} height={285} src="https://cdn.88gravity.com/website/img/menu-item-1.webp" alt="icon" />
                              <a href="/case-studies">Showcase</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="menu-item-box">
                            <div className="menu-item-image">
                              <img width={436} height={285} src="https://www.88gravity.com/website/img/menu-item-2.webp" alt="icon" />
                              <a href="/case-studies">Case Studies</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="menu-item-box">
                            <div className="menu-item-image">
                              <img width={436} height={285} src="https://cdn.88gravity.com/website/img/menu-item-3.webp" alt="icon" />
                              <a href="/resources">Blogs &amp; Guides</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>

                  <li>
                    <button onClick={openEnquiry} className="arrow-link bg-transparent border-0 p-0 text-white font-weight-bold">
                      Tap In <img width={20} height={18} src="https://cdn.88gravity.com/website/img/arrow.png" alt="arrow" />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Hamburger Trigger */}
            <div className="col-2 col-lg-2 col-md-2">
              <div className="hamburger-menu toogle-line" onClick={toggleMenu}>
                <div className={`menu-button wrapper-menu ${menuOpen ? "open" : ""}`}>
                  <div className="line-menu half start"></div>
                  <div className="line-menu"></div>
                  <div className="line-menu half end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Curtain Menu Overlay (#overlay) */}
      <div className={`menu ${menuOpen ? "open" : ""}`} id="overlay">
        <div className="bigmenu-content container">
          <div className="bigmenu-content-left">
            <div className="menu-copyright">
              <p className="h4">© 2026</p>
              <p>All rights reserved @ <span className="gradiant-color">Next Scale</span></p>
              <ul className="list-inline">
                <li><a href="https://wa.me/919556436685" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
              </ul>
              <div className="mt-4">
                <button onClick={() => { toggleMenu(); openEnquiry(); }} className="default-btn">
                  <span className="mas">Tap In Now</span>
                  <span>Tap In Now</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bigmenu-content-center">
            <ul className="bigmenu-main-link">
              <li><Link onClick={toggleMenu} href="/about">About</Link></li>
              <li>
                <a href="#services" onClick={toggleMenu}>Services</a>
                <div className="bigmenu-innerlinks">
                  <Link onClick={toggleMenu} href="/services/websites">Web Development</Link> |
                  <Link onClick={toggleMenu} href="/services/ai-agents">WhatsApp AI</Link> |
                  <Link onClick={toggleMenu} href="/services/digital-growth">Local SEO</Link> |
                  <Link onClick={toggleMenu} href="/pricing">Pricing Plans</Link>
                </div>
              </li>
              <li><Link onClick={toggleMenu} href="/case-studies">Case Studies</Link></li>
              <li><Link onClick={toggleMenu} href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="bigmenu-content-right">
            <div className="menu-contactlink">
              <p>Headquarters</p>
              <ul>
                <li><i className="fa-solid fa-envelope"></i> <a href="mailto:biz.abhisek@gmail.com">biz.abhisek@gmail.com</a></li>
                <li><i className="fa-solid fa-phone"></i> <a href="tel:+919556436685">+91 95564 36685</a></li>
              </ul>
            </div>
            <div className="menu-contactlink">
              <p>Direct WhatsApp</p>
              <ul>
                <li><i className="fa-brands fa-whatsapp"></i> <a href="https://wa.me/919556436685" target="_blank">+91 95564 36685</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

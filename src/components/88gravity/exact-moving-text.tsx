"use client";

import React, { useEffect, useState } from "react";

export function ExactMovingText() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="moveing-text">
      <ul
        id="first"
        style={{
          transform: `translateX(${scrollY * 0.3}px) translateX(-40%)`,
          transition: "transform 0.05s linear",
        }}
      >
        <li>Resolute</li>
        <li>Happy</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-cook.svg" width={20} height={21} alt="emoji" /></li>
        <li>Playful</li>
        <li>Optimistic</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-happy.svg" width={20} height={21} alt="emoji" /></li>
        <li>Smart</li>
        <li>Expert</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-hairstylist.svg" width={20} height={21} alt="emoji" /></li>
        <li>Adventurous</li>
        <li>Educational</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-yoga.svg" width={20} height={21} alt="emoji" /></li>

        <li>Resolute</li>
        <li>Happy</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-cook.svg" width={20} height={21} alt="emoji" /></li>
        <li>Playful</li>
        <li>Optimistic</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-happy.svg" width={20} height={21} alt="emoji" /></li>
      </ul>

      <ul
        id="second"
        style={{
          transform: `translateX(${scrollY * -0.3}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        <li>Chatty</li>
        <li>Passionate</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-surf.svg" width={20} height={21} alt="emoji" /></li>
        <li>Barista</li>
        <li>Mindful</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-woman.svg" width={20} height={21} alt="emoji" /></li>
        <li>Insightful</li>
        <li>Honest</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-smart.svg" width={20} height={21} alt="emoji" /></li>
        <li>Adventurous</li>
        <li>Educational</li>
        <li><img src="https://cdn.88gravity.com/public/website/img/emoji-happy.svg" width={20} height={21} alt="emoji" /></li>
      </ul>
    </div>
  );
}

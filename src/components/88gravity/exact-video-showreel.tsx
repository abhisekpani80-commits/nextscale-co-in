"use client";

import React, { useState, useRef } from "react";

export function ExactVideoShowreel() {
  const [muted, setMuted] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <section className="parallex-area">
      <div
        className="home-newvideo-box-content"
        id="homeaudio"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={toggleSound}
        style={{ cursor: "pointer" }}
      >
        <video
          ref={videoRef}
          id="player"
          className="parallex-homevideo"
          muted
          autoPlay
          loop
          playsInline
          poster="https://cdn.88gravity.com/website/img/video/video-thumbnail.webp"
        >
          <source src="https://cdn.88gravity.com/website/img/video/video-page.mp4" type="video/mp4" />
        </video>

        {hovered && (
          <div
            className="video-hovertext"
            id="hoverText"
            style={{
              display: "block",
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          >
            {muted ? "Sound On" : "Sound Off"}
          </div>
        )}
      </div>

      <img
        src="https://cdn.88gravity.com/public/website/img/half-circle-blur.webp"
        width={309}
        height={508}
        className="video-blur"
        alt="blur"
      />
    </section>
  );
}

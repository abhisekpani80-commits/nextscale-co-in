export function ClinicVisualBreak() {
  return (
    <section
      className="w-full bg-[#08080a] border-y border-white/[0.08] py-16 md:py-20 relative overflow-hidden"
      aria-label="Systems Running 24/7 Visual Break"
    >
      <div className="container-clinic">
        {/* SVG Pipeline Canvas */}
        <div className="relative w-full max-w-4xl mx-auto h-[180px] sm:h-[220px] flex items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="24/7 Autonomous Pipeline Data Flow"
          >
            <defs>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>

            {/* Connecting Curves */}
            <path
              d="M 80 100 Q 200 40, 320 100 T 560 100 T 720 100"
              stroke="url(#pipeGrad)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              className="flow-line"
            />
            <path
              d="M 80 100 Q 200 160, 320 100 T 560 100 T 720 100"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />

            {/* Node 1: Traffic */}
            <g transform="translate(80, 100)">
              <circle cx="0" cy="0" r="16" fill="#14141c" stroke="#ec4899" strokeWidth="2" />
              <circle cx="0" cy="0" r="6" fill="#ec4899" />
              <text x="0" y="32" fill="#8e8e9c" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-heading)">
                TRAFFIC
              </text>
            </g>

            {/* Node 2: Qualification */}
            <g transform="translate(320, 100)">
              <circle cx="0" cy="0" r="18" fill="#14141c" stroke="#f97316" strokeWidth="2" />
              <circle cx="0" cy="0" r="7" fill="#f97316" className="pulse-node" />
              <text x="0" y="34" fill="#8e8e9c" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-heading)">
                QUALIFICATION
              </text>
            </g>

            {/* Node 3: AI Replies (Cyan) */}
            <g transform="translate(560, 100)">
              <circle cx="0" cy="0" r="18" fill="#14141c" stroke="#06b6d4" strokeWidth="2" />
              <circle cx="0" cy="0" r="7" fill="#06b6d4" />
              <text x="0" y="34" fill="#8e8e9c" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-heading)">
                AI REPLIES
              </text>
            </g>

            {/* Node 4: Revenue */}
            <g transform="translate(720, 100)">
              <circle cx="0" cy="0" r="16" fill="#14141c" stroke="#fbbf24" strokeWidth="2" />
              <circle cx="0" cy="0" r="6" fill="#fbbf24" />
              <text x="0" y="32" fill="#8e8e9c" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="var(--font-heading)">
                REVENUE
              </text>
            </g>
          </svg>
        </div>

        {/* Copy Overlay */}
        <div className="text-center mt-6">
          <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl mb-2">
            Autonomous Infrastructure <span className="text-gradient">Running 24/7/365</span>
          </h3>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#8e8e9c] leading-relaxed">
            While you sleep, your systems qualify buyers, book consultations, and ensure zero opportunities fall between the cracks.
          </p>
        </div>
      </div>
    </section>
  );
}

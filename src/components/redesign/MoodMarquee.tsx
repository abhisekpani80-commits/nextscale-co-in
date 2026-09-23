'use client';

import { Marquee } from '@/components/ui/Marquee';

const row1 = [
  '🚀 Ship Fast',
  '🤖 AI-Native',
  '💰 Revenue-First',
  '🎯 Conversion Optimized',
  '⚡ Lightning Speed',
  '🔒 Enterprise Secure',
];

const row2 = [
  '🧠 Smart Automation',
  '📈 Growth Engine',
  '💬 24/7 Support',
  '🎨 Premium Design',
  '🔧 Custom Built',
  '📱 Mobile First',
];

export function MoodMarquee() {
  return (
    <section className="w-full py-16 bg-[#0b0b0e] overflow-hidden">
      <Marquee duration={40} className="mb-4" pauseOnHover>
        {row1.map((badge, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/90 whitespace-nowrap mx-2 font-medium"
          >
            {badge}
          </div>
        ))}
      </Marquee>
      
      <Marquee reverse duration={35} pauseOnHover>
        {row2.map((badge, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/90 whitespace-nowrap mx-2 font-medium"
          >
            {badge}
          </div>
        ))}
      </Marquee>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "NextScale transformed our online presence. The AI agent handles 80% of our booking inquiries.",
    author: "Dr. Priya Sharma",
    role: "Lumière Skin Clinic",
    rating: 5,
  },
  {
    quote: "From concept to live site in 5 days. The speed and quality blew us away.",
    author: "Rahul Verma",
    role: "Vantage Realty",
    rating: 5,
  },
  {
    quote: "Our no-show rate dropped by 55% after implementing the automated reminder system.",
    author: "Ananya Das",
    role: "Counselling Practice",
    rating: 5,
  },
  {
    quote: "The WhatsApp bot is like having a 24/7 receptionist. Best investment we made.",
    author: "Dr. Amit Patel",
    role: "Meridian Dental",
    rating: 5,
  },
  {
    quote: "Professional, fast, and they actually understand business needs. Not just tech.",
    author: "Sneha Mohanty",
    role: "Studio Aperture",
    rating: 5,
  },
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#0b0b0e] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-white">What Clients Say</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="flex gap-2 hidden sm:flex mr-4">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                aria-label="Previous reviews"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                aria-label="Next reviews"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
            
            <div className="bg-[#111116] border border-white/5 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="flex text-[#10b981]"> {/* Trustpilot green-ish star */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm leading-tight">4.8/5.0</span>
                <span className="text-white/50 text-xs leading-tight">Client Rating</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative -mx-4 sm:mx-0">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-0 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[320px] md:min-w-[400px] bg-[#111116] border border-white/5 rounded-2xl p-8 snap-start flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-[#f97316]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="text-white/70 italic text-lg leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                  <div className="text-white/40 text-sm mt-1">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

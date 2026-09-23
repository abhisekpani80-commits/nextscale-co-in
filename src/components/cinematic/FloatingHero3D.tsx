'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Layers, Zap, MessageCircle, BarChart3, Clock, CheckCircle2, Server, Globe2, Sparkles, Activity } from 'lucide-react';

const FloatingHero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  // Spring animations for smooth tilt
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    if (isHovered && !isTouchDevice) {
      springX.set(mousePosition.y * -20); // Tilt up/down
      springY.set(mousePosition.x * 20); // Tilt left/right
    } else {
      springX.set(0);
      springY.set(0);
    }
  }, [mousePosition, isHovered, isTouchDevice, springX, springY]);

  // Idle animation values
  const idleRotateX = [-2, 2, -2];
  const idleRotateY = [-3, 3, -3];
  const idleY = [-8, 8, -8];

  return (
    <div 
      className="w-full min-h-[600px] flex items-center justify-center p-4 md:p-8 perspective-1400"
      style={{ perspective: '1400px' }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video"
        style={{ 
          transformStyle: 'preserve-3d',
          rotateX: isHovered && !isTouchDevice ? springX : undefined,
          rotateY: isHovered && !isTouchDevice ? springY : undefined,
        }}
        animate={(!isHovered || isTouchDevice) ? {
          y: idleY,
          rotateX: idleRotateX,
          rotateY: idleRotateY,
        } : undefined}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Core background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-magenta-500/10 via-transparent to-orange-500/10 blur-3xl -z-10 rounded-3xl" style={{ transformStyle: 'preserve-3d' }} />
        
        {/* Main Canvas */}
        <div className="absolute inset-0 rounded-3xl border border-white/5 bg-surface/80 backdrop-blur-md overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(135deg, rgba(21, 21, 28, 0.9), rgba(17, 17, 22, 0.95))',
            boxShadow: '0 0 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.02)'
          }}
        >
          {/* Subtle gradient border */}
          <div className="absolute inset-0 border border-transparent rounded-3xl opacity-50"
            style={{
               backgroundImage: 'linear-gradient(135deg, rgba(236,72,153,0.3), rgba(249,115,22,0.3))',
               maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               maskComposite: 'exclude',
               WebkitMaskComposite: 'xor',
               padding: '1px'
            }}
          />
          
          <div className="flex flex-col md:flex-row h-full w-full p-6 md:p-10 gap-8" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Panel 1: Digital Front Door */}
            <motion.div 
              className="flex-1 rounded-2xl bg-card border border-white/5 p-6 flex flex-col justify-between relative group"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">Digital Front Door</h3>
                </div>
                <p className="text-sm text-gray-400 font-body">Lightning-fast customer acquisition channel.</p>
              </div>

              <div className="space-y-4">
                <FeatureItem icon={<Zap className="w-4 h-4 text-orange-400" />} text="0.4s PageSpeed Load" />
                <FeatureItem icon={<Layers className="w-4 h-4 text-orange-400" />} text="Edge CDN Static App" />
                <FeatureItem icon={<MessageCircle className="w-4 h-4 text-orange-400" />} text="One-Tap WhatsApp Intake" />
                <FeatureItem icon={<Activity className="w-4 h-4 text-orange-400" />} text="Local SEO 99 Lighthouse" />
              </div>
            </motion.div>

            {/* Center Flow */}
            <div className="hidden md:flex flex-col items-center justify-center w-24 relative"
                 style={{ transformStyle: 'preserve-3d', transform: 'translateZ(45px)' }}>
               {/* Animated Path */}
               <svg className="absolute w-full h-full" viewBox="0 0 100 200" preserveAspectRatio="none">
                 <motion.path 
                   d="M 10,100 C 50,100 50,100 90,100"
                   fill="transparent"
                   stroke="rgba(249,115,22,0.3)"
                   strokeWidth="2"
                   strokeDasharray="4 4"
                 />
                 <motion.path 
                   d="M 10,100 C 50,100 50,100 90,100"
                   fill="transparent"
                   stroke="url(#gradient)"
                   strokeWidth="2"
                   strokeDasharray="4 4"
                   initial={{ strokeDashoffset: 100 }}
                   animate={{ strokeDashoffset: 0 }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 />
                 <defs>
                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                     <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                     <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                   </linearGradient>
                 </defs>
               </svg>
               
               <motion.div 
                 className="p-3 bg-surface border border-white/10 rounded-full z-10 text-magenta-400"
                 animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0 rgba(236,72,153,0)", "0 0 20px rgba(236,72,153,0.4)", "0 0 0 rgba(236,72,153,0)"] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 <Server className="w-6 h-6" />
               </motion.div>
            </div>

            {/* Panel 2: Automated Back Office */}
            <motion.div 
              className="flex-1 rounded-2xl bg-card border border-white/5 p-6 flex flex-col justify-between relative group"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-magenta-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-magenta-500/10 rounded-lg text-magenta-500">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white">Automated Back Office</h3>
                </div>
                <p className="text-sm text-gray-400 font-body">Zero-touch operations & instant routing.</p>
              </div>

              <div className="space-y-4">
                <FeatureItem icon={<MessageCircle className="w-4 h-4 text-magenta-400" />} text="WhatsApp AI Triage" />
                <FeatureItem icon={<Clock className="w-4 h-4 text-magenta-400" />} text="<60s Lead Qualification" />
                <FeatureItem icon={<CheckCircle2 className="w-4 h-4 text-magenta-400" />} text="Direct G-Calendar Slots" />
                <FeatureItem icon={<BarChart3 className="w-4 h-4 text-magenta-400" />} text="Zero Revenue Leaks" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Satellite Card 1 */}
        <motion.div 
          className="absolute -top-6 -left-6 md:-top-10 md:-left-10 bg-surface/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl flex items-center gap-3"
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(60px)' }}
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/20">
            30+
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Live Client Sites</p>
            <p className="text-xs text-gray-400">Deployed worldwide</p>
          </div>
        </motion.div>

        {/* Satellite Card 2 */}
        <motion.div 
          className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-surface/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl flex items-center gap-3"
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(60px)' }}
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-magenta-400 to-magenta-600 flex items-center justify-center text-white shadow-lg shadow-magenta-500/20">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">&lt; 60s Avg</p>
            <p className="text-xs text-gray-400">AI Triage Speed</p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-surface/50 p-3 rounded-lg border border-white/5 hover:bg-surface transition-colors duration-300">
      <div className="shrink-0">{icon}</div>
      <span className="text-sm text-gray-200 font-body">{text}</span>
    </div>
  );
}

export { FloatingHero3D };
export default FloatingHero3D;

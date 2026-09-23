'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Bot, Zap, TrendingUp, Check } from 'lucide-react';

const tabs = [
  {
    id: 'websites',
    label: 'Websites',
    icon: Globe,
    title: 'High-Performance Websites',
    description: 'Custom Next.js sites that load in under 1s, rank on Google, and convert visitors into customers.',
    features: ['Sub-1s load times', 'Mobile-first responsive', 'SEO optimized architecture', 'Conversion-focused design'],
  },
  {
    id: 'ai',
    label: 'AI Agents',
    icon: Bot,
    title: 'Autonomous AI Agents',
    description: '24/7 intelligent agents that book appointments, qualify leads, and handle support on WhatsApp.',
    features: ['WhatsApp & web integration', 'Lead qualification & scoring', '24/7 appointment booking', 'Custom knowledge base'],
  },
  {
    id: 'automation',
    label: 'Automation',
    icon: Zap,
    title: 'Process Automation',
    description: 'Eliminate manual work with smart workflows connecting your tools, CRM, and communication channels.',
    features: ['CRM & calendar sync', 'Document processing', 'Email & WhatsApp sequences', 'Custom webhook flows'],
  },
  {
    id: 'growth',
    label: 'Growth',
    icon: TrendingUp,
    title: 'Digital Growth Systems',
    description: 'Data-driven strategies to increase visibility, capture leads, and grow revenue predictably.',
    features: ['Google Business optimization', 'Review management', 'Content strategy', 'Analytics & reporting'],
  }
];

export function Capabilities() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="py-24 bg-[#0b0b0e]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-heading">
            What We Build
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto font-body text-lg">
            We deliver complete digital solutions that help your business scale efficiently and reliably.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 space-x-3 md:justify-center scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-colors duration-200 font-body ${
                  isActive 
                    ? 'bg-[#f97316] text-black font-semibold' 
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-[#15151c] rounded-3xl p-6 md:p-12 overflow-hidden relative border border-white/5 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Text content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  {activeContent.title}
                </h3>
                <p className="text-white/50 mb-8 font-body text-lg leading-relaxed">
                  {activeContent.description}
                </p>
                <ul className="space-y-4">
                  {activeContent.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-white/80 font-body">
                      <div className="flex-shrink-0 bg-[#ec4899]/20 p-1 rounded-full text-[#ec4899]">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mock UI Preview */}
              <div className="border border-white/10 rounded-2xl p-6 h-64 md:h-80 flex flex-col relative overflow-hidden bg-[#111116] shadow-inner">
                {/* Decorative elements to simulate UI */}
                <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-[#f97316]/20 blur-[60px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-[#ec4899]/20 blur-[60px] rounded-full pointer-events-none" />
                
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                
                <div className="flex-1 space-y-4 z-10">
                  <div className="h-4 bg-white/10 rounded-full w-3/4" />
                  <div className="h-4 bg-white/10 rounded-full w-1/2" />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm" />
                    <div className="h-24 bg-white/5 rounded-xl border border-white/5 backdrop-blur-sm" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

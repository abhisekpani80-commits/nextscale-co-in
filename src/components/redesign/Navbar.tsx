'use client'

import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import { RollingButton } from '@/components/ui/RollingButton'

const NAV_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const { scrollY } = useScroll()

  const handleScroll = useCallback((latest: number) => {
    if (latest > 20) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }, [])

  useMotionValueEvent(scrollY, 'change', handleScroll)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0b0b0e]/70 border-b border-white/5'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-bold uppercase tracking-widest text-sm z-50 relative">
            NEXTSCALE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white opacity-70 hover:opacity-100 transition-opacity text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50 relative">
            <div className="hidden md:block">
              <RollingButton href="https://wa.me/919556436685" text="Tap In ↗" />
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-white rounded-full origin-center transition-transform"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[2px] bg-white rounded-full transition-opacity"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] bg-white rounded-full origin-center transition-transform"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0b0b0e] flex flex-col items-center justify-center pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-bold">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                <RollingButton href="https://wa.me/919556436685" text="Tap In ↗" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar

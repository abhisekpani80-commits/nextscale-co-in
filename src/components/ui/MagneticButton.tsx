'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useSpring } from 'motion/react'
import Link from 'next/link'

export interface MagneticButtonProps {
  text?: string
  children?: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline'
  className?: string
  magneticStrength?: number
}

const RollingText = ({ text }: { text: string }) => {
  return (
    <div className="relative overflow-hidden flex whitespace-pre">
      <div className="flex transition-transform duration-300 group-hover:-translate-y-full">
        {text.split('').map((char, i) => (
          <span key={i} className="inline-block" style={{ transitionDelay: `${i * 0.02}s` }}>
            {char}
          </span>
        ))}
      </div>
      <div className="absolute top-full left-0 flex transition-transform duration-300 group-hover:-translate-y-full">
        {text.split('').map((char, i) => (
          <span key={i} className="inline-block" style={{ transitionDelay: `${i * 0.02}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}

export function MagneticButton({
  text,
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  magneticStrength = 0.3,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const { clientX, clientY } = e
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    const distanceX = clientX - cx
    const distanceY = clientY - cy
    
    x.set(distanceX * magneticStrength)
    y.set(distanceY * magneticStrength)
  }

  const handleMouseLeave = () => {
    if (isTouchDevice) return
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const handleMouseEnter = () => {
    if (isTouchDevice) return
    setIsHovered(true)
  }

  const baseClasses = `
    group relative inline-flex items-center justify-center
    px-8 py-3 rounded-full font-medium transition-colors duration-300
    cursor-pointer
  `

  const variantClasses = {
    primary: 'bg-[#f97316] text-white',
    outline: 'border border-[#f97316] text-[#f97316] hover:bg-[#f97316]/10',
  }

  const glowStyle = isHovered && variant === 'primary' 
    ? { boxShadow: '0 0 35px rgba(249, 115, 22, 0.35)' } 
    : {}

  const innerContent = text ? <RollingText text={text} /> : children
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y, ...glowStyle }}
      className={combinedClasses}
    >
      {innerContent}
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}

export default MagneticButton

'use client';

import React from 'react';
import { motion } from 'motion/react';

export interface RollingButtonProps {
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  as?: string;
}

export function RollingButton({
  text,
  children,
  onClick,
  className = '',
  variant = 'primary',
  href,
  type = 'button',
}: RollingButtonProps) {
  const baseStyles = 'relative overflow-hidden rounded-full px-6 py-3 flex items-center justify-center transition-colors cursor-pointer';
  const variantStyles = {
    primary: 'bg-[#f97316] text-black font-bold',
    outline: 'border border-white/20 text-white',
  };

  const contentToRender = children || text;

  const contentNode = (
    <motion.div initial="initial" whileHover="hover" className="relative flex items-center justify-center overflow-hidden w-full h-full">
      <motion.span
        variants={{
          initial: { y: 0 },
          hover: { y: '-100%' }
        }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.4 }}
        className="flex items-center gap-1"
      >
        {contentToRender} {!children && <span className="font-normal text-lg leading-none">↗</span>}
      </motion.span>
      <motion.span
        variants={{
          initial: { y: '100%' },
          hover: { y: 0 }
        }}
        transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.4 }}
        className="absolute inset-0 flex items-center justify-center gap-1"
      >
        {contentToRender} {!children && <span className="font-normal text-lg leading-none">↗</span>}
      </motion.span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {contentNode}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {contentNode}
    </button>
  );
}

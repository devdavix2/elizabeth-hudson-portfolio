"use client"

import type React from "react"
import { motion } from "framer-motion"

interface GlitchHeadingProps {
  children: React.ReactNode
  className?: string
}

export default function GlitchHeading({ children, className = "" }: GlitchHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67],
      }}
      className={`glitch-wrapper ${className}`}
    >
      <motion.h1
        data-text={typeof children === "string" ? children : undefined}
        className="glitch text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
      >
        {children}
      </motion.h1>
    </motion.div>
  )
}

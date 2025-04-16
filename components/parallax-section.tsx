"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  baseVelocity?: number
  className?: string
}

export default function ParallaxSection({ children, baseVelocity = 0.2, className = "" }: ParallaxSectionProps) {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${baseVelocity * 100}%`])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, opacity }} className="w-full h-full">
        {children}
      </motion.div>
    </section>
  )
}

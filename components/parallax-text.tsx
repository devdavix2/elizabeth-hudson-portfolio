"use client"

import type React from "react"

import { useRef } from "react"
import { useMotionValue, useTransform, motion } from "framer-motion"

interface ParallaxProps {
  children: React.ReactNode
  baseVelocity: number
}

export function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const x = useTransform(baseX, (value) => `${value}px`)

  const directionFactor = useRef(baseVelocity < 0 ? -1 : 1)
  const factor = directionFactor.current

  const animate = () => {
    const newX = baseX.get() - factor * 2
    baseX.set(newX)
    requestAnimationFrame(animate)
  }

  // Start the animation when component mounts
  useRef(requestAnimationFrame(animate))

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div className="flex whitespace-nowrap text-2xl font-bold tracking-tight text-primary/50" style={{ x }}>
        <span className="mr-4">{children}</span>
        <span className="mr-4">{children}</span>
        <span className="mr-4">{children}</span>
        <span className="mr-4">{children}</span>
      </motion.div>
    </div>
  )
}

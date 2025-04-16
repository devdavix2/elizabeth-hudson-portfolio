"use client"

import type React from "react"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

interface RevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  once?: boolean
  distance?: number
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
  once = true,
  distance = 20,
}: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })

  // Set animation direction
  const getDirectionVariants = (): Variants => {
    switch (direction) {
      case "down":
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "up":
      default:
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
    }
  }

  const variants = getDirectionVariants()

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

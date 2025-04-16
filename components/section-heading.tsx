"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SectionHeadingProps {
  children: React.ReactNode
  badge?: string
  className?: string
}

export default function SectionHeading({ children, badge, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary border border-primary/30 mb-4"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
      >
        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">{children}</span>
      </motion.h2>
    </div>
  )
}

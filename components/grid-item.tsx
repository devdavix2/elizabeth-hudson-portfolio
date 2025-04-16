"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface GridItemProps {
  title: string
  description: string
  image: string
  link: string
  delay?: number
  index?: number
}

export default function GridItem({ title, description, image, link, delay = 0, index = 0 }: GridItemProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay || index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-primary/20 hover-glow-card"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-lg font-bold text-white"
          >
            {title}
          </motion.h4>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-sm text-white/80"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link
              href={link}
              className="inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Project <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

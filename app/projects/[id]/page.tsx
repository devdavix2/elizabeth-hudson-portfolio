"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, ExternalLink, Calendar, User, Tag } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import { Reveal } from "@/components/reveal"

// Project data
const projectsData = {
  "cashflow-project": {
    title: " Cash Flow Project ",
    category: "Album Cover Art",
    client: "Samoraii Production",
    date: "December 2022",
    challenge:
      " In a digital world cluttered with ordinary visuals, the goal was to create an album cover that bursts with personality and instantly resonates with fans. The challenge was to design eye-catching image that translates sound into vivid, cartoonish imagery making the album impossible to ignore on any streaming platform.",
    process:
      "The design journey began with bold, freehand sketches that distilled complex ideas into simple, fun characters and lively scenes. Using digital tools to refine these concepts, the artwork was built from clean outlines, exaggerated features, and bright, saturated colors. Every element was crafted with a cartoon flair from bubbly typography to quirky illustrations ensuring that the visual narrative is as dynamic and accessible as it is artful. ",
    result:
      "The final artwork stands as a joyful testament to creative expression, marked by its vivid, animated appeal. The cover’s vibrant palette, dynamic characters, and whimsical details work together to create an album identity that is both unmistakably fun and profoundly memorable. This Cartoon Illustration Style not only grabs attention but also invites listeners to step into a world where every note is a stroke of playful genius.",
    mainImage: "/cash1.png",
    images: ["/cash1.png","/cash2.png","/cash4.png", "/cash3.png"],
    tags: ["Album Cover", "Digital Art", "Cartoon"],
  },
  "what": {
    title: "What Time is it ???",
    category: "Static Cover Art",
    client: "Mad MaxXx Ft. Dev Soko,A2DAMONEY",
    date: " March 2021",
    challenge: "The objective was clear: create an album cover that not only grabs attention on digital platforms but also harmonizes with the rhythmic pulse and vibe of What Time Is It. The cover had to stand apart amid a saturated market while conveying a narrative that speaks to both nostalgia and forward-thinking energy. I aimed to capture a playful yet sophisticated atmosphere one that invites listeners into a world where time and music collide in a bold, cartoon-inspired visual style.",

    process:   " I began the project by immersing myself in the song’s atmospheric layers, analyzing its tempo, melody, and overall mood. With a few exploratory sketches in hand, I built mood boards featuring neon hues, dynamic lines, and elements of retro-futuristic design. Embracing a full Cartoon Illustration Style, I developed a series of iterations that balanced exaggerated proportions with a vibrant color palette, ensuring the imagery echoed the track’s energetic and transformative vibe. Digital painting techniques and vector design tools were combined to refine the artwork, resulting in crisp outlines, playful details, and a striking composition that could stand confidently on streaming platforms ",
   
   
    result:
 "  The final design not only exceeded expectations but also elevated the song’s visual identity. Listeners and fans quickly recognized the cover’s unique style as a visual representation of the track’s innovative sound. The artwork became a talking point on social media, boosting engagement and drawing new audiences to the track. It effectively encapsulated the creative journey from early sketches to a polished, cartoon-inspired masterpiece and cemented its place as a centerpiece of the release campaign.",    
    
    mainImage: "/what.png",
    images: ["/what.png"],
    tags: ["Album Cover", "Digital Art", "Cartoon"],

  },
  "leader": {
    title: "What is a Leaeder",
    category: "Static Cover Art",
    client: "Rashad EAS",
    date: "February 2022",
  
    challenge:
"Capture the essence of leadership in a clean, impactful design one that visually conveys strength and clarity, and stands out among digital releases.",
      process:
"I distilled leadership into bold symbolism through minimalist line work, a thoughtful color palette, and streamlined digital techniques. Quick concept sketches evolved into a refined illustration that balanced modernity with a classic nod to leadership ideals.",
      result:
"The final cover is a striking, memorable visual that resonates with its intended message communicating leadership with an air of confidence and simplicity that engages audiences on digital platforms.",

      mainImage: "/leader.png",
    images: ["/leader.png"],
    tags: ["Album Cover", "Digital Art", "Cartoon"],
  },
 
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState("")

  useEffect(() => {
    // Get project data based on ID
    const projectData = projectsData[params.id as keyof typeof projectsData]
    if (projectData) {
      setProject(projectData)
      setSelectedImage(projectData.mainImage)
    }
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent"
        ></motion.div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Project not found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-muted-foreground"
        >
          The project you're looking for doesn't exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Button asChild className="bg-gradient-to-r from-primary to-purple-500 text-white">
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/20"
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative h-8 w-8 overflow-hidden rounded-full bg-primary/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">EH</span>
              </div>
              <div className="absolute inset-0 rounded-full border border-primary/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </motion.div>
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-xl font-bold text-transparent">
              Elizabeth Hudson
            </span>
          </Link>
         
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <AnimatedBackground />
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href="/#portfolio"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Portfolio
                </Link>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              >
                <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 flex flex-wrap gap-4"
              >
                <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/30">
                  <Tag className="mr-1 h-3 w-3" />
                  {project.category}
                </div>
                <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary/80 border border-primary/20">
                  <User className="mr-1 h-3 w-3" />
                  {project.client}
                </div>
                <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary/80 border border-primary/20">
                  <Calendar className="mr-1 h-3 w-3" />
                  {project.date}
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 text-muted-foreground text-lg"
              >
                {project.description}
              </motion.p>
            </div>
          </div>
        </section>


      {/* Main Image Section */}
<section className="py-12 px-12">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative aspect-square w-98 rounded-xl border border-primary/20 shadow-lg hover:shadow-glow transition-all duration-500"
    >
      <Image 
        src={selectedImage || "/placeholder.svg"} 
        alt={project.title} 
        fill 
        className="object-contain" 
      />
    </motion.div>
    <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
      {project.images.map((img: string, i: number) => (
        <motion.button
          key={i}
          onClick={() => setSelectedImage(img)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className={`relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
            selectedImage === img ? "border-primary shadow-glow" : "border-primary/20"
          }`}
        >
          <Image
            src={img || "/placeholder.svg"}
            alt={`${project.title} thumbnail ${i + 1}`}
            fill
            className="object-cover"
          />
        </motion.button>
      ))}
    </div>
  </div>
</section>


        {/* Project Details */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-3">
                <div className="md:col-span-2 space-y-8">
                  <Reveal>
                    <div>
                      <h2 className="text-2xl font-bold relative inline-block">
                        <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                          The Challenge
                        </span>
                        <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                      </h2>
                      <p className="mt-6 text-muted-foreground">{project.challenge}</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <div>
                      <h2 className="text-2xl font-bold relative inline-block">
                        <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                          The Process
                        </span>
                        <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                      </h2>
                      <p className="mt-6 text-muted-foreground">{project.process}</p>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div>
                      <h2 className="text-2xl font-bold relative inline-block">
                        <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                          The Result
                        </span>
                        <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                      </h2>
                      <p className="mt-6 text-muted-foreground">{project.result}</p>
                    </div>
                  </Reveal>
                </div>
                <div className="space-y-8">
                  <Reveal direction="left">
                    <div className="rounded-xl border border-primary/20 bg-card/20 p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-bold">
                        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                          Project Tags
                        </span>
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag: string, i: number) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary border border-primary/30"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                  <Reveal direction="left" delay={0.1}>
                    <div className="rounded-xl border border-primary/20 bg-card/20 p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-bold">
                        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                          Tools & Technologies
                        </span>
                      </h3>
                      <div className="mt-4 space-y-2">
                        {["Adobe illustrator", "Adobe Photoshop"].map(
                          (tool, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2"
                            >
                              <motion.div
                                className="h-2 w-2 rounded-full bg-primary"
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              ></motion.div>
                              <span className="text-sm">{tool}</span>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </div>
                  </Reveal>
                  <Reveal direction="left" delay={0.2}>
                    <div className="rounded-xl border border-primary/20 bg-card/20 p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-bold">
                        <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                          Interested?
                        </span>
                      </h3>
                      <p className="mt-4 text-muted-foreground">
                        If you like this project and want to discuss something similar for your music, get in touch!
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90"
                        >
                          <Link href="/#contact">
                            <motion.span
                              initial={{ x: 0 }}
                              whileHover={{ x: -3 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              Contact Me
                            </motion.span>
                            <motion.div
                              initial={{ x: 0 }}
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              className="inline-block ml-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </motion.div>
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

     

        {/* Next/Prev Projects */}
        <section className="py-16 bg-gradient-to-b from-background to-background/95">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-12"
            >
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Explore More Projects
              </span>
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(projectsData)
                .filter(([id]) => id !== params.id)
                .slice(0, 3)
                .map(([id, project], i) => (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Link
                      href={`/projects/${id}`}
                      className="group relative overflow-hidden rounded-xl border border-primary/20 hover-glow-card block"
                    >
                      <Image
                        src={project.mainImage || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <motion.div
                            className="mb-2 inline-block rounded-full bg-primary/20 px-2 py-1 text-xs text-primary border border-primary/30"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.category}
                          </motion.div>
                          <motion.h3
                            className="text-xl font-bold text-white"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.div
                            className="mt-1 flex items-center gap-2 text-xs text-white/70"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                          >
                            <span>{project.client.split(" - ")[0]}</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
            </div>
            <div className="mt-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90">
                  <Link href="/#portfolio">Back to Portfolio</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-sm text-muted-foreground"
          >
            &copy; {new Date().getFullYear()} Elizabeth Hudson. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="mailto:Lizzyanimation1@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link
                href="https://instagram.com/lizzygraphicsz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

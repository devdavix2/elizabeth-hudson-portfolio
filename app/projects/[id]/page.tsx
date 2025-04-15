"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, Twitter, ExternalLink, Calendar, User, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

// Project data
const projectsData = {
  "neon-horizon": {
    title: "Neon Horizon",
    category: "Static Cover Art",
    client: "Synthwave Artist - RetroWave",
    date: "March 2025",
    description:
      "A futuristic cityscape bathed in neon lights, created for an electronic music album. The design combines retro aesthetics with modern digital art techniques to create a nostalgic yet forward-looking visual identity.",
    challenge:
      "The artist wanted a cover that would stand out in digital streaming platforms while capturing the essence of synthwave music - nostalgic yet futuristic.",
    process:
      "I started with mood boards inspired by 80s sci-fi aesthetics and cyberpunk imagery. After sketching various concepts, I created the final piece using a combination of 3D modeling and digital painting techniques. The color palette was carefully selected to evoke the neon-soaked atmosphere of retro-futuristic cityscapes.",
    result:
      "The final artwork became the centerpiece of the artist's album release campaign, receiving positive feedback from fans and significantly increasing engagement on streaming platforms compared to previous releases.",
    mainImage: "/project1.jpg",
    images: ["/project1.jpg", "/project2.jpg", "/project3.jpg"],
    tags: ["Album Cover", "Synthwave", "Digital Art", "Retro-Futurism"],
  },
  "digital-dreams": {
    title: "Digital Dreams",
    category: "Static Cover Art",
    client: "Indie Producer - Dreamscape",
    date: "January 2025",
    description:
      "An abstract digital landscape representing the intersection of technology and consciousness, created for an EP exploring themes of digital existence and virtual reality.",
    challenge:
      "The producer wanted artwork that would visualize the concept of digital consciousness and the blurring lines between reality and virtual worlds.",
    process:
      "I began by researching visual representations of neural networks and digital landscapes. The design evolved through multiple iterations, combining generative art techniques with hand-crafted digital painting to create a dreamlike quality that feels both technological and organic.",
    result:
      "The artwork successfully communicated the EP's themes and helped establish a visual identity for the artist's exploration of digital consciousness. It was featured in several digital art publications and helped attract a new audience to the producer's work.",
    mainImage: "/project2.jpg",
    images: ["/project2.jpg", "/project4.jpg", "/project6.jpg"],
    tags: ["EP Cover", "Abstract", "Digital Art", "Generative"],
  },
  "cyber-pulse": {
    title: "Cyber Pulse",
    category: "Static Cover Art",
    client: "Techno Label - Neural Beats",
    date: "February 2025",
    description:
      "A pulsating visual representation of sound waves and digital signals, designed for a techno single release that explores the relationship between technology and rhythm.",
    challenge:
      "The label wanted a striking visual that would capture the raw energy of techno music while incorporating futuristic technological elements.",
    process:
      "I experimented with various audio visualization techniques, converting actual sound samples from the track into visual patterns. These were then enhanced and stylized through digital manipulation to create a dynamic composition that feels like a frozen moment of sonic energy.",
    result:
      "The artwork became one of the label's most recognized covers, leading to a series of commissions for their subsequent releases. The visual style established a distinctive brand identity that helped unify their catalog.",
    mainImage: "/project3.jpg",
    images: ["/project3.jpg", "/project5.jpg", "/project1.jpg"],
    tags: ["Single Cover", "Techno", "Audio Visualization", "Minimalist"],
  },
  "waveform-visualizer": {
    title: "Waveform Visualizer",
    category: "Motion Cover",
    client: "Electronic Artist - Frequency",
    date: "April 2025",
    description:
      "A dynamic audio-reactive motion cover that transforms the track's waveform into a mesmerizing visual experience for streaming platforms.",
    challenge:
      "Create a motion cover that would respond to the music in real-time, providing a visual representation of the track's energy and rhythm for streaming platforms like Spotify Canvas.",
    process:
      "I developed a custom audio analysis algorithm that extracts key frequency data from the track. This data drives the animation parameters, ensuring perfect synchronization between visual elements and musical features. The design went through multiple iterations to find the right balance between complexity and clarity.",
    result:
      "The motion cover significantly increased listener engagement, with streaming platforms reporting longer average listening times and higher share rates compared to static covers. The artist has since commissioned similar visualizers for their entire catalog.",
    mainImage: "/project4.jpg",
    images: ["/project4.jpg", "/project6.jpg", "/project2.jpg"],
    tags: ["Motion Design", "Audio Reactive", "Streaming", "Animation"],
  },
  "particle-flow": {
    title: "Particle Flow",
    category: "Motion Cover",
    client: "Electronic Music Producer - Flux",
    date: "May 2025",
    description:
      "A hypnotic particle system animation that responds to the music's dynamics, creating flowing patterns that visualize the emotional journey of the album.",
    challenge:
      "The producer wanted a sophisticated visual system that could represent the album's themes of transformation and flow, while maintaining visual interest throughout different musical sections.",
    process:
      "I built a custom particle system that responds to multiple audio parameters simultaneously. The system was designed to create emergent patterns that feel organic despite their digital nature. Special attention was paid to color transitions that match the emotional arc of the music.",
    result:
      "The motion cover became a central element in the album's marketing campaign, with snippets used across social media that drove significant pre-release engagement. The full animation was later expanded into visuals for live performances.",
    mainImage: "/project5.jpg",
    images: ["/project5.jpg", "/project3.jpg", "/project1.jpg"],
    tags: ["Particle System", "Generative Art", "Album Visuals", "Dynamic"],
  },
  "digital-pulse": {
    title: "Digital Pulse",
    category: "Motion Cover",
    client: "DJ Collective - Synapse",
    date: "June 2025",
    description:
      "Reactive motion graphics designed for a DJ set, featuring real-time visual responses to beat, tempo, and energy changes throughout the performance.",
    challenge:
      "Create a visual system that could adapt to the unpredictable nature of a live DJ set, responding to changes in music without requiring manual intervention during the performance.",
    process:
      "I developed a modular visual system with multiple layers that respond to different aspects of the audio. The system includes preset scenes that can be triggered based on audio cues, allowing for a cohesive visual narrative that follows the musical journey while maintaining flexibility for improvisation.",
    result:
      "The visuals became a signature element of the collective's performances, enhancing their brand recognition and creating a more immersive experience for audiences. The system has been continuously refined based on performance feedback and has evolved into a comprehensive visual identity for the collective.",
    mainImage: "/project6.jpg",
    images: ["/project6.jpg", "/project4.jpg", "/project2.jpg"],
    tags: ["Live Visuals", "DJ Set", "Reactive Graphics", "Performance"],
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
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="mt-2 text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Button asChild className="mt-6 bg-gradient-to-r from-primary to-purple-500 text-white">
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/20">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">EH</span>
              </div>
              <div className="absolute inset-0 rounded-full border border-primary/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-xl font-bold text-transparent">
              Elizabeth Hudson
            </span>
          </Link>
          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-purple-500 text-white">
            <Link href="/#portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <AnimatedBackground />
          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/#portfolio"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-up">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-4 animate-fade-up animation-delay-100">
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
              </div>
              <p className="mt-6 text-muted-foreground text-lg animate-fade-up animation-delay-200">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Main Image Section */}
        <section className="py-12">
          <div className="container">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-primary/20 shadow-lg hover:shadow-glow transition-all duration-500">
              <Image src={selectedImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
              {project.images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    selectedImage === img ? "border-primary shadow-glow" : "border-primary/20"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
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
                  <div>
                    <h2 className="text-2xl font-bold relative inline-block">
                      <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                        The Challenge
                      </span>
                      <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                    </h2>
                    <p className="mt-6 text-muted-foreground">{project.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold relative inline-block">
                      <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                        The Process
                      </span>
                      <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                    </h2>
                    <p className="mt-6 text-muted-foreground">{project.process}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold relative inline-block">
                      <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                        The Result
                      </span>
                      <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                    </h2>
                    <p className="mt-6 text-muted-foreground">{project.result}</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="rounded-xl border border-primary/20 bg-card/20 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Project Tags
                      </span>
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary border border-primary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-card/20 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold">
                      <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                        Interested?
                      </span>
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      If you like this project and want to discuss something similar for your music, get in touch!
                    </p>
                    <Button
                      asChild
                      className="mt-4 w-full bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90"
                    >
                      <Link href="/#contact">
                        Contact Me
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next/Prev Projects */}
        <section className="py-16 bg-gradient-to-b from-background to-background/95">
          <div className="container">
            <h2 className="text-2xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Explore More Projects
              </span>
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(projectsData)
                .filter(([id]) => id !== params.id)
                .slice(0, 3)
                .map(([id, project]) => (
                  <Link
                    key={id}
                    href={`/projects/${id}`}
                    className="group relative overflow-hidden rounded-xl border border-primary/20 hover-glow-card"
                  >
                    <Image
                      src={project.mainImage || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <div className="mb-2 inline-block rounded-full bg-primary/20 px-2 py-1 text-xs text-primary border border-primary/30">
                          {project.category}
                        </div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <div className="mt-1 flex items-center gap-2 text-xs text-white/70">
                          <span>{project.client.split(" - ")[0]}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild className="bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90">
                <Link href="/#portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Elizabeth Hudson. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="mailto:Lizzyanimation1@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://twitter.com/Lizzygraphics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

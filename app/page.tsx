"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, Twitter, ArrowRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
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
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>
          <Button
            onClick={() => scrollToSection("contact")}
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
          >
            Get in Touch
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-background/95 backdrop-blur-md border-b border-border/40 z-50">
            <div className="container py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
              >
                Services
              </button>
              <button
                onClick={() => {
                  scrollToSection("portfolio")
                  setMobileMenuOpen(false)
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2 text-left w-full"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <AnimatedBackground />
          <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center py-24 text-center">
            <div className="glitch-wrapper">
              <h1 className="glitch text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Transforming Sound into Vision
                </span>
              </h1>
            </div>
            <p className="mt-6 animate-fade-up text-muted-foreground animation-delay-100 max-w-3xl text-lg sm:text-xl">
              Cover Art & Visual Storytelling for Musicians in the Digital Age
            </p>
            <div className="mt-10 flex animate-fade-up animation-delay-200 gap-4">
              <Button
                onClick={() => scrollToSection("portfolio")}
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
              >
                Explore My Work
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary"
              >
                Get in Touch
              </Button>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <button
                onClick={() => scrollToSection("about")}
                className="flex flex-col items-center text-muted-foreground hover:text-primary"
              >
                <span className="text-sm">Scroll Down</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="grid-background"></div>
          </div>
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary border border-primary/30">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Elizabeth Hudson
                  </span>
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  I'm a digital artist specializing in creating futuristic cover art, motion designs, and animated
                  videos for forward-thinking musicians. My work blends cutting-edge technology with artistic vision to
                  create immersive visual experiences.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  With expertise in both traditional and digital mediums, I create visual stories that complement and
                  enhance musical experiences, helping artists stand out in the digital landscape with visuals that
                  resonate with modern audiences.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
                  >
                    <Link href="/projects">View My Projects</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-primary/20 order-1 md:order-2 glow-card">
                <Image
                  src="/elizabeth-profile.png"
                  alt="Elizabeth Hudson - Tech Artist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="tech-circuit"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary border border-primary/30 mb-4">
                My Work
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Portfolio Showcase
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Explore my creative works across different mediums, from static cover art to dynamic motion designs and
                animated videos.
              </p>
            </div>

            {/* Portfolio Categories */}
            <div className="mt-16 grid gap-16">
              {/* Static Cover Art */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Static Cover Art
                  </span>
                  <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Neon Horizon",
                      desc: "Album cover for electronic artist",
                      img: "/project1.jpg",
                      id: "neon-horizon",
                    },
                    {
                      title: "Digital Dreams",
                      desc: "EP cover for indie producer",
                      img: "/project2.jpg",
                      id: "digital-dreams",
                    },
                    {
                      title: "Cyber Pulse",
                      desc: "Single cover for techno release",
                      img: "/project3.jpg",
                      id: "cyber-pulse",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-xl border border-primary/20 hover-glow-card"
                    >
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <h4 className="text-lg font-bold text-white">{item.title}</h4>
                          <p className="text-sm text-white/80">{item.desc}</p>
                          <Link
                            href={`/projects/${item.id}`}
                            className="inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            View Project <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motion Covers */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Motion Covers
                  </span>
                  <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Waveform Visualizer",
                      desc: "Animated cover for streaming platforms",
                      img: "/project4.jpg",
                      id: "waveform-visualizer",
                    },
                    {
                      title: "Particle Flow",
                      desc: "Dynamic album art for electronic music",
                      img: "/project5.jpg",
                      id: "particle-flow",
                    },
                    {
                      title: "Digital Pulse",
                      desc: "Reactive motion graphics for DJ set",
                      img: "/project6.jpg",
                      id: "digital-pulse",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-xl border border-primary/20 hover-glow-card"
                    >
                      <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="rounded-full bg-primary/20 p-4 backdrop-blur-sm border border-primary/30">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8 text-primary"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <h4 className="text-lg font-bold text-white">{item.title}</h4>
                          <p className="text-sm text-white/80">{item.desc}</p>
                          <Link
                            href={`/projects/${item.id}`}
                            className="inline-flex items-center mt-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            View Project <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
              >
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="grid-background"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary border border-primary/30 mb-4">
                What I Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Services & Specialties
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Specialized creative services tailored for musicians and bands looking to elevate their visual presence
                in the digital realm.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service 1 */}
              <div className="rounded-xl border border-primary/20 bg-card/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Static Cover Art
                  </span>
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Eye-catching album and single covers designed to capture the essence of your music and stand out on
                  streaming platforms with a futuristic edge.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Album & EP Covers
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Single Release Artwork
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Promotional Graphics
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="rounded-xl border border-primary/20 bg-card/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m10 13-2 2 2 2" />
                    <path d="m14 17 2-2-2-2" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Motion Covers
                  </span>
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Dynamic animated covers that bring your music to life visually on digital platforms and social media
                  with cutting-edge motion design.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Spotify Canvas
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Animated Cover Art
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Social Media Animations
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="rounded-xl border border-primary/20 bg-card/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m22 8-6 4 6 4V8Z" />
                    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Animated Videos
                  </span>
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Captivating animated videos that tell your story and create immersive visual experiences for your
                  audience with futuristic aesthetics.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Lyric Videos
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Music Video Animation
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Visual Album Experiences
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="mb-4 text-2xl font-bold">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Client Benefits
                </span>
              </h3>
              <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
                My tech-forward creative approach helps musicians and bands stand out in the digital landscape by
                creating visual narratives that complement their musical vision. Through innovative design and
                animation, I help artists create a cohesive brand identity that resonates with modern audiences and
                enhances their musical storytelling.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="mt-8 bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="tech-circuit"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary border border-primary/30 mb-4">
                Connect
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </span>
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Ready to bring your music to life visually? Let's discuss your project and create something amazing
                together.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:Lizzyanimation1@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Lizzyanimation1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                    <Twitter className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Twitter</p>
                    <a
                      href="https://twitter.com/Lizzygraphics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      @Lizzygraphics
                    </a>
                  </div>
                </div>
                <div className="mt-8 rounded-xl border border-primary/20 bg-card/20 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold">
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                      Let's Create Together
                    </span>
                  </h3>
                  <p className="text-muted-foreground">
                    Whether you're looking for album artwork, animated covers, or a full visual experience for your
                    music, I'm here to help bring your vision to life with cutting-edge digital artistry. Reach out to
                    discuss your project, timeline, and ideas.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/elizabeth-studio.png"
                    alt="Elizabeth Hudson - Digital Art Studio"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded-xl border border-primary/20"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-card/20 p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <h3 className="mb-4 text-xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ready to bring your music to life visually? I'm available for freelance projects and collaborations.
                  Feel free to contact me through email or social media to discuss your ideas.
                </p>
                <div className="flex flex-col space-y-3">
                  <a
                    href="mailto:Lizzyanimation1@gmail.com"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Lizzyanimation1@gmail.com
                  </a>
                  <a
                    href="https://twitter.com/Lizzygraphics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    @Lizzygraphics
                  </a>
                </div>
              </div>
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

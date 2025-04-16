"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Mail, ArrowRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import SectionHeading from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import ParallaxSection from "@/components/parallax-section"
import GlitchHeading from "@/components/glitch-heading"
import GridItem from "@/components/grid-item"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      <header
        className={`sticky top-0 z-50 w-full border-b border-border/40 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/20" : "bg-background"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">EH</span>
              </div>
              <div className="absolute inset-0 rounded-full border border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-xl font-bold text-transparent">
              Elizabeth Hudson
            </span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {["about", "portfolio", "services", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
            >
              Get in Touch
            </Button>
          </div>
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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute w-full bg-background/95 backdrop-blur-md border-b border-border/40 z-50"
            >
              <div className="container py-4 flex flex-col space-y-4">
                {["about", "portfolio", "services", "projects", "contact"].map((item, i) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item)
                      setMobileMenuOpen(false)
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary py-2 text-left w-full"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <div>
                  <Button
                    onClick={() => {
                      scrollToSection("contact")
                      setMobileMenuOpen(false)
                    }}
                    className="w-full bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <AnimatedBackground />
          <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center py-24 text-center">
            <GlitchHeading>
              <span className="bg-gradient-to-r from-primary via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Transforming Sound into Vision
              </span>
            </GlitchHeading>

            <Reveal delay={0.4}>
              <p className="mt-6 text-muted-foreground max-w-3xl text-lg sm:text-xl">
                Cover Art & Visual Storytelling for Musicians in the Digital Age
              </p>
            </Reveal>

            <motion.div
              className="mt-10 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
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
            </motion.div>

            <div className="mt-12 flex gap-8 justify-center">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  {i < 2 && (
                    <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent ml-4 hidden md:block"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
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
        <ParallaxSection id="about" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="grid-background"></div>
          </div>
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                <Reveal>
                  <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary border border-primary/30">
                    About Me
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      Elizabeth Hudson
                    </span>
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-muted-foreground md:text-lg">
                    I'm a digital artist specializing in creating futuristic cover art, motion designs, and animated
                    videos for forward-thinking musicians. My work blends cutting-edge technology with artistic vision
                    to create immersive visual experiences.
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-muted-foreground md:text-lg">
                    With expertise in both traditional and digital mediums, I create visual stories that complement and
                    enhance musical experiences, helping artists stand out in the digital landscape with visuals that
                    resonate with modern audiences.
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="flex gap-4 pt-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-purple-500 text-white hover:opacity-90 hover:from-primary hover:to-purple-600"
                    >
                      <Link href="/projects">View My Projects</Link>
                    </Button>
                  </div>
                </Reveal>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-primary/20 order-1 md:order-2 glow-card">
                <div className="h-full w-full">
                  <Image
                    src="/elizabeth-profile.png"
                    alt="Elizabeth Hudson - Tech Artist"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-primary/0 rounded-2xl hover:border-primary/30 transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="tech-circuit"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <SectionHeading badge="My Work">Portfolio Showcase</SectionHeading>
              <Reveal>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Explore my creative works across different mediums, from static cover art to dynamic motion designs
                  and animated videos.
                </p>
              </Reveal>
            </div>

            {/* Portfolio Categories */}
            <div className="mt-16 grid gap-16">
              {/* Static Cover Art */}
              <div className="space-y-8">
                <Reveal>
                  <h3 className="text-2xl font-bold relative inline-block">
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                      Static Cover Art
                    </span>
                    <span className="absolute -bottom-2 left-0 h-[2px] w-24 bg-gradient-to-r from-primary to-cyan-400"></span>
                  </h3>
                </Reveal>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: " Cash Flow Project",
                      desc: "Album cover for Cash Flow Project",
                      img: "/cash1.png",
                      id: "cashflow-project",
                    },
                    {
                      title: "What Time is it ???",
                      desc: "Cover art for Mad MaxXx Ft. Dev Soko,A2DAMONEY",
                      img: "/what.png",
                      id: "what"
                    },
                    {
                      title: "What is a Leader",
                      desc: "Cover art for Rashad EAS - What Is A Leader (clean)",
                      img: "/leader.png",
                      id: "leader",
                    },
                  ].map((item, i) => (
                    <GridItem
                      key={i}
                      title={item.title}
                      description={item.desc}
                      image={item.img}
                      link={`/projects/${item.id}`}
                      index={i}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <ParallaxSection id="services" className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="grid-background"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <SectionHeading badge="What I Offer">Services & Specialties</SectionHeading>
              <Reveal>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Specialized creative services tailored for musicians and bands looking to elevate their visual
                  presence in the digital realm.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service Cards */}
              {[
                {
                  title: "Static Cover Art",
                  description:
                    "Eye-catching album and single covers designed to capture the essence of your music and stand out on streaming platforms with a futuristic edge.",
                  icon: (
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
                  ),
                  features: ["Album & EP Covers", "Single Release Artwork", "Promotional Graphics"],
                },
                {
                  title: "Motion Covers",
                  description:
                    "Dynamic animated covers that bring your music to life visually on digital platforms and social media with cutting-edge motion design.",
                  icon: (
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
                  ),
                  features: ["Spotify Canvas", "Animated Cover Art", "Social Media Animations"],
                },
                {
                  title: "Animated Videos",
                  description:
                    "Captivating animated videos that tell your story and create immersive visual experiences for your audience with futuristic aesthetics.",
                  icon: (
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
                  ),
                  features: ["Lyric Videos", "Music Video Animation", "Visual Album Experiences"],
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-primary/20 bg-card/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover:-translate-y-2"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">
                    <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                      {service.title}
                    </span>
                  </h3>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3 text-sm">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
        
            </div>
          </div>
        </ParallaxSection>

        {/* Testimonials Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="grid-background"></div>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <SectionHeading badge="Client Feedback">What Musicians Say</SectionHeading>
              <Reveal>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Hear from artists who have transformed their visual identity with my creative services.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Testimonials */}
              {[
                {
                  initials: "AJ",
                  name: "Alex Johnson",
                  role: "Electronic Producer",
                  quote:
                    "Elizabeth created a stunning visual identity for my album that perfectly captured the essence of my sound. The artwork has become synonymous with my brand and helped me stand out in a crowded market.",
                },
                {
                  initials: "SM",
                  name: "Sarah Mitchell",
                  role: "Indie Artist",
                  quote:
                    "Working with Elizabeth was a game-changer for my EP release. Her motion graphics added a whole new dimension to my music and significantly increased engagement on streaming platforms.",
                },
                {
                  initials: "DT",
                  name: "David Torres",
                  role: "DJ & Producer",
                  quote:
                    "Elizabeth's animated visuals for my live sets have completely transformed my performances. The audience response has been incredible, and it's helped establish a unique identity for my shows.",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-primary/20 bg-card/20 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover:-translate-y-2"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#7c3aed"
                        stroke="none"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
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
              <SectionHeading badge="Connect">Get in Touch</SectionHeading>
              <Reveal>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Ready to bring your music to life visually? Let's discuss your project and create something amazing
                  together.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <Reveal>
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
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
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
                        className="h-5 w-5 text-primary"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <a
                        href="https://instagram.com/lizzygraphicsz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        @lizzygraphicsz
                      </a>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
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
                </Reveal>

              </div>

              <Reveal direction="left">
                <div className="rounded-xl border border-primary/20 bg-card/20 p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2">
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
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors hover:translate-x-1"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Lizzyanimation1@gmail.com
                    </a>
                    <a
                      href="https://instagram.com/lizzygraphicsz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors hover:translate-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 mr-2"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      @lizzygraphicsz
                    </a>
                  </div>
                </div>
              </Reveal>
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
            <div className="hover:-translate-y-1 transition-transform duration-300">
              <Link
                href="mailto:Lizzyanimation1@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <div className="hover:-translate-y-1 transition-transform duration-300">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

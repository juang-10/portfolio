'use client'

import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import { Suspense } from "react"
import "../config/i18next.config"

export default function Home() {
  return (
    <Suspense fallback="loading">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </Suspense>
  )
}


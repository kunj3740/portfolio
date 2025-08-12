
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ExternalLink, Github, X, ChevronRight, Code, Zap } from 'lucide-react'

export interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  categories: string[]
  techStack: string[]
  liveLink: string
  githubLink: string
  features: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Make-Back",
    subtitle: "Backend Automation Platform",
    description:
      "An AI-powered backend generator that lets developers visually design schema diagrams and instantly generate backend code, tests, and documentation.",
    image:
      "https://res.cloudinary.com/dnluacn1g/image/upload/v1754987161/Screenshot_2025-08-12_135548_qdzjgf.png",
    categories: ["Gen AI", "Full Stack"],
    techStack: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
      "OpenAI API",
      "Vercel",
      "AWS EC2",
      "Docker",
      "CI/CD",
    ],
    liveLink: "https://make-back.vercel.app/",
    githubLink: "https://github.com/kunj3740/make-back",
    features: [
      "AI-Driven Schema Builder: Drag-and-drop ER/class diagrams with AI suggestions",
      "Context-Aware API Generation: Node.js APIs based on persistent schema context",
      "Automated API Modules: Structured folders with code, test cases, and documentation",
      "Robust Tech Stack: Includes Dockerized CI/CD, hosted on Vercel and AWS EC2",
    ],
  },
  {
    id: 2,
    title: "Read-Me",
    subtitle: "AI-Powered Blogs",
    description:
      "A comprehensive blog platform with AI-powered features for content creation, moderation, and user interaction.",
    image: "https://res.cloudinary.com/dnluacn1g/image/upload/v1754987037/Screenshot_2025-08-12_135339_azwdms.png",
    categories: ["Gen AI", "Full Stack"],
    techStack: ["React.js", "TypeScript", "LangChain", "Hono", "PostgreSQL", "Prisma ORM", "Cloudflare", "Vercel"],
    liveLink: "https://read-me-blogs.vercel.app",
    githubLink: "https://github.com/kunj3740/readme",
    features: [
      "Blog Management: Full CRUD (publish, read, update, delete, search) , Admin Control",
      "AI Blog Publishing: Grammar/spell check using AI",
      "Custom Chatbot: Answers user questions & summarizes blogs using LangChain + RAG",
      "Deployed with Cloudflare (backend) + Vercel (frontend)",
    ],
  },
  {
    id: 3,
    title: "D-Kart",
    subtitle: "E-commerce with Payments",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and integrated payment processing.",
    image: "https://res.cloudinary.com/dnluacn1g/image/upload/v1754987110/Screenshot_2025-08-12_135444_akae4c.png",
    categories: ["Full Stack"],
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma ORM", "Shadcn UI", "Redux"],
    liveLink: "https://dkart-ten.vercel.app",
    githubLink: "https://github.com/kunj3740/e-commerce",
    features: [
      "Authentication: Secure sign-in/sign-up, profile management",
      "Product Features: Smart product catalog with search & filter",
      "Cart System: Redux-powered, real-time updates",
      "Order Management: Stripe-integrated payments & tracking",
    ],
  },
]

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const isProjectsPath =
      window.location.hash === "#projects" ||
      window.location.pathname === "/projects#" ||
      window.location.pathname === "/projects"
    if (isProjectsPath) {
      const el = document.getElementById("projects-section")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const categories = Array.from(new Set(projects.flatMap((p) => p.categories)))

  useEffect(() => {
    setIsAnimating(true)
    const t = setTimeout(() => {
      setFilteredProjects(selectedCategory ? projects.filter((p) => p.categories.includes(selectedCategory)) : projects)
      setIsAnimating(false)
    }, 250)
    return () => clearTimeout(t)
  }, [selectedCategory])

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }
  const closeProjectModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProjectModal()
    }
    if (isModalOpen) window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [isModalOpen])

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <section id="projects-section" className="relative py-24" aria-label="Projects">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(34,211,238,0.10),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_30%_at_60%_70%,rgba(16,185,129,0.08),transparent)]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-14 text-center">
          <h2 className="mb-2 text-4xl md:text-5xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Featured Projects
            </span>
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          <p className="mx-auto max-w-2xl text-lg text-slate-300 mt-6">
            Explore my latest work across different domains. Each project represents a unique challenge and
            demonstrates my technical expertise.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              selectedCategory === null
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                : "bg-slate-800/70 text-white/80 backdrop-blur-sm hover:bg-slate-700/70 hover:text-white border border-slate-700"
            }`}
          >
            <span className="relative z-10">All Projects</span>
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/20"
                  : "bg-slate-800/70 text-white/80 backdrop-blur-sm hover:bg-slate-700/70 hover:text-white border border-slate-700"
              }`}
            >
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className={`grid gap-8 transition-all duration-500 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ${
            isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-emerald-500/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=400&width=600&query=project image"}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-emerald-600/90 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500">
                    View Details
                  </div>
                </div>

                {/* Categories */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-emerald-600/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-xl font-bold text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-sm text-emerald-300">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/link flex items-center gap-1 rounded-full bg-slate-800/80 px-3 py-1 text-xs text-white/90 backdrop-blur-sm transition-all hover:bg-emerald-600 hover:text-white"
                      >
                        <ExternalLink size={12} />
                        <span>Live</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/link flex items-center gap-1 rounded-full bg-slate-800/80 px-3 py-1 text-xs text-white/90 backdrop-blur-sm transition-all hover:bg-emerald-600 hover:text-white"
                      >
                        <Github size={12} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-emerald-200/90 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-emerald-200/90 backdrop-blur-sm">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && !isAnimating && (
          <div className="mt-12 rounded-lg bg-slate-800/50 p-8 text-center backdrop-blur-sm border border-slate-700/60">
            <p className="text-lg text-white/80">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 rounded-full bg-emerald-600 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-emerald-500"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeProjectModal} />

          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-gradient-to-b from-slate-900/95 to-black/95 p-1 shadow-xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full rounded-xl bg-slate-900/90 p-5 md:p-6 border border-slate-800/60">
              <button
                onClick={closeProjectModal}
                className="absolute right-4 top-4 z-20 rounded-full bg-slate-800/90 p-2 text-white/90 transition-all hover:bg-emerald-600 hover:text-white"
                style={{ boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="grid gap-6 md:grid-cols-5">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-xl md:col-span-2">
                  <img
                    src={selectedProject.image || "/placeholder.svg?height=400&width=600&query=project image"}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-emerald-600/85 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col md:col-span-3">
                  <div className="mb-4">
                    <h2 className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-2xl font-bold text-transparent">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm text-emerald-300">{selectedProject.subtitle}</p>
                  </div>

                  <p className="mb-4 text-sm text-white/85">{selectedProject.description}</p>

                  <div className="mb-4">
                    <h3 className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                      <Code size={16} className="text-emerald-400" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                      <Zap size={16} className="text-cyan-400" />
                      Key Features
                    </h3>
                    <ul className="grid gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-white/85">
                          <ChevronRight size={14} className="mt-1 shrink-0 text-emerald-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex gap-4 pt-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2 text-sm font-medium text-white transition-all hover:from-emerald-500 hover:to-teal-500"
                    >
                      <ExternalLink size={16} />
                      <span>View Live</span>
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-slate-800/80 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-slate-700/90"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects

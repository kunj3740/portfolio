
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
      <div className="container relative mx-auto px-4 md:px-8 z-10">
        <div className="mb-14 text-center">
          <h2 className="mb-2 text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <div className="w-28 h-1.5 shadow-neu-pressed bg-indigo-500/30 mx-auto rounded-full mt-4" />
          <p className="mx-auto max-w-2xl text-lg text-gray-600 font-medium mt-6">
            Explore my latest work across different domains. Each project represents a unique challenge and
            demonstrates my technical expertise.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`group relative overflow-hidden rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 ${selectedCategory === null
                ? "bg-neu shadow-neu-pressed text-indigo-500"
                : "bg-neu shadow-neu text-gray-600 hover:text-indigo-500"
              }`}
          >
            <span className="relative z-10">All Projects</span>
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative overflow-hidden rounded-full px-8 py-3 text-sm font-bold transition-all duration-300 ${selectedCategory === category
                  ? "bg-neu shadow-neu-pressed text-indigo-500"
                  : "bg-neu shadow-neu text-gray-600 hover:text-indigo-500"
                }`}
            >
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className={`grid gap-10 transition-opacity transition-transform duration-500 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ${isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
        >
          {filteredProjects.map((project) => {
            const getTagStyle = () => {
              return 'clay-slate text-slate-900';
            };

            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
                }}
                onClick={() => openProjectModal(project)}
                className="group cursor-pointer rounded-[2.5rem] bg-neu p-5 shadow-neu transition-transform duration-300 hover:-translate-y-2"
              >
              <div className="relative aspect-video overflow-hidden rounded-[2rem] shadow-neu-pressed p-2">
                <img
                  src={project.image || "/placeholder.svg?height=400&width=600&query=project image"}
                  alt={project.title}
                  className="h-full w-full object-cover object-center rounded-2xl transition-all duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="clay-pill bg-neu/90 backdrop-blur-md px-6 py-2.5 text-sm font-bold text-gray-800 transition-all duration-300 hover:text-indigo-500">
                    View Details
                  </div>
                </div>

                {/* Categories */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="clay-pill bg-slate-600/80 px-3 py-1 text-[10px] uppercase tracking-wider font-bold backdrop-blur-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 mt-2">
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-black text-gray-800 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-bold text-indigo-500 mt-1">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 clay-pill clay-btn bg-neu p-3 text-gray-600 transition-all hover:text-indigo-500"
                      >
                        <ExternalLink size={14} />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 clay-pill clay-btn bg-neu p-3 text-gray-600 transition-all hover:text-indigo-500"
                      >
                        <Github size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mb-6 line-clamp-2 text-sm font-medium leading-relaxed text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`${getTagStyle()} clay-slate px-3 py-1.5 text-[10px] font-mint`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="clay-slate px-3 py-1.5 text-[10px] font-black text-slate-900">
                      +{project.techStack.length - 4} More
                    </span>
                  )}
                </div>
              </div>
              </motion.div>
          );
          })}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && !isAnimating && (
          <div className="mt-12 rounded-[2.5rem] bg-neu shadow-neu-pressed p-10 text-center mx-auto max-w-lg">
            <p className="text-lg font-bold text-gray-600">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-6 rounded-full shadow-neu bg-neu px-8 py-3 text-sm font-bold text-indigo-500 transition-all active:shadow-neu-pressed hover:text-indigo-500"
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
          <div className="absolute inset-0 bg-neu/80 backdrop-blur-sm" onClick={closeProjectModal} />

          <div
            className="relative max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-[2.5rem] shadow-neu-pressed bg-neu p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full rounded-[2rem] bg-neu p-6 md:p-8 shadow-neu relative">
              <button
                onClick={closeProjectModal}
                className="absolute right-6 top-6 z-20 rounded-full shadow-neu bg-neu p-3 text-gray-500 transition-all active:shadow-neu-pressed hover:text-red-500 outline-none"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="grid gap-8 md:grid-cols-5 mt-4">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-[2rem] shadow-neu-pressed p-2 md:col-span-2">
                  <img
                    src={selectedProject.image || "/placeholder.svg?height=400&width=600&query=project image"}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover object-center rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full shadow-neu bg-neu/90 px-3 py-1 text-xs font-bold text-slate-300 backdrop-blur-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col md:col-span-3">
                  <div className="mb-6">
                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm font-bold text-indigo-500 mt-2">{selectedProject.subtitle}</p>
                  </div>

                  <p className="mb-6 text-sm font-medium leading-relaxed text-gray-600">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-gray-800">
                      <Code size={18} className="text-violet-500" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="clay-slate px-4 py-1.5 text-xs font-bold text-slate-900">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-3 flex items-center gap-2 text-base font-bold text-gray-800">
                      <Zap size={18} className="text-amber-500" />
                      Key Features
                    </h3>
                    <ul className="grid gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                          <div className="mt-0.5 clay-emerald p-1.5 text-slate-900 flex-shrink-0">
                            <ChevronRight size={12} strokeWidth={3} />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4 pt-4 border-t-2 border-slate-700">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full shadow-neu bg-neu px-6 py-3 text-sm font-bold text-indigo-400 transition-all active:shadow-neu-pressed hover:text-indigo-500"
                    >
                      <ExternalLink size={16} />
                      <span>View Live</span>
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full shadow-neu bg-neu px-6 py-3 text-sm font-bold text-gray-600 transition-all active:shadow-neu-pressed hover:text-indigo-500"
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

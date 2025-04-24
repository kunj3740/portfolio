  
import type React from "react"
import { useState, useEffect } from "react"
import { ExternalLink, Github, X, ChevronRight, Code, Zap } from "lucide-react"

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
    title: "Read-Me",
    subtitle: "AI-Powered Blogs",
    description:
      "A comprehensive blog platform with AI-powered features for content creation, moderation, and user interaction.",
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg",
    categories: ["AI", "Full Stack"],
    techStack: ["React.js", "TypeScript", "LangChain", "Hono", "PostgreSQL", "Prisma ORM", "Cloudflare", "Vercel"],
    liveLink: "https://read-me-blogs.vercel.app",
    githubLink: "https://github.com/kunj3740/readme",
    features: [
      "Blog Control: Full CRUD (publish, read, update, delete, search)",
      "AI Blog Publishing: Grammar/spell check using AI",
      "Custom Chatbot: Answers user questions & summarizes blogs using LangChain + RAG",
      "Token Efficiency: Cost-saving OpenAI integration with Retrieval-Augmented Generation",
      "Deployed with Cloudflare (backend) + Vercel (frontend)",
    ],
  },
  {
    id: 2,
    title: "D-Kart",
    subtitle: "E-commerce with Payments",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and integrated payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
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

  // Handle URL hash for direct access to /projects#
  useEffect(() => {
    // Check if URL has #projects or is /projects# path
    const isProjectsPath = window.location.hash === '#projects' || 
                          window.location.pathname === '/projects#' ||
                          window.location.pathname === '/projects';
                          
    if (isProjectsPath) {
      // Make sure component is visible
      const projectsElement = document.getElementById('projects-section');
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Get all unique categories from projects
  const getAllCategories = (): string[] => {
    const categoriesSet = new Set<string>()
    projects.forEach((project) => {
      project.categories.forEach((category) => {
        categoriesSet.add(category)
      })
    })
    return Array.from(categoriesSet)
  }

  const categories = getAllCategories()

  useEffect(() => {
    setIsAnimating(true)

    const timer = setTimeout(() => {
      if (selectedCategory) {
        setFilteredProjects(projects.filter((project) => project.categories.includes(selectedCategory)))
      } else {
        setFilteredProjects(projects)
      }

      setIsAnimating(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedCategory])

  // Handle modal open
  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  // Handle modal close
  const closeProjectModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProjectModal()
      }
    }

    if (isModalOpen) {
      window.addEventListener("keydown", handleEscKey)
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey)
    }
  }, [isModalOpen])

  // Prevent scroll when modal is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <section id="projects-section" className="relative py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-600/15 via-black/40 to-black/60"></div>

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-white via-violet-200 to-white/80 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Explore my latest work across different domains. Each project represents a unique challenge and demonstrates
            my technical expertise.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 
              ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/40"
                  : "bg-gray-800/60 text-white/80 backdrop-blur-sm hover:bg-gray-700/60 hover:text-white"
              }`}
          >
            <span className="relative z-10">All Projects</span>
            {selectedCategory === null && (
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-violet-500 opacity-100 blur-[1px]"></span>
            )}
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 
                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/40"
                    : "bg-gray-800/60 text-white/80 backdrop-blur-sm hover:bg-gray-700/60 hover:text-white"
                }`}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory === category && (
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600 to-violet-500 opacity-100 blur-[1px]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          className={`grid gap-8 transition-all duration-500 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ${
            isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/70 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/20"
            >
              {/* Project image with overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

                {/* View details button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-violet-500/90 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-violet-600">
                    View Details
                  </div>
                </div>

                {/* Categories */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-violet-500/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-xl font-bold text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-sm text-violet-300">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/link flex items-center gap-1 rounded-full bg-gray-800/80 px-3 py-1 text-xs text-white/90 backdrop-blur-sm transition-all hover:bg-violet-600 hover:text-white"
                      >
                        <ExternalLink size={12} />
                        <span>Live</span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/link flex items-center gap-1 rounded-full bg-gray-800/80 px-3 py-1 text-xs text-white/90 backdrop-blur-sm transition-all hover:bg-violet-600 hover:text-white"
                      >
                        <Github size={12} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-300/90">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-800/80 px-3 py-1 text-xs text-violet-200/90 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="rounded-full bg-gray-800/80 px-3 py-1 text-xs text-violet-200/90 backdrop-blur-sm">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && !isAnimating && (
          <div className="mt-12 rounded-lg bg-gray-800/50 p-8 text-center backdrop-blur-sm border border-gray-700/50">
            <p className="text-lg text-white/70">No projects found in this category.</p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 rounded-full bg-violet-500 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-violet-600"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal - UPDATED */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Modal backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeProjectModal}></div>

          {/* Modal content - Made 20% bigger */}
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-gradient-to-b from-gray-900/95 to-black/95 p-1 shadow-xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full rounded-xl bg-gray-900/90 p-5 md:p-6">
              {/* Close button - Fixed position to prevent it from being covered by image on mobile */}
              <button
                onClick={closeProjectModal}
                className="absolute right-4 top-4 z-20 rounded-full bg-gray-800/90 p-2 text-white/90 transition-all hover:bg-violet-600 hover:text-white"
                style={{ boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}
              >
                <X size={20} />
                <span className="sr-only">Close</span>
              </button>

              {/* Improved responsive layout */}
              <div className="grid gap-6 md:grid-cols-5">
                {/* Project image - takes 2 cols on md screens */}
                <div className="relative aspect-video overflow-hidden rounded-xl md:col-span-2">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Categories */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-violet-500/80 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project details - takes 3 cols on md screens */}
                <div className="flex flex-col md:col-span-3">
                  <div className="mb-4">
                    <h2 className="bg-gradient-to-r from-white via-violet-200 to-white/90 bg-clip-text text-2xl font-bold text-transparent">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm text-violet-300">{selectedProject.subtitle}</p>
                  </div>

                  <p className="mb-4 text-sm text-white/80">{selectedProject.description}</p>

                  {/* Tech stack */}
                  <div className="mb-4">
                    <h3 className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                      <Code size={16} className="text-violet-400" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h3 className="mb-2 flex items-center gap-1 text-base font-semibold text-white">
                      <Zap size={16} className="text-violet-400" />
                      Key Features
                    </h3>
                    <ul className="grid gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-white/80">
                          <ChevronRight size={14} className="mt-1 shrink-0 text-violet-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex gap-4 pt-4">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 px-5 py-2 text-sm font-medium text-white transition-all hover:from-violet-500 hover:to-violet-400"
                    >
                      <ExternalLink size={16} />
                      <span>View Live</span>
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-gray-800/80 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-gray-700/90"
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

export default Projects;
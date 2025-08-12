

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Code, Database, Globe, Layers, Server, Sparkles, Terminal, Zap } from 'lucide-react'

interface SkillCategory {
  name: string
  icon: React.ReactNode
  color: string
  skills: string[]
}

export default function Skills() {
  const controls = useAnimation()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: <Terminal size={24} />,
      color: "from-amber-500 to-orange-500",
      skills: ["JavaScript", "TypeScript", "C++", "Java"],
    },
    {
      name: "Frontend",
      icon: <Globe size={24} />,
      color: "from-cyan-500 to-sky-500",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      name: "Backend",
      icon: <Server size={24} />,
      color: "from-emerald-500 to-teal-500",
      skills: ["Node.js", "Express.js", "Hono"],
    },
    {
      name: "Database",
      icon: <Database size={24} />,
      color: "from-emerald-400 to-cyan-500",
      skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "MySQL"],
    },
    {
      name: "Tools & DevOps",
      icon: <Layers size={24} />,
      color: "from-slate-400 to-slate-200",
      skills: ["Git/GitHub", "Docker","Postman"],
    },
    {
      name: "Gen AI",
      icon: <Sparkles size={24} />,
      color: "from-teal-400 to-cyan-400",
      skills: ["LangChain", "N8n", "LLMs API"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }
  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({ scale: 1, opacity: 1, transition: { delay: i * 0.05, duration: 0.3 } }),
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-title"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-emerald-500/10 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "7s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "5s" }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 id="skills-title" className="text-4xl md:text-5xl font-bold mb-2">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          {/* Continuous marquee with reduced-motion support */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative h-20 md:h-24 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex space-x-6 md:space-x-10 animate-marquee will-change-transform">
                  {[...skillCategories.flatMap((cat) => cat.skills), ...skillCategories.flatMap((cat) => cat.skills)].map(
                    (skill, index) => (
                      <div
                        key={index}
                        className={`px-6 py-3 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/60 text-white font-medium whitespace-nowrap transition-all duration-300 ${
                          hoveredSkill === skill ? "scale-110 shadow-lg shadow-emerald-500/20" : ""
                        }`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {skill}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                animation: marquee 25s linear infinite;
                width: max-content;
              }
              @media (prefers-reduced-motion: reduce) {
                .animate-marquee {
                  animation: none;
                }
              }
            `}</style>
          </motion.div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group focus-within:scale-[1.02] transition-transform"
                onMouseEnter={() => setActiveCategory(categoryIndex)}
                onMouseLeave={() => setActiveCategory(null)}
                role="group"
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                />

                <div
                  className="relative bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 h-full border border-slate-800/60 overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-emerald-500"
                >
                  {/* Category header */}
                  <button
                    className="flex items-center gap-3 mb-6 outline-none"
                    onFocus={() => setActiveCategory(categoryIndex)}
                    onBlur={() => setActiveCategory(null)}
                    aria-describedby={`skills-cat-${categoryIndex}`}
                  >
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 id={`skills-cat-${categoryIndex}`} className="text-xl font-bold text-white">
                      {category.name}
                    </h3>
                  </button>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} custom={skillIndex} variants={skillVariants} className="relative">
                        <div
                          className={`px-3 py-1.5 rounded-md bg-slate-800 text-slate-300 text-sm border border-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                            activeCategory === categoryIndex ? "hover:border-emerald-500/50 hover:text-white" : ""
                          }`}
                          tabIndex={0}
                          aria-label={skill}
                        >
                          {skill}
                        </div>

                        {/* Glow effect on hover */}
                        {activeCategory === categoryIndex && (
                          <div
                            className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${category.color} rounded-md blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Background decoration */}
                  <div
                    className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl ${category.color} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill proficiency */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-slate-800/60"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Skill Proficiency
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frontend → Advanced (Backend style) */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/60">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100" aria-label="Frontend proficiency 80%">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="56.6"
                      strokeLinecap="round"
                      transform="rotate(-100 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={36} className="text-emerald-400" />
                  </div>
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Frontend</h4>
                <p className="text-slate-400 text-sm">Advanced</p>
              </div>

              {/* Backend → Expert (Frontend style) */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/60">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100" aria-label="Backend proficiency 90%">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient2)"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="28.3"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Server size={36} className="text-cyan-400" />
                  </div>
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Backend</h4>
                <p className="text-slate-400 text-sm">Expert</p>
              </div>

              {/* AI → Same as before */}
              <div className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/60">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100" aria-label="AI proficiency 75%">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient3)"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="70.75"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles size={36} className="text-amber-400" />
                  </div>
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">AI</h4>
                <p className="text-slate-400 text-sm">Intermediate</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

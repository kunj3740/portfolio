

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
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) controls.start("visible")
  }, [isInView, controls])

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: <Terminal size={24} />,
      color: "text-amber-500",
      skills: ["JavaScript", "TypeScript", "C++", "Java"],
    },
    {
      name: "Frontend",
      icon: <Globe size={24} />,
      color: "text-sky-500",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      name: "Backend",
      icon: <Server size={24} />,
      color: "text-emerald-500",
      skills: ["Node.js", "Express.js", "Hono"],
    },
    {
      name: "Database",
      icon: <Database size={24} />,
      color: "text-cyan-500",
      skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "MySQL"],
    },
    {
      name: "Tools & DevOps",
      icon: <Layers size={24} />,
      color: "text-violet-500",
      skills: ["Git/GitHub", "Docker","Postman"],
    },
    {
      name: "Gen AI",
      icon: <Sparkles size={24} />,
      color: "text-fuchsia-500",
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
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 id="skills-title" className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight mb-2">
              Technical{" "}
              <span className="text-indigo-500">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1.5 shadow-neu-pressed bg-indigo-500/30 mx-auto rounded-full mt-4" />
          </motion.div>

          {/* Continuous marquee with reduced-motion support */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative h-20 md:h-24 overflow-hidden rounded-[2.5rem] bg-neu shadow-neu-pressed p-4 flex items-center">
              <div className="absolute inset-0 flex items-center">
                <div className="flex space-x-6 md:space-x-10 animate-marquee will-change-transform px-4">
                  {[...skillCategories.flatMap((cat) => cat.skills), ...skillCategories.flatMap((cat) => cat.skills)].map(
                    (skill, index) => (
                      <div
                        key={index}
                        className={`px-6 py-3 rounded-full bg-neu shadow-neu text-gray-600 font-bold whitespace-nowrap transition-all duration-300 ${
                          hoveredSkill === skill ? "scale-110 text-indigo-500 shadow-neu-pressed" : ""
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
                animation: marquee 30s linear infinite;
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
                <div
                  className="relative bg-neu shadow-neu rounded-[2.5rem] p-8 h-full border border-transparent overflow-hidden focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500"
                >
                  {/* Category header */}
                  <button
                    className="flex items-center gap-4 mb-6 outline-none"
                    onFocus={() => setActiveCategory(categoryIndex)}
                    onBlur={() => setActiveCategory(null)}
                    aria-describedby={`skills-cat-${categoryIndex}`}
                  >
                    <div className={`p-3 rounded-full shadow-neu-pressed bg-neu ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 id={`skills-cat-${categoryIndex}`} className="text-xl font-black text-gray-800 tracking-tight">
                      {category.name}
                    </h3>
                  </button>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} custom={skillIndex} variants={skillVariants} className="relative">
                        <div
                          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            activeCategory === categoryIndex ? "shadow-neu-pressed bg-neu text-indigo-600" : "shadow-neu bg-neu text-gray-600"
                          }`}
                          tabIndex={0}
                          aria-label={skill}
                        >
                          {skill}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill proficiency */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-neu shadow-neu rounded-[2.5rem] p-10 mx-auto"
          >
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="p-4 rounded-full shadow-neu-pressed bg-neu text-indigo-500 mb-4 inline-block">
                <Zap size={28} />
              </div>
              <h3 className="text-3xl font-black text-gray-800 tracking-tight">
                Skill Proficiency
              </h3>
              <div className="w-16 h-1 shadow-neu-pressed bg-indigo-500/30 rounded-full mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend → Advanced */}
              <div className="flex flex-col items-center justify-center p-8 bg-neu shadow-neu-pressed rounded-[2rem]">
                <div className="relative w-36 h-36 drop-shadow-md">
                  <svg className="w-full h-full" viewBox="0 0 100 100" aria-label="Frontend proficiency 80%">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#d1d9e6" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="56.6"
                      strokeLinecap="round"
                      transform="rotate(-100 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={40} className="text-sky-500" />
                  </div>
                </div>
                <h4 className="mt-6 text-xl font-bold text-gray-800 tracking-tight">Frontend</h4>
                <p className="text-sky-500 font-bold mt-1 text-sm uppercase tracking-wider">Advanced</p>
              </div>

              {/* Backend → Expert */}
              <div className="flex flex-col items-center justify-center p-8 bg-neu shadow-neu-pressed rounded-[2rem]">
                <div className="relative w-36 h-36 drop-shadow-md">
                  <svg className="w-full h-full" viewBox="0 0 100 100" aria-label="Backend proficiency 90%">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#d1d9e6" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="28.3"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Server size={40} className="text-emerald-500" />
                  </div>
                </div>
                <h4 className="mt-6 text-xl font-bold text-gray-800 tracking-tight">Backend</h4>
                <p className="text-emerald-500 font-bold mt-1 text-sm uppercase tracking-wider">Expert</p>
              </div>

              {/* AI */}
              <div className="flex flex-col items-center justify-center p-8 bg-neu shadow-neu-pressed rounded-[2rem]">
                <div className="relative w-36 h-36 drop-shadow-md">
                  <svg className="w-full h-full" viewBox="0 0 100 100" aria-label="AI proficiency 75%">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#d1d9e6" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#d946ef"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="70.75"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles size={40} className="text-fuchsia-500" />
                  </div>
                </div>
                <h4 className="mt-6 text-xl font-bold text-gray-800 tracking-tight">AI</h4>
                <p className="text-fuchsia-500 font-bold mt-1 text-sm uppercase tracking-wider">Intermediate</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

// import React, { useEffect, useRef } from 'react';

// interface SkillCategory {
//   name: string;
//   skills: string[];
// }

// const Skills: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
  
//   const skillCategories: SkillCategory[] = [
//     {
//       name: 'Languages',
//       skills: [
//         'JavaScript',
//         'TypeScript',
//         'C++',
//         'Java',
//         'PHP',
//         'Solidity',
//       ],
//     },
//     {
//       name: 'Frontend',
//       skills: [
//         'React.js',
//         'Next.js',
//         'Tailwind CSS',
//         'Shadcn UI',
//       ],
//     },
//     {
//       name: 'Backend',
//       skills: [
//         'Node.js',
//         'Express.js',
//         'Hono',
//       ],
//     },
//     {
//       name: 'Database',
//       skills: [
//         'PostgreSQL',
//         'Prisma ORM',
//         'MongoDB',
//         'SQL',
//       ],
//     },
//     {
//       name: 'Tools & DevOps',
//       skills: [
//         'Git/GitHub',
//         'Docker',
//         'Kubernetes',
//         'Postman',
//         'Ethereum',
//       ],
//     },
//     {
//       name: 'AI/NLP',
//       skills: [
//         'LangChain',
//         'N8n',
//         'OpenAI API',
//       ],
//     },
//   ];
  
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           section.classList.add('animate-fade-in');
          
//           const skillItems = section.querySelectorAll('.skill-item');
//           skillItems.forEach((item, index) => {
//             setTimeout(() => {
//               (item as HTMLElement).classList.add('animate-scale-in');
//             }, index * 100);
//           });
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);
  
//   return (
//     <section id="skills" ref={sectionRef} className="py-20 bg-gray-950 opacity-0">
//       <div className="container mx-auto px-4 md:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
//           Technical <span className="text-purple-500">Skills</span>
//         </h2>
//         <div className="w-20 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>
        
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {skillCategories.map((category, categoryIndex) => (
//               <div 
//                 key={categoryIndex}
//                 className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105"
//               >
//                 <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
//                   {category.name}
//                 </h3>
                
//                 <div className="flex flex-wrap gap-3">
//                   {category.skills.map((skill, skillIndex) => (
//                     <div 
//                       key={skillIndex}
//                       className="skill-item bg-gray-700 px-4 py-2 rounded-full text-gray-300 text-sm opacity-0 hover:bg-purple-600/20 hover:text-purple-400 transition-colors duration-300"
//                     >
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Code, Database, Globe, Layers, Server, Sparkles, Terminal, Zap } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  color: string
  skills: string[]
}

const Skills = () => {
  const controls = useAnimation()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: <Terminal size={24} />,
      color: "from-pink-500 to-rose-500",
      skills: ["JavaScript", "TypeScript", "C++", "Java", "PHP", "Solidity"],
    },
    {
      name: "Frontend",
      icon: <Globe size={24} />,
      color: "from-sky-500 to-blue-500",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      name: "Backend",
      icon: <Server size={24} />,
      color: "from-emerald-500 to-green-500",
      skills: ["Node.js", "Express.js", "Hono"],
    },
    {
      name: "Database",
      icon: <Database size={24} />,
      color: "from-amber-500 to-orange-500",
      skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "SQL"],
    },
    {
      name: "Tools & DevOps",
      icon: <Layers size={24} />,
      color: "from-violet-500 to-purple-500",
      skills: ["Git/GitHub", "Docker", "Kubernetes", "Postman", "Ethereum"],
    },
    {
      name: "AI/NLP",
      icon: <Sparkles size={24} />,
      color: "from-fuchsia-500 to-purple-500",
      skills: ["LangChain", "N8n", "OpenAI API"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  }

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-500/10 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-fuchsia-500/20 to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "7s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "5s" }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full" />
          </motion.div>

          {/* 3D Skill Showcase */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative h-20 md:h-24 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex space-x-4 md:space-x-8 animate-marquee">
                  {[
                    ...skillCategories.flatMap((cat) => cat.skills),
                    ...skillCategories.flatMap((cat) => cat.skills),
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className={`px-6 py-3 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 text-white font-medium whitespace-nowrap transform transition-all duration-300 ${
                        hoveredSkill === skill ? "scale-110 shadow-lg shadow-purple-500/20" : ""
                      }`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
                onMouseEnter={() => setActiveCategory(categoryIndex)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                />

                <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-800/50 overflow-hidden">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} custom={skillIndex} variants={skillVariants} className="relative">
                        <div
                          className={`px-3 py-1.5 rounded-md bg-gray-800 text-gray-300 text-sm border border-gray-700 transition-all duration-300 ${
                            activeCategory === categoryIndex ? "hover:border-purple-500/50 hover:text-white" : ""
                          }`}
                        >
                          {skill}
                        </div>

                        {/* Glow effect on hover */}
                        {activeCategory === categoryIndex && (
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-md blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
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

          {/* Skill meter visualization */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                Skill Proficiency
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#2d3748" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient1)"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="28.3"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={36} className="text-purple-400" />
                  </div>
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Frontend</h4>
                <p className="text-gray-400 text-sm">Expert</p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#2d3748" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient2)"
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="56.6"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Server size={36} className="text-blue-400" />
                  </div>
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">Backend</h4>
                <p className="text-gray-400 text-sm">Advanced</p>
              </div>

              <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#2d3748" strokeWidth="8" />
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
                        <stop offset="100%" stopColor="#EF4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles size={36} className="text-amber-400" />
                  </div>
                </div>
                <h4 className="mt-4 text-lg font-bold text-white">AI</h4>
                <p className="text-gray-400 text-sm">Intermediate</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

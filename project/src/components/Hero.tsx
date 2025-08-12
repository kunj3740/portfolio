// 'use client'

// import { useEffect, useRef, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ArrowRight, Sparkles, Github, Linkedin, Mail, Download, Code2 } from 'lucide-react'

// type Vec2 = { x: number; y: number }

// export default function Hero() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const spotlightRef = useRef<HTMLDivElement>(null)
//   const [roleIndex, setRoleIndex] = useState(0)
//   const [mouse, setMouse] = useState<Vec2>({ x: 0, y: 0 })

//   const roles = ["Full‑Stack Developer", "AI Integrator", "System Designer", "Problem Solver"]

//   // Rotate role every 3s
//   useEffect(() => {
//     const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000)
//     return () => clearInterval(id)
//   }, [])

//   // Spotlight follows cursor
//   useEffect(() => {
//     const el = sectionRef.current
//     if (!el) return
//     const onMove = (e: MouseEvent) => {
//       const rect = el.getBoundingClientRect()
//       const x = e.clientX - rect.left
//       const y = e.clientY - rect.top
//       setMouse({ x, y })
//       if (spotlightRef.current) {
//         spotlightRef.current.style.setProperty("--mx", `${x}px`)
//         spotlightRef.current.style.setProperty("--my", `${y}px`)
//       }
//     }
//     el.addEventListener("mousemove", onMove)
//     return () => el.removeEventListener("mousemove", onMove)
//   }, [])

//   // Magnetic button effect
//   const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     const target = e.currentTarget
//     const rect = target.getBoundingClientRect()
//     const relX = e.clientX - rect.left - rect.width / 2
//     const relY = e.clientY - rect.top - rect.height / 2
//     target.style.transform = `translate(${relX * 0.05}px, ${relY * 0.05}px)`
//   }
//   const resetMagnetic = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     e.currentTarget.style.transform = "translate(0px, 0px)"
//   }

//   return (
//     <section
//       id="hero"
//       ref={sectionRef}
//       className="relative min-h-[92vh] md:min-h-[96vh] isolate overflow-hidden"
//       aria-label="Hero"
//     >
//       {/* Grid + vignette background */}
//       <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(15,23,42,0.9),transparent_70%)] pointer-events-none" />
//       <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(90deg,_#ffffff_0_1px,_transparent_1px_40px),repeating-linear-gradient(0deg,_#ffffff_0_1px,_transparent_1px_40px)]" />
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

//       {/* Aurora accents */}
//       <div className="absolute -top-28 -left-28 w-[36rem] h-[36rem] bg-emerald-500/15 blur-3xl rounded-full" />
//       <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-cyan-500/15 blur-3xl rounded-full" />

//       {/* Interactive spotlight */}
//       <div
//         ref={spotlightRef}
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(400px 300px at var(--mx) var(--my), rgba(16,185,129,0.10), transparent 70%)",
//         }}
//         aria-hidden="true"
//       />

//       {/* Content */}
//       <div className="container relative z-10 mx-auto px-4 md:px-8 pt-28 md:pt-36 pb-16">
//         <div className="grid items-center gap-10 lg:grid-cols-2">
//           {/* Left: Intro (unchanged) */}
//           <div>
//             <motion.div
//               initial={{ y: 16, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-600/10 px-3 py-1 text-emerald-300"
//             >
//               <Sparkles size={16} />
//               <span className="text-xs font-medium">Available for internships</span>
//             </motion.div>

//             <motion.h1
//               initial={{ y: 18, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.05, duration: 0.7 }}
//               className="mt-4 text-4xl leading-tight font-extrabold md:text-6xl"
//             >
//               <span className="text-white">Kunj</span>{" "}
//               <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
//                 Dave
//               </span>
//             </motion.h1>

//             {/* Rotating roles */}
//             <div className="mt-3 h-9 md:h-10 relative">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={roleIndex}
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -20, opacity: 0 }}
//                   transition={{ duration: 0.45 }}
//                   className="absolute"
//                 >
//                   <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
//                     {roles[roleIndex]}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             <motion.p
//               initial={{ y: 12, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.1, duration: 0.6 }}
//               className="mt-6 max-w-xl text-base md:text-lg text-slate-300"
//             >
//               I build high-performance web experiences with Next.js, TypeScript, and modern tooling.
//               I love turning complex ideas into elegant, secure products enhanced with AI.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               initial={{ y: 10, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.15, duration: 0.5 }}
//               className="mt-8 flex flex-col sm:flex-row items-center gap-4"
//             >
//               <a
//                 href="#projects-section"
//                 onMouseMove={handleMagnetic}
//                 onMouseLeave={resetMagnetic}
//                 className="relative inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white"
//               >
//                 <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 transition-transform duration-300" />
//                 <span className="relative z-10 font-medium">View Projects</span>
//                 <ArrowRight className="relative z-10" size={18} />
//               </a>
//               <a
//                 href="#contact"
//                 className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/60 bg-slate-900/60 px-6 py-3 text-cyan-300 hover:bg-slate-900/80 transition-colors"
//               >
//                 Contact Me
//                 <Mail size={18} className="transition-transform group-hover:translate-x-0.5" />
//               </a>
//             </motion.div>

//             {/* Socials */}
//             <motion.div
//               initial={{ y: 10, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="mt-8 flex items-center gap-3"
//             >
//               <a
//                 href="https://github.com/kunj3740"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="rounded-md border border-slate-800 bg-slate-900/60 p-2 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
//               >
//                 <Github size={18} />
//               </a>
//               <a
//                 href="https://linkedin.com/in/kunj-dave"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="rounded-md border border-slate-800 bg-slate-900/60 p-2 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
//               >
//                 <Linkedin size={18} />
//               </a>
//               <a
//                 href="/resume.pdf"
//                 aria-label="Download Resume"
//                 className="rounded-md border border-slate-800 bg-slate-900/60 p-2 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
//               >
//                 <Download size={18} />
//               </a>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ y: 10, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.25, duration: 0.5 }}
//               className="mt-10 grid grid-cols-3 gap-3 max-w-lg"
//             >
//               <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
//                 <p className="text-2xl font-bold text-white">20+</p>
//                 <p className="text-xs text-slate-400">Projects</p>
//               </div>
//               <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
//                 <p className="text-2xl font-bold text-white">3+</p>
//                 <p className="text-xs text-slate-400">Years</p>
//               </div>
//               <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
//                 <p className="text-2xl font-bold text-white">
//                   4.9<span className="text-sm align-top">/5</span>
//                 </p>
//                 <p className="text-xs text-slate-400">Feedback</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right: Simplified Code Editor Portfolio */}
//           <div className="relative">
//             <motion.div
//               initial={{ scale: 0.96, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.05 }}
//               className="relative mx-auto w-[88%] max-w-[520px]"
//             >
//               <div className="relative rounded-2xl border border-slate-800/70 bg-slate-900/60 p-3 shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)]">
//                 {/* Editor frame */}
//                 <div
//                   className="w-full rounded-lg border border-slate-800/70 bg-slate-950/70 backdrop-blur-sm"
//                   role="region"
//                   aria-label="Portfolio code preview"
//                 >
//                   {/* Editor header */}
//                   <div className="flex items-center justify-between border-b border-slate-800/70 px-3 py-2">
//                     <div className="flex items-center gap-1.5">
//                       <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden="true" />
//                       <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
//                       <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden="true" />
//                     </div>
//                     <div className="flex items-center gap-2 text-xs text-slate-400">
//                       <Code2 size={14} className="text-cyan-300" />
//                       <span>portfolio.ts</span>
//                     </div>
//                     <div className="text-[10px] text-slate-500 px-2 py-0.5 rounded border border-slate-800/70">
//                       TS
//                     </div>
//                   </div>

//                   {/* Editor body */}
//                   <div className="grid grid-cols-[auto_1fr] text-sm">
//                     {/* Line numbers */}
//                     <div className="select-none bg-slate-950/60 border-r border-slate-800/60 text-slate-600 text-right pr-3 py-3 leading-6">
//                       {Array.from({ length: 18 }).map((_, i) => (
//                         <div key={i} className="px-1">{i + 1}</div>
//                       ))}
//                     </div>
//                     {/* Code */}
//                     <pre className="relative overflow-auto p-3 leading-6 text-slate-200">
//                       <code className="font-mono">
// {`// Portfolio introduction
// type Role = "Full‑Stack Developer" | "AI Integrator" | "System Designer" | "Problem Solver"

// export const portfolio = {
//   name: "Kunj Dave",
//   roles: ["Full‑Stack Developer", "AI Integrator"] as Role[],
//   intro: "I design and ship modern web apps with strong UX and AI enhancements.",
//   location: "India",
//   availableFor: "Internships",
//   stats: { projects: 20, years: 3, rating: 4.9 },
//   stack: ["Next.js", "TypeScript", "React", "AI Integration"]
// }

// // Tip: Explore projects ↓
// export function contact() {
//   return "Reach out via the Contact section."
// }
// `}
//                       </code>
//                       {/* Blinking caret */}
//                       <motion.span
//                         aria-hidden="true"
//                         initial={{ opacity: 0.2 }}
//                         animate={{ opacity: [0.2, 1, 0.2] }}
//                         transition={{ repeat: Infinity, duration: 1.4 }}
//                         className="absolute bottom-3 left-3 h-4 w-0.5 bg-cyan-400/90"
//                       />
//                     </pre>
//                   </div>
//                 </div>

//                 {/* Tech tags below editor */}
//                 <div className="mt-3 flex flex-wrap gap-2">
//                   {[
//                     "Next.js",
//                     "TypeScript",
//                     "React",
//                     "AI Integration",
//                   ].map((label) => (
//                     <span
//                       key={label}
//                       className="inline-flex items-center rounded-md border border-slate-800/70 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-200"
//                     >
//                       <span className="mr-2 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
//                       {label}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="mt-12 flex items-center justify-center">
//           <a
//             href="#about"
//             className="group inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
//             aria-label="Scroll to about"
//           >
//             <span className="h-8 w-5 rounded-full border border-slate-700/60 flex items-start justify-center p-1">
//               <span className="h-2 w-1 rounded-full bg-cyan-400/80 animate-bounce" />
//             </span>
//             <span className="text-sm">Scroll to explore</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Github, Linkedin, Mail, Download, Code2 } from 'lucide-react'

type Vec2 = { x: number; y: number }

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const [mouse, setMouse] = useState<Vec2>({ x: 0, y: 0 })

  const roles = ["Full‑Stack Developer", "AI Integrator", "System Designer", "Problem Solver"]

  // Rotate role every 3s
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000)
    return () => clearInterval(id)
  }, [])

  // Spotlight follows cursor
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMouse({ x, y })
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mx", `${x}px`)
        spotlightRef.current.style.setProperty("--my", `${y}px`)
      }
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [])

  // Magnetic button effect
  const handleMagnetic = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    target.style.transform = `translate(${relX * 0.05}px, ${relY * 0.05}px)`
  }
  const resetMagnetic = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget.style.transform = "translate(0px, 0px)"
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[92vh] md:min-h-[96vh] isolate overflow-hidden"
      aria-label="Hero"
    >
      {/* Grid + vignette background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(15,23,42,0.9),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(90deg,_#ffffff_0_1px,_transparent_1px_40px),repeating-linear-gradient(0deg,_#ffffff_0_1px,_transparent_1px_40px)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />

      {/* Aurora accents */}
      <div className="absolute -top-28 -left-28 w-[36rem] h-[36rem] bg-emerald-500/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-cyan-500/15 blur-3xl rounded-full" />

      {/* Interactive spotlight */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(400px 300px at var(--mx) var(--my), rgba(16,185,129,0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 pt-28 md:pt-36 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: Intro (unchanged) */}
          <div>
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-600/10 px-3 py-1 text-emerald-300"
            >
              <Sparkles size={16} />
              <span className="text-xs font-medium">Available for Work</span>
            </motion.div>

            <motion.h1
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.7 }}
              className="mt-4 text-4xl leading-tight font-extrabold md:text-6xl"
            >
              <span className="text-white">Kunj</span>{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Dave
              </span>
            </motion.h1>

            {/* Rotating roles */}
            <div className="mt-3 h-9 md:h-10 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute"
                >
                  <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {roles[roleIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 max-w-xl text-base md:text-lg text-slate-300"
            >
              I build high-performance web experiences with Next.js, TypeScript, and modern tooling.
              I love turning complex ideas into elegant, secure products enhanced with AI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#projects-section"
                onMouseMove={handleMagnetic}
                onMouseLeave={resetMagnetic}
                className="relative inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white"
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 transition-transform duration-300" />
                <span className="relative z-10 font-medium">View Projects</span>
                <ArrowRight className="relative z-10" size={18} />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/60 bg-slate-900/60 px-6 py-3 text-cyan-300 hover:bg-slate-900/80 transition-colors"
              >
                Contact Me
                <Mail size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="https://github.com/kunj3740"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-md border border-slate-800 bg-slate-900/60 p-2 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/kunj-dave"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md border border-slate-800 bg-slate-900/60 p-2 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="/resume.pdf"
                aria-label="Download Resume"
                className="rounded-md border border-slate-800 bg-slate-900/60 p-2 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
              >
                <Download size={18} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-10 grid grid-cols-3 gap-3 max-w-lg"
            >
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-xs text-slate-400">Projects</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-xs text-slate-400">Years</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-4">
                <p className="text-2xl font-bold text-white">
                  4.9<span className="text-sm align-top">/5</span>
                </p>
                <p className="text-xs text-slate-400">Feedback</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Simplified Code Editor Portfolio */}
          <div className="relative hidden md:block">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative mx-auto w-[88%] max-w-[520px]"
              style={{ maxHeight: "min(560px, calc(100vh - 16rem))" }}
            >
              <div className="relative rounded-2xl border border-slate-800/70 bg-slate-900/60 p-3 shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)]">
                {/* Editor frame */}
                <div
                  className="w-full rounded-lg border border-slate-800/70 bg-slate-950/70 backdrop-blur-sm flex flex-col max-h-full"
                  role="region"
                  aria-label="Portfolio code preview"
                >
                  {/* Editor header */}
                  <div className="flex items-center justify-between border-b border-slate-800/70 px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden="true" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden="true" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Code2 size={14} className="text-cyan-300" />
                      <span>portfolio.ts</span>
                    </div>
                    <div className="text-[10px] text-slate-500 px-2 py-0.5 rounded border border-slate-800/70">
                      TS
                    </div>
                  </div>

                  {/* Editor body */}
                  <div className="grid grid-cols-[auto_1fr] text-sm flex-1 min-h-0">
                    {/* Line numbers */}
                    <div className="select-none bg-slate-950/60 border-r border-slate-800/60 text-slate-600 text-right pr-3 py-3 leading-6 overflow-hidden">
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div key={i} className="px-1">{i + 1}</div>
                      ))}
                    </div>
                    {/* Code */}
                    <pre className="relative overflow-hidden p-3 leading-6 text-slate-200 whitespace-pre-wrap break-words">
                      <code className="font-mono">
{`// Portfolio introduction
type Role = "Full‑Stack Developer" | "AI Integrator" | "System Designer" | "Problem Solver"

export const portfolio = {
  name: "Kunj Dave",
  roles: ["Full‑Stack Developer", "AI Integrator"] as Role[],
  intro: "I design and ship modern web apps with strong UX and AI enhancements.",
  location: "India",
  availableFor: "Internships / Full Time",
  Experience: "3 Months"
  stack: ["Next.js", "TypeScript", "React", "AI Integration"]
}
`}
                      </code>
                      {/* Blinking caret */}
                      <motion.span
                        aria-hidden="true"
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 1.4 }}
                        className="absolute bottom-3 left-3 h-4 w-0.5 bg-cyan-400/90"
                      />
                    </pre>
                  </div>
                </div>

                {/* Tech tags below editor */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "React",
                    "AI Integration",
                  ].map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-md border border-slate-800/70 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-200"
                    >
                      <span className="mr-2 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex items-center justify-center">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
            aria-label="Scroll to about"
          >
            <span className="h-8 w-5 rounded-full border border-slate-700/60 flex items-start justify-center p-1">
              <span className="h-2 w-1 rounded-full bg-cyan-400/80 animate-bounce" />
            </span>
            <span className="text-sm">Scroll to explore</span>
          </a>
        </div>
      </div>
    </section>
  )
}

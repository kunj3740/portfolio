
// "use client"

// import type React from "react"
// import { useEffect, useRef, useState } from "react"
// import { ChevronDown, Code, Sparkles, Zap } from "lucide-react"

// const Hero: React.FC = () => {
//   const textRef = useRef<HTMLHeadingElement>(null)
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isHovering, setIsHovering] = useState(false)
//   const [cursorText, setCursorText] = useState("")
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
//   const [activeSection, setActiveSection] = useState(0)

//   // Animated background with interactive elements
//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     let animationFrameId: number
//     const particles: Particle[] = []
//     const particleCount = 100
//     const connectionDistance = 150
//     const mouseRadius = 120

//     class Particle {
//       x: number
//       y: number
//       size: number
//       baseSize: number
//       speedX: number
//       speedY: number
//       color: string
//       originalX: number
//       originalY: number
//       density: number

//       constructor() {
//         this.x = Math.random() * canvas.width
//         this.y = Math.random() * canvas.height
//         this.originalX = this.x
//         this.originalY = this.y
//         this.size = Math.random() * 3 + 1
//         this.baseSize = this.size
//         this.speedX = (Math.random() - 0.5) * 0.5
//         this.speedY = (Math.random() - 0.5) * 0.5
//         this.color = `hsla(${280 + Math.random() * 60}, 100%, 75%, ${Math.random() * 0.5 + 0.2})`
//         this.density = Math.random() * 30 + 1
//       }

//       update() {
//         // Normal movement
//         this.x += this.speedX
//         this.y += this.speedY

//         // Mouse interaction
//         const dx = mousePosition.x - this.x
//         const dy = mousePosition.y - this.y
//         const distance = Math.sqrt(dx * dx + dy * dy)

//         if (distance < mouseRadius && isHovering) {
//           const forceDirectionX = dx / distance
//           const forceDirectionY = dy / distance
//           const force = (mouseRadius - distance) / mouseRadius
//           const directionX = forceDirectionX * force * this.density * 0.6
//           const directionY = forceDirectionY * force * this.density * 0.6

//           this.x -= directionX
//           this.y -= directionY
//           this.size = this.baseSize + 2
//         } else {
//           if (this.size > this.baseSize) {
//             this.size -= 0.1
//           }

//           // Return to original position with slight randomness
//           if (Math.abs(this.x - this.originalX) > 50 || Math.abs(this.y - this.originalY) > 50) {
//             this.x += (this.originalX - this.x) * 0.02
//             this.y += (this.originalY - this.y) * 0.02
//           }
//         }

//         // Boundary check
//         if (this.x > canvas.width) this.x = 0
//         else if (this.x < 0) this.x = canvas.width
//         if (this.y > canvas.height) this.y = 0
//         else if (this.y < 0) this.y = canvas.height
//       }

//       draw() {
//         if (!ctx) return
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//         ctx.fillStyle = this.color
//         ctx.fill()
//       }
//     }

//     const init = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight

//       for (let i = 0; i < particleCount; i++) {
//         particles.push(new Particle())
//       }
//     }

//     const connectParticles = () => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x
//           const dy = particles[i].y - particles[j].y
//           const distance = Math.sqrt(dx * dx + dy * dy)

//           if (distance < connectionDistance) {
//             const opacity = 1 - distance / connectionDistance
//             ctx!.strokeStyle = `hsla(280, 100%, 75%, ${opacity * 0.2})`
//             ctx!.lineWidth = 1
//             ctx!.beginPath()
//             ctx!.moveTo(particles[i].x, particles[i].y)
//             ctx!.lineTo(particles[j].x, particles[j].y)
//             ctx!.stroke()
//           }
//         }
//       }
//     }

//     const animate = () => {
//       if (!ctx) return
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       particles.forEach((particle) => {
//         particle.update()
//         particle.draw()
//       })

//       connectParticles()

//       animationFrameId = requestAnimationFrame(animate)
//     }

//     init()
//     animate()

//     const handleResize = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//       init()
//     }

//     window.addEventListener("resize", handleResize)

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [mousePosition, isHovering])

//   // Mouse tracking for particle interaction
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//       setCursorPosition({ x: e.clientX, y: e.clientY })
//     }

//     const handleMouseEnter = () => setIsHovering(true)
//     const handleMouseLeave = () => setIsHovering(false)

//     const container = containerRef.current
//     if (container) {
//       container.addEventListener("mousemove", handleMouseMove)
//       container.addEventListener("mouseenter", handleMouseEnter)
//       container.addEventListener("mouseleave", handleMouseLeave)
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener("mousemove", handleMouseMove)
//         container.removeEventListener("mouseenter", handleMouseEnter)
//         container.removeEventListener("mouseleave", handleMouseLeave)
//       }
//     }
//   }, [])

//   // Text animation and section rotation
//   useEffect(() => {
//     const text = textRef.current
//     if (!text) return

//     text.classList.add("animate-fade-in")

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           text.classList.add("animate-fade-in")
//         }
//       },
//       { threshold: 0.1 },
//     )

//     observer.observe(text)

//     // Rotate through sections
//     const interval = setInterval(() => {
//       setActiveSection((prev) => (prev + 1) % 3)
//     }, 5000)

//     return () => {
//       observer.disconnect()
//       clearInterval(interval)
//     }
//   }, [])

//   // Custom cursor text effect
//   useEffect(() => {
//     const texts = ["Developer", "Designer", "Creator", "Innovator", "Problem Solver"]
//     let index = 0

//     const interval = setInterval(() => {
//       setCursorText(texts[index])
//       index = (index + 1) % texts.length
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [])

//   // Sections for rotating content
//   const sections = [
//     {
//       title: "Full Stack Developer",
//       description: "Building modern web applications with Next.js, TypeScript, and FastAPI",
//       icon: <Code className="w-6 h-6 text-fuchsia-400" />,
//     },
//     {
//       title: "AI Enthusiast",
//       description: "Integrating cutting-edge AI technologies into practical applications",
//       icon: <Sparkles className="w-6 h-6 text-violet-400" />,
//     },
//     {
//       title: "Problem Solver",
//       description: "Turning complex challenges into elegant, efficient solutions",
//       icon: <Zap className="w-6 h-6 text-pink-400" />,
//     },
//   ]

//   return (
//     <section
//       id="hero"
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Interactive background */}
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

//       {/* Gradient overlays */}
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/70 to-gray-950/90" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_65%)]" />

//       {/* Animated shapes */}
//       <div
//         className="absolute top-1/4 -left-20 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse"
//         style={{ animationDuration: "8s" }}
//       />
//       <div
//         className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl animate-pulse"
//         style={{ animationDuration: "10s" }}
//       />

//       {/* Custom cursor */}
//       {isHovering && (
//         <div
//           className="fixed pointer-events-none z-50 flex items-center justify-center"
//           style={{
//             left: `${cursorPosition.x}px`,
//             top: `${cursorPosition.y}px`,
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           <div className="text-xs font-medium text-white bg-fuchsia-500/80 px-2 py-1 rounded-full whitespace-nowrap">
//             {cursorText}
//           </div>
//         </div>
//       )}

//       <div className="container mx-auto px-4 md:px-8 z-10">
//         <div className="max-w-5xl mx-auto">
//           {/* Animated intro text */}
//           <div className="overflow-hidden mb-6">
//             <p
//               className="text-fuchsia-400 font-medium text-xl md:text-2xl opacity-0 animate-fade-in tracking-wide transform translate-y-full animate-slide-up"
//               style={{ animationDelay: "0.3s" }}
//             >
//               Hello, I'm
//             </p>
//           </div>

//           {/* Name with glitch effect */}
//           <div className="overflow-hidden mb-8">
//             <h1
//               ref={textRef}
//               className="text-5xl md:text-7xl font-bold opacity-0 relative glitch-text"
//               data-text="Kunj Dave"
//             >
//               <span className="text-white">Kunj</span>{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-500 to-pink-500">
//                 Dave
//               </span>
//             </h1>
//           </div>

//           {/* Rotating titles */}
//           <div className="h-24 md:h-20 mb-8 overflow-hidden relative">
//             {sections.map((section, index) => (
//               <div
//                 key={index}
//                 className={`absolute inset-0 transition-all duration-1000 flex items-center ${
//                   activeSection === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
//                 }`}
//               >
//                 <div className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-800/50">
//                   {section.icon}
//                   <div>
//                     <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-500 to-pink-500">
//                       {section.title}
//                     </h2>
//                     <p className="text-gray-300 text-sm md:text-base">{section.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Main description */}
//           <div className="backdrop-blur-sm bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 mb-12 transform hover:scale-[1.01] transition-all duration-300 hover:border-fuchsia-500/30">
//             <p
//               className="text-gray-300 max-w-3xl mx-auto text-lg opacity-0 animate-fade-in leading-relaxed"
//               style={{ animationDelay: "0.9s" }}
//             >
//               Crafting efficient, scalable web applications using modern tools like Next.js and TypeScript, while
//               integrating intelligent AI-driven features. A 3rd-year B.Tech IT student with a strong foundation in
//               full-stack development, GenAI technologies, and a passion for solving real-world problems through code.
//             </p>
//           </div>

//           {/* CTA buttons with advanced hover effects */}
//           <div
//             className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in"
//             style={{ animationDelay: "1.2s" }}
//           >
//             <a
//               href="#projects"
//               className="group relative px-8 py-3 font-medium text-white transition-colors duration-300 transform rounded-md"
//             >
//               <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-fuchsia-600 to-violet-600 group-hover:skew-x-12"></span>
//               <span className="absolute inset-0 w-full h-full transition-all delay-100 duration-300 ease-out transform skew-x-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:-skew-x-12"></span>
//               <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-fuchsia-600 -rotate-12"></span>
//               <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-violet-600 -rotate-12"></span>
//               <span className="relative">View Projects</span>
//             </a>
//             <a
//               href="#contact"
//               className="group relative px-8 py-3 font-medium text-white transition-colors duration-300 transform rounded-md"
//             >
//               <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 rounded-md border-2 border-fuchsia-500 group-hover:translate-x-1 group-hover:translate-y-1"></span>
//               <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform rounded-md bg-gray-900 border-2 border-violet-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
//               <span className="relative text-fuchsia-400 group-hover:text-violet-400 transition-colors duration-300">
//                 Contact Me
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <a
//           href="#about"
//           className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300"
//           aria-label="Scroll to About section"
//         >
//           <ChevronDown size={32} />
//         </a>
//       </div>
//     </section>
//   )
// }

// export default Hero
"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Code, Sparkles, Zap } from "lucide-react"

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState(0)

  // Animated background with interactive elements
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []
    const particleCount = 100
    const connectionDistance = 150
    const mouseRadius = 120

    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number
      density: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.originalX = this.x
        this.originalY = this.y
        this.size = Math.random() * 3 + 1
        this.baseSize = this.size
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `hsla(${280 + Math.random() * 60}, 100%, 75%, ${Math.random() * 0.5 + 0.2})`
        this.density = Math.random() * 30 + 1
      }

      update() {
        // Normal movement
        this.x += this.speedX
        this.y += this.speedY

        // Mouse interaction
        const dx = mousePosition.x - this.x
        const dy = mousePosition.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius && isHovering) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (mouseRadius - distance) / mouseRadius
          const directionX = forceDirectionX * force * this.density * 0.6
          const directionY = forceDirectionY * force * this.density * 0.6

          this.x -= directionX
          this.y -= directionY
          this.size = this.baseSize + 2
        } else {
          if (this.size > this.baseSize) {
            this.size -= 0.1
          }

          // Return to original position with slight randomness
          if (Math.abs(this.x - this.originalX) > 50 || Math.abs(this.y - this.originalY) > 50) {
            this.x += (this.originalX - this.x) * 0.02
            this.y += (this.originalY - this.y) * 0.02
          }
        }

        // Boundary check
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            ctx!.strokeStyle = `hsla(280, 100%, 75%, ${opacity * 0.2})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [mousePosition, isHovering])

  // Mouse tracking for particle interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // Text animation and section rotation
  useEffect(() => {
    const text = textRef.current
    if (!text) return

    text.classList.add("animate-fade-in")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          text.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(text)

    // Rotate through sections
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3)
    }, 5000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  // Custom cursor text effect
  useEffect(() => {
    const texts = ["Developer", "Designer", "Creator", "Innovator", "Problem Solver"]
    let index = 0

    const interval = setInterval(() => {
      setCursorText(texts[index])
      index = (index + 1) % texts.length
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Sections for rotating content
  const sections = [
    {
      title: "Full Stack Developer",
      description: "Building modern web applications with Next.js, TypeScript, and FastAPI",
      icon: <Code className="w-6 h-6 text-fuchsia-400" />,
    },
    {
      title: "AI Enthusiast",
      description: "Integrating cutting-edge AI technologies into practical applications",
      icon: <Sparkles className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, efficient solutions",
      icon: <Zap className="w-6 h-6 text-pink-400" />,
    },
  ]

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/70 to-gray-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_65%)]" />

      {/* Animated shapes */}
      <div
        className="absolute top-1/4 -left-20 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      {/* Custom cursor */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-50 flex items-center justify-center"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="text-xs font-medium text-white bg-fuchsia-500/80 px-2 py-1 rounded-full whitespace-nowrap">
            {cursorText}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Animated intro text */}
          <div className="overflow-hidden mb-6">
            <p
              className="text-fuchsia-400 font-medium text-xl md:text-2xl opacity-0 animate-fade-in tracking-wide transform translate-y-full animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              Hello, I'm
            </p>
          </div>

          {/* Name with glitch effect */}
          <div className="overflow-hidden mb-8">
            <h1
              ref={textRef}
              className="text-5xl md:text-7xl font-bold opacity-0 relative glitch-text"
              data-text="Kunj Dave"
            >
              <span className="text-white">Kunj</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-500 to-pink-500">
                Dave
              </span>
            </h1>
          </div>

          {/* Rotating titles */}
          <div className="h-24 md:h-20 mb-8 overflow-hidden relative">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 flex items-center ${
                  activeSection === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                }`}
              >
                <div className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-800/50">
                  {section.icon}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-500 to-pink-500">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main description */}
          <div className="backdrop-blur-sm bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 mb-12 transform hover:scale-[1.01] transition-all duration-300 hover:border-fuchsia-500/30">
            <p
              className="text-gray-300 max-w-3xl mx-auto text-lg opacity-0 animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.9s" }}
            >
              Crafting efficient, scalable web applications using modern tools like Next.js and TypeScript, while
              integrating intelligent AI-driven features. A 3rd-year B.Tech IT student with a strong foundation in
              full-stack development, GenAI technologies, and a passion for solving real-world problems through code.
            </p>
          </div>

          {/* CTA buttons with advanced hover effects */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 font-medium text-white transition-colors duration-300 transform rounded-md"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-fuchsia-600 to-violet-600 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all delay-100 duration-300 ease-out transform skew-x-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-fuchsia-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-violet-600 -rotate-12"></span>
              <span className="relative">View Projects</span>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-3 font-medium text-white transition-colors duration-300 transform rounded-md"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-0 rounded-md border-2 border-fuchsia-500 group-hover:translate-x-1 group-hover:translate-y-1"></span>
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform rounded-md bg-gray-900 border-2 border-violet-500 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="relative text-fuchsia-400 group-hover:text-violet-400 transition-colors duration-300">
                Contact Me
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  )
}

export default Hero

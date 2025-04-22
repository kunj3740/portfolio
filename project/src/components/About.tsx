// import React, { useEffect, useRef } from 'react';
// import { Calendar, MapPin, Search } from 'lucide-react';

// const About: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
  
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           section.classList.add('animate-fade-in');
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);
  
//   return (
//     <section id="about" ref={sectionRef} className="py-20 bg-gray-900 opacity-0">
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
//             About <span className="text-purple-500">Me</span>
//           </h2>
//           <div className="w-20 h-1 bg-purple-500 mx-auto mb-12 rounded-full"></div>
          
//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Left Column - Image & Quick Info */}
//             <div className="flex flex-col items-center md:items-start">
//               <div className="w-64 h-64 mb-6 rounded-xl overflow-hidden relative group">
//                 <img 
//                   src="https://res.cloudinary.com/dnluacn1g/image/upload/v1745310765/WhatsApp_Image_2025-04-22_at_14.00.56_6a95f703_w03nkc.jpg" 
//                   alt="Kunj Dave" 
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
              
//               <div className="space-y-4 w-full">
//                 <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-md">
//                   <Calendar className="text-purple-400" size={18} />
//                   <div>
//                     <h4 className="text-gray-400 text-sm">Education</h4>
//                     <p className="text-white">B.Tech IT (2022-2026)</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-md">
//                   <MapPin className="text-purple-400" size={18} />
//                   <div>
//                     <h4 className="text-gray-400 text-sm">Location</h4>
//                     <p className="text-white">Mehsana, Gujarat, India</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-md">
//                   <Search className="text-purple-400" size={18} />
//                   <div>
//                     <h4 className="text-gray-400 text-sm">Looking For</h4>
//                     <p className="text-white">Full Stack Development Internship</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Column - About Me Text */}
//             <div className="flex flex-col justify-center">
//               <h3 className="text-2xl font-bold mb-4 text-white">
//                 Passionate Full Stack & AI Developer
//               </h3>
              
//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 I'm Kunj Dave, a passionate 3rd-year B.Tech IT student at BVM Engineering College. I specialize in building modern, scalable web applications using cutting-edge technologies.
//               </p>
              
//               <p className="text-gray-300 mb-4 leading-relaxed">
//                 My expertise lies in full-stack development with Next.js, TypeScript, and FastAPI, complemented by a strong focus on AI integration. I've worked on real-world production applications, AI-powered platforms, and e-commerce solutions.
//               </p>
              
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 I'm particularly passionate about clean code architecture, AI integration, building scalable backend systems, and creating intuitive user experiences.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 mt-2">
//                 <a 
//                   href="https://github.com/kunjdave" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 text-center"
//                 >
//                   GitHub Profile
//                 </a>
//                 <a 
//                   href="https://linkedin.com/in/kunj-dave" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 text-center"
//                 >
//                   LinkedIn Profile
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Code, MapPin, Search, Sparkles, Briefcase, Cpu, Github, Linkedin } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const controls = useAnimation()
  const [activeSkill, setActiveSkill] = useState<number | null>(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const skills = [
    { name: "Next.js", level: 90, color: "from-violet-500 to-fuchsia-500" },
    { name: "TypeScript", level: 85, color: "from-blue-500 to-violet-500" },
    { name: "FastAPI", level: 80, color: "from-emerald-500 to-teal-500" },
    { name: "AI Integration", level: 75, color: "from-fuchsia-500 to-pink-500" },
    { name: "React", level: 90, color: "from-cyan-500 to-blue-500" },
    { name: "UI/UX", level: 70, color: "from-amber-500 to-orange-500" },
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-500/10 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial="hidden" animate={controls} variants={containerVariants} className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-12 gap-10">
            {/* Left Column - Profile & Info */}
            <motion.div variants={itemVariants} className="md:col-span-5 space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-900 ring-1 ring-gray-800/10">
                  <img
                    src="https://res.cloudinary.com/dnluacn1g/image/upload/v1745310765/WhatsApp_Image_2025-04-22_at_14.00.56_6a95f703_w03nkc.jpg"
                    alt="Kunj Dave"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50"
                >
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Calendar className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">Education</h4>
                    <p className="text-white font-semibold">B.Tech IT (2022-2026)</p>
                    <p className="text-gray-400 text-sm">BVM Engineering College</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50"
                >
                  <div className="bg-fuchsia-500/20 p-3 rounded-lg">
                    <MapPin className="text-fuchsia-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">Location</h4>
                    <p className="text-white font-semibold">Mehsana, Gujarat, India</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50"
                >
                  <div className="bg-violet-500/20 p-3 rounded-lg">
                    <Search className="text-violet-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">Looking For</h4>
                    <p className="text-white font-semibold">Full Stack Development Internship</p>
                  </div>
                </motion.div>
              </div>

            </motion.div>

            {/* Right Column - About Text & Skills */}
            <motion.div variants={itemVariants} className="md:col-span-7 space-y-8">
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 p-2 rounded-lg">
                    <Code className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                    Passionate Full Stack & AI Developer
                  </h3>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    I'm Kunj Dave, a passionate 3rd-year B.Tech IT student at BVM Engineering College. I specialize in
                    building modern, scalable web applications using cutting-edge technologies.
                  </p>

                  <p className="leading-relaxed">
                    My expertise lies in full-stack development with Next.js, TypeScript, and FastAPI, complemented by a
                    strong focus on AI integration. I've worked on real-world production applications, AI-powered
                    platforms, and e-commerce solutions.
                  </p>

                  <p className="leading-relaxed">
                    I'm particularly passionate about clean code architecture, AI integration, building scalable backend
                    systems, and creating intuitive user experiences.
                  </p>
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 p-2 rounded-lg">
                    <Cpu className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                    Areas of Interest
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "AI Integration",
                    "UI/UX Design",
                    "Cloud Computing",
                    "System Architecture",
                    "Data Visualization",
                    "API Development",
                    "DevOps",
                    "Machine Learning",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-800 hover:border-purple-500/50 hover:bg-gray-800 transition-colors duration-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase className="text-purple-400" size={18} />
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/kunjdave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/kunj-dave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

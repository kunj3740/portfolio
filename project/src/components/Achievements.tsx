// import React, { useEffect, useRef } from 'react';
// import { Award, Code, Star, Trophy } from 'lucide-react';

// interface Achievement {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   color: string;
//   link: string;
// }

// const Achievements: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);

//   const achievements: Achievement[] = [
//     {
//       icon: <Trophy className="w-6 h-6" />,
//       title: 'LeetCode Knight Badge',
//       description: 'Top 4.91% globally with strong problem-solving skills',
//       color: 'from-yellow-500 to-amber-600',
//       link: 'https://leetcode.com/kunjdave/'
//     },
//     {
//       icon: <Code className="w-6 h-6" />,
//       title: 'LeetCode Contest Rating: 1850+',
//       description: 'Consistently performing well in competitive programming contests',
//       color: 'from-blue-500 to-indigo-600',
//       link: 'https://leetcode.com/kunjdave/'
//     },
//     {
//       icon: <Star className="w-6 h-6" />,
//       title: 'Top 1% Problem Solver',
//       description: 'On Coding Ninjas with 13.8k+ minutes spent solving problems',
//       color: 'from-red-500 to-pink-600',
//       link: 'https://certificate.codingninjas.com/certificate/6a2bbf218e618e5f/YearlyStats'
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: 'CodeChef: 2 Star',
//       description: 'Maximum Rating: 1514, demonstrating algorithmic proficiency',
//       color: 'from-purple-500 to-violet-600',
//       link: 'https://www.codechef.com/users/kunjdave'
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: 'Certified Full Stack Developer',
//       description: '100xdevs by Harkirat Singh - comprehensive web development training',
//       color: 'from-green-500 to-emerald-600',
//       link: 'https://app.100xdevs.com/certificate/verify/LLF9YDIO'
//     },
//   ];

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           section.classList.add('animate-fade-in');

//           const items = section.querySelectorAll('.achievement-item');
//           items.forEach((item, index) => {
//             setTimeout(() => {
//               (item as HTMLElement).classList.add('animate-scale-in');
//             }, index * 150);
//           });
//         }
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="achievements" ref={sectionRef} className="py-20 bg-gray-900 opacity-0">
//       <div className="container mx-auto px-4 md:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
//           <span className="text-purple-500">Achievements</span> & Certifications
//         </h2>
//         <div className="w-20 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {achievements.map((achievement, index) => (
//               <a 
//                 key={index}
//                 href={achievement.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="achievement-item bg-gray-800 rounded-lg p-6 shadow-lg opacity-0 scale-95 block hover:bg-gray-750 transition-colors duration-300"
//               >
//                 <div className="flex justify-between items-start mb-4">
//                   <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
//                     {achievement.icon}
//                   </div>
//                   <div className="w-12 h-12 relative">
//                     <div className="absolute w-full h-full bg-purple-500/10 rounded-full animate-ping-slow"></div>
//                     <div className="absolute w-full h-full bg-purple-500/20 rounded-full animate-ping-slower"></div>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
//                 <p className="text-gray-300">{achievement.description}</p>
//               </a>
//             ))}
//           </div>

//           <div className="mt-16 bg-gray-800 rounded-lg p-8 relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

//             <div className="relative z-10">
//               <h3 className="text-2xl font-bold text-white mb-4 text-center">Competitive Programming Profile</h3>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//                 <a 
//                   href="https://leetcode.com/kunjdave/" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors"
//                 >
//                   <h4 className="text-lg font-bold text-white mb-2">LeetCode</h4>
//                   <p className="text-gray-300 text-sm">Knight Badge | 300+ problems</p>
//                 </a>

//                 <a 
//                   href="https://www.naukri.com/code360/profile/adf729ec-6fac-43b2-ae85-4160a801f104" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors"
//                 >
//                   <h4 className="text-lg font-bold text-white mb-2">Coding Ninjas</h4>
//                   <p className="text-gray-300 text-sm">Specialist | 300+ problems</p>
//                 </a>

//                 <a 
//                   href="https://www.codechef.com/users/kunjdave" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg text-center transition-colors"
//                 >
//                   <h4 className="text-lg font-bold text-white mb-2">CodeChef</h4>
//                   <p className="text-gray-300 text-sm">2 Star | Rating: 1514</p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;
"use client"

import React from "react"
import { Award, Code, Star, Trophy } from 'lucide-react'
import { motion } from "framer-motion"

interface Achievement {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  link: string
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "LeetCode Knight Badge",
      description: "Top 4.91% globally with strong problem-solving skills",
      color: "text-amber-500",
      link: "https://leetcode.com/kunjdave/",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "LeetCode Contest Rating: 1850+",
      description: "Consistently performing well in competitive programming contests",
      color: "text-emerald-500",
      link: "https://leetcode.com/kunjdave/",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Top 1% Problem Solver",
      description: "On Coding Ninjas with 13.8k+ minutes spent solving problems",
      color: "text-orange-500",
      link: "https://certificate.codingninjas.com/certificate/6a2bbf218e618e5f/YearlyStats",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "CodeChef: 2 Star",
      description: "Maximum Rating: 1514, demonstrating algorithmic proficiency",
      color: "text-violet-500",
      link: "https://www.codechef.com/users/kunjdave",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Full Stack Developer",
      description: "100xdevs by Harkirat Singh - comprehensive web development training",
      color: "text-teal-500",
      link: "https://app.100xdevs.com/certificate/verify/LLF9YDIO",
    },
  ]

  return (
    <section id="achievements" className="py-24" aria-label="Achievements">
      <div className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-800 tracking-tight"
          >
            <span className="text-indigo-500">
              Achievements
            </span>{" "}
            & Certifications
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-28 h-1.5 shadow-neu-pressed bg-indigo-500/30 mx-auto rounded-full origin-left mt-4"
          />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="block bg-neu shadow-neu hover:-translate-y-1 transition-transform rounded-[2rem] p-8"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl shadow-neu-pressed bg-neu ${achievement.color}`}>
                    {achievement.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 tracking-tight mb-2">{achievement.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-gray-600">{achievement.description}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-neu shadow-neu-pressed rounded-[2.5rem] p-10 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-gray-800 tracking-tight mb-8 text-center">
                Competitive Programming Profile
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="https://leetcode.com/kunjdave/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neu shadow-neu hover:shadow-neu-pressed p-6 rounded-[2rem] text-center transition-all"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">LeetCode</h4>
                  <p className="text-sm font-bold text-amber-500">Knight Badge</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">300+ problems</p>
                </a>

                <a
                  href="https://www.naukri.com/code360/profile/adf729ec-6fac-43b2-ae85-4160a801f104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neu shadow-neu hover:shadow-neu-pressed p-6 rounded-[2rem] text-center transition-all"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Coding Ninjas</h4>
                  <p className="text-sm font-bold text-orange-500">Specialist</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">300+ problems</p>
                </a>

                <a
                  href="https://www.codechef.com/users/kunjdave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neu shadow-neu hover:shadow-neu-pressed p-6 rounded-[2rem] text-center transition-all"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-2">CodeChef</h4>
                  <p className="text-sm font-bold text-violet-500">2 Star</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1">Rating: 1514</p>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

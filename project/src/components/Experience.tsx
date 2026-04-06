"use client"

import React from "react"
import { Calendar, CheckCircle } from 'lucide-react'
import { motion } from "framer-motion"

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24" aria-label="Experience">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-800 tracking-tight"
          >
            Work <span className="text-indigo-500">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24 h-1.5 shadow-neu-pressed bg-indigo-500/30 mx-auto rounded-full origin-left mt-4"
          />
        </div>

        <div className="max-w-4xl mx-auto relative mt-12">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 shadow-neu-pressed bg-neu rounded-full transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {/* Inventyv Experience */}
            <div className="flex flex-col md:flex-row md:items-center relative">
              {/* Card Side (Left on Desktop) */}
              <motion.div
                initial={{ x: -16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="md:w-1/2 md:pr-12 order-1 md:order-1 mb-8 md:mb-0"
              >
                <div className="bg-neu rounded-[2rem] p-6 shadow-neu">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-3 flex-shrink-0 clay-pill p-1.5 text-emerald-500">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        Mastered the Rust programming language to build safe, highly concurrent, and low-latency backend services.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-3 flex-shrink-0 clay-pill p-1.5 text-emerald-500">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        Architected and developed highly scalable real-time socket events for an internal team collaboration chat application.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-3 flex-shrink-0 clay-pill p-1.5 text-emerald-500">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        Integrated TiKV as a distributed transactional key-value store to manage chat state, ensuring robust data persistence and high availability.
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Info Side (Right on Desktop) */}
              <motion.div
                initial={{ x: 16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-2"
              >
                <h3 className="text-xl font-black text-gray-700">Jr Software Developer Intern</h3>
                <p className="text-indigo-500 font-bold mt-1">Inventyv Software Services Pvt. Ltd. <span className="text-gray-600 font-medium">(On-site)</span></p>
                <div className="flex items-center mt-3 clay-indigo px-4 py-2 inline-flex">
                  <Calendar size={16} className="text-white mr-2" />
                  <p className="text-white text-sm font-bold">Dec 2025 – Present</p>
                </div>
                <p className="text-gray-500 mt-4 font-bold text-sm tracking-wide">Rust | TiKV | WebSockets | Real-time Systems</p>
              </motion.div>

              {/* Timeline node */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-neu rounded-full shadow-neu transform md:-translate-x-1/2 hidden md:block z-10 
              after:content-[''] after:absolute after:inset-[6px] after:bg-emerald-400 after:rounded-full after:shadow-inner" />
            </div>
            {/* Amrutam Experience */}
            <div className="flex flex-col md:flex-row md:items-center">
              <motion.div
                initial={{ x: -16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1"
              >
                <h3 className="text-xl font-black text-gray-700">Backend Development Intern</h3>
                <p className="text-indigo-500 font-bold mt-1">Amrutam <span className="text-gray-600 font-medium">(Shark Tank India Featured)</span></p>
                <div className="flex items-center mt-3 md:justify-end clay-indigo px-4 py-2 inline-flex">
                  <Calendar size={16} className="text-white mr-2" />
                  <p className="text-white text-sm font-bold">Feb 2025 – May 2025</p>
                </div>
                <p className="text-gray-500 mt-4 font-bold text-sm tracking-wide">Node.js | Express.js | MongoDB | Postman</p>
              </motion.div>

              <motion.div
                initial={{ x: 16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-8 md:mb-0"
              >
                <div className="bg-neu rounded-[2rem] p-6 shadow-neu">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-3 flex-shrink-0 clay-pill p-1.5 text-emerald-500">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        Increased system dependability by introducing Per-Minute Billing and integrating Cloud Recording for critical Patient-Doctor onboarding procedures.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-3 flex-shrink-0 clay-pill p-1.5 text-emerald-500">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        Developed scalable internal tools including an FAQ system, college management APIs, and location modules, enhancing platform functionality for both admin and patient-doctor workflows.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-0.5 mr-3 flex-shrink-0 clay-pill p-1.5 text-emerald-500">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-600 font-medium leading-relaxed">
                        Resolved over 30+ major issues and improved API reliability through rigorous testing, documentation, and validation, significantly boosting backend stability across critical operations.
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Timeline node */}
              <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-neu rounded-full shadow-neu transform md:-translate-x-1/2 hidden md:block z-10 
              after:content-[''] after:absolute after:inset-[6px] after:bg-violet-400 after:rounded-full after:shadow-inner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

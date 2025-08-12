"use client"

import React from "react"
import { Calendar, CheckCircle } from 'lucide-react'
import { motion } from "framer-motion"

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900" aria-label="Experience">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full origin-left"
          />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {/* Amrutam Experience */}
            <div className="flex flex-col md:flex-row md:items-center">
              <motion.div
                initial={{ x: -16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1"
              >
                <h3 className="text-xl font-bold text-white">Backend Development Intern</h3>
                <p className="text-emerald-400 font-medium">Amrutam <span className="text-slate-400">(Shark Tank India Featured)</span></p>
                <div className="flex items-center mt-2 md:justify-end">
                  <Calendar size={16} className="text-slate-400 mr-2" />
                  <p className="text-slate-300 text-sm">Feb 2025 – May 2025</p>
                </div>
                <p className="text-slate-400 mt-4">Node.js | Express.js | MongoDB | Postman</p>
              </motion.div>

              <motion.div
                initial={{ x: 16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-4 md:mb-0"
              >
                <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-emerald-500 shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-slate-300">
                        Increased system dependability by introducing Per-Minute Billing and integrating Cloud Recording for critical Patient-Doctor onboarding procedures.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-slate-300">
                        Developed scalable internal tools including an FAQ system, college management APIs, and location modules, enhancing platform functionality for both admin and patient-doctor workflows.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-emerald-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-slate-300">
                        Resolved over 30+ major issues and improved API reliability through rigorous testing, documentation, and validation, significantly boosting backend stability across critical operations.
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Timeline node */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-emerald-600 rounded-full border-4 border-slate-950 transform md:-translate-x-1/2 hidden md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

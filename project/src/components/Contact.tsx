"use client"

import React, { useState } from "react"
import { Phone, Mail, Linkedin, Github, Code } from 'lucide-react'
import { motion } from "framer-motion"
import emailjs from "emailjs-com";

interface ContactInfo {
  icon: React.ReactNode
  label: string
  value: string
  link?: string
  color?: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const contactInfo: ContactInfo[] = [
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91-8320947770", link: "tel:+918320947770", color: "text-emerald-500" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "kunjdave694@gmail.com", link: "mailto:kunjdave694@gmail.com", color: "text-sky-500" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/in/kunj-dave", link: "https://linkedin.com/in/kunj-dave", color: "text-blue-500" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "github.com/kunjdave", link: "https://github.com/kunj3740", color: "text-gray-700" },
    { icon: <Code className="w-5 h-5" />, label: "LeetCode", value: "leetcode.com/kunjdave", link: "https://leetcode.com/kunjdave", color: "text-amber-500" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      "service_44bx4jr", 
      "template_3uj55t8", 
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "Djz6jOi3DEzrXhXyF"
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      alert("Failed to send message. Please try again.");
      console.error(error);
    });
  };



  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden text-gray-700"
      aria-label="Contact"
    >
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-800 tracking-tight"
          >
            Get In <span className="text-indigo-500">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24 h-1.5 shadow-neu-pressed bg-indigo-500/30 mx-auto rounded-full mt-4"
          />
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-gray-600 font-medium max-w-2xl mx-auto mt-6"
          >
            I’m currently exploring new opportunities. Whether you have a question or just want to say hi, I’ll get back
            to you as soon as possible!
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-neu shadow-neu-pressed rounded-[2.5rem] p-10"
          >
            <h3 className="text-2xl font-black text-gray-800 tracking-tight mb-8">Send Me a Message</h3>

            {submitSuccess && (
              <div
                className="shadow-neu-pressed bg-neu text-indigo-500 rounded-xl p-4 mb-6 font-bold"
                role="status"
                aria-live="polite"
              >
                Your message has been sent successfully! I’ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-600 font-bold mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-neu shadow-neu-pressed border-none text-gray-700 rounded-[1.25rem] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-600 font-medium transition-all"
                    placeholder="Your Name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-600 font-bold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-neu shadow-neu-pressed border-none text-gray-700 rounded-[1.25rem] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-600 font-medium transition-all"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-600 font-bold mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-neu shadow-neu-pressed border-none text-gray-700 rounded-[1.25rem] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-600 font-medium transition-all"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-600 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-neu shadow-neu-pressed border-none text-gray-700 rounded-[1.25rem] px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-gray-600 font-medium transition-all resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-neu shadow-neu text-indigo-500 font-black py-4 px-10 rounded-full transition-all duration-300 hover:text-indigo-500 active:shadow-neu-pressed disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="bg-neu shadow-neu rounded-[2.5rem] p-10 mt-8 lg:mt-0">
              <h3 className="text-2xl font-black text-gray-800 tracking-tight mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-14 h-14 bg-neu shadow-neu-pressed rounded-2xl flex items-center justify-center mr-6 shrink-0 ${info.color || 'text-indigo-500'}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{info.label}</p>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 font-bold hover:text-indigo-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neu shadow-neu rounded-[2.5rem] p-10 mt-10">
              <h3 className="text-xl font-black text-gray-800 tracking-tight mb-4">Looking For</h3>
              <div className="bg-neu shadow-neu-pressed p-6 rounded-[2rem]">
                <p className="text-indigo-500 font-bold mb-2">Software Development Roles</p>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  Passionate about building scalable, high-performance web applications with modern technologies and
                  secure, AI-enhanced experiences. Open to remote or on-site opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

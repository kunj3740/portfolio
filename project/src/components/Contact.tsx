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
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91-8320947770", link: "tel:+918320947770" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "kunjdave694@gmail.com", link: "mailto:kunjdave694@gmail.com" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "linkedin.com/in/kunj-dave", link: "https://linkedin.com/in/kunj-dave" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "github.com/kunjdave", link: "https://github.com/kunj3740" },
    { icon: <Code className="w-5 h-5" />, label: "LeetCode", value: "leetcode.com/kunjdave", link: "https://leetcode.com/kunjdave" },
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
      className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900"
      aria-label="Contact"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(16,185,129,0.10),transparent)]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full origin-left"
          />
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-slate-300 max-w-2xl mx-auto mt-6"
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
            className="bg-slate-900/70 rounded-xl p-8 shadow-xl border border-slate-800/60 backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            {submitSuccess && (
              <div
                className="bg-emerald-500/15 border border-emerald-500 text-emerald-400 rounded-lg p-4 mb-6"
                role="status"
                aria-live="polite"
              >
                Your message has been sent successfully! I’ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your Name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
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
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-4 text-emerald-400 border border-slate-800">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-emerald-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-lg p-6 mt-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Looking For</h3>
              <div className="bg-gradient-to-r from-emerald-600/15 to-cyan-600/15 p-4 rounded-lg border border-emerald-500/30">
                <p className="text-white font-medium mb-2">Software Development Roles</p>
                <p className="text-slate-300 text-sm">
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

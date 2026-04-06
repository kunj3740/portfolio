"use client"

import { useEffect, useMemo, useState } from "react"
import { Menu, X } from 'lucide-react'

type NavLink = {
  name: string
  href: string
}

const LINKS: NavLink[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects-section" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState<string>("#hero")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Observe sections to highlight the current section in nav
  useEffect(() => {
    const sectionIds = LINKS.map((l) => l.href.replace("#", ""))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`)
        }
      },
      { root: null, rootMargin: "0px 0px -40% 0px", threshold: [0.3, 0.5, 0.7] },
    )

    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const nav = useMemo(() => LINKS, [])

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none"
        style={{
          background: "linear-gradient(to right, #6366f1, #a78bfa)",
          transformOrigin: "left",
          transform: `scaleX(${scrollProgress})`,
          transition: "transform 0.1s linear",
        }}
      />
      <div
        className={`mx-4 md:mx-8 rounded-full bg-neu transition-all ${
          isScrolled ? "shadow-neu" : "shadow-neu"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg md:text-xl font-extrabold tracking-tight text-gray-800"
            aria-label="Go to home"
          >
            Kunj Dave
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
            {nav.map((link) => {
              const isActive = active === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? "shadow-neu-pressed text-indigo-500"
                      : "text-gray-500 hover:text-indigo-500 hover:shadow-neu"
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 rounded-full shadow-neu text-sm font-bold text-gray-600 hover:text-indigo-500 active:shadow-neu-pressed transition-all"
            >
              Let’s talk
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-500 w-10 h-10 rounded-full flex items-center justify-center shadow-neu active:shadow-neu-pressed transition-all focus:outline-none"
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden rounded-b-3xl bg-neu shadow-neu-pressed mx-2 mb-2 p-4 mt-2"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-2">
              {nav.map((link) => {
                const isActive = active === link.href
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full rounded-2xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                        isActive
                          ? "shadow-neu-pressed text-indigo-500"
                          : "text-gray-500 shadow-neu active:shadow-neu-pressed"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full shadow-neu rounded-2xl text-center px-4 py-3 text-sm font-bold text-gray-600 hover:text-indigo-500 active:shadow-neu-pressed transition-all"
                >
                  Let’s talk
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
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
      <div
        className={`mx-4 md:mx-8 rounded-xl border backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 ${
          isScrolled ? "border-slate-800/70 bg-slate-950/60" : "border-slate-800/40 bg-slate-950/40"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg md:text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            aria-label="Go to home"
          >
            Kunj Dave
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {nav.map((link) => {
              const isActive = active === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm transition-colors ${
                    isActive ? "text-white" : "text-slate-300 hover:text-emerald-300"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              )
            })}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-md border border-emerald-500/40 bg-emerald-600/10 px-3 py-1.5 text-sm text-emerald-300 hover:bg-emerald-600/20 transition-colors"
            >
              Let’s talk
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-200 p-2 rounded-md hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onClick={() => setIsMenuOpen((s) => !s)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav
            id="mobile-nav"
            className="md:hidden border-t border-slate-800/60 px-4 py-3"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col">
              {nav.map((link) => {
                const isActive = active === link.href
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full rounded-md px-3 py-2 text-sm transition-colors ${
                        isActive ? "text-white bg-slate-800/60" : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center rounded-md border border-emerald-500/40 bg-emerald-600/10 px-3 py-2 text-sm text-emerald-300 hover:bg-emerald-600/20 transition-colors"
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

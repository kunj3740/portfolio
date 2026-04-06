"use client"

interface SectionDividerProps {
  /** accent color class for the center dot, e.g. "bg-indigo-400" */
  accent?: string
  /** flip the wave vertically for visual variety */
  flip?: boolean
}

export default function SectionDivider({ accent = "bg-indigo-400", flip = false }: SectionDividerProps) {
  return (
    <div
      className="relative flex flex-col items-center select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Fading horizontal rule */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(99,102,241,0.18) 20%, rgba(99,102,241,0.28) 50%, rgba(99,102,241,0.18) 80%, transparent)",
        }}
      />

      {/* Center ornament */}
      <div className="relative -mt-[11px] flex items-center gap-2">
        <div className="w-12 h-px bg-indigo-300/40" />
        <div className={`w-2 h-2 rounded-full ${accent} opacity-70 shadow-sm`} />
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-300/60" />
        <div className={`w-3 h-3 rounded-full ${accent} shadow-md`} />
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-300/60" />
        <div className={`w-2 h-2 rounded-full ${accent} opacity-70 shadow-sm`} />
        <div className="w-12 h-px bg-indigo-300/40" />
      </div>

      {/* Subtle wave SVG */}
      <svg
        viewBox="0 0 1440 28"
        preserveAspectRatio="none"
        className={`w-full h-7 mt-1 opacity-[0.07] ${flip ? "scale-y-[-1]" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,14 C240,28 480,0 720,14 C960,28 1200,0 1440,14"
          fill="none"
          stroke="#6366f1"
          strokeWidth="2"
        />
        <path
          d="M0,20 C360,8 720,24 1080,10 C1260,4 1380,18 1440,20"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

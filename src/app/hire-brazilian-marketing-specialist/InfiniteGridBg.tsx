'use client'

import { useRef, useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from 'framer-motion'

export function InfiniteGridBg() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)
  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)

  // Window-level listener so pointer-events-none doesn't block tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current
      if (!el) return
      const { left, top } = el.getBoundingClientRect()
      mouseX.set(e.clientX - left)
      mouseY.set(e.clientY - top)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.2) % 40)
    gridOffsetY.set((gridOffsetY.get() + 0.2) % 40)
  })

  const maskImage = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Base grid — sempre visível */}
      <div className="absolute inset-0" style={{ opacity: 0.18 }}>
        <GridPattern id="grid-base" offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Máscara branca — suaviza o grid globalmente */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />

      {/* Reveal grid — laranja vivo sob o cursor */}
      <motion.div
        className="absolute inset-0"
        style={{ maskImage, WebkitMaskImage: maskImage, opacity: 0.7 }}
      >
        <GridPattern id="grid-reveal" offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Glow principal — canto superior direito */}
      <div
        className="absolute rounded-full"
        style={{
          right: '-5%',
          top: '-20%',
          width: '45%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(255,115,28,0.22) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}
      />
    </div>
  )
}

function GridPattern({
  id,
  offsetX,
  offsetY,
}: {
  id: string
  offsetX: ReturnType<typeof useMotionValue<number>>
  offsetY: ReturnType<typeof useMotionValue<number>>
}) {
  return (
    <svg className="w-full h-full" style={{ color: '#4a4a4a' }}>
      <defs>
        <motion.pattern
          id={id}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { InfiniteGridBg } from './InfiniteGridBg'

const QUIZ_URL = '/hire-brazilian-marketing-specialist/quiz'

const services = [
  { n: '01', label: 'Advertise on Facebook & Instagram' },
  { n: '02', label: 'Advertise on Google & YouTube' },
  { n: '03', label: 'Automate emails and SMS' },
  { n: '04', label: 'Manage CRM and contact database' },
  { n: '05', label: 'Build websites and landing pages' },
  { n: '06', label: 'Create ad copy and creatives' },
  { n: '07', label: 'Automate business processes' },
]

const ease = [0.22, 1, 0.36, 1]

// Brand fonts loaded globally via layout.tsx
const signika = { style: { fontFamily: 'var(--font-signika)' } }

export default function HireBrazilianMarketingSpecialist() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* ── Infinite Grid Background ── */}
      <InfiniteGridBg />

      {/* ── "5×" watermark ── */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -right-6 top-1/2 -translate-y-1/2 leading-none font-bold"
        style={{
          ...signika.style,
          fontSize: 'clamp(260px, 36vw, 520px)',
          color: '#ff731c',
          opacity: 0.045,
          letterSpacing: '-0.03em',
        }}
      >
        5×
      </div>

      {/* ── Top accent bar ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#ff731c' }} />

      {/* ── Nav ── */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-8 md:px-16 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          <span
            className="text-[1.5rem] font-bold tracking-wider"
            style={{ ...signika.style, color: '#0f0f0f' }}
          >
            MERK<span style={{ color: '#ff731c' }}>AI</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase"
          style={{
            border: '1px solid rgba(255,115,28,0.28)',
            backgroundColor: 'rgba(255,115,28,0.05)',
            color: '#888',
          }}
        >
          <span
            className="size-1.5 rounded-full shrink-0"
            style={{ backgroundColor: '#ff731c' }}
          />
          Brazilian Marketing Services
        </motion.div>
      </nav>

      {/* ── Main ── */}
      <main className="relative z-10 flex items-center min-h-[calc(100vh-76px)] px-4 sm:px-8 md:px-16 pb-10">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">

          {/* LEFT — Headline + CTA */}
          <div>

            {/* Badge label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
            >
              <span
                className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase px-3 py-1.5"
                style={{ backgroundColor: '#ff731c', color: '#fff' }}
              >
                Specialized Brazilian Team
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-5 font-bold leading-[0.94] uppercase"
              style={{
                ...signika.style,
                fontSize: 'clamp(2.2rem, 9vw, 6.75rem)',
                color: '#0f0f0f',
                letterSpacing: '-0.01em',
              }}
            >
              Hire a Brazilian<sup className="text-[0.3em] align-super ml-1 not-italic">🇧🇷</sup><br />
              Marketing<br />
              <span style={{ color: '#ff731c' }}>Specialist.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-6 text-gray-500 text-[16px] md:text-[18px] leading-relaxed max-w-[480px]"
            >
              Drive more results for your business at up to{' '}
              <span className="text-gray-900 font-semibold">5× lower cost</span>{' '}
              than US-based agencies — all your marketing needs covered under{' '}
              <span className="text-gray-900 font-semibold">one flat monthly fee</span>.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease }}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <Link
                href={QUIZ_URL}
                className="group inline-flex items-center gap-3 px-8 py-[14px] text-white font-semibold text-[15px] transition-all duration-200 hover:gap-5"
                style={{ backgroundColor: '#ff731c' }}
              >
                Answer a few questions
                <ArrowRight className="size-4 shrink-0" />
              </Link>
              <p className="text-[13px] text-gray-400 tracking-wide">
                Less than 2 min &middot; No commitment
              </p>
            </motion.div>
          </div>

          {/* RIGHT — Checklist card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid #1a1a1a',
                boxShadow: '0 8px 32px rgba(255,115,28,0.07), 0 2px 12px rgba(0,0,0,0.08)',
              }}
            >
              {/* Barra laranja no topo */}
              <div className="h-[3px] w-full" style={{ backgroundColor: '#ff731c' }} />

              <div className="p-7 md:p-8">
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-[13px] font-bold tracking-[0.22em] uppercase"
                    style={{ color: '#ff731c' }}
                  >
                    Need at least 2 of these
                  </span>
                </div>

                {/* Items */}
                <ul className="divide-y" style={{ borderColor: '#ebebeb' }}>
                  {services.map((s, i) => (
                    <motion.li
                      key={s.n}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.06, ease }}
                      className="flex items-center gap-4 py-[13px]"
                    >
                      <span
                        className="text-[15px] font-bold tracking-widest shrink-0 w-7 leading-none"
                        style={{ ...signika.style, color: '#ff731c' }}
                      >
                        {s.n}
                      </span>
                      <span className="text-[16px] leading-snug" style={{ color: '#1a1a1a' }}>
                        {s.label}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Card footer */}
                <div className="mt-6 pt-5" style={{ borderTop: '1px solid #ebebeb' }}>
                  <p className="text-[15px] leading-relaxed text-gray-400">
                    Fill out our application and we'll reach out to confirm whether we can serve your business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  )
}

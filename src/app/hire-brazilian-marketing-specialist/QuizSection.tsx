'use client'

import { useState, useRef, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

// Fontes da marca via CSS variables (carregadas no layout.tsx)
const signika = { fontFamily: 'var(--font-signika)' }

/* ─── Steps ─────────────────────────────────────────────────── */

type YesNoStep  = { type: 'yesno';   question: string; sub?: string; disqualifyOn: 'no' | 'yes' | null; disqualifyMsg?: string }
type TextStep   = { type: 'text';    question: string; sub?: string; fields: { key: string; placeholder: string; required?: boolean }[] }
type ContactStep= { type: 'contact'; question: string; sub?: string }
type ThanksStep = { type: 'thanks' }
type Step = YesNoStep | TextStep | ContactStep | ThanksStep

const STEPS: Step[] = [
  {
    type: 'yesno',
    question: 'Are you looking for marketing services\nfor your business?',
    disqualifyOn: 'no',
    disqualifyMsg: "Looks like we might not be the right fit right now. Thanks for stopping by — feel free to come back whenever you're ready.",
  },
  {
    type: 'yesno',
    question: 'Is your business\nbased in the United States?',
    disqualifyOn: 'no',
    disqualifyMsg: 'We currently serve US-based businesses only. Thanks for your interest — we hope to work with you in the future!',
  },
  {
    type: 'text',
    question: 'Tell us about your business.',
    sub: "Just the basics — we'll learn more when we connect.",
    fields: [
      { key: 'company',   placeholder: 'Company name',           required: true },
      { key: 'website',   placeholder: 'Website (optional)' },
      { key: 'instagram', placeholder: 'Instagram handle (optional)' },
    ],
  },
  {
    type: 'yesno',
    question: "We're a Brazilian company\nbased in Brazil.\nAre you okay with that?",
    disqualifyOn: 'no',
    disqualifyMsg: "Totally understood. If you ever change your mind, we'd love to hear from you.",
  },
  {
    type: 'yesno',
    question: 'Our services range from\n$300 to $800 / month\ndepending on scope.\nDoes that match your budget?',
    disqualifyOn: 'no',
    disqualifyMsg: "Understood — our pricing might not be the right match right now. Come back if things change!",
  },
  {
    type: 'contact',
    question: 'Almost there.',
    sub: "Fill in your details and we'll reach out as soon as possible.",
  },
  { type: 'thanks' },
]

const TOTAL_QUESTIONS = STEPS.filter((s) => s.type !== 'thanks').length

/* ─── Animations ─────────────────────────────────────────────── */

const slideVariants = {
  enter: (dir: number) => ({ y: dir > 0 ? 56 : -56, opacity: 0 }),
  center: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  exit:   (dir: number) => ({ y: dir > 0 ? -56 : 56, opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const } }),
}

/* ─── Main component ─────────────────────────────────────────── */

export function QuizSection() {
  const [step, setStep]               = useState(0)
  const [dir, setDir]                 = useState(1)
  const [disqualified, setDisqualified] = useState<{ message: string } | null>(null)
  const [submitting, setSubmitting]   = useState(false)
  const [data, setData]               = useState({ company: '', website: '', instagram: '', name: '', email: '', phone: '' })
  const firstInputRef                 = useRef<HTMLInputElement>(null)

  const advance = (next: number, direction = 1) => { setDir(direction); setStep(next) }
  const goBack  = () => {
    if (disqualified) { setDisqualified(null); return }
    if (step > 0) advance(step - 1, -1)
  }

  const handleYesNo = (answer: 'yes' | 'no') => {
    const s = STEPS[step] as YesNoStep
    if (s.disqualifyOn === answer) setDisqualified({ message: s.disqualifyMsg! })
    else advance(step + 1)
  }

  const handleTextContinue = () => {
    const s = STEPS[step] as TextStep
    const ok = s.fields.filter((f) => f.required).every((f) => data[f.key as keyof typeof data].trim() !== '')
    if (ok) advance(step + 1)
  }

  const handleSubmit = async () => {
    if (!data.name.trim() || !data.email.trim()) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200)) // TODO: real API call
    setSubmitting(false)
    advance(step + 1)
  }

  const canContinueText = () => {
    const s = STEPS[step]
    if (s.type !== 'text') return false
    return s.fields.filter((f) => f.required).every((f) => data[f.key as keyof typeof data].trim() !== '')
  }

  const progress   = step / (TOTAL_QUESTIONS - 1)
  const stepLabel  = step < TOTAL_QUESTIONS ? String(step + 1).padStart(2, '0') : null
  const showBack   = (step > 0 || !!disqualified) && step < STEPS.length - 1

  return (
    <section
      id="quiz"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#141210' }}
    >
      {/* Warm radial glow — fundo com profundidade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,115,28,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ backgroundColor: '#252220' }}>
        <motion.div
          className="h-full"
          style={{ backgroundColor: '#ff731c' }}
          initial={{ width: 0 }}
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Header — só back + step counter, sem logo */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 md:px-16 py-6">
        <motion.button
          onClick={goBack}
          animate={{ opacity: showBack ? 1 : 0, pointerEvents: showBack ? 'auto' : 'none' }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 transition-colors duration-200 text-sm font-medium"
          style={{ color: '#888' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#e0e0e0')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
        >
          <ArrowLeft className="size-4" />
          <span>Back</span>
        </motion.button>

        {stepLabel && !disqualified ? (
          <span className="text-sm font-bold tracking-widest" style={{ ...signika, color: '#555' }}>
            {stepLabel} <span style={{ color: '#333' }}>—</span> {String(TOTAL_QUESTIONS).padStart(2, '0')}
          </span>
        ) : (
          <span />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait" custom={dir}>

            {/* ── Disqualify ── */}
            {disqualified ? (
              <motion.div key="disqualified" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" className="text-center">
                <div
                  className="inline-flex items-center justify-center size-14 rounded-full mb-8"
                  style={{ backgroundColor: '#1e1b18', border: '1px solid #2e2a26' }}
                >
                  <ArrowLeft className="size-5" style={{ color: '#888' }} />
                </div>
                <p className="text-xl md:text-2xl leading-relaxed max-w-lg mx-auto" style={{ color: '#d4d0cc' }}>
                  {disqualified.message}
                </p>
                <button
                  onClick={goBack}
                  className="mt-8 text-sm font-medium underline underline-offset-4 transition-colors duration-200"
                  style={{ color: '#666' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#d4d0cc')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
                >
                  ← Go back
                </button>
              </motion.div>

            /* ── Thank you ── */
            ) : STEPS[step].type === 'thanks' ? (
              <motion.div key="thanks" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" className="text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
                  className="flex justify-center mb-8"
                >
                  <CheckCircle2 className="size-16" style={{ color: '#ff731c' }} strokeWidth={1.5} />
                </motion.div>
                <h2 className="font-bold leading-none mb-5" style={{ ...signika, fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: '#f0ede8' }}>
                  THANK YOU!
                </h2>
                <p className="text-lg leading-relaxed max-w-md mx-auto" style={{ color: '#888' }}>
                  We've received your information and will reach out to you as soon as possible to discuss how we can help your business grow.
                </p>
                <div
                  className="mt-10 inline-block px-6 py-3 text-xs tracking-widest uppercase font-medium"
                  style={{ border: '1px solid #2e2a26', color: '#555' }}
                >
                  merkai.com
                </div>
              </motion.div>

            /* ── Yes / No ── */
            ) : STEPS[step].type === 'yesno' ? (
              <motion.div key={`yesno-${step}`} custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-bold leading-none" style={{ ...signika, color: '#ff731c' }}>
                    {String(step + 1).padStart(2, '0')}
                  </span>
                  <div className="h-[1px] flex-1" style={{ backgroundColor: '#2a2622' }} />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-[2.6rem] font-medium leading-snug whitespace-pre-line mb-12" style={{ color: '#f0ede8', lineHeight: 1.35 }}>
                  {(STEPS[step] as YesNoStep).question}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {(['yes', 'no'] as const).map((opt) => (
                    <YesNoTile key={opt} label={opt === 'yes' ? 'Yes' : 'No'} onClick={() => handleYesNo(opt)} isYes={opt === 'yes'} />
                  ))}
                </div>
              </motion.div>

            /* ── Text fields ── */
            ) : STEPS[step].type === 'text' ? (
              <motion.div key={`text-${step}`} custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-bold leading-none" style={{ ...signika, color: '#ff731c' }}>
                    {String(step + 1).padStart(2, '0')}
                  </span>
                  <div className="h-[1px] flex-1" style={{ backgroundColor: '#2a2622' }} />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-[2.6rem] font-medium leading-snug mb-2" style={{ color: '#f0ede8' }}>
                  {(STEPS[step] as TextStep).question}
                </h2>
                {(STEPS[step] as TextStep).sub && (
                  <p className="text-base mb-10" style={{ color: '#888' }}>
                    {(STEPS[step] as TextStep).sub}
                  </p>
                )}
                <div className="space-y-7 mt-10">
                  {(STEPS[step] as TextStep).fields.map((f, i) => (
                    <UnderlineInput
                      key={f.key}
                      inputRef={i === 0 ? firstInputRef : undefined}
                      placeholder={f.placeholder}
                      value={data[f.key as keyof typeof data]}
                      onChange={(v) => setData((prev) => ({ ...prev, [f.key]: v }))}
                      onEnter={i === (STEPS[step] as TextStep).fields.length - 1 ? handleTextContinue : undefined}
                    />
                  ))}
                </div>
                <motion.button
                  onClick={handleTextContinue}
                  disabled={!canContinueText()}
                  className="mt-10 flex items-center gap-3 px-8 py-[14px] text-white font-semibold text-[15px] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#ff731c' }}
                  whileHover={canContinueText() ? { gap: '18px' } : {}}
                >
                  Continue
                  <ArrowRight className="size-4 shrink-0" />
                </motion.button>
              </motion.div>

            /* ── Contact ── */
            ) : STEPS[step].type === 'contact' ? (
              <motion.div key="contact" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-bold leading-none" style={{ ...signika, color: '#ff731c' }}>
                    {String(step + 1).padStart(2, '0')}
                  </span>
                  <div className="h-[1px] flex-1" style={{ backgroundColor: '#2a2622' }} />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-[2.6rem] font-medium leading-snug mb-2" style={{ color: '#f0ede8' }}>
                  {(STEPS[step] as ContactStep).question}
                </h2>
                <p className="text-base mb-10" style={{ color: '#888' }}>
                  {(STEPS[step] as ContactStep).sub}
                </p>
                <div className="space-y-7">
                  <UnderlineInput placeholder="Your full name *"          value={data.name}  onChange={(v) => setData((p) => ({ ...p, name: v }))} />
                  <UnderlineInput placeholder="Email address *" type="email" value={data.email} onChange={(v) => setData((p) => ({ ...p, email: v }))} />
                  <UnderlineInput placeholder="Phone / WhatsApp (optional)" type="tel" value={data.phone} onChange={(v) => setData((p) => ({ ...p, phone: v }))} />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={submitting || !data.name.trim() || !data.email.trim()}
                  className="mt-10 flex items-center gap-3 px-8 py-[14px] text-white font-semibold text-[15px] transition-opacity duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
                  style={{ backgroundColor: '#ff731c' }}
                >
                  {submitting
                    ? <><Loader2 className="size-4 animate-spin" /> Sending…</>
                    : <><span>Send my application</span><ArrowRight className="size-4 shrink-0" /></>
                  }
                </button>
              </motion.div>
            ) : null}

          </AnimatePresence>
        </div>
      </div>

      {/* Keyboard hint */}
      {!disqualified && STEPS[step].type !== 'yesno' && STEPS[step].type !== 'thanks' && (
        <div className="relative z-10 absolute bottom-6 left-0 right-0 flex justify-center">
          <span className="text-xs tracking-widest uppercase" style={{ color: '#444' }}>
            Press <kbd className="font-mono" style={{ color: '#555' }}>Enter</kbd> to continue
          </span>
        </div>
      )}
    </section>
  )
}

/* ─── YesNoTile ──────────────────────────────────────────────── */

function YesNoTile({ label, onClick, isYes }: { label: string; onClick: () => void; isYes: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.97 }}
      className="relative flex flex-col justify-between p-6 md:p-8 text-left transition-all duration-200 cursor-pointer"
      style={{
        minHeight: '130px',
        border: `1.5px solid ${hovered ? (isYes ? '#ff731c' : '#505050') : '#302c28'}`,
        backgroundColor: hovered
          ? isYes ? 'rgba(255,115,28,0.1)' : '#1e1b18'
          : '#1a1713',
      }}
    >
      <span
        className="text-2xl md:text-3xl font-semibold transition-colors duration-200"
        style={{ color: hovered ? (isYes ? '#ff731c' : '#f0ede8') : '#c0bdb8' }}
      >
        {label}
      </span>
      <motion.div animate={{ x: hovered ? 6 : 0 }} transition={{ duration: 0.2 }} className="mt-4">
        <ArrowRight
          className="size-4 transition-colors duration-200"
          style={{ color: hovered ? (isYes ? '#ff731c' : '#f0ede8') : '#555' }}
        />
      </motion.div>
    </motion.button>
  )
}

/* ─── UnderlineInput ─────────────────────────────────────────── */

function UnderlineInput({
  placeholder, value, onChange, type = 'text', onEnter, inputRef,
}: {
  placeholder: string; value: string; onChange: (v: string) => void
  type?: string; onEnter?: () => void; inputRef?: React.RefObject<HTMLInputElement | null>
}) {
  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) onEnter()
  }

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKey}
        placeholder={placeholder}
        className="w-full bg-transparent text-lg py-3 outline-none transition-colors duration-200"
        style={{
          color: '#f0ede8',
          borderBottom: '1.5px solid #302c28',
          caretColor: '#ff731c',
        }}
        onFocus={(e) => { e.currentTarget.style.borderBottomColor = '#ff731c' }}
        onBlur={(e)  => { e.currentTarget.style.borderBottomColor = '#302c28' }}
      />
      <style jsx>{`
        input::placeholder { color: #555; }
      `}</style>
    </div>
  )
}

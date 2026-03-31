'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, UserX, MessageSquareOff, ShieldAlert, Flame } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    text: 'Leads chegam e ninguém responde no tempo certo',
  },
  {
    icon: UserX,
    text: 'O atendimento muda de pessoa para pessoa',
  },
  {
    icon: MessageSquareOff,
    text: 'Não existe uma triagem clara',
  },
  {
    icon: ShieldAlert,
    text: 'O comercial recebe oportunidades sem contexto',
  },
  {
    icon: Flame,
    text: 'O dono precisa apagar incêndio o tempo todo',
  },
  {
    icon: AlertTriangle,
    text: 'A empresa investe para gerar demanda, mas perde resultado na operação',
  },
]

export function ProblemaSection() {
  return (
    <section id="problema" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            O problema real
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            O problema não é só{' '}
            <span className="text-primary">gerar lead</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Muitas empresas já recebem contatos todos os dias.
            O que trava o resultado é o que acontece depois.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-destructive/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="h-5 w-5 text-destructive/80" />
                </div>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  {problem.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No fim, a empresa investe para gerar demanda, mas{' '}
            <span className="text-foreground font-medium">perde resultado na operação</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

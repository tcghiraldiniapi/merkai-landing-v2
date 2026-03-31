'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const painPoints = [
  'Já recebem leads por tráfego, WhatsApp, redes sociais ou indicação',
  'Sentem que o atendimento está desorganizado',
  'Perdem oportunidades por demora no follow-up',
  'Não têm um processo claro de triagem e qualificação',
  'Precisam integrar marketing e comercial',
  'Querem escalar com mais processo, e não com mais caos',
]

const antiPatterns = [
  'Geram lead sem qualificar',
  'Automatizam sem lógica comercial',
  'Entregam tráfego sem pensar na operação',
  'Vendem IA como resposta automática sem inteligência de processo',
]

export function ProblemasDesejosSection() {
  return (
    <section className="relative py-24 md:py-32">
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
            Para quem é
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Essa solução é para{' '}
            <span className="text-primary">empresas que...</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-primary/20 bg-primary/[0.03]"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Se identificam com isso</h3>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-destructive/20 bg-destructive/[0.03]"
          >
            <h3 className="text-xl font-bold mb-6 text-destructive/80">O que outros fazem de errado</h3>
            <ul className="space-y-4">
              {antiPatterns.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="h-3 w-3 text-destructive/80" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 rounded-xl bg-card/50 border border-border/50">
              <p className="text-sm text-muted-foreground">
                A Merkai não atua só na aquisição e não automatiza tarefa isolada sem lógica comercial.{' '}
                <span className="text-foreground font-medium">
                  A estrutura é pensada para a operação funcionar do começo ao fim.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

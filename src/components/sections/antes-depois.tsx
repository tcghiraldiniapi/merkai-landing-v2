'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const beforeItems = [
  'Leads dispersos',
  'Atendimento inconsistente',
  'Muito trabalho manual',
  'Falta de integração',
  'Baixa previsibilidade',
  'Perda de oportunidades',
]

const afterItems = [
  'Operação mais organizada',
  'Lead melhor filtrado',
  'Resposta mais rápida',
  'Processo comercial mais claro',
  'Menos desperdício',
  'Mais eficiência na conversão',
]

export function AntesDepoisSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
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
            Transformação
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            O que muda na <span className="text-primary">prática</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border/50 bg-card/20"
          >
            <h3 className="text-lg font-bold mb-6 text-muted-foreground uppercase tracking-wider text-sm">
              Antes
            </h3>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-destructive/60" />
                  <span className="text-foreground/60 line-through decoration-foreground/20">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="h-12 w-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-primary/20 bg-primary/[0.03]"
          >
            <h3 className="text-lg font-bold mb-6 text-primary uppercase tracking-wider text-sm">
              Depois
            </h3>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    desc: 'Mapeamos a operação atual, os canais, o atendimento e os principais gargalos.',
  },
  {
    number: '02',
    title: 'Arquitetura da solução',
    desc: 'Desenhamos a jornada, as regras de qualificação, os fluxos, as integrações e a lógica da operação.',
  },
  {
    number: '03',
    title: 'Implementação',
    desc: 'Configuramos CRM, automações, mensagens, campanhas, fluxos e agente de IA.',
  },
  {
    number: '04',
    title: 'Ajustes e validação',
    desc: 'Testamos, corrigimos, refinamos e alinhamos a estrutura ao dia a dia da empresa.',
  },
  {
    number: '05',
    title: 'Acompanhamento',
    desc: 'Monitoramos os dados, ajustamos a performance e evoluímos a operação com base em métricas.',
  },
]

export function ComoFuncionaSection() {
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
            Processo
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Como funciona o <span className="text-primary">processo</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

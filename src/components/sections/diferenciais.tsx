'use client'

import { motion } from 'framer-motion'
import { Layers, Wrench, Target, Building2, BarChart3 } from 'lucide-react'

const diferenciais = [
  {
    icon: Layers,
    title: 'Visão integrada',
    desc: 'Tráfego, processo comercial, automação e IA conectados em um sistema coerente.',
  },
  {
    icon: Wrench,
    title: 'Implementação prática',
    desc: 'Não só diagnóstico. Desenhamos, implementamos, acompanhamos e ajustamos.',
  },
  {
    icon: Target,
    title: 'Foco em conversão',
    desc: 'O objetivo é converter melhor, não apenas gerar mais lead.',
  },
  {
    icon: Building2,
    title: 'Orientada à rotina real',
    desc: 'A estruturação respeita o dia a dia da empresa, não impõe modelos genéricos.',
  },
  {
    icon: BarChart3,
    title: 'Acompanhamento recorrente',
    desc: 'Leitura de métricas, KPIs e refinamento contínuo da operação.',
  },
]

export function DiferenciaisSection() {
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
          className="text-center max-w-2xl mx-auto mb-6"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Diferenciais
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Por que a Merkai é{' '}
            <span className="text-primary">diferente</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-muted-foreground">
            Muita gente vende tráfego. Muita gente vende automação. Muita gente vende IA.{' '}
            <span className="text-foreground font-medium">O problema é que quase sempre cada peça fica solta.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                index === 0
                  ? 'border-primary/30 bg-primary/[0.05] md:col-span-2 lg:col-span-1'
                  : 'border-border/50 bg-card/20 hover:border-primary/20'
              }`}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <diff.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{diff.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{diff.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

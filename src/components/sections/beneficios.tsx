'use client'

import { motion } from 'framer-motion'
import {
  Target,
  Zap,
  Eye,
  Filter,
  ArrowRightLeft,
  RotateCcw,
  BarChart3,
  TrendingUp,
} from 'lucide-react'

const benefits = [
  { icon: Target, title: 'Menos leads desperdiçados', desc: 'Cada oportunidade é tratada e aproveitada' },
  { icon: Zap, title: 'Mais velocidade no atendimento', desc: 'Resposta rápida no momento certo' },
  { icon: Eye, title: 'Mais clareza no processo comercial', desc: 'Visão completa do funil de vendas' },
  { icon: Filter, title: 'Mais padrão na qualificação', desc: 'Critérios claros de triagem' },
  { icon: ArrowRightLeft, title: 'Passagem eficiente para vendas', desc: 'Lead chega pronto ao comercial' },
  { icon: RotateCcw, title: 'Menos retrabalho e improviso', desc: 'Processos definidos e replicáveis' },
  { icon: BarChart3, title: 'Controle sobre métricas', desc: 'Dados claros sobre gargalos e resultados' },
  { icon: TrendingUp, title: 'Mais aproveitamento da demanda', desc: 'Converter melhor o que já gera' },
]

export function BeneficiosSection() {
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
            Benefícios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            O que você ganha com uma operação{' '}
            <span className="text-primary">bem estruturada</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl border border-border/30 bg-card/20 hover:border-primary/30 hover:bg-card/40 transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

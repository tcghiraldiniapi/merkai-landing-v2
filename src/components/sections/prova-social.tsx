'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TestimonialsColumn, type Testimonial } from '@/components/ui/testimonials-columns'

const testimonials: Testimonial[] = [
  {
    text: 'A Merkai escalou nossa operação em 10x. Investimento em tráfego saiu de R$ 9.000/mês para R$ 125.000/mês em 10 meses, com ROI bruto de 3,4.',
    name: 'Polozi in Company',
    role: 'Escala da operação',
  },
  {
    text: 'Implementação de funil de aquisição com IA resultou em redução de 30% no investimento mensal em tráfego e aumento de 24% na receita.',
    name: 'Pousada da Gibinha',
    role: 'Funil com IA',
  },
  {
    text: 'Agente de IA para triagem reduziu nossa equipe de 8 para 5 pessoas, mantendo a mesma qualidade de atendimento.',
    name: 'Posgrado Med',
    role: 'Triagem com IA',
  },
  {
    text: 'A estruturação do CRM e dos fluxos de qualificação nos deu visibilidade total sobre onde estávamos perdendo oportunidades.',
    name: 'Cliente Merkai',
    role: 'Estruturação CRM',
  },
  {
    text: 'O processo comercial ficou muito mais claro. Agora cada lead é tratado de forma padronizada e eficiente.',
    name: 'Cliente Merkai',
    role: 'Processo comercial',
  },
  {
    text: 'A integração entre marketing e vendas eliminou o desperdício de leads que tínhamos antes.',
    name: 'Cliente Merkai',
    role: 'Integração MKT + Vendas',
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = [...testimonials.slice(0, 2), testimonials[5]]

export function ProvaSocialSection() {
  return (
    <section id="prova-social" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Resultados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-center">
            Provas de <span className="text-primary">resultado</span>
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            Veja o que nossos clientes conquistaram com a estruturação da Merkai.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/[0.03] text-center">
            <div className="text-4xl font-bold text-primary mb-2">10x</div>
            <div className="text-sm text-foreground font-medium">Escala da operação</div>
            <div className="text-xs text-muted-foreground mt-1">Polozi in Company</div>
          </div>
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/[0.03] text-center">
            <div className="text-4xl font-bold text-primary mb-2">-30%</div>
            <div className="text-sm text-foreground font-medium">Investimento em tráfego</div>
            <div className="text-xs text-muted-foreground mt-1">+24% receita — Pousada da Gibinha</div>
          </div>
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/[0.03] text-center">
            <div className="text-4xl font-bold text-primary mb-2">8→5</div>
            <div className="text-sm text-foreground font-medium">Redução de equipe</div>
            <div className="text-xs text-muted-foreground mt-1">Posgrado Med — triagem com IA</div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}

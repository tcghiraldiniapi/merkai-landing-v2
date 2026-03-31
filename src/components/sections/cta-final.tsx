'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Search, Cog, Bot, Workflow, BarChart3, Layers } from 'lucide-react'

const items = [
  { icon: Search, text: 'Diagnóstico do funil' },
  { icon: Cog, text: 'Organização do processo comercial' },
  { icon: Workflow, text: 'Automação operacional' },
  { icon: Layers, text: 'Integração entre ferramentas' },
  { icon: Bot, text: 'Triagem e qualificação com IA' },
  { icon: BarChart3, text: 'Clareza de fluxo para vendas' },
]

export function CtaFinalSection() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] via-primary/[0.08] to-primary/[0.05]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Pare de perder demanda por{' '}
            <span className="text-primary">falta de processo</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Se sua empresa já gera leads, mas ainda perde vendas por demora, desorganização
            e falta de integração, a estrutura certa pode mudar isso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card/20 backdrop-blur-sm"
            >
              <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-xs text-foreground/80">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-foreground/10 rounded-[14px] border p-0.5 inline-block">
            <Button asChild size="lg" className="rounded-xl px-8 text-base font-semibold gap-2">
              <Link href="#oferta">
                Agendar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Sem compromisso. Vamos entender sua operação primeiro.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

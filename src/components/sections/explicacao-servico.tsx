'use client'

import { motion } from 'framer-motion'
import {
  Search,
  GitBranch,
  Cog,
  BarChart3,
  Bot,
  Globe,
  Database,
  LineChart,
  Users,
  Workflow,
  Settings,
} from 'lucide-react'

const services = [
  { icon: Search, text: 'Diagnóstico da operação atual' },
  { icon: GitBranch, text: 'Mapeamento do funil comercial' },
  { icon: Workflow, text: 'Estruturação da jornada do lead' },
  { icon: Globe, text: 'Construção e integração da landing page' },
  { icon: Database, text: 'Integração e configuração do CRM' },
  { icon: Bot, text: 'Criação do fluxo de triagem com IA' },
  { icon: BarChart3, text: 'Planejamento e gestão de campanhas de tráfego pago' },
  { icon: Settings, text: 'Integração entre canais, ferramentas e etapas' },
  { icon: Users, text: 'Qualificação e distribuição dos leads' },
  { icon: LineChart, text: 'Relatórios com métricas e KPIs' },
  { icon: Cog, text: 'Acompanhamento recorrente da operação' },
]

export function ExplicacaoServicoSection() {
  return (
    <section id="servico" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            O que fazemos
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            O que a <span className="text-primary">Merkai</span> faz
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Estruturamos a operação comercial da sua empresa para que a demanda entre,
            seja qualificada e avance com mais lógica.
          </p>
          <p className="mt-3 text-muted-foreground">
            Unimos marketing, processo, automação e IA dentro de uma operação real de conversão.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-2xl border border-border/50 bg-card/20 backdrop-blur-sm"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

          <h3 className="relative text-xl font-bold mb-8 text-center">
            Na prática, isso inclui:
          </h3>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <service.icon className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground/80">{service.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

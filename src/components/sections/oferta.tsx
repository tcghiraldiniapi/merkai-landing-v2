'use client'

import { motion } from 'framer-motion'
import { Check, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const setupItems = [
  'Construção e mapeamento do funil comercial',
  'Construção e integração da landing page',
  'Integração e configuração do CRM',
  'Construção do fluxo do agente de IA',
]

const monthlyItems = [
  'Gestão e otimização das campanhas de tráfego pago',
  'Acompanhamento contínuo do funil comercial',
  'Estrutura de servidor e dependências da operação',
  'Manutenção e ajustes do agente de IA',
  'Ajustes operacionais na automação e integrações',
  'Monitoramento de métricas e KPIs',
  'Relatórios recorrentes',
  'Refinamentos estratégicos com base em desempenho',
]

export function OfertaSection() {
  return (
    <section id="oferta" className="relative py-24 md:py-32">
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
            Oferta
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Sistema de Conversão{' '}
            <span className="text-primary">Inteligente</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Uma estrutura de captação, triagem e conversão pensada para empresas de serviço
            que já geram demanda, mas precisam organizar a operação.
          </p>
        </motion.div>

        {/* Modelo de contratação - explicação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/[0.03] text-center">
            <h3 className="text-lg font-bold mb-2">Como funciona a contratação</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A contratação é composta por duas etapas de um único serviço:{' '}
              <span className="text-foreground font-medium">primeiro o setup inicial</span> para
              estruturar toda a base da operação, e em seguida o{' '}
              <span className="text-foreground font-medium">fee mensal</span> para manter,
              otimizar e evoluir a estrutura continuamente.
            </p>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Etapa 1 - Setup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative p-8 rounded-t-2xl border border-border/50 bg-card/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  1
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Etapa 1
                  </span>
                  <h3 className="text-lg font-bold leading-tight">Setup inicial</h3>
                </div>
                <div className="ml-auto">
                  <span className="text-3xl font-bold text-foreground">R$ 3.000</span>
                  <span className="text-muted-foreground text-sm ml-1">único</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-5">
                Diagnóstico, estruturação e implementação da base da operação.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {setupItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Connector */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative z-10 flex items-center justify-center -my-4"
            >
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <ArrowDown className="h-4 w-4 text-primary-foreground" />
              </div>
            </motion.div>

            {/* Etapa 2 - Fee mensal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative p-8 rounded-b-2xl border-2 border-primary/30 bg-primary/[0.03]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  2
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Etapa 2
                  </span>
                  <h3 className="text-lg font-bold leading-tight">Acompanhamento mensal</h3>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-3xl font-bold text-foreground">R$ 2.300</span>
                  <span className="text-muted-foreground text-sm ml-1">/mês</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-5">
                Acompanhamento, otimização e evolução contínua da estrutura.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {monthlyItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-foreground/10 rounded-[14px] border p-0.5 inline-block">
            <Button asChild size="lg" className="rounded-xl px-8 text-base font-semibold">
              <Link href="#cta">Agendar diagnóstico</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground max-w-md mx-auto">
            O setup é pago uma única vez no início do projeto. Após a implementação, o fee mensal mantém a operação ativa e em evolução.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

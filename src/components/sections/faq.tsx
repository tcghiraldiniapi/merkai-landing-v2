'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const questions = [
  {
    id: 'item-1',
    title: 'Isso serve para minha empresa?',
    content:
      'Serve melhor para empresas de serviço que já possuem alguma demanda e precisam organizar atendimento, triagem, qualificação e processo comercial.',
  },
  {
    id: 'item-2',
    title: 'Vocês fazem só automação?',
    content:
      'Não. A automação entra como parte de um sistema comercial mais eficiente. O foco é integrar captação, processo e conversão.',
  },
  {
    id: 'item-3',
    title: 'Vocês fazem só tráfego?',
    content:
      'Também não. O tráfego é apenas uma parte da operação. O trabalho inclui estrutura comercial, CRM, automações, IA e acompanhamento.',
  },
  {
    id: 'item-4',
    title: 'E se meu time for pequeno?',
    content:
      'A solução pode funcionar bem para operações menores, desde que já exista demanda real e necessidade de organizar o processo.',
  },
  {
    id: 'item-5',
    title: 'Vocês atendem o lead no lugar da empresa?',
    content:
      'Não. A Merkai estrutura a operação, implementa os fluxos e melhora a triagem, mas não substitui o atendimento humano da empresa contratante.',
  },
  {
    id: 'item-6',
    title: 'O que não está incluso?',
    content:
      'Produção completa de criativos, desenvolvimento amplo fora do escopo do funil comercial, operação comercial feita no lugar do cliente e demandas abertas sem alinhamento prévio.',
  },
]

export function FaqSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Ainda com <span className="text-primary">dúvidas?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Respostas para as perguntas mais comuns sobre nosso serviço.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="bg-card/30 w-full -space-y-px rounded-lg"
            defaultValue="item-1"
          >
            {questions.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
              >
                <AccordionTrigger className="px-5 py-5 text-[15px] leading-6 hover:no-underline hover:text-primary transition-colors">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 px-5">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

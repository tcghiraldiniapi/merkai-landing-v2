"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";

const faqs = [
  {
    id: "faq-1",
    question: "Por que muitos agentes de IA não funcionam bem na prática?",
    answer:
      "Porque normalmente são genéricos, mal configurados e colocados para operar sem processo, sem contexto e sem gestão.",
  },
  {
    id: "faq-2",
    question: "O problema é a ferramenta?",
    answer:
      "Na maioria dos casos, não. O problema está na falta de estratégia, personalização e fluxo comercial bem definido.",
  },
  {
    id: "faq-3",
    question: "Uma ferramenta barata resolve sozinha?",
    answer:
      "Não. Pagar pouco por mês em uma plataforma não cria, por si só, um agente de alta qualidade. Sem estrutura, a entrega tende a ser limitada.",
  },
  {
    id: "faq-4",
    question: "O dono da empresa consegue orientar tudo sozinho?",
    answer:
      "Até pode tentar, mas isso costuma travar a operação. A implementação precisa de visão de marketing, automação, processo e vendas.",
  },
  {
    id: "faq-5",
    question: "Vocês criam agentes personalizados?",
    answer:
      "Sim. A proposta é construir agentes alinhados ao seu negócio, ao seu processo e à forma como sua empresa vende e atende.",
  },
  {
    id: "faq-6",
    question: "Vocês conectam com CRM e operação?",
    answer:
      "Sim. A IA precisa estar conectada ao fluxo comercial para fazer sentido no dia a dia.",
  },
  {
    id: "faq-7",
    question: "Automação com IA substitui o time?",
    answer:
      "Não. Ela assume tarefas repetitivas e operacionais para o time humano focar em decisão, negociação e fechamento.",
  },
  {
    id: "faq-8",
    question: "Como começa o projeto?",
    answer:
      "Começa com um alinhamento para entender sua operação, seus gargalos e o que precisa ser estruturado antes da implementação.",
  },
];

export function Faqs() {
  const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? "");

  return (
    <section className="relative w-full bg-[#101010]" id="faq">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={36}
        fill="rgba(255,255,255,0.04)"
        className="opacity-24"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-6 lg:px-12 py-8 md:py-14">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-8 rounded-full px-4 py-1.5" style={{ border: "1px solid rgba(255,115,28,0.2)", background: "rgba(255,115,28,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff731c]" />
            <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: "rgba(255,115,28,0.8)" }}>
              FAQ
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Perguntas comuns sobre{" "}
            <span className="text-white/35">agentes de IA para empresas.</span>
          </h2>

          <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
            Respostas diretas para quem está avaliando estrutura, personalização e implementação com IA.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#161616] overflow-hidden">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={index === 0 ? "" : "border-t border-white/[0.06]"}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-content`}
                  onClick={() => setOpenId(isOpen ? "" : item.id)}
                  className="flex w-full items-center justify-between gap-4 md:gap-6 px-5 py-4 md:py-5 text-left text-white transition-colors hover:bg-white/[0.02] md:px-8"
                >
                  <span className="text-base md:text-lg font-medium leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-white/40 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`${item.id}-content`}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 md:pb-5 text-sm md:text-base leading-relaxed text-neutral-400 md:px-8">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

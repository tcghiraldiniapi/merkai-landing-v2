"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";
import { SectionSideLights } from "@/components/ui/section-side-lights";

const faqs = [
  {
    id: "faq-1",
    question: "O que uma agência de IA faz na prática?",
    answer:
      "Uma agência de IA desenha, integra e implanta agentes de IA no processo da empresa. Isso inclui operação, regras, CRM, canais e automações.",
  },
  {
    id: "faq-2",
    question: "IA para empresas serve só para atendimento?",
    answer:
      "Não. IA para empresas pode atender, qualificar leads, fazer follow-up, atualizar CRM, organizar etapas operacionais e apoiar times internos.",
  },
  {
    id: "faq-3",
    question: "Vocês implementam IA SDR?",
    answer:
      "Sim. Implementamos IA SDR para responder, qualificar, fazer perguntas, aplicar critérios e entregar leads melhores para o time comercial.",
  },
  {
    id: "faq-4",
    question: "Preciso trocar meu CRM para usar agentes de IA?",
    answer:
      "Na maioria dos casos, não. O mais comum é integrar a IA ao CRM e às ferramentas que sua empresa já usa hoje.",
  },
  {
    id: "faq-5",
    question: "Em quanto tempo um agente de IA pode entrar no ar?",
    answer:
      "Depende do escopo e das integrações. Casos mais diretos podem avançar rápido; operações mais complexas exigem desenho de processo e implantação por etapas.",
  },
  {
    id: "faq-6",
    question: "Automação com IA substitui o time?",
    answer:
      "Não. Ela assume tarefas repetitivas e operacionais para o time humano focar em decisão, negociação e fechamento.",
  },
  {
    id: "faq-7",
    question: "Como começa o projeto?",
    answer:
      "Começa com um diagnóstico. Primeiro entendemos processo, canais, CRM e gargalos. Depois definimos onde a IA deve entrar e o que vale automatizar.",
  },
];

export function Faqs() {
  const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? "");

  return (
    <section className="relative w-full bg-black" id="faq">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={36}
        fill="rgba(255,255,255,0.04)"
        className="opacity-24"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 py-28">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-8 border border-white/10 rounded-full px-4 py-1.5 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Perguntas comuns sobre{" "}
            <span className="text-white/35">implementação de IA.</span>
          </h2>

          <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
            Respostas diretas para quem está avaliando agência de IA, IA SDR e automação.
          </p>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-[#0c0c0c] overflow-hidden">
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
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-white transition-colors hover:bg-white/[0.02] md:px-8"
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
                    <p className="px-6 pb-5 text-sm md:text-base leading-relaxed text-neutral-400 md:px-8">
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

"use client";

import { Clock, ClipboardList, EyeOff, Brain, UserMinus } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { BGPattern } from "@/components/ui/bg-pattern";
import { SectionSideLights } from "@/components/ui/section-side-lights";

const problemas = [
  {
    id: 1,
    title: "Atendimento lento",
    date: "",
    content: "Leads chegam, mas a resposta demora. Sem IA no primeiro contato, sua empresa perde timing, contexto e oportunidade.",
    category: "Velocidade",
    icon: Clock,
    relatedIds: [3],
    status: "in-progress" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Operação manual",
    date: "",
    content: "Seu time ainda copia informação, atualiza planilha e move lead na mão. Isso não escala e não deveria depender de pessoas.",
    category: "Eficiência",
    icon: ClipboardList,
    relatedIds: [3, 4],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Funil cego",
    date: "",
    content: "Ninguém sabe com precisão onde cada lead está. Sem CRM confiável e automação, a gestão fica no improviso.",
    category: "Visibilidade",
    icon: EyeOff,
    relatedIds: [1, 2],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Qualificação inconsistente",
    date: "",
    content: "Cada vendedor ou SDR qualifica de um jeito. Sem IA SDR e regras claras, o funil enche de lead errado.",
    category: "Processo",
    icon: Brain,
    relatedIds: [2, 5],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 5,
    title: "Dados espalhados",
    date: "",
    content: "Histórico fica no WhatsApp, em planilhas e na cabeça do time. Quando o contexto some, a empresa volta para o zero.",
    category: "Retenção",
    icon: UserMinus,
    relatedIds: [4],
    status: "in-progress" as const,
    energy: 70,
  },
];

export function Problema() {
  return (
    <section className="relative w-full bg-black overflow-hidden" id="problema">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={38}
        fill="rgba(255,255,255,0.04)"
        className="opacity-30"
      />
      <SectionSideLights />

      {/* Linha divisória sutil no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12
                      flex flex-col lg:flex-row items-center
                      gap-0 lg:gap-0
                      min-h-screen">

        {/* ── TEXTO ESQUERDO ── */}
        <div className="w-full lg:w-[44%] lg:flex-none flex flex-col justify-center
                        pt-24 pb-10 lg:py-24 lg:pr-12">

          {/* Label */}
          <div className="inline-flex items-center gap-2 w-fit mb-8
                          border border-red-900/50 rounded-full px-4 py-1.5 bg-red-950/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-red-400/80 tracking-widest uppercase">
              IA para Empresas
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            IA para empresas não falha na ferramenta.<br />
            <span className="text-white/40">Falha no processo.</span>
          </h2>

          <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8">
            Estes são os gargalos mais comuns antes da implementação.
          </p>

          <p className="mb-8 text-xs uppercase tracking-[0.22em] text-white/24">
            Toque em um dos ícones para ver o problema com mais detalhe.
          </p>

          {/* Lista resumida mobile (hidden em desktop) */}
          <ul className="lg:hidden space-y-3 mb-10">
            {problemas.map((p) => (
              <li key={p.id} className="flex items-start gap-3 text-sm text-neutral-400">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/60 flex-shrink-0" />
                {p.content.split(".")[0]}.
              </li>
            ))}
          </ul>

          {/* Conclusão */}
          <div className="border-l-2 border-white/10 pl-5">
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Se você reconheceu dois ou mais pontos, o problema não é a IA.{" "}
              <span className="text-white font-medium italic">
                É a operação sem estrutura para rodar com IA.
              </span>
            </p>
          </div>
        </div>

        {/* ── ORBITAL DIREITO ── */}
        <div className="w-full lg:flex-1 h-[500px] lg:h-screen">
          <RadialOrbitalTimeline timelineData={problemas} />
        </div>
      </div>

      {/* Gradiente de fade para baixo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

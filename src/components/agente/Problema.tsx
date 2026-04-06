"use client";

import { Bot, UserCog, Route, BadgeDollarSign, Workflow } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { BGPattern } from "@/components/ui/bg-pattern";

const problemas = [
  {
    id: 1,
    title: "Genérico demais",
    date: "",
    content: "Responde, mas não representa sua empresa. O lead percebe uma IA sem contexto, sem identidade e sem capacidade de conduzir a conversa do jeito certo.",
    category: "Personalização",
    icon: Bot,
    relatedIds: [3],
    status: "in-progress" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Dono virando operador",
    date: "",
    content: "A empresa contrata a ferramenta e sobra para o dono ensinar tudo, ajustar fluxo, revisar resposta e tentar fazer a operação funcionar sozinho.",
    category: "Gestão",
    icon: UserCog,
    relatedIds: [3, 4],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Sem fluxo de verdade",
    date: "",
    content: "A IA fala, mas não conduz o processo comercial. Sem fluxo claro, o lead não avança e a conversa vira só mais um atendimento sem direção.",
    category: "Fluxo",
    icon: Route,
    relatedIds: [1, 2],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Expectativa fora da realidade",
    date: "",
    content: "Não existe agente premium rodando sozinho por R$ 129 por mês. Sem estrutura e gestão, a entrega tende a ser fria, limitada e inconsistente.",
    category: "Expectativa",
    icon: BadgeDollarSign,
    relatedIds: [2, 5],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 5,
    title: "Sem especialista na gestão",
    date: "",
    content: "Sem alguém para conectar marketing, automação e processo comercial, a IA não sustenta resultado e fica solta dentro da operação.",
    category: "Estrutura",
    icon: Workflow,
    relatedIds: [4],
    status: "in-progress" as const,
    energy: 70,
  },
];

export function Problema() {
  return (
    <section className="relative w-full bg-[#101010] overflow-x-hidden" id="problema">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={38}
        fill="rgba(255,255,255,0.04)"
        className="opacity-30"
      />

      {/* Linha divisória sutil no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-12
                      flex flex-col lg:flex-row items-center
                      gap-0 lg:gap-0
                      min-h-0 lg:min-h-screen">

        {/* ── TEXTO ESQUERDO ── */}
        <div className="w-full lg:w-[44%] lg:flex-none flex flex-col justify-center
                        pt-12 pb-6 lg:py-12 lg:pr-12">

          {/* Label */}
          <div className="inline-flex items-center gap-2 w-fit mb-8
                          border border-red-900/50 rounded-full px-4 py-1.5 bg-red-950/30">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-medium text-red-400/80 tracking-[0.22em] uppercase">
              IA para Empresas
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Agentes de IA não funcionam<br />
            <span className="text-white/40">quando nascem genéricos.</span>
          </h2>

          <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8">
            Muitas empresas testam IA e chegam na mesma conclusão: o atendimento fica robotizado, sem identidade e sem resultado.
          </p>

          <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-8">
            Mas o erro quase nunca está na ideia de usar IA. Está na forma como ela foi colocada para operar.
          </p>

          <p className="mb-8 text-xs uppercase tracking-[0.22em] text-white/24">
            Estes são os problemas mais comuns antes de uma implementação que funciona.
          </p>

          {/* Lista resumida mobile (hidden em desktop) */}
          <ul className="lg:hidden space-y-3 mb-10">
            {problemas.map((p) => (
              <li key={p.id} className="flex items-start gap-3 text-sm text-neutral-400">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/60 flex-shrink-0" />
                {p.title}
              </li>
            ))}
          </ul>

          {/* Conclusão */}
          <div className="border-l-2 border-white/10 pl-5">
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Se hoje sua IA parece fria, limitada ou solta dentro da operação, o problema não é só a ferramenta.{" "}
              <span className="text-white font-medium italic">
                É a falta de estrutura para ela trabalhar bem.
              </span>
            </p>
          </div>
        </div>

        {/* ── ORBITAL DIREITO ── */}
        <div className="w-full lg:flex-1 h-[400px] sm:h-[450px] lg:h-screen">
          <RadialOrbitalTimeline timelineData={problemas} />
        </div>
      </div>

      {/* Gradiente de fade para baixo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
}

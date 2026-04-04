import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Zap, Target, Activity, Filter, Eye, TrendingUp } from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";
import { SectionSideLights } from "@/components/ui/section-side-lights";

const itens: BentoItem[] = [
  {
    title: "Resposta em segundos",
    description: "O agente de IA atende no primeiro contato e reduz o tempo entre interesse e resposta.",
    icon: <Zap className="w-4 h-4 text-green-400" />,
    status: "IA SDR",
    tags: ["WhatsApp", "Site", "Leads"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Menos trabalho manual",
    description: "A equipe para de mover informação na mão e volta a focar no que exige contexto humano.",
    icon: <Target className="w-4 h-4 text-blue-400" />,
    status: "Operação",
    tags: ["Automação"],
  },
  {
    title: "CRM atualizado",
    description: "O pipeline deixa de depender de memória, disciplina manual ou cobrança da gestão.",
    icon: <Activity className="w-4 h-4 text-blue-400" />,
    status: "CRM",
    tags: ["Funil", "Dados"],
  },
  {
    title: "Qualificação padronizada",
    description: "A IA SDR aplica os mesmos critérios em todos os contatos e reduz ruído no topo do funil.",
    icon: <Filter className="w-4 h-4 text-purple-400" />,
    status: "IA SDR",
    tags: ["Processo", "Qualificação"],
    colSpan: 2,
  },
  {
    title: "Mais visibilidade",
    description: "Sua empresa entende o que entrou, o que avançou e o que travou sem depender de repasse manual.",
    icon: <Eye className="w-4 h-4 text-white/50" />,
    status: "360°",
    tags: ["Relatórios", "Histórico"],
    colSpan: 2,
  },
  {
    title: "Escala com o mesmo time",
    description: "Mais volume e mais consistência sem crescer a operação na mesma proporção.",
    icon: <TrendingUp className="w-4 h-4 text-green-400" />,
    status: "Escala",
    tags: ["IA para empresas"],
  },
];

export function Beneficios() {
  return (
    <section className="relative w-full bg-black overflow-hidden" id="beneficios">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={36}
        fill="rgba(255,255,255,0.045)"
        className="opacity-40"
      />
      <SectionSideLights />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-28">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-8
                          border border-white/10 rounded-full px-4 py-1.5 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
              Benefícios
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            O que muda quando a IA{" "}
            <span className="text-white/35">entra na operação.</span>
          </h2>

          <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
            Menos improviso. Mais velocidade, controle e consistência.
          </p>
        </div>

        {/* Grid */}
        <BentoGrid items={itens} />

      </div>
    </section>
  );
}

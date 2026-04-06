import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Zap, Target, Activity, Filter, Eye, TrendingUp } from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";

const itens: BentoItem[] = [
  {
    title: "Atendimento com mais identidade",
    description: "O agente responde com mais contexto, clareza e alinhamento com a sua empresa.",
    icon: <Zap className="w-4 h-4 text-green-400" />,
    status: "Identidade",
    tags: ["Contexto", "Linguagem", "Marca"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Mais velocidade no primeiro contato",
    description: "O lead é atendido rápido sem ficar esperando alguém assumir manualmente.",
    icon: <Target className="w-4 h-4 text-blue-400" />,
    status: "Velocidade",
    tags: ["Leads", "Resposta"],
  },
  {
    title: "Menos peso operacional para o time",
    description: "A equipe para de gastar energia com tarefas repetitivas e ganha mais tempo para vender.",
    icon: <Activity className="w-4 h-4 text-blue-400" />,
    status: "Operacao",
    tags: ["Rotina", "Eficiência"],
  },
  {
    title: "Qualificação mais organizada",
    description: "A entrada dos leads fica mais limpa, com critérios consistentes e menos ruído no funil.",
    icon: <Filter className="w-4 h-4 text-purple-400" />,
    status: "Qualificação",
    tags: ["Processo", "Leads"],
    colSpan: 2,
  },
  {
    title: "CRM e operação conectados",
    description: "As informações deixam de ficar espalhadas e passam a seguir um fluxo mais confiável.",
    icon: <Eye className="w-4 h-4 text-white/50" />,
    status: "CRM",
    tags: ["Fluxo", "Dados"],
    colSpan: 2,
  },
  {
    title: "Mais suporte para vendas",
    description: "A IA deixa de ser uma promessa solta e passa a funcionar como apoio real para a equipe comercial.",
    icon: <TrendingUp className="w-4 h-4 text-green-400" />,
    status: "Comercial",
    tags: ["Suporte", "Performance"],
  },
];

export function Beneficios() {
  return (
    <section className="relative w-full bg-[#101010] overflow-x-hidden" id="beneficios">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={36}
        fill="rgba(255,255,255,0.045)"
        className="opacity-40"
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-6 lg:px-12 py-8 md:py-14">

        {/* Header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-8 rounded-full px-4 py-1.5" style={{ border: "1px solid rgba(255,115,28,0.2)", background: "rgba(255,115,28,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff731c]" />
            <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: "rgba(255,115,28,0.8)" }}>
              Benefícios
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            O que muda quando a IA
            {" "}
            <span className="text-white/35">entra do jeito certo na operação.</span>
          </h2>

          <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
            Menos atendimento frio. Mais apoio real para o comercial.
          </p>
        </div>

        {/* Grid */}
        <BentoGrid items={itens} />

      </div>
    </section>
  );
}

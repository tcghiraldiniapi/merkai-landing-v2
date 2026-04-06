"use client";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import { BGPattern } from "@/components/ui/bg-pattern";

const solucoes = [
  {
    numero: "01",
    label: "Estratégia",
    titulo: "Estratégia antes da automação",
    descricao:
      "Antes de ativar qualquer agente, entendemos sua operação, seu funil, sua oferta e a forma certa de conduzir o lead.",
    acento: "#22c55e",
    icone: "→ Processo · Oferta · Jornada comercial",
  },
  {
    numero: "02",
    label: "Personalização",
    titulo: "Agentes de IA personalizados",
    descricao:
      "Criamos agentes com linguagem, critérios e fluxos alinhados ao seu negócio. Nada de resposta genérica ou atendimento sem identidade.",
    acento: "#3b82f6",
    icone: "→ IA SDR · Atendimento · Qualificação",
  },
  {
    numero: "03",
    label: "Integração",
    titulo: "Automação conectada ao processo",
    descricao:
      "Conectamos WhatsApp, CRM, formulários e etapas comerciais para a IA apoiar o time de vendas de verdade.",
    acento: "#a855f7",
    icone: "→ CRM · Follow-up · Operação",
  },
  {
    numero: "04",
    label: "Gestão",
    titulo: "Gestão e melhoria contínua",
    descricao:
      "A IA não performa bem só porque foi publicada. Ajustamos a operação, acompanhamos o fluxo e refinamos o que precisa melhorar.",
    acento: "#ff731c",
    icone: "→ Ajustes · Gestão · Performance",
  },
];

export function Solucao() {
  return (
    <section className="relative w-full bg-[#101010]" id="solucao">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={38}
        fill="rgba(255,255,255,0.04)"
        className="opacity-28"
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 md:gap-16 lg:gap-24">

          {/* ── Esquerda: sticky em desktop, normal em mobile ── */}
          <div className="md:sticky md:top-0 md:h-svh flex flex-col justify-center pt-10 pb-0 md:pt-0 md:pb-0">

            <div className="inline-flex items-center gap-2 w-fit mb-8 rounded-full px-4 py-1.5" style={{ border: "1px solid rgba(255,115,28,0.2)", background: "rgba(255,115,28,0.06)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff731c]" />
              <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: "rgba(255,115,28,0.8)" }}>
                Agência de IA
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Como colocamos agentes de IA
              <br />
              <span className="text-white/35">para operar com contexto, identidade e processo.</span>
            </h2>

            <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-4 max-w-md">
              Não entregamos um agente solto. Estruturamos uma operação onde a IA sabe o que fazer, como responder e quando passar para o time.
            </p>

            <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-4 md:mb-10 max-w-sm">
              Processo, automação e CRM no mesmo fluxo.
            </p>

            {/* Miniaturas — só visível em desktop (em mobile os cards já estão logo abaixo) */}
            <div className="hidden md:flex flex-col gap-2">
              {solucoes.map((s) => (
                <div key={s.numero} className="flex items-center gap-3 group">
                  <span
                    className="w-1 h-1 rounded-full shrink-0 transition-all duration-300 group-hover:scale-150"
                    style={{ background: s.acento }}
                  />
                  <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors duration-300 font-mono">
                    {s.numero}
                  </span>
                  <span className="text-xs text-white/25 group-hover:text-white/50 transition-colors duration-300">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Direita: sticky cards em desktop, stack normal em mobile ── */}
          <ContainerScroll className="min-h-0 md:min-h-[218vh] space-y-4 md:space-y-5 pb-0 md:pt-12 md:pb-2">
            {solucoes.map((s, i) => (
              <CardSticky
                key={s.numero}
                index={i + 2}
                incrementY={18}
                incrementZ={10}
                className="rounded-2xl border border-white/[0.07] bg-[#161616] overflow-hidden"
              >
                {/* Linha de acento no topo */}
                <div
                  className="h-[2px] w-full"
                  style={{ background: `linear-gradient(90deg, ${s.acento}, transparent)` }}
                />

                <div className="p-5 md:p-10">
                  {/* Número grande + badge */}
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border"
                      style={{
                        color: s.acento,
                        borderColor: `${s.acento}35`,
                        background: `${s.acento}0d`,
                      }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="text-5xl font-bold font-mono leading-none"
                      style={{ color: `${s.acento}20` }}
                    >
                      {s.numero}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-4">
                    {s.titulo}
                  </h3>

                  {/* Descrição */}
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6 md:mb-8">
                    {s.descricao}
                  </p>

                  {/* Rodapé do card */}
                  <div className="pt-5 md:pt-6 border-t border-white/[0.05]">
                    <p className="text-xs font-mono tracking-wide" style={{ color: `${s.acento}70` }}>
                      {s.icone}
                    </p>
                  </div>
                </div>
              </CardSticky>
            ))}
          </ContainerScroll>

        </div>
      </div>
    </section>
  );
}

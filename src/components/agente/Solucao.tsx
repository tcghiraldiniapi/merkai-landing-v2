"use client";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";
import { BGPattern } from "@/components/ui/bg-pattern";
import { SectionSideLights } from "@/components/ui/section-side-lights";

const solucoes = [
  {
    numero: "01",
    label: "IA SDR",
    titulo: "IA SDR para triagem e qualificação",
    descricao:
      "Atende, qualifica e distribui leads no WhatsApp, no site e no formulário. O time entra na conversa certa.",
    acento: "#22c55e",
    icone: "→ IA SDR · WhatsApp · Site",
  },
  {
    numero: "02",
    label: "Automação com IA",
    titulo: "Agentes de IA conectados ao seu CRM",
    descricao:
      "CRM, WhatsApp, formulários e e-mail conectados para follow-up, atualização de pipeline e tarefas operacionais.",
    acento: "#3b82f6",
    icone: "→ CRM · WhatsApp · Follow-up",
  },
  {
    numero: "03",
    label: "Implantação",
    titulo: "Implantação de IA no processo certo",
    descricao:
      "Mapeamos a operação, definimos regras e implantamos a IA onde ela melhora resposta, controle e conversão.",
    acento: "#a855f7",
    icone: "→ Processo · CRM · Agentes de IA",
  },
];

export function Solucao() {
  return (
    <section className="relative w-full bg-black" id="solucao">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={38}
        fill="rgba(255,255,255,0.04)"
        className="opacity-28"
      />
      <SectionSideLights reverse />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 md:gap-16 lg:gap-24">

          {/* ── Esquerda: sticky ── */}
          <div className="md:sticky md:top-0 md:h-svh flex flex-col justify-center pt-24 pb-12 md:py-0">

            <div className="inline-flex items-center gap-2 w-fit mb-8
                            border border-white/10 rounded-full px-4 py-1.5 bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
                Agência de IA
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Como colocamos agentes de IA<br />
              <span className="text-white/35">para operar de verdade.</span>
            </h2>

            <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              Processo, CRM e automação no mesmo fluxo.
            </p>

            {/* Miniaturas dos cards */}
            <div className="flex flex-col gap-2">
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

          {/* ── Direita: cards empilhando ── */}
          <ContainerScroll className="min-h-[220vh] space-y-5 py-24">
            {solucoes.map((s, i) => (
              <CardSticky
                key={s.numero}
                index={i + 2}
                incrementY={18}
                incrementZ={10}
                className="rounded-2xl border border-white/[0.07] bg-[#0c0c0c] overflow-hidden"
              >
                {/* Linha de acento no topo */}
                <div
                  className="h-[2px] w-full"
                  style={{ background: `linear-gradient(90deg, ${s.acento}, transparent)` }}
                />

                <div className="p-8 md:p-10">
                  {/* Número grande + badge */}
                  <div className="flex items-start justify-between mb-8">
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
                  <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                    {s.descricao}
                  </p>

                  {/* Rodapé do card */}
                  <div className="pt-6 border-t border-white/[0.05]">
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

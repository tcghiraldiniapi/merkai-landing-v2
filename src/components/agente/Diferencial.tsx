"use client";
import { GradientWaveText } from "@/components/ui/gradient-wave-text";
import { LampContainer } from "@/components/ui/lamp";
import { BGPattern } from "@/components/ui/bg-pattern";

const WAVE_COLORS = [
  "#ffffff", "#e2e8f0", "#22c55e", "#3b82f6", "#a855f7", "#e2e8f0", "#ffffff",
];

export function Diferencial() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={40}
        fill="rgba(255,255,255,0.04)"
        className="opacity-35"
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-[26rem] opacity-70">
        <LampContainer className="h-full" />
      </div>

      {/* ── Abertura: máximo impacto ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-0">

        {/* Badge */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2
                          border border-white/10 rounded-full px-4 py-1.5 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="text-xs font-medium text-white/40 tracking-widest uppercase">
              Implementação
            </span>
          </div>
        </div>

        {/* Statement de abertura — grande, direto */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Qualquer empresa consegue contratar IA.
          {" "}
          <span className="text-white/35">Poucas conseguem implementar direito.</span>
        </h2>

        {/* Tensão — a virada */}
        <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light max-w-2xl">
          O problema não é o acesso à ferramenta.{" "}
          <span className="text-neutral-200 font-normal">
            É fazer agentes de IA funcionarem dentro da operação real.
          </span>
        </p>

      </div>

      {/* ── Divisor ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <div className="w-full h-px bg-white/[0.06]" />
      </div>

      {/* ── Argumento: two-column em desktop ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">

          {/* Coluna esquerda: o que fazemos */}
          <div>
            <p className="text-xs font-mono text-white/25 tracking-widest uppercase mb-5">
              Como trabalhamos
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Mapeamos onde sua empresa perde lead, tempo e contexto.
              {" "}
              <span className="text-neutral-200">Só depois definimos quais agentes de IA entram, em qual etapa e com qual objetivo.</span>
            </p>
          </div>

          {/* Coluna direita: o que entregamos */}
          <div>
            <p className="text-xs font-mono text-white/25 tracking-widest uppercase mb-5">
              O que entregamos
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Não entregamos só um chatbot.{" "}
              <span className="text-neutral-200">
                Entregamos uma operação com IA conectada ao CRM, às regras do processo e à rotina do time.
              </span>{" "}
              Com automação aplicada onde ela gera velocidade e controle.
            </p>
          </div>

        </div>
      </div>

      {/* ── Punchline ── */}
      <div className="relative z-10 w-full border-t border-white/[0.06]">
        <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-20">
          <GradientWaveText
            align="left"
            inView={true}
            once={true}
            repeat={false}
            speed={0.55}
            delay={0.4}
            bandCount={6}
            bandGap={5}
            customColors={WAVE_COLORS}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            {"Agentes de IA executam.\nProcesso decide\nonde eles geram resultado."}
          </GradientWaveText>
        </div>
      </div>

    </section>
  );
}

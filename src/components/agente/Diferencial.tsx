"use client";
import { GradientWaveText } from "@/components/ui/gradient-wave-text";
import { BGPattern } from "@/components/ui/bg-pattern";

const WAVE_COLORS = [
  "#ffffff", "#f5f5f5", "#ff731c", "#ff9a4a", "#ffb87a", "#f5f5f5", "#ffffff",
];

export function Diferencial() {
  return (
    <section className="relative w-full bg-[#101010] overflow-hidden">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={40}
        fill="rgba(255,255,255,0.04)"
        className="opacity-35"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-6 lg:px-12 pt-12 md:pt-20">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style={{ border: "1px solid rgba(255,115,28,0.2)", background: "rgba(255,115,28,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff731c]" />
            <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: "rgba(255,115,28,0.8)" }}>
              Implementação
            </span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5 md:mb-6">
          Qualquer empresa pode contratar uma ferramenta.
          {" "}
          <span className="text-white/35">Poucas conseguem construir uma operação com IA que realmente performa.</span>
        </h2>

        <p className="text-base md:text-2xl text-neutral-400 leading-relaxed font-light max-w-3xl mb-4">
          O mercado vende a ideia de que basta ligar um agente e esperar resultado.
        </p>

        <p className="text-base md:text-2xl text-neutral-400 leading-relaxed font-light max-w-3xl">
          Na prática, não funciona assim.
        </p>
      </div>

      {/* ── Divisor ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-6 lg:px-12 py-6 md:py-16">
        <div className="w-full h-px bg-white/[0.06]" />
      </div>

      {/* ── Argumento: two-column em desktop ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-6 lg:px-12 pb-6 md:pb-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">

          {/* Coluna esquerda: o que fazemos */}
          <div>
            <p className="text-xs font-mono text-white/25 tracking-widest uppercase mb-5">
              Como trabalhamos
            </p>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Mapeamos o processo comercial, identificamos gargalos e desenhamos o fluxo ideal antes da implementação.
              {" "}
              <span className="text-neutral-200">Depois disso, configuramos os agentes, a automação e as integrações para a IA apoiar vendas, atendimento e operação do jeito certo.</span>
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
                Entregamos uma estrutura para a IA atuar com lógica, contexto e função clara dentro da sua empresa.
              </span>{" "}
              Isso inclui processo, automação, direção comercial e gestão contínua.
            </p>
          </div>

        </div>
      </div>

      {/* ── Punchline ── */}
      <div className="relative z-10 w-full border-t border-white/[0.06]">
        <div className="w-full max-w-4xl mx-auto px-5 md:px-6 lg:px-12 py-6 md:py-10">
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
            className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            {"Agentes de IA executam melhor\nquando existe processo,\ndireção e gestão por trás."}
          </GradientWaveText>
        </div>
      </div>

    </section>
  );
}

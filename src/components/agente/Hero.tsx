'use client'

import { SplineScene } from "@/components/ui/splite"
import { BGPattern } from "@/components/ui/bg-pattern"
import { openDiagnosticForm } from "@/lib/open-diagnostic-form"

export function Hero() {
  return (
    <section className="relative min-h-[auto] md:min-h-screen w-full bg-[#101010] overflow-x-hidden flex items-center">

      {/* Glow de acento esquerdo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%",
          left: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,115,28,0.09) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Glow secundário canto superior direito */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,115,28,0.04) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <BGPattern
        variant="grid"
        mask="fade-bottom"
        size={44}
        fill="rgba(255,255,255,0.04)"
        className="opacity-40"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center gap-0 md:gap-4 pt-20 pb-0 md:py-24 md:pt-32">

        {/* ── Texto ── */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left items-center md:items-start pt-4 md:pt-6 md:max-w-[52%]">

          {/* Badge label */}
          <div className="inline-flex items-center gap-2.5 mb-6 md:mb-8 rounded-full px-4 py-1.5" style={{
            border: "1px solid rgba(255,115,28,0.3)",
            background: "rgba(255,115,28,0.07)",
          }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff731c] animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#ff9a4a" }}>
              Agência de IA
            </span>
          </div>

          {/* Linha decorativa sutil */}
          <div className="hidden md:block w-12 h-px mb-6 rounded-full" style={{
            background: "linear-gradient(90deg, #ff731c, transparent)"
          }} />

          <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.08] mb-5 md:mb-6 tracking-[-0.02em]">
            Agentes de IA<br />
            <span style={{
              background: "linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.55) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              para empresas
            </span>
          </h1>

          {/* Tags inline */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6 md:mb-8">
            {["Vendas", "Atendimento", "Operação"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                  background: "rgba(255,255,255,0.04)",
                  letterSpacing: "0.06em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-neutral-400 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md" style={{ letterSpacing: "0.01em" }}>
            Implementamos agentes com fluxo, contexto e CRM por trás — para acelerar vendas, reduzir trabalho manual e dar suporte real ao time.
          </p>

          {/* CTA */}
          <button
            onClick={openDiagnosticForm}
            className="inline-flex items-center gap-2.5 font-semibold px-7 py-3.5 md:px-8 md:py-4 rounded-full w-fit transition-all active:scale-95 text-sm md:text-base tracking-[0.04em]"
            style={{
              background: "linear-gradient(135deg, #c45008 0%, #ff731c 100%)",
              color: "#ffffff",
              boxShadow: "0 0 40px rgba(255,115,28,0.4), 0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            Entrar em contato
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Prova social sutil */}
          <p className="mt-4 text-[11px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.22)" }}>
            Diagnóstico sem custo · Resposta em até 24h
          </p>
        </div>

        {/* ── Robô 3D ── */}
        {/* overflow-visible para não cortar a animação da mão */}
        <div className="relative w-[260px] h-[260px] mx-auto -mt-2 -mb-6 md:flex-shrink-0 md:w-[55%] md:h-[820px] md:mx-0 md:-mr-24 lg:-mr-36 xl:-mr-48 overflow-visible">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

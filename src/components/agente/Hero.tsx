'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { BGPattern } from "@/components/ui/bg-pattern"
import { openDiagnosticForm } from "@/lib/open-diagnostic-form"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center">
      <BGPattern
        variant="grid"
        mask="fade-bottom"
        size={44}
        fill="rgba(255,255,255,0.05)"
        className="opacity-50"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 py-24 pt-32">
        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-neutral-400 text-lg md:text-xl italic mb-6">
            Agência de IA
          </p>

          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-6">
            Agentes de IA para empresas
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl mb-4">
            para vendas, atendimento e operação.
          </p>

          <p className="text-neutral-500 text-base md:text-lg mb-10">
            Implementamos IA SDR, atendimento automatizado, follow-up e CRM conectado ao processo comercial.
          </p>

          <button
            onClick={openDiagnosticForm}
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full w-fit hover:bg-neutral-200 transition-colors"
          >
            Agendar Diagnóstico
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Robô 3D */}
        <div className="flex-1 h-[500px] md:h-[650px] w-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

import { BGPattern } from "@/components/ui/bg-pattern";
import { BrandName } from "@/components/agente/BrandName";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#101010] overflow-x-hidden">
      <BGPattern
        variant="grid"
        mask="fade-top"
        size={36}
        fill="rgba(255,255,255,0.045)"
        className="opacity-35"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-12 py-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="space-y-3">
            <p className="text-2xl font-bold tracking-tight text-white">
              <BrandName />
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              IA para empresas.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/30">
                Contato
              </p>
              <div className="space-y-2 text-sm text-neutral-400">
                <a
                  href="mailto:thiago@merkai.com.br"
                  className="block transition-colors hover:text-white"
                >
                  thiago@merkai.com.br
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/30">
                Institucional
              </p>
              <div className="space-y-2 text-sm text-neutral-400">
                <p>CNPJ: 53.363.840/0001-85</p>
                <p>
                  © {new Date().getFullYear()} <BrandName />. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>IA SDR, automação e operação com IA.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="transition-colors hover:text-white">
              Política de Privacidade
            </a>
            <span className="text-white/15">|</span>
            <a href="#" className="transition-colors hover:text-white">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

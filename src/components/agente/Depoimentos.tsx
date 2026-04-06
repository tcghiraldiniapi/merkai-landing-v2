"use client";
import { motion } from "framer-motion";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-agente";
import { BGPattern } from "@/components/ui/bg-pattern";

const depoimentos: Testimonial[] = [
  {
    text: "A implementação do agente de IA tirou o gargalo do primeiro atendimento e organizou melhor a entrada dos leads.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rafael Mendes",
    role: "Diretor Comercial · Construtora Mendes",
  },
  {
    text: "A empresa parou de usar IA como teste isolado. Virou parte do processo comercial e fez sentido para o time.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Juliana Costa",
    role: "Gerente de Vendas · Costa Digital",
  },
  {
    text: "A IA SDR padronizou a qualificação. O funil ficou mais limpo e o time comercial passou a receber lead melhor.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Marcelo Ferreira",
    role: "Head de Operações · TechSales BR",
  },
  {
    text: "Hoje temos atendimento mais rápido e menos perda de contexto entre WhatsApp, CRM e operação.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Camila Torres",
    role: "Fundadora · Studio CT",
  },
  {
    text: "Antes a operação dependia demais das pessoas. Com a automação certa, ficou mais previsível e mais fácil de gerir.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Bruno Almeida",
    role: "CEO · Grupo Almeida",
  },
  {
    text: "A IA para empresas faz sentido quando entra no processo certo. Foi isso que mudou aqui.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Fernanda Lima",
    role: "Diretora de Growth · Fintechlab",
  },
];

const col1 = depoimentos.slice(0, 2);
const col2 = depoimentos.slice(2, 4);
const col3 = depoimentos.slice(4, 6);

export function Depoimentos() {
  return (
    <section className="relative w-full bg-[#101010]">
      <BGPattern
        variant="grid"
        mask="fade-edges"
        size={40}
        fill="rgba(255,255,255,0.04)"
        className="opacity-26"
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-6 lg:px-12 py-8 md:py-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-xl mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-8 rounded-full px-4 py-1.5" style={{ border: "1px solid rgba(255,115,28,0.2)", background: "rgba(255,115,28,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff731c]" />
            <span className="text-xs font-medium tracking-[0.22em] uppercase" style={{ color: "rgba(255,115,28,0.8)" }}>
              Depoimentos
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Empresas que já colocaram{" "}
            <span className="text-white/35">a IA para rodar.</span>
          </h2>

          <p className="text-neutral-500 text-base leading-relaxed">
            Relatos de quem tirou a IA do discurso e colocou na operação.
          </p>
        </motion.div>

        {/* Colunas com scroll infinito */}
        <div className="flex justify-center md:justify-start gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[480px] md:max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={col1} duration={18} className="w-full max-w-[calc(100vw-2.5rem)] sm:max-w-sm md:max-w-xs md:w-auto" />
          <TestimonialsColumn testimonials={col2} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={col3} duration={16} className="hidden lg:block" />
        </div>

      </div>
    </section>
  );
}

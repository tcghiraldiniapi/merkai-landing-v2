import { Hero } from "@/components/agente/Hero"
import { Problema } from "@/components/agente/Problema"
import { Solucao } from "@/components/agente/Solucao"
import { Diferencial } from "@/components/agente/Diferencial"
import { Beneficios } from "@/components/agente/Beneficios"
import { Depoimentos } from "@/components/agente/Depoimentos"
import { CTA } from "@/components/agente/CTA"
import { Faqs } from "@/components/agente/Faqs"
import { Footer } from "@/components/agente/Footer"
import { Navbar } from "@/components/agente/Navbar"

export default function AgentesDeIAParaEmpresas() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problema />
      <Solucao />
      <Diferencial />
      <Beneficios />
      <Depoimentos />
      <CTA />
      <Faqs />
      <Footer />
    </main>
  )
}

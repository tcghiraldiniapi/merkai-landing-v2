import { HeroSection } from '@/components/sections/hero'
import { ProblemaSection } from '@/components/sections/problema'
import { BeneficiosSection } from '@/components/sections/beneficios'
import { ProblemasDesejosSection } from '@/components/sections/problemas-desejos'
import { ExplicacaoServicoSection } from '@/components/sections/explicacao-servico'
import { ComoFuncionaSection } from '@/components/sections/como-funciona'
import { DiferenciaisSection } from '@/components/sections/diferenciais'
import { ProvaSocialSection } from '@/components/sections/prova-social'
import { AntesDepoisSection } from '@/components/sections/antes-depois'
import { OfertaSection } from '@/components/sections/oferta'
import { FaqSection } from '@/components/sections/faq'
import { CtaFinalSection } from '@/components/sections/cta-final'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemaSection />
      <BeneficiosSection />
      <ProblemasDesejosSection />
      <ExplicacaoServicoSection />
      <ComoFuncionaSection />
      <DiferenciaisSection />
      <ProvaSocialSection />
      <AntesDepoisSection />
      <OfertaSection />
      <FaqSection />
      <CtaFinalSection />
      <Footer />
    </>
  )
}

'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowRightIcon, Menu, X, Zap, Pointer, Layout, Layers, Wrench, Target, Building2, BarChart3, PlusIcon, Shield, Users, Clock, AlertTriangle, UserX, Gauge, Eye, TrendingUp, GitBranch, User, Banknote } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { GlowCard } from '@/components/ui/spotlight-card'
import { Feature108 } from '@/components/ui/feature108'
import { FeatureCard } from '@/components/ui/grid-feature-cards'
import { TestimonialsColumn, type Testimonial } from '@/components/ui/testimonials-columns'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { BGPattern } from '@/components/ui/bg-pattern'
import { Card, CardContent } from '@/components/ui/card'
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from '@/components/ui/image-comparison'
import { DottedSurface } from '@/components/ui/dotted-surface'
import { EvervaultVisual } from '@/components/ui/evervault-card'
import { DiagnosticoForm } from '@/components/ui/diagnostico-form'
import { DiagnosticoScene } from '@/components/ui/diagnostico-scene'
import { ArquiteturaScene } from '@/components/ui/arquitetura-scene'
import { ImplementacaoScene } from '@/components/ui/implementacao-scene'

/* ============================================================
   CONTEXTO DO FORMULÁRIO
   ============================================================ */

const FormContext = React.createContext<{
  openForm: () => void
}>({ openForm: () => {} })

function useFormDialog() {
  return React.useContext(FormContext)
}

/* ============================================================
   HERO — HeroSection1 + InfiniteGrid
   ============================================================ */

const transitionVariants = {
  item: {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 12 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { type: 'spring' as const, bounce: 0.3, duration: 1.5 },
    },
  },
}

const menuItems = [
  { name: 'Problema', href: '#problema' },
  { name: 'Solução', href: '#solucao' },
  { name: 'Resultados', href: '#resultados' },
  { name: 'FAQ', href: '#faq' },
]

function HeroHeader() {
  const { openForm } = useFormDialog()
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav data-state={menuState && 'active'} className="fixed z-20 w-full px-2 group">
        <div className={cn(
          'mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12',
          isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5'
        )}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/v2" aria-label="home" className="flex items-center space-x-2">
                <span className="text-2xl font-bold tracking-tight">
                  <span className="text-foreground">merk</span>
                  <span className="text-primary">ai</span>
                </span>
              </Link>
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-base">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm" className={cn(isScrolled && 'lg:hidden')}>
                  <Link href="#faq"><span>Dúvidas</span></Link>
                </Button>
                <Button size="sm" className={cn(isScrolled && 'lg:hidden')} onClick={openForm}>
                  <span>Agendar diagnóstico</span>
                </Button>
                <Button size="sm" className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')} onClick={openForm}>
                  <span>Agendar diagnóstico</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

function HeroSection() {
  const { openForm } = useFormDialog()
  return (
    <>
      <HeroHeader />
      <DottedSurface>
        <section>
          <div className="relative pt-24 md:pt-36 pb-20 md:pb-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#solucao"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">Sistema de Conversão Inteligente</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                        <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                      </div>
                    </div>
                  </Link>

                  <h1 className="mt-8 max-w-4xl mx-auto text-balance text-4xl sm:text-5xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                    Organize sua operação comercial e pare de perder leads
                  </h1>
                  <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    Sua empresa já gera demanda, mas o processo comercial ainda é lento, manual e confuso. A Merkai estrutura sua captação, triagem e conversão com tráfego, automação e IA.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row pointer-events-auto"
                >
                  <div key={1} className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Button size="lg" className="rounded-xl px-5 text-base" onClick={openForm}>
                      <span className="text-nowrap">Agendar diagnóstico</span>
                    </Button>
                  </div>
                  <Button key={2} asChild size="lg" variant="ghost" className="h-10.5 rounded-xl px-5">
                    <Link href="#solucao"><span className="text-nowrap">Como funciona</span></Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </DottedSurface>
    </>
  )
}

/* ============================================================
   PROBLEMA — Features8 Cards
   ============================================================ */

const problemas = [
  { icon: Clock, title: 'Resposta lenta', description: 'Leads chegam e ninguém responde no tempo certo. A oportunidade esfria antes do primeiro contato.' },
  { icon: AlertTriangle, title: 'Atendimento sem padrão', description: 'Cada pessoa responde de um jeito. Não existe triagem clara nem critério de qualificação.' },
  { icon: UserX, title: 'Improviso constante', description: 'O dono precisa apagar incêndio o tempo todo. O processo depende de quem está disponível, não de uma lógica definida.' },
  { icon: GitBranch, title: 'Falta de integração', description: 'Marketing e comercial não falam a mesma língua. Leads se perdem entre ferramentas desconectadas.' },
]

function ProblemaSection() {
  return (
    <section id="problema" className="py-16 md:py-32">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">O problema não é só gerar lead</h2>
          <p className="text-muted-foreground mt-4">O que trava o resultado é o que acontece depois que o lead chega.</p>
        </div>
        <GlowCard customSize glowColor="red" className="!grid-rows-none !p-4 !gap-3 !shadow-none rounded-xl">
          <div className="relative z-10 grid grid-cols-6 gap-3">
          <Card className="relative col-span-full overflow-hidden lg:col-span-3">
            <CardContent className="grid pt-6 sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Clock className="m-auto size-5" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium transition dark:text-white">Resposta lenta</h2>
                  <p className="text-foreground">Leads chegam e ninguém responde no tempo certo. A oportunidade esfria antes do primeiro contato.</p>
                </div>
              </div>
              <div className="relative mt-6 flex items-center justify-center sm:mt-0 sm:ml-6">
                <div className="text-center space-y-2">
                  <span className="block text-3xl sm:text-5xl font-semibold text-destructive/80">78%</span>
                  <p className="text-sm text-muted-foreground">dos leads compram de quem responde primeiro</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="relative col-span-full overflow-hidden lg:col-span-3">
            <CardContent className="grid pt-6 sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <AlertTriangle className="m-auto size-5" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium transition dark:text-white">Atendimento sem padrão</h2>
                  <p className="text-foreground">Cada pessoa responde de um jeito. Não existe triagem clara nem critério de qualificação.</p>
                </div>
              </div>
              <div className="relative mt-6 flex items-center justify-center sm:mt-0 sm:ml-6">
                <div className="text-center space-y-2">
                  <span className="block text-3xl sm:text-5xl font-semibold text-destructive/80">0</span>
                  <p className="text-sm text-muted-foreground">padrão de qualificação definido</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-3">
            <CardContent className="grid pt-6 sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <UserX className="m-auto size-5" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium transition dark:text-white">Improviso constante</h2>
                  <p className="text-foreground">O dono precisa apagar incêndio o tempo todo. O processo depende de quem está disponível.</p>
                </div>
              </div>
              <div className="relative mt-6 flex items-center justify-center sm:mt-0 sm:ml-6">
                <div className="before:bg-(--color-border) relative before:absolute before:inset-0 before:mx-auto before:w-px">
                  <div className="relative flex flex-col justify-center space-y-4 py-4">
                    <span className="block h-fit rounded border px-3 py-1.5 text-xs shadow-sm">Lead entrou</span>
                    <span className="block h-fit rounded border px-3 py-1.5 text-xs shadow-sm text-destructive">Sem resposta</span>
                    <span className="block h-fit rounded border px-3 py-1.5 text-xs shadow-sm text-muted-foreground">Lead perdido</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-3">
            <CardContent className="grid pt-6 sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <GitBranch className="m-auto size-5" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium transition dark:text-white">Falta de integração</h2>
                  <p className="text-foreground">Marketing e comercial não falam a mesma língua. Leads se perdem entre ferramentas desconectadas.</p>
                </div>
              </div>
              <div className="relative mt-6 flex items-center justify-center sm:mt-0 sm:ml-6">
                <div className="text-center space-y-2">
                  <span className="block text-3xl sm:text-5xl font-semibold text-destructive/80">63%</span>
                  <p className="text-sm text-muted-foreground">das empresas não integram marketing e vendas</p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </GlowCard>
      </div>
    </section>
  )
}

/* ============================================================
   BENEFÍCIOS — Features8 Cards
   ============================================================ */

function BeneficiosSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">O que você ganha com isso</h2>
          <p className="text-muted-foreground mt-4">Uma operação comercial que funciona com mais processo e menos improviso.</p>
        </div>
        <GlowCard customSize glowColor="blue" className="!grid-rows-none !p-4 !gap-3 !shadow-none rounded-xl">
          <div className="relative z-10 grid grid-cols-6 gap-3">
          <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
            <CardContent className="relative m-auto size-fit pt-6">
              <div className="relative flex h-24 w-56 items-center">
                <svg className="text-muted absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor" />
                </svg>
                <span className="mx-auto block w-fit text-3xl sm:text-5xl font-semibold">+rápido</span>
              </div>
              <h2 className="mt-6 text-center text-2xl sm:text-3xl font-semibold">Velocidade</h2>
              <p className="text-foreground text-center mt-2">Resposta mais rápida, menos leads perdidos no caminho.</p>
            </CardContent>
          </Card>
          <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
            <CardContent className="pt-6">
              <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                <Eye className="m-auto size-12 text-muted-foreground" strokeWidth={1} />
              </div>
              <div className="relative z-10 mt-6 space-y-2 text-center">
                <h2 className="text-lg font-medium transition dark:text-white">Clareza</h2>
                <p className="text-foreground">Processo comercial visível e organizado. Cada lead tem um caminho definido.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
            <CardContent className="pt-6">
              <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                <TrendingUp className="m-auto size-12 text-muted-foreground" strokeWidth={1} />
              </div>
              <div className="relative z-10 mt-6 space-y-2 text-center">
                <h2 className="text-lg font-medium transition dark:text-white">Escala</h2>
                <p className="text-foreground">Operação que cresce sem virar caos. Mais processo, menos improviso.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="relative col-span-full overflow-hidden lg:col-span-3">
            <CardContent className="grid pt-6 sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <BarChart3 className="m-auto size-5" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium transition dark:text-white">Dados reais</h2>
                  <p className="text-foreground">Métricas e KPIs para tomar decisões com base em números, não em achismo.</p>
                </div>
              </div>
              <div className="relative mt-6 flex items-center justify-center sm:mt-0 sm:ml-6">
                <div className="text-center space-y-3">
                  <div className="flex items-center gap-2 text-sm"><Gauge className="size-4 text-primary" /> <span>Taxa de conversão</span></div>
                  <div className="flex items-center gap-2 text-sm"><Gauge className="size-4 text-primary" /> <span>Tempo de resposta</span></div>
                  <div className="flex items-center gap-2 text-sm"><Gauge className="size-4 text-primary" /> <span>Custo por lead</span></div>
                  <div className="flex items-center gap-2 text-sm"><Gauge className="size-4 text-primary" /> <span>ROI por canal</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="relative col-span-full overflow-hidden lg:col-span-3">
            <CardContent className="grid pt-6 sm:grid-cols-2">
              <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Shield className="m-auto size-5" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-medium transition dark:text-white">Menos desperdício</h2>
                  <p className="text-foreground">Menos lead desperdiçado, menos retrabalho e menos improviso na passagem para vendas.</p>
                </div>
              </div>
              <div className="relative mt-6 flex items-center justify-center sm:mt-0 sm:ml-6">
                <div className="text-center space-y-2">
                  <span className="block text-3xl sm:text-5xl font-semibold text-primary/80">2x</span>
                  <p className="text-sm text-muted-foreground">mais aproveitamento da demanda que você já gera</p>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </GlowCard>
      </div>
    </section>
  )
}

/* ============================================================
   COMO FUNCIONA — Feature108 (tabs)
   ============================================================ */

function ComoFuncionaSection() {
  const { openForm } = useFormDialog()
  const tabs = [
    {
      value: 'tab-1',
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: 'Diagnóstico',
      content: {
        badge: 'Etapa 1',
        title: 'Mapeamos sua operação atual.',
        description: 'Analisamos seus canais, fluxo de atendimento, funil e os principais gargalos. Antes de propor qualquer coisa, entendemos o que está acontecendo de verdade.',
        buttonText: 'Saiba mais',
        imageSrc: '',
        imageAlt: 'Etapa de diagnóstico',
        imageNode: <DiagnosticoScene />,
      },
    },
    {
      value: 'tab-2',
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: 'Arquitetura',
      content: {
        badge: 'Etapa 2',
        title: 'Desenhamos a solução sob medida.',
        description: 'Definimos a jornada do lead, as regras de qualificação, os fluxos, as integrações e a lógica que vai fazer a operação funcionar.',
        buttonText: 'Ver processo',
        imageSrc: '',
        imageAlt: 'Etapa de arquitetura',
        imageNode: <ArquiteturaScene />,
      },
    },
    {
      value: 'tab-3',
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: 'Implementação',
      content: {
        badge: 'Etapa 3',
        title: 'Configuramos, testamos e acompanhamos.',
        description: 'CRM, automações, campanhas, fluxos e agente de IA. Tudo configurado, testado, refinado e monitorado de forma contínua.',
        buttonText: 'Começar agora',
        imageSrc: '',
        imageAlt: 'Etapa de implementação',
        imageNode: <ImplementacaoScene />,
      },
    },
  ]

  return (
    <div id="solucao" className="relative">
      <BGPattern variant="dots" mask="fade-edges" size={20} fill="#1a1a1a" />
      <Feature108
        badge="Processo"
        heading="Como funciona"
        description="Do diagnóstico à otimização contínua, com clareza em cada etapa."
        tabs={tabs}
        onButtonClick={openForm}
      />
    </div>
  )
}

/* ============================================================
   DIFERENCIAIS — GridFeatureCards
   ============================================================ */

const differentials = [
  { title: 'Visão integrada', icon: Layers, description: 'Tráfego, processo comercial, automação e IA conectados em um sistema só.' },
  { title: 'Implementação prática', icon: Wrench, description: 'Não é só diagnóstico. A gente desenha, implementa, monitora e ajusta.' },
  { title: 'Foco em conversão', icon: Target, description: 'O objetivo é converter melhor, não só gerar mais leads.' },
  { title: 'Rotina real', icon: Building2, description: 'A estrutura respeita o dia a dia da sua operação.' },
  { title: 'Acompanhamento contínuo', icon: BarChart3, description: 'Leitura de métricas, KPIs e refinamento constante.' },
  { title: 'IA aplicada', icon: Zap, description: 'Triagem e qualificação inteligente com IA dentro do processo.' },
]

function DiferenciaisSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto w-full max-w-5xl space-y-8 px-4">
        <AnimatedContainer shouldReduceMotion={shouldReduceMotion} className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold">
            Por que a Merkai é diferente
          </h2>
          <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
            Muita gente vende tráfego, automação ou IA. O problema é que quase sempre cada peça fica solta.
          </p>
        </AnimatedContainer>

        <GlowCard customSize glowColor="purple" className="!grid-rows-none !p-0 !gap-0 !shadow-none rounded-xl">
          <AnimatedContainer shouldReduceMotion={shouldReduceMotion} delay={0.4} className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3">
            {differentials.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </AnimatedContainer>
        </GlowCard>
      </div>
    </section>
  )
}

function AnimatedContainer({ className, delay = 0.1, children, shouldReduceMotion }: {
  delay?: number;
  className?: string;
  children: React.ReactNode;
  shouldReduceMotion: boolean | null;
}) {
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   PROVA SOCIAL — Feature108 + TestimonialsColumns
   ============================================================ */

const testimonials: Testimonial[] = [
  { text: 'Saímos de R$ 9 mil pra R$ 125 mil em tráfego em menos de um ano. O ROI se pagou várias vezes. Sem a estrutura que montaram, não teria sido possível.', name: 'José Carlos Polozi', role: 'CEO — Polozi in Company', imageSrc: '/assets/fotoPerfil-CEOPolozi.png' },
  { text: 'Conheço o Thiago de longa data. Ele nos ajudou na Taket atendendo projetos de multinacionais como Syngenta, Gerdau e Tranenge.', name: 'Beto Cristian', role: 'Sócio-fundador — Taket', imageSrc: '/assets/BetoCristianSocioFundadorTaket.png' },
  { text: 'A IA cortou investimento em tráfego e aumentou a receita. Parece mágica, mas é processo bem feito.', name: 'Gibinha', role: 'Proprietária — Pousada da Gibinha', imageSrc: '/assets/fotoPerfilGibinhaDaPousada.png' },
  { text: 'Batemos meta de vendas por vários meses consecutivos em parceria com a Merkai.', name: 'Paola Cardoso', role: 'Líder Comercial', imageSrc: '/assets/PaolaCardosoLiderComercial.png' },
  { text: 'Conseguimos reduzir a equipe de 8 pra 5 pessoas sem perder qualidade. O agente de IA assumiu a triagem e funcionou de verdade.', name: 'Juan Murilo', role: 'Founder — Posgrado Med', imageSrc: '/assets/FotoPerfilJuanMuriloFounderPosgrado.png' },
  { text: 'O projeto de treinamento de IA na plataforma Medtask foi um sucesso.', name: 'Vinicius Takatsu', role: 'CEO — Medtask', imageSrc: '/assets/ViniciusTakatsuCEOmedtask.png' },
  { text: 'Antes a gente perdia lead sem nem saber. Depois que estruturaram o CRM, ficou claro onde estava o gargalo.', name: 'José Carlos Polozi', role: 'CEO — Polozi in Company', imageSrc: '/assets/fotoPerfil-CEOPolozi.png' },
  { text: 'O comercial agora funciona com processo. Cada lead tem um caminho claro, nada se perde no meio.', name: 'Gibinha', role: 'Proprietária — Pousada da Gibinha', imageSrc: '/assets/fotoPerfilGibinhaDaPousada.png' },
  { text: 'Marketing e vendas pararam de trabalhar separados. Isso sozinho já mudou nosso resultado.', name: 'Juan Murilo', role: 'Founder — Posgrado Med', imageSrc: '/assets/FotoPerfilJuanMuriloFounderPosgrado.png' },
]

const firstCol = testimonials.slice(0, 3)
const secondCol = testimonials.slice(3, 6)
const thirdCol = testimonials.slice(6, 9)

function ProvaSocialSection() {
  const { openForm } = useFormDialog()
  const proofTabs = [
    {
      value: 'case-1',
      icon: <Zap className="size-4 shrink-0" />,
      label: 'Escala 10x',
      content: {
        badge: 'Polozi in Company',
        title: 'Operação escalada em 10x em 10 meses.',
        description: 'Investimento em tráfego saiu de R$ 9.000/mês para R$ 125.000/mês com ROI bruto de 3,4. Otimização completa do funil com triagem, CRM e IA.',
        buttonText: 'Agendar diagnóstico',
        imageSrc: '',
        imageAlt: 'Case Polozi',
        imageNode: (
          <EvervaultVisual>
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-end gap-2 h-28">
                {[18, 28, 38, 52, 68, 100].map((h, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-7 rounded-t-sm transition-all",
                      i === 5 ? "bg-primary" : "bg-muted-foreground/25"
                    )}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="text-center space-y-1">
                <p className="text-xs text-muted-foreground">Investimento mensal em tráfego</p>
                <p className="text-base font-semibold">
                  <span className="text-muted-foreground">R$ 9k</span>
                  <span className="text-primary mx-2">→</span>
                  <span className="text-primary font-bold">R$ 125k</span>
                </p>
              </div>
            </div>
          </EvervaultVisual>
        ),
      },
    },
    {
      value: 'case-2',
      icon: <Pointer className="size-4 shrink-0" />,
      label: '+24% de Receita',
      content: {
        badge: 'Pousada da Gibinha',
        title: '+24% de receita com 30% menos investimento.',
        description: 'Funil de aquisição com IA reduziu o investimento mensal em tráfego e aumentou a receita na comparação com o mesmo período do ano anterior.',
        buttonText: 'Agendar diagnóstico',
        imageSrc: '',
        imageAlt: 'Case Gibinha',
        imageNode: (
          <EvervaultVisual>
            <div className="flex flex-col items-center gap-5">
              <div className="relative flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Banknote className="size-12 text-primary" strokeWidth={1} />
                </div>
              </div>
              <div className="text-center space-y-1">
                <p className="text-2xl sm:text-4xl font-bold text-primary">+24% Receita</p>
                <p className="text-xs text-muted-foreground">30% menos investimento</p>
              </div>
            </div>
          </EvervaultVisual>
        ),
      },
    },
    {
      value: 'case-3',
      icon: <Layout className="size-4 shrink-0" />,
      label: 'Equipe 8→5',
      content: {
        badge: 'Posgrado Med',
        title: 'IA de triagem reduziu a equipe de 8 para 5.',
        description: 'Implementação de agente de IA para triagem que manteve a qualidade do atendimento com 3 pessoas a menos na operação.',
        buttonText: 'Agendar diagnóstico',
        imageSrc: '',
        imageAlt: 'Case Posgrado Med',
        imageNode: (
          <EvervaultVisual>
            <div className="flex flex-col items-center gap-5">
              <div className="grid grid-cols-4 gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-11 h-11 rounded-full border flex items-center justify-center",
                      i < 5
                        ? "border-primary/30 bg-primary/10"
                        : "border-muted-foreground/20 bg-muted-foreground/5 opacity-35"
                    )}
                  >
                    <User
                      className={cn("size-5", i < 5 ? "text-primary" : "text-muted-foreground")}
                      strokeWidth={1.5}
                    />
                  </div>
                ))}
              </div>
              <div className="text-center space-y-1">
                <p className="text-sm">
                  <span className="text-primary font-semibold">5 ativos</span>
                  <span className="text-muted-foreground"> · </span>
                  <span className="text-muted-foreground/50 line-through">3 eliminados</span>
                </p>
                <p className="text-xs text-muted-foreground">via triagem por IA</p>
              </div>
            </div>
          </EvervaultVisual>
        ),
      },
    },
  ]

  return (
    <section id="resultados" className="relative">
      <BGPattern variant="grid" mask="fade-edges" size={32} fill="#1a1a1a" />

      <Feature108
        badge="Resultados"
        heading="Provas de resultado"
        description="Números reais de operações comerciais estruturadas pela Merkai."
        tabs={proofTabs}
        onButtonClick={openForm}
      />

      <div className="mx-auto max-w-7xl px-4 pb-24">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-center">O que nossos clientes dizem</h3>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstCol} duration={15} />
          <TestimonialsColumn testimonials={secondCol} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdCol} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   ANTES E DEPOIS — ImageComparison
   ============================================================ */

function AntesDepoisSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">O que muda na prática</h2>
          <p className="text-muted-foreground mt-4">Deslize para ver a diferença entre uma operação solta e uma operação estruturada.</p>
        </div>
        <ImageComparison className="aspect-[16/9] w-full rounded-lg border" enableHover>
          <ImageComparisonImage
            src="/assets/imagemNovaAntes.png"
            alt="Antes — operação desorganizada"
            position="left"
          />
          <ImageComparisonImage
            src="/assets/imagemNovaDepois.png"
            alt="Depois — operação estruturada pela Merkai"
            position="right"
          />
          <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-xs">
            <div className="absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </ImageComparisonSlider>
        </ImageComparison>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Antes</h3>
            <p className="text-sm text-muted-foreground">Leads dispersos, atendimento inconsistente, trabalho manual, falta de integração e baixa previsibilidade.</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Depois</h3>
            <p className="text-sm text-muted-foreground">Operação organizada, lead filtrado, resposta rápida, processo claro e mais eficiência na conversão.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   FAQ — Faqs1
   ============================================================ */

const questions = [
  { id: 'item-1', title: 'Isso serve para minha empresa?', content: 'Serve melhor para empresas de serviço que já possuem alguma demanda e precisam organizar atendimento, triagem, qualificação e processo comercial.' },
  { id: 'item-2', title: 'Vocês fazem só automação?', content: 'Não. A automação entra como parte de um sistema comercial mais eficiente. O foco é integrar captação, processo e conversão.' },
  { id: 'item-3', title: 'Vocês fazem só tráfego?', content: 'Também não. O tráfego é apenas uma parte da operação. O trabalho inclui estrutura comercial, CRM, automações, IA e acompanhamento.' },
  { id: 'item-4', title: 'E se meu time for pequeno?', content: 'A solução pode funcionar bem para operações menores, desde que já exista demanda real e necessidade de organizar o processo.' },
  { id: 'item-5', title: 'Vocês atendem o lead no lugar da empresa?', content: 'Não. A Merkai estrutura a operação, implementa os fluxos e melhora a triagem, mas não substitui o atendimento humano da empresa contratante.' },
  { id: 'item-6', title: 'O que não está incluso?', content: 'Produção completa de criativos, desenvolvimento fora do escopo do funil comercial, operação comercial feita no lugar do cliente e demandas abertas sem alinhamento prévio.' },
]

function FaqSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-3xl space-y-7 px-4 relative z-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold md:text-4xl">Ainda com dúvidas?</h2>
          <p className="text-muted-foreground max-w-2xl">
            As perguntas mais comuns sobre o serviço. Se não encontrar sua resposta, é só chamar.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg"
          defaultValue="item-1"
        >
          {questions.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
            >
              <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 px-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

/* ============================================================
   CTA FINAL — CTA3
   ============================================================ */

function OfertaSection() {
  const { openForm } = useFormDialog()
  return (
    <div id="oferta" className="w-full flex items-center justify-center px-4 py-24 md:py-32 relative z-10">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
        <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
        <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6" strokeWidth={1} />
        <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
        <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6" strokeWidth={1} />

        <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
        <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />
        <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

        <div className="space-y-1">
          <h2 className="text-center font-bold text-2xl">
            Pare de perder demanda por falta de processo
          </h2>
          <p className="text-center text-muted-foreground">
            Se sua empresa já gera leads mas perde vendas por desorganização, a estrutura certa muda isso.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" asChild>
            <Link href="#faq">Tire suas dúvidas</Link>
          </Button>
          <Button onClick={openForm}>
            Agendar diagnóstico <ArrowRightIcon className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}


/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-6xl px-6 text-center space-y-2">
        <p className="text-sm font-medium text-foreground">Merkai</p>
        <p className="text-sm text-muted-foreground">
          Estruturação de operações comerciais com tráfego, automação e IA.
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Merkai. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

/* ============================================================
   PAGE
   ============================================================ */

export default function V2Page() {
  const [formOpen, setFormOpen] = React.useState(false)
  const openForm = React.useCallback(() => setFormOpen(true), [])

  return (
    <FormContext.Provider value={{ openForm }}>
      <HeroSection />
      <div className="relative bg-background">
        <BGPattern variant="dots" mask="none" size={24} fill="#1a1a1a" />
        <ProblemaSection />
        <BeneficiosSection />
        <ComoFuncionaSection />
      </div>
      <DiferenciaisSection />
      <ProvaSocialSection />
      <FaqSection />
      <OfertaSection />
      <Footer />
      <DiagnosticoForm open={formOpen} onOpenChange={setFormOpen} />
    </FormContext.Provider>
  )
}

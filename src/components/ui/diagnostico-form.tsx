"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const steps = [
  { id: "pessoal", title: "Informações Pessoais" },
  { id: "empresa", title: "Empresa" },
]

interface FormData {
  nome: string
  email: string
  telefone: string
  cargo: string
  nomeEmpresa: string
  tamanhoEquipe: string
}

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

export function DiagnosticoForm({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    nomeEmpresa: "",
    tamanhoEquipe: "",
  })

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isStepValid = () => {
    if (currentStep === 0) {
      return formData.nome.trim() !== "" && formData.email.trim() !== "" && formData.telefone.trim() !== ""
    }
    if (currentStep === 1) {
      return formData.nomeEmpresa.trim() !== "" && formData.tamanhoEquipe !== ""
    }
    return true
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      await fetch("https://webhook.altimatics.com/webhook/merkai-formulario-landingpage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      setIsSuccess(true)
    } catch {
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        setCurrentStep(0)
        setIsSuccess(false)
        setFormData({ nome: "", email: "", telefone: "", cargo: "", nomeEmpresa: "", tamanhoEquipe: "" })
      }, 300)
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dados enviados com sucesso!</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Entraremos em contato em breve para agendar seu diagnóstico.
            </p>
            <Button onClick={() => handleClose(false)}>Fechar</Button>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Agendar diagnóstico</DialogTitle>
              <DialogDescription>
                Preencha os dados abaixo para iniciar sua avaliação gratuita.
              </DialogDescription>
            </DialogHeader>

            {/* Progress */}
            <div className="flex gap-2 mb-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1">
                  <div
                    className={cn(
                      "h-1.5 rounded-full transition-colors duration-300",
                      index <= currentStep ? "bg-primary" : "bg-muted"
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs mt-1 block",
                      index === currentStep ? "text-primary font-medium" : "text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Steps */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
                className="space-y-4"
              >
                {currentStep === 0 && (
                  <>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="nome">Nome completo *</Label>
                      <Input
                        id="nome"
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={(e) => updateFormData("nome", e.target.value)}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => updateFormData("telefone", e.target.value)}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input
                        id="cargo"
                        placeholder="Ex: Diretor Comercial"
                        value={formData.cargo}
                        onChange={(e) => updateFormData("cargo", e.target.value)}
                      />
                    </motion.div>
                  </>
                )}

                {currentStep === 1 && (
                  <>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="nomeEmpresa">Nome da empresa *</Label>
                      <Input
                        id="nomeEmpresa"
                        placeholder="Sua empresa"
                        value={formData.nomeEmpresa}
                        onChange={(e) => updateFormData("nomeEmpresa", e.target.value)}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="tamanhoEquipe">Tamanho da equipe comercial *</Label>
                      <Select
                        value={formData.tamanhoEquipe}
                        onValueChange={(value) => updateFormData("tamanhoEquipe", value)}
                      >
                        <SelectTrigger id="tamanhoEquipe">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1 a 2 pessoas</SelectItem>
                          <SelectItem value="3-5">3 a 5 pessoas</SelectItem>
                          <SelectItem value="6-10">6 a 10 pessoas</SelectItem>
                          <SelectItem value="11-20">11 a 20 pessoas</SelectItem>
                          <SelectItem value="20+">Mais de 20 pessoas</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between pt-2">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                size="sm"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Voltar
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button onClick={nextStep} disabled={!isStepValid()} size="sm">
                  Próximo
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!isStepValid() || isSubmitting} size="sm">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar
                      <Check className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

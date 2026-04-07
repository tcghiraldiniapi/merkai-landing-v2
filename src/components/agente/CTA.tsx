"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlusIcon,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Loader2,
} from "lucide-react";
import { OPEN_DIAGNOSTIC_FORM_EVENT } from "@/lib/open-diagnostic-form";
import { BGPattern } from "@/components/ui/bg-pattern";

/* ─────────────────────────────────────────────
   Estilos reutilizáveis
───────────────────────────────────────────── */
const inputClass =
  "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm " +
  "placeholder:text-white/20 focus:outline-none focus:border-white/25 focus:bg-white/[0.06] transition-all";

const labelClass =
  "block text-[11px] text-white/35 uppercase tracking-widest mb-2 font-medium";

/* ─────────────────────────────────────────────
   Tipos
───────────────────────────────────────────── */
interface Step1 { nome: string; email: string; telefone: string }
interface Step2 { cargo: string; empresa: string; tamanho: string }
type Status = "idle" | "submitting" | "success" | "error";

/* ─────────────────────────────────────────────
   Modal com formulário 2 etapas
───────────────────────────────────────────── */
function FormModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [d1, setD1] = useState<Step1>({ nome: "", email: "", telefone: "" });
  const [d2, setD2] = useState<Step2>({ cargo: "", empresa: "", tamanho: "" });
  const [status, setStatus] = useState<Status>("idle");

  const step1Valid = d1.nome.trim() && d1.email.trim() && d1.telefone.trim();
  const step2Valid = d2.cargo.trim() && d2.empresa.trim() && d2.tamanho;

  const handleSubmit = async () => {
    setStatus("submitting");
    try {
      const response = await fetch(
        "https://webhook.altimatics.com/webhook/merkai-formulario-landingpage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: d1.nome,
            email: d1.email,
            telefone: d1.telefone,
            cargo: d2.cargo,
            nomeEmpresa: d2.empresa,
            tamanhoEquipe: d2.tamanho,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 pt-[env(safe-area-inset-top,1rem)] overflow-y-auto bg-black/85 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md bg-[#161616] border border-white/[0.07] rounded-2xl overflow-hidden my-auto md:my-0 shrink-0"
      >
        {/* Cabeçalho */}
        <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-white/[0.05]">
          <div>
            {status !== "success" && (
              <p className="text-[10px] text-white/25 font-mono tracking-widest uppercase mb-1">
                Etapa {step + 1} de 2
              </p>
            )}
            <h3 className="text-white font-semibold text-base leading-tight">
              {status === "success"
                ? "Solicitação enviada!"
                : step === 0
                ? "Seu contato"
                : "Sobre a empresa"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/20 hover:text-white/50 transition-colors cursor-pointer mt-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Barra de progresso */}
        {status !== "success" && (
          <div className="h-[2px] bg-white/[0.04]">
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, #c45008, #ff731c)" }}
              animate={{ width: step === 0 ? "50%" : "100%" }}
              transition={{ duration: 0.35 }}
            />
          </div>
        )}

        {/* Conteúdo */}
        <div className="px-7 py-6">
          <AnimatePresence mode="wait">
            {/* ── Sucesso ── */}
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(255,115,28,0.1)", border: "1px solid rgba(255,115,28,0.25)" }}>
                  <Check className="w-5 h-5" style={{ color: "#ff731c" }} />
                </div>
                <p className="text-white font-medium mb-2">Recebemos sua solicitação!</p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Em até 24h entraremos em contato para marcar seu diagnóstico.
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/30">
                  Confirmação enviada com sucesso
                </p>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-white font-medium mb-2">Não foi possível enviar agora.</p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Tente novamente em instantes ou fale com a equipe pelo WhatsApp.
                </p>
              </motion.div>
            )}

            {/* ── Etapa 1 ── */}
            {status !== "success" && status !== "error" && step === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <label className={labelClass}>Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={d1.nome}
                    onChange={(e) => setD1((p) => ({ ...p, nome: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com.br"
                    value={d1.email}
                    onChange={(e) => setD1((p) => ({ ...p, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>WhatsApp / Telefone</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={d1.telefone}
                    onChange={(e) => setD1((p) => ({ ...p, telefone: e.target.value }))}
                    className={inputClass}
                  />
                </div>
              </motion.div>
            )}

            {/* ── Etapa 2 ── */}
            {status !== "success" && status !== "error" && step === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <label className={labelClass}>Cargo</label>
                  <input
                    type="text"
                    placeholder="Seu cargo na empresa"
                    value={d2.cargo}
                    onChange={(e) => setD2((p) => ({ ...p, cargo: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Nome da empresa</label>
                  <input
                    type="text"
                    placeholder="Razão social ou nome fantasia"
                    value={d2.empresa}
                    onChange={(e) => setD2((p) => ({ ...p, empresa: e.target.value }))}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Tamanho da equipe comercial</label>
                  
                  <div className="relative">
                    <select
                      value={d2.tamanho}
                      onChange={(e) => setD2((p) => ({ ...p, tamanho: e.target.value }))}
                      style={{ colorScheme: "dark" }}
                      className={`${inputClass} appearance-none pr-10 cursor-pointer ${
                        !d2.tamanho ? "text-white/20" : "text-white"
                      }`}
                    >
                      <option value="" disabled>Selecione o tamanho</option>
                      <option value="1-5">1 a 5 pessoas</option>
                      <option value="6-20">6 a 20 pessoas</option>
                      <option value="21-50">21 a 50 pessoas</option>
                      <option value="51-200">51 a 200 pessoas</option>
                      <option value="200+">Mais de 200 pessoas</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Rodapé dos botões */}
        {status === "success" || status === "error" ? (
          <div className="px-7 pb-7">
            <button
              onClick={onClose}
              className="w-full py-2.5 border border-white/[0.07] text-white/40 text-sm rounded-xl hover:border-white/15 hover:text-white/60 transition-all cursor-pointer"
            >
              Fechar
            </button>
          </div>
        ) : (
          <div className="px-7 pb-7 flex items-center justify-between">
            {step === 0 ? (
              <div />
            ) : (
              <button
                onClick={() => setStep(0)}
                className="flex items-center gap-1 text-sm text-white/25 hover:text-white/50 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Voltar
              </button>
            )}

            <button
              onClick={step === 0 ? () => setStep(1) : handleSubmit}
              disabled={
                (step === 0 && !step1Valid) ||
                (step === 1 && (!step2Valid || status === "submitting"))
              }
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer tracking-[0.03em]"
              style={{
                background: "linear-gradient(135deg, #c45008 0%, #ff731c 100%)",
                boxShadow: "0 0 20px rgba(255,115,28,0.3)",
              }}
            >
              {status === "submitting" ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>
              ) : step === 0 ? (
                <>Próximo <ChevronRight className="w-4 h-4" /></>
              ) : (
                <>Agendar mapeamento <Check className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Seção CTA principal
───────────────────────────────────────────── */
export function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener(OPEN_DIAGNOSTIC_FORM_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_DIAGNOSTIC_FORM_EVENT, handleOpen);
  }, []);

  return (
    <>
      <section className="relative w-full bg-[#101010]" id="agendar">
        <BGPattern
          variant="grid"
          mask="fade-x"
          size={34}
          fill="rgba(255,255,255,0.04)"
          className="opacity-30"
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-12 py-8 md:py-14">
          <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 md:gap-y-8 border-y border-white/[0.07] bg-[radial-gradient(35%_80%_at_25%_0%,rgba(255,115,28,0.06),transparent)] px-5 py-8 md:px-10 md:py-12">

            {/* Cantos + */}
            <PlusIcon className="absolute -top-3 -left-3 text-white/20 size-6" strokeWidth={1} />
            <PlusIcon className="absolute -top-3 -right-3 text-white/20 size-6" strokeWidth={1} />
            <PlusIcon className="absolute -bottom-3 -left-3 text-white/20 size-6" strokeWidth={1} />
            <PlusIcon className="absolute -bottom-3 -right-3 text-white/20 size-6" strokeWidth={1} />

            {/* Extensões laterais */}
            <div className="absolute -inset-y-6 left-0 w-px border-l border-white/[0.07]" />
            <div className="absolute -inset-y-6 right-0 w-px border-r border-white/[0.07]" />

            {/* Linha central tracejada */}
            <div className="absolute top-0 left-1/2 h-full border-l border-dashed border-white/[0.05] -z-10" />

            {/* Copy */}
            <div className="relative z-10 space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/32">
                Diagnóstico de IA
              </p>
              <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                Se você quer uma automação que acelere vendas, reduza trabalho operacional e dê suporte real ao time,
                <br />
                <span className="text-white/35">o próximo passo é alinhar a estrutura certa.</span>
              </h2>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
                Em uma conversa, mostramos onde sua empresa pode usar agentes de IA com mais segurança, mais lógica e mais impacto no processo.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] px-6 py-3 text-sm font-medium text-white/78 transition-colors hover:border-white/25 hover:text-white"
              >
                Ver FAQ
              </a>
              <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all active:scale-95 cursor-pointer tracking-[0.03em]"
                style={{
                  background: "linear-gradient(135deg, #c45008 0%, #ff731c 100%)",
                  boxShadow: "0 0 28px rgba(255,115,28,0.4)",
                }}
              >
                Entrar em contato para alinhamento
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && <FormModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

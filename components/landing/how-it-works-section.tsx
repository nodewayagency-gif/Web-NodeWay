"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  HeartHandshake,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WHATSAPP_URL } from "@/lib/site-config";

const steps = [
  {
    number: "01",
    icon: WhatsAppIcon,
    title: "Diagnóstico",
    duration: "15 a 30 min",
    description: "Você conta como a empresa funciona. A gente mapeia onde trava.",
    deliverables: [
      "Quais processos entram no sistema",
      "Quem vai usar e o que cada um pode ver",
      "O que resolver primeiro",
    ],
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Escopo e proposta",
    duration: "Até 24h",
    description: "Escopo, prazo e valor fechados antes de começar.",
    deliverables: [
      "Telas e funções do projeto",
      "Cronograma de entregas",
      "Investimento fixo, sem surpresa",
    ],
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Regras do seu negócio",
    duration: "Construção",
    description: "Cálculos, etapas e documentos no formato da sua empresa.",
    deliverables: [
      "Fórmulas de orçamento, preço e comissão",
      "Etapas do pedido e aprovações",
      "Modelo do PDF de orçamento e pedido",
    ],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Validação semanal",
    duration: "Toda semana",
    description: "Você testa as telas reais e pede ajustes no caminho.",
    deliverables: [
      "Campos, telas e relatórios ajustados",
      "Integrações com Bling, Omie ou Tiny",
      "Links de teste no celular e no computador",
    ],
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Implantação e evolução",
    duration: "Contínuo",
    description: "Colocamos no ar, treinamos a equipe e seguimos evoluindo.",
    deliverables: [
      "Publicação no domínio da sua empresa",
      "Treinamento prático da equipe",
      "Suporte e melhorias pelo WhatsApp",
    ],
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = steps[activeStep];
  const ActiveIcon = current.icon;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="theme-alt relative py-16 sm:py-20 lg:py-28 overflow-x-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
          <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-primary mb-3">
            <span className="w-6 sm:w-8 h-px brand-gradient-bg" />
            Etapas de customização
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Seu sistema, <span className="brand-gradient">do seu jeito</span>.
            <br />
            <span className="text-muted-foreground">Em 5 etapas, com você junto.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Lista de Passos */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {steps.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
                    isSelected
                      ? "border-primary/50 bg-card/80 shadow-lg shadow-black/20"
                      : "border-border/60 bg-card/20 opacity-70 hover:opacity-100 hover:bg-card/40"
                  }`}
                >
                  <div className="flex items-start gap-3.5 sm:gap-5">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl font-display text-base sm:text-lg shrink-0 transition-all ${
                        isSelected
                          ? "brand-gradient-bg text-white"
                          : "bg-background border border-border text-muted-foreground"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-display text-foreground">
                          {step.title}
                        </h3>
                        <span className="text-[11px] sm:text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Card Visual da Etapa Selecionada */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 w-full">
            <div className="rounded-2xl sm:rounded-3xl border border-primary/30 bg-card/70 backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 sm:mb-6 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl brand-gradient-bg flex items-center justify-center text-white shrink-0">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-primary uppercase tracking-wider block">
                      Etapa {current.number} de 0{steps.length}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      {current.duration}
                    </span>
                  </div>
                </div>
              </div>

              <h4 className="text-lg sm:text-xl lg:text-2xl font-display text-foreground mb-3 sm:mb-4">
                {current.title}
              </h4>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                  O que você define nesta etapa:
                </span>
                {current.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl sm:rounded-2xl bg-background/60 border border-border/50 p-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-foreground leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary w-full h-12 sm:h-13 rounded-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Começar pelo diagnóstico
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  Clock,
  HeartHandshake,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WHATSAPP_URL } from "@/lib/site-config";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Conversa sem compromisso (e sem “tecniquês”)",
    duration: "15 a 30 min",
    description:
      "Você nos chama no WhatsApp ou agenda um bate-papo rápido. Você não precisa entender de programação: basta contar como sua empresa funciona hoje e onde está perdendo tempo ou vendas.",
    deliverables: [
      "Ouvimos a realidade da sua operação sem empurrar pacotes prontos",
      "Identificamos os gargalos que mais tomam tempo da sua equipe",
      "Tiramos todas as suas dúvidas em linguagem clara e direta",
    ],
    promise: "Atendimento humano direto com nossos especialistas.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Diagnóstico gratuito e proposta clara em 24h",
    duration: "Em até 24h",
    description:
      "Nada de orçamentos misteriosos ou cobranças surpresa. Montamos um plano visual explicando exatamente o que será construído, quanto tempo leva e o investimento fechado.",
    deliverables: [
      "Escopo detalhado em português claro (o que entra no projeto)",
      "Cronograma com datas de entrega definidas desde o início",
      "Valor fixo e transparente — sem letras miúdas",
    ],
    promise: "Diagnóstico 100% gratuito e sem obrigação de fechar.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Construção com você acompanhando tudo de perto",
    duration: "Validações semanais",
    description:
      "Você não fica no escuro esperando meses para ver o resultado. Toda semana mostramos as telas reais funcionando para você testar, opinar e garantir que ficou do jeito da sua empresa.",
    deliverables: [
      "Links de teste para você clicar e validar no celular ou computador",
      "Ajustes feitos junto com você durante o caminho",
      "Testes rigorosos para tudo funcionar rápido e sem travar",
    ],
    promise: "Transparência total em cada etapa da construção.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Colocamos no ar, treinamos seu time e seguimos juntos",
    duration: "Parceria contínua",
    description:
      "Não entregamos o sistema e sumimos. Configuramos tudo, ensinamos sua equipe a usar sem medo e continuamos ao seu lado no suporte para evoluir conforme sua empresa cresce.",
    deliverables: [
      "Publicação completa e segura no domínio da sua empresa",
      "Orientação prática para você e sua equipe usarem com tranquilidade",
      "Suporte próximo pelo WhatsApp para dúvidas e melhorias",
    ],
    promise: "Sua operação segura e amparada após a entrega.",
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
      className="relative py-16 sm:py-20 lg:py-28 overflow-x-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-20">
          <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-primary mb-3">
            <span className="w-6 sm:w-8 h-px brand-gradient-bg" />
            Passo a passo transparente
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Como <span className="brand-gradient">trabalhamos</span> juntos.
            <br />
            <span className="text-muted-foreground">Simples, humano e sem surpresas.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Do primeiro “oi” no WhatsApp até a sua equipe usando o sistema no dia a dia: veja como
            tornamos essa jornada leve para você.
          </p>
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
                        <span className="text-[10px] sm:text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">
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
                      Etapa {current.number} de 04
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      O que acontece na prática
                    </span>
                  </div>
                </div>
              </div>

              <h4 className="text-lg sm:text-xl lg:text-2xl font-display text-foreground mb-3 sm:mb-4">
                {current.title}
              </h4>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                  O que você ganha nesta fase:
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

              <div className="rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 p-3.5 mb-5 sm:mb-6 flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <p className="text-xs sm:text-sm text-foreground font-medium">
                  {current.promise}
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary w-full h-12 sm:h-13 rounded-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Dar o primeiro passo no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

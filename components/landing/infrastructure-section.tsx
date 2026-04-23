"use client";

import { useEffect, useState, useRef } from "react";

const process = [
  { step: "Briefing", detail: "Entendimento completo do negócio", status: "Reunião inicial" },
  { step: "Proposta", detail: "Escopo, prazo e investimento claros", status: "Sem surpresas" },
  { step: "Desenvolvimento", detail: "Construção com entregas parciais", status: "Acompanhamento" },
  { step: "Testes & QA", detail: "Validação funcional e de performance", status: "Zero bugs na entrega" },
  { step: "Deploy", detail: "Publicação e configuração final", status: "Ambiente de produção" },
  { step: "Evolução", detail: "Suporte e melhorias contínuas", status: "Parceria permanente" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % process.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px brand-gradient-bg" />
              Ciclo de entrega
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8 text-foreground">
              Do briefing
              <br />
              <span className="brand-gradient">ao resultado.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Um processo estruturado que garante transparência, qualidade e entregas no prazo. Sem achismos, sem retrabalho.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display brand-gradient mb-2">6</div>
                <div className="text-sm text-muted-foreground">Etapas definidas</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display brand-gradient mb-2">0</div>
                <div className="text-sm text-muted-foreground">Fórmulas prontas</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display brand-gradient mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Personalizado</div>
              </div>
            </div>
          </div>

          {/* Right: Steps list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-card">
                <span className="text-sm font-mono text-muted-foreground">Processo Nodeway</span>
                <span className="flex items-center gap-2 text-xs font-mono text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Em execução
                </span>
              </div>

              <div>
                {process.map((item, index) => (
                  <div
                    key={item.step}
                    className={`px-6 py-5 border-b border-border last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeStep === index ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeStep === index ? "brand-gradient-bg scale-125" : "bg-border"
                        }`}
                      />
                      <div>
                        <div className={`font-medium transition-colors duration-300 ${activeStep === index ? "text-primary" : "text-foreground"}`}>
                          {item.step}
                        </div>
                        <div className="text-sm text-muted-foreground">{item.detail}</div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground text-right hidden sm:block">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

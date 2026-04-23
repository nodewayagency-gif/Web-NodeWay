"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "I",
    title: "Entendimento do problema",
    description: "Antes de qualquer código, entendemos o seu negócio. Cada detalhe importa — processos, dores e objetivos reais.",
    note: `// Fase 01: Descoberta
nodeway.entender({
  negócio: "seu contexto",
  dores: ["processos manuais", "sistemas lentos"],
  objetivo: "crescer com tecnologia"
})`,
  },
  {
    number: "II",
    title: "Planejamento da solução",
    description: "Desenhamos a melhor estrutura técnica e estratégica. Tecnologia certa para o problema certo — sem excessos.",
    note: `// Fase 02: Arquitetura
nodeway.planejar({
  stack: "personalizada",
  integrações: ["suas ferramentas"],
  entrega: "rápida e escalável"
})`,
  },
  {
    number: "III",
    title: "Desenvolvimento & Entrega",
    description: "Construção limpa, escalável e orientada a resultado. Acompanhamos, ajustamos e evoluímos junto com você.",
    note: `// Fase 03: Execução
nodeway.entregar({
  código: "limpo e escalável",
  suporte: "contínuo",
  evolução: true
})

// Projeto entregue com sucesso`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-card overflow-hidden"
    >
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Processo
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Como <span className="brand-gradient">trabalhamos</span>.
            <br />
            <span className="text-muted-foreground">Simples e eficaz.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-border transition-all duration-500 group ${activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
              >
                <div className="flex items-start gap-6">
                  <span
                    className={`font-display text-3xl transition-all duration-300 ${activeStep === index ? "brand-gradient" : "text-muted-foreground"
                      }`}
                  >
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 text-foreground group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                    {activeStep === index && (
                      <div className="mt-4 h-px bg-border overflow-hidden">
                        <div
                          className="h-full brand-gradient-bg w-0"
                          style={{ animation: "progress 5s linear forwards" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-border overflow-hidden rounded-lg">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-background/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                  <div className="w-3 h-3 rounded-full bg-border" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">nodeway.config.ts</span>
              </div>

              <div className="p-8 font-mono text-sm min-h-[280px] bg-background/30">
                <pre className="text-foreground/70">
                  {steps[activeStep].note.split("\n").map((line, lineIndex) => (
                    <div
                      key={`${activeStep}-${lineIndex}`}
                      className="leading-loose code-line-reveal"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      <span className="text-muted-foreground/40 select-none w-8 inline-block">
                        {lineIndex + 1}
                      </span>
                      <span className="inline-flex">
                        {line.split("").map((char, charIndex) => (
                          <span
                            key={`${activeStep}-${lineIndex}-${charIndex}`}
                            className="code-char-reveal"
                            style={{ animationDelay: `${lineIndex * 80 + charIndex * 15}ms` }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>

              <div className="px-6 py-4 border-t border-border flex items-center gap-3 bg-background/50">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">Pronto para começar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lineReveal {
          to { opacity: 1; transform: translateX(0); }
        }

        .code-char-reveal {
          opacity: 0;
          filter: blur(8px);
          animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes charReveal {
          to { opacity: 1; filter: blur(0); }
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { Target, Layers, TrendingUp, Users } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Foco em resultado",
    description: "Cada decisão técnica e estratégica orientada a impacto real no seu negócio.",
  },
  {
    icon: Layers,
    title: "Escalabilidade desde o dia 1",
    description: "Arquitetura preparada para crescer junto com a sua empresa, sem retrabalho.",
  },
  {
    icon: TrendingUp,
    title: "Performance mensurável",
    description: "Dashboards, métricas e KPIs para você acompanhar o retorno do investimento.",
  },
  {
    icon: Users,
    title: "Parceria de longo prazo",
    description: "Não entregamos e sumimos. Acompanhamos, ajustamos e evoluímos junto com você.",
  },
];

const values = ["Performance", "Escalabilidade", "UX de qualidade", "Resultado prático", "Código limpo"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" ref={sectionRef} className="relative py-24 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px brand-gradient-bg" />
              Nossa filosofia
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8 text-foreground">
              Sem fórmulas
              <br />
              <span className="brand-gradient">prontas.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Trabalhamos com foco em performance, escalabilidade e experiência do usuário. Cada solução é desenhada do zero para o seu contexto real.
            </p>

            <div className="flex flex-wrap gap-3">
              {values.map((val, index) => (
                <span
                  key={val}
                  className={`px-4 py-2 border border-border text-sm font-mono text-muted-foreground transition-all duration-500 rounded-full ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: `${index * 60 + 200}ms` }}
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="grid gap-5">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`p-6 border border-border hover:border-primary/40 bg-background/50 transition-all duration-500 group rounded-lg ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-border rounded-lg group-hover:brand-gradient-bg group-hover:border-transparent transition-all duration-300">
                    <pillar.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 text-foreground group-hover:translate-x-1 transition-transform duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

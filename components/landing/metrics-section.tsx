"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, Workflow, Gauge, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "Arquitetura sob medida",
    description:
      "Cada solução é desenhada de acordo com o cenário, a operação e os objetivos do seu negócio.",
  },
  {
    icon: Workflow,
    title: "Automação inteligente",
    description:
      "Reduzimos tarefas manuais, conectamos processos e criamos fluxos que mantêm a operação fluindo.",
  },
  {
    icon: ShieldCheck,
    title: "Operação 24/7",
    description:
      "Construímos soluções pensadas para funcionar com estabilidade, continuidade e confiança todos os dias.",
  },
  {
    icon: Gauge,
    title: "Performance escalável",
    description:
      "Projetos preparados para crescer com velocidade, consistência e estrutura técnica sólida.",
  },
];

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-y border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px brand-gradient-bg" />
              Sobre a Nodeway
            </span>

            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight leading-none transition-all duration-700 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }`}
            >
              Tecnologia pensada para
              <br />
              <span className="text-muted-foreground">
                operar, escalar e evoluir.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-muted-foreground leading-relaxed text-base lg:text-lg">
            A Nodeway cria soluções digitais sob medida para empresas que
            precisam de mais do que presença online. Desenvolvemos estruturas
            que unem estratégia, performance e continuidade operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-border">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`bg-background p-8 lg:p-10 min-h-[280px] flex flex-col justify-between transition-all duration-700 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl border border-border flex items-center justify-center mb-10">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>

                <div>
                  <h3 className="text-2xl font-display tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
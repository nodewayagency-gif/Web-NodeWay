"use client";

import { useEffect, useState } from "react";

const differentials = [
  {
    title: "Soluções realmente personalizadas",
    description: "Nenhuma fórmula pronta. Cada cliente recebe uma solução pensada para o seu cenário real.",
    metric: "100% customizado",
  },
  {
    title: "Foco em resultado, não apenas estética",
    description: "Bonito e funcional não são exclusivos. Construímos com foco em conversão e performance.",
    metric: "Resultado mensurável",
  },
  {
    title: "Integração com ferramentas e sistemas",
    description: "Conectamos o que você já usa. APIs, automações, bancos de dados — tudo integrado.",
    metric: "Stack unificada",
  },
  {
    title: "Pensamento estratégico + técnico",
    description: "Não somos só desenvolvedores. Pensamos o negócio antes de escrever qualquer linha de código.",
    metric: "Visão 360°",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % differentials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = differentials[activeIndex];

  return (
    <section className="relative py-32 lg:py-40 border-t border-border lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Diferencial
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(differentials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                &ldquo;{active.title}&rdquo;
              </p>
            </blockquote>

            <div
              className={`mt-12 transition-all duration-300 delay-100 ${isAnimating ? "opacity-0" : "opacity-100"
                }`}
            >
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {active.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 brand-border rounded-lg transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Resultado
              </span>
              <p className="font-display text-3xl md:text-4xl brand-gradient">{active.metric}</p>
            </div>

            <div className="flex gap-2 mt-8">
              {differentials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => { setActiveIndex(idx); setIsAnimating(false); }, 300);
                  }}
                  className={`h-2 transition-all duration-300 rounded-full ${idx === activeIndex ? "w-8 brand-gradient-bg" : "w-2 bg-border hover:bg-muted-foreground/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-border">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Soluções que já construímos
          </p>
        </div>
      </div>

      {/* Full-width marquee container */}
      <div className="relative w-full overflow-hidden py-10 lg:py-16">
        {/* Edge Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-16 md:gap-24 items-center marquee w-max">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 md:gap-24 items-center shrink-0">
              {[
                "Plataformas Web",
                "Sistemas Internos",
                "Landing Pages",
                "Automações",
                "Dashboards BI",
                "APIs & Integrações",
                "Apps com Banco de Dados",
                "Ferramentas de Gestão",
              ].map((item) => (
                <div
                  key={`${setIdx}-${item}`}
                  className="flex items-center gap-6 md:gap-10 group"
                >
                  <span
                    className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground/15 whitespace-nowrap hover:text-primary/40 transition-all duration-500 cursor-default"
                  >
                    {item}
                  </span>
                  <div className="w-2 h-2 rounded-full brand-gradient-bg opacity-30" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

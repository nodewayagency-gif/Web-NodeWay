"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Code2, Cpu, Database, Zap } from "lucide-react";

const words = ["crescer", "escalar", "converter", "inovar"];

const stats = [
  { value: "24/7", label: "soluções em operação contínua" },
  { value: "100%", label: "desenvolvimento sob medida" },
  { value: "360°", label: "visão estratégica do negócio" },
  { value: "Full", label: "foco em performance" },
  { value: "End-to-end", label: "do planejamento à entrega" },
];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Respeita prefers-reduced-motion: não roda o ciclo de palavras.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Fundo: malha de pontos animados com gradiente */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Camada de gradiente radial do centro */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,194,203,0.12) 0%, rgba(0,113,188,0.08) 40%, transparent 70%)",
          }}
        />
        {/* Glow verde no canto superior esquerdo */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(126,217,87,0.10) 0%, transparent 70%)",
          }}
        />
        {/* Glow azul no canto inferior direito */}
        <div
          className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,113,188,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Grade de linhas finas */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(0,194,203,1)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Pontos nos cruzamentos da grade */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="0" cy="0" r="1.5" fill="#00C2CB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Conteudo principal */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-32 pb-44 sm:pt-36 sm:pb-48 lg:pt-40 lg:pb-52">

        {/* Eyebrow */}
        <div className="mb-6 hero-rise">
          <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-muted-foreground tracking-widest uppercase">
            <span className="w-6 h-px brand-gradient-bg" />
            Soluções digitais sob medida
            <span className="w-6 h-px brand-gradient-bg" />
          </span>
        </div>

        {/* Headline principal */}
        <div className="mb-10 sm:mb-14">
          <h1 className="font-display leading-[0.95] tracking-tight hero-rise-lcp">
            {/* Linha 1 */}
            <span className="block text-foreground text-[clamp(2.8rem,8vw,7.5rem)]">
              Para negócios
            </span>

            {/* Linha 2 - "que querem" + palavra animada */}
            <span className="block text-[clamp(2.8rem,8vw,7.5rem)]">
              <span className="text-foreground">que querem </span>
              <span
                className={`inline-block brand-gradient transition-all duration-300 ${animating
                  ? "opacity-0 translate-y-3"
                  : "opacity-100 translate-y-0"
                  }`}
                style={{ minWidth: "4ch" }}
              >
                {words[wordIndex]}
              </span>
            </span>

            {/* Linha 3 */}
            <span className="block text-muted-foreground text-[clamp(2rem,5vw,4.5rem)] mt-1">
              de verdade.
            </span>
          </h1>
        </div>

        {/* Descricao + CTA */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 lg:items-end">
          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg hero-rise"
            style={{ animationDelay: "0.15s" }}
          >
            Criamos sistemas, aplicações e experiências digitais personalizadas.
            Não vendemos sites — construímos soluções que resolvem problemas reais.
          </p>

          <div
            className="flex flex-col sm:flex-row items-start gap-3 shrink-0 hero-rise"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              href="#contact"
              className="cta-primary inline-flex items-center justify-center gap-2 px-7 h-13 sm:h-14 text-sm sm:text-base rounded-full group font-medium"
            >
              Solicitar orçamento
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 h-13 sm:h-14 px-7 text-sm sm:text-base rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-primary/50 transition-all"
            >
              Ver serviços
            </a>
          </div>
        </div>

        {/* Pills de servicos */}
        <div
          className="mt-12 flex flex-wrap gap-2 sm:gap-3 hero-rise"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Code2, label: "Desenvolvimento" },
            { icon: Zap, label: "Automação" },
            { icon: Database, label: "Dados & BI" },
            { icon: Cpu, label: "Performance" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="brand-border inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm text-muted-foreground bg-card/50 backdrop-blur-sm"
            >
              <Icon className="w-3.5 h-3.5 text-primary" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Carrossel de stats - full width */}
      <div
        className="absolute bottom-0 left-0 right-0 hero-rise"
        style={{ animationDelay: "0.55s" }}
      >
        {/* Linha separadora com gradiente */}
        <div className="w-full h-px brand-gradient-bg opacity-20 mb-5" />

        <div className="overflow-hidden w-full pb-8">
          <div className="flex gap-0 whitespace-nowrap hero-marquee">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex">
                {stats.map((stat, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="flex items-center gap-0"
                  >
                    <div className="flex items-baseline gap-2 px-8 sm:px-12">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-display brand-gradient">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                    {/* Divisor */}
                    <span className="w-px h-8 bg-border opacity-40 shrink-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

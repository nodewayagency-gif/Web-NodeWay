"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Desenvolvimento Sob Medida",
    description:
      "Sistemas, plataformas e aplicações feitas exatamente para a sua necessidade. Nenhum template limitado — só o que faz sentido para o seu negócio.",
    visual: "dev",
  },
  {
    number: "02",
    title: "Landing Pages de Alta Performance",
    description:
      "Projetadas para conversão, velocidade e resultados reais. Cada elemento pensado para transformar visitantes em clientes.",
    visual: "landing",
  },
  {
    number: "03",
    title: "Integrações & Automação",
    description:
      "Conectamos ferramentas, eliminamos tarefas manuais e otimizamos processos. Menos trabalho operacional, mais foco no que importa.",
    visual: "automation",
  },
  {
    number: "04",
    title: "Dados & Inteligência (SQL + BI)",
    description:
      "Transformamos dados em decisões estratégicas com dashboards e análises avançadas. Visibilidade total para guiar o crescimento.",
    visual: "data",
  },
];

function DevVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <rect x="20" y="20" width="160" height="120" rx="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="20" width="160" height="28" rx="6" fill="currentColor" opacity="0.08" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={36 + i * 16} cy={34} r={5} fill="none" stroke="currentColor" strokeWidth="1.5" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={35} y={62 + i * 14} width={i % 2 === 0 ? 90 : 60} height={6} rx={2} fill="currentColor">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

function LandingVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <rect x="30" y="15" width="140" height="130" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="50" y="35" width="100" height="12" rx="3" fill="currentColor" opacity="0.5">
        <animate attributeName="width" values="60;100;60" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="60" y="55" width="80" height="8" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="65" y="70" width="70" height="8" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="65" y="90" width="70" height="20" rx="10" fill="currentColor" opacity="0.6">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
      </rect>
      <line x1="30" y1="125" x2="170" y2="125" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <rect x="70" y="130" width="60" height="8" rx="2" fill="currentColor" opacity="0.1" />
    </svg>
  );
}

function AutomationVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {[
        { x: 25, y: 60 },
        { x: 85, y: 30 },
        { x: 145, y: 60 },
        { x: 85, y: 110 },
      ].map((pos, i) => (
        <g key={i}>
          <rect x={pos.x} y={pos.y} width={40} height={28} rx={4} fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x={pos.x + 8} y={pos.y + 8} width={24} height={4} rx={2} fill="currentColor" opacity="0.5" />
          <rect x={pos.x + 8} y={pos.y + 16} width={16} height={4} rx={2} fill="currentColor" opacity="0.3" />
        </g>
      ))}
      {[
        { x1: 65, y1: 74, x2: 85, y2: 58 },
        { x1: 125, y1: 58, x2: 145, y2: 74 },
        { x1: 105, y1: 74, x2: 105, y2: 110 },
      ].map((line, i) => (
        <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3">
          <animate attributeName="stroke-dashoffset" values="0;-14" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
        </line>
      ))}
      <circle r="3" fill="currentColor" opacity="0.8">
        <animateMotion dur="3s" repeatCount="indefinite" path="M65,74 L85,58 L125,58 L145,74" />
      </circle>
    </svg>
  );
}

function DataVisual() {
  const bars = [60, 85, 45, 95, 70, 55, 80];
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <line x1="30" y1="20" x2="30" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="30" y1="130" x2="180" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {bars.map((h, i) => (
        <rect key={i} x={40 + i * 20} y={130 - h} width={12} height={h} rx={2} fill="currentColor">
          <animate attributeName="height" values={`0;${h};${h}`} dur="1.5s" begin={`${i * 0.1}s`} fill="freeze" />
          <animate attributeName="y" values={`130;${130 - h};${130 - h}`} dur="1.5s" begin={`${i * 0.1}s`} fill="freeze" />
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "dev": return <DevVisual />;
    case "landing": return <LandingVisual />;
    case "automation": return <AutomationVisual />;
    case "data": return <DataVisual />;
    default: return <DevVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-border">
        <div className="shrink-0">
          <span className="font-mono text-sm text-primary">{feature.number}</span>
        </div>

        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 text-foreground group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-primary">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
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

  return (
    <section id="features" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            O que fazemos
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Não vendemos <span className="brand-gradient">&quot;sites&quot;</span>.
            <br />
            <span className="text-muted-foreground">Construímos soluções.</span>
          </h2>
        </div>

        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

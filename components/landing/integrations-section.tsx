"use client";

import { useEffect, useState, useRef } from "react";

const integrations = [
  { name: "Bling ERP", category: "ERP & Fiscal" },
  { name: "Omie", category: "ERP & Financeiro" },
  { name: "Tiny ERP", category: "ERP & Estoque" },
  { name: "n8n", category: "Automacao" },
  { name: "Zapier", category: "Automacao" },
  { name: "Power BI", category: "Analytics" },
  { name: "WhatsApp API", category: "Comunicacao" },
  { name: "Stripe", category: "Pagamentos" },
  { name: "Vercel", category: "Deploy" },
  { name: "AWS", category: "Cloud" },
  { name: "OpenAI", category: "Inteligencia Artificial" },
  { name: "MongoDB", category: "Banco de Dados" },
];

export function IntegrationsSection() {
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
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Integracoes
            <span className="w-8 h-px brand-gradient-bg" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6 text-foreground">
            Conectamos o que
            <br />
            <span className="brand-gradient">voce ja usa.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            APIs, ferramentas, plataformas e sistemas — integramos tudo em uma solucão coesa.
          </p>
        </div>
      </div>

      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group rounded-lg"
                >
                  <div className="text-lg font-medium text-foreground group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group rounded-lg"
                >
                  <div className="text-lg font-medium text-foreground group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

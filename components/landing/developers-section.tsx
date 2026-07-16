"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";
import { MAILTO } from "@/lib/site-config";

const solutions = [
  {
    label: "Plataformas",
    code: `// Plataforma web personalizada
const plataforma = await nodeway.criar({
  tipo: "plataforma-web",
  features: ["autenticação", "dashboard", "relatórios"],
  banco: "PostgreSQL",
  deploy: "cloud"
})`,
  },
  {
    label: "Automação",
    code: `// Pipeline de automação
nodeway.automatizar({
  gatilho: "novo-lead",
  ações: [
    "envia-email",
    "cria-registro-crm",
    "notifica-time"
  ],
  integrações: ["n8n", "zapier", "webhooks"]
})`,
  },
  {
    label: "Dados & BI",
    code: `// Dashboard de analytics
const bi = await nodeway.dados({
  fonte: "seu-banco-de-dados",
  métricas: ["vendas", "churn", "LTV"],
  dashboard: "tempo-real",
  exportar: ["PDF", "Excel"]
})

console.log("Visibilidade:", bi.insights)`,
  },
];

const highlights = [
  { title: "Stack moderna", description: "Next.js, Node, Python e mais." },
  { title: "Código limpo", description: "Escalável e fácil de manter." },
  { title: "Integração total", description: "APIs, CRMs, ERPs e ferramentas." },
  { title: "Suporte contínuo", description: "Evolução constante do produto." },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  @keyframes devLineReveal {
    to { opacity: 1; transform: translateX(0); }
  }
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  @keyframes devCharReveal {
    to { opacity: 1; filter: blur(0); }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(solutions[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px brand-gradient-bg" />
              Soluções prontas e flexíveis
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8 text-foreground">
              Além do
              <br />
              <span className="brand-gradient">personalizado.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Temos Soluções já estruturadas que podem ser adaptadas rapidamente. Velocidade sem abrir mão da qualidade.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((h, index) => (
                <div
                  key={h.title}
                  className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: `${index * 60 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1 text-foreground">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code block */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="flex items-center border-b border-border bg-card">
                {solutions.map((sol, idx) => (
                  <button
                    key={sol.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-4 text-sm font-mono transition-colors relative ${activeTab === idx ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {sol.label}
                    {activeTab === idx && (
                      <span className="absolute bottom-0 left-0 right-0 h-px brand-gradient-bg" />
                    )}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copiar código"
                >
                  {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-8 font-mono text-sm bg-background/50 min-h-[240px]">
                <pre className="text-foreground/70">
                  {solutions[activeTab].code.split("\n").map((line, lineIndex) => (
                    <div
                      key={`${activeTab}-${lineIndex}`}
                      className="leading-loose dev-code-line"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      <span className="inline-flex">
                        {line.split("").map((char, charIndex) => (
                          <span
                            key={`${activeTab}-${lineIndex}-${charIndex}`}
                            className="dev-code-char"
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
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="#contact" className="text-primary hover:underline underline-offset-4">
                Solicitar orçamento
              </a>
              <span className="text-border">|</span>
              <a href={MAILTO} className="text-muted-foreground hover:text-foreground">
                Falar com especialista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

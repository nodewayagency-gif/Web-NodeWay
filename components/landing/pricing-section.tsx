"use client";

import { ArrowRight, Check } from "lucide-react";
import { MAILTO } from "@/lib/site-config";

const packages = [
  {
    name: "Landing Page",
    description: "Para quem precisa de presenca digital de alta conversao",
    price: "Sob consulta",
    features: [
      "Design responsivo e personalizado",
      "Otimizacao para conversao (CRO)",
      "SEO tecnico basico",
      "Formulario de contato integrado",
      "Velocidade e performance otimizadas",
    ],
    cta: "Solicitar orcamento",
    href: "#contact",
    highlight: false,
  },
  {
    name: "Sistema Completo",
    description: "Para empresas que precisam de uma solucão robusta e escalavel",
    price: "Sob consulta",
    features: [
      "Tudo do pacote Landing Page",
      "Sistema com banco de dados",
      "Painel administrativo",
      "Autenticacao e controle de acesso",
      "Integracoes com ferramentas externas",
      "Automacoes de processos",
      "Dashboard de analytics",
    ],
    cta: "Solicitar orcamento",
    href: "#contact",
    highlight: true,
  },
  {
    name: "Consultoria & BI",
    description: "Para transformar dados em decisoes estrategicas",
    price: "Sob consulta",
    features: [
      "Levantamento de requisitos de dados",
      "Modelagem e estruturacao (SQL)",
      "Dashboards interativos",
      "Relatorios automatizados",
      "Treinamento da equipe",
      "Suporte continuado",
    ],
    cta: "Falar com especialista",
    href: MAILTO,
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Pacotes
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Investimento
            <br />
            <span className="brand-gradient">proporcional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Cada projeto e orcado de forma personalizada. Nenhum pacote engesado — apenas o que voce realmente precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`relative p-8 lg:p-12 bg-background ${pkg.highlight ? "md:-my-4 md:py-12 lg:py-16 brand-border" : ""
                }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-8 px-3 py-1 brand-gradient-bg text-white text-xs font-mono uppercase tracking-widest rounded-sm">
                  Mais completo
                </span>
              )}

              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl text-foreground">{pkg.price}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 font-mono">Orcamento sem compromisso</p>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={pkg.href}
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group rounded-lg ${pkg.highlight
                  ? "brand-gradient-bg text-white hover:opacity-90"
                  : "border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                  }`}
              >
                {pkg.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Todos os projetos incluem reuniao de briefing, proposta detalhada e prazo definido.{" "}
          <a href="#contact" className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
            Fale conosco
          </a>
        </p>
      </div>
    </section>
  );
}

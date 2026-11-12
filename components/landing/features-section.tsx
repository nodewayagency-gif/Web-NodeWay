"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Smartphone,
  RefreshCw,
  TrendingUp,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

const features = [
  {
    badge: "Sistemas sob medida",
    title: "“Minha equipe perde horas em planilhas.”",
    description:
      "Cadastre uma vez: orçamento, pedido e financeiro passam a conversar sozinhos.",
    href: "/servicos/sistemas-sob-medida",
    linkLabel: "Ver sistemas sob medida",
    visual: "dev",
  },
  {
    badge: "Páginas e lojas online",
    title: "“Visitam meu site, mas ninguém chama no WhatsApp.”",
    description:
      "Páginas rápidas e claras que levam o visitante direto ao seu vendedor.",
    href: "/servicos/landing-pages",
    linkLabel: "Ver páginas e lojas",
    visual: "landing",
  },
  {
    badge: "Integrações e automação",
    title: "“Digitamos a mesma venda em três sistemas.”",
    description:
      "Conectamos o comercial ao seu ERP e aos pagamentos. A nota sai sem redigitar.",
    href: "/servicos/integracoes-automacao",
    linkLabel: "Ver integrações",
    visual: "automation",
  },
  {
    badge: "Painéis de dados (BI)",
    title: "“Vendo bem, mas não sei onde está o lucro.”",
    description:
      "Painéis ao vivo com custos, margens e gargalos, fáceis de ler no celular.",
    href: "/servicos/bi-dados",
    linkLabel: "Ver painéis de dados",
    visual: "data",
  },
];

function SystemMockup() {
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-background p-3.5 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <FileText className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs font-medium text-foreground">
            Pedido #2084 · Cliente Aprovou
          </span>
        </div>
        <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-accent/15 text-accent shrink-0">
          Gerado em 8s
        </span>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex flex-wrap items-center justify-between gap-1 text-xs bg-card p-2.5 rounded-xl border border-border/40">
          <span className="text-muted-foreground text-[11px] sm:text-xs">Orçamento Personalizado</span>
          <span className="text-foreground font-medium">R$ 14.800,00</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-1 text-xs bg-card p-2.5 rounded-xl border border-border/40">
          <span className="text-muted-foreground text-[11px] sm:text-xs">Comissão Vendedor (5%)</span>
          <span className="text-primary font-medium">R$ 740,00</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-1 pt-1 text-xs">
        <span className="text-muted-foreground text-[11px] sm:text-xs">Documento comercial:</span>
        <span className="inline-flex items-center gap-1.5 font-medium text-primary text-[11px] sm:text-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
          PDF pronto para enviar no WhatsApp
        </span>
      </div>
    </div>
  );
}

function LandingMockup() {
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-background p-3.5 sm:p-5">
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <Smartphone className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs font-medium text-foreground truncate">Acesso Rápido no Celular</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/15 text-accent shrink-0">
          <Zap className="w-3 h-3" /> 0,7s de abertura
        </span>
      </div>
      <div className="rounded-xl bg-card border border-border/50 p-3 sm:p-4 text-center space-y-2.5">
        <p className="text-[11px] text-muted-foreground">
          Visitante buscou no Google ou clicou no anúncio
        </p>
        <p className="text-xs sm:text-sm font-display text-foreground leading-snug">
          “Gostei do modelo e quero tirar dúvidas”
        </p>
        <div className="cta-primary py-2.5 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-2 w-full text-center shadow-md">
          <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
          <span>Chamar vendedor no WhatsApp</span>
        </div>
      </div>
      <p className="mt-2.5 text-[11px] text-center text-muted-foreground">
        A conversa já abre com o produto ou serviço selecionado
      </p>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-background p-3.5 sm:p-5">
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <RefreshCw className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs font-medium text-foreground">Rotina Sem Redigitação</span>
        </div>
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/15 text-accent shrink-0">
          100% conectado
        </span>
      </div>
      <div className="space-y-2">
        {[
          { step: "1. Vendedor fecha pedido no sistema", tag: "1 clique" },
          { step: "2. Estoque e financeiro atualizam", tag: "Ao vivo" },
          { step: "3. Envia para Bling / Omie / Tiny", tag: "Pronto NF-e" },
        ].map((item) => (
          <div
            key={item.step}
            className="flex items-center justify-between gap-2 bg-card border border-border/40 rounded-xl px-2.5 sm:px-3 py-2 text-xs"
          >
            <span className="text-foreground text-[11px] sm:text-xs">{item.step}</span>
            <span className="text-[11px] text-primary font-medium shrink-0">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataMockup() {
  const bars = [
    { label: "Mai", value: 45 },
    { label: "Jun", value: 62 },
    { label: "Jul", value: 78 },
    { label: "Ago", value: 95 },
  ];
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-background p-3.5 sm:p-5">
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <TrendingUp className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs font-medium text-foreground">Painel da Diretoria</span>
        </div>
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/15 text-accent shrink-0">
          Margem +22%
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-card border border-border/40 rounded-xl p-2.5 sm:p-3">
          <span className="text-[11px] text-muted-foreground block">
            Lucro Líquido
          </span>
          <span className="text-sm sm:text-base font-display text-foreground">Visão clara</span>
        </div>
        <div className="bg-card border border-border/40 rounded-xl p-2.5 sm:p-3">
          <span className="text-[11px] text-muted-foreground block">
            Custos fora meta
          </span>
          <span className="text-sm sm:text-base font-display text-accent">0 alertas</span>
        </div>
      </div>
      <div className="flex items-end justify-between gap-2 sm:gap-3 h-16 sm:h-20 pt-2 px-2 bg-card rounded-xl p-2">
        {bars.map((b) => (
          <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md brand-gradient-bg transition-all duration-700"
              style={{ height: `${b.value * 0.45}px` }}
            />
            <span className="text-[11px] text-muted-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  switch (type) {
    case "dev":
      return <SystemMockup />;
    case "landing":
      return <LandingMockup />;
    case "automation":
      return <AutomationMockup />;
    case "data":
      return <DataMockup />;
    default:
      return <SystemMockup />;
  }
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="features"
      ref={sectionRef}
      className="theme-alt relative py-14 sm:py-20 lg:py-24 overflow-x-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-primary mb-3">
            <span className="w-6 sm:w-8 h-px brand-gradient-bg" />
            O que fazemos
          </span>
          <h2
            className={`text-2xl sm:text-4xl lg:text-5xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Onde sua rotina <span className="brand-gradient">trava</span>,{" "}
            <span className="text-muted-foreground">a gente constrói a saída.</span>
          </h2>
        </div>

        {/* Grade 2x2: dor (título) + 1 linha + ilustração. Os detalhes ficam nas páginas de serviço. */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="group flex flex-col rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="self-start font-mono text-[11px] sm:text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {feature.badge}
              </span>
              <h3 className="mt-4 text-lg sm:text-2xl font-display text-foreground leading-snug">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-5 flex-1 flex items-end">
                <ServiceVisual type={feature.visual} />
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                {feature.linkLabel}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

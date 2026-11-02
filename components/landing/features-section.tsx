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
    number: "01",
    badge: "Fim das planilhas",
    title: "Sistemas e Softwares Sob Medida",
    description:
      "Construímos a ferramenta exclusiva que a sua empresa precisa para operar com fluidez. Sem templates limitados e sem telas inúteis: cada regra de negócio, cálculo de orçamento e etapa de trabalho desenvolvida exatamente para o seu processo.",
    highlights: [
      "Orçamentos e pedidos calculados na hora, com PDF pronto para enviar",
      "Centralização de clientes, estoque, equipe e financeiro",
      "Acesso seguro e simples pelo celular ou computador para toda a equipe",
    ],
    href: "/servicos/sistemas-sob-medida",
    linkLabel: "Ver como funciona um sistema sob medida",
    visual: "dev",
  },
  {
    number: "02",
    badge: "Mais clientes chamando",
    title: "Páginas de Vendas e Lojas Online",
    description:
      "Não fazemos sites que ficam apenas 'bonitos na vitrine'. Construímos páginas ultra-rápidas e lojas virtuais pensadas para quem pesquisa no Google ou clica no seu anúncio chamar seu vendedor na hora.",
    highlights: [
      "Carregamento instantâneo no 4G (sem clientes desistindo por lentidão)",
      "Botão no WhatsApp com o item ou serviço pré-selecionado",
      "E-commerce com cálculo de frete e pagamento seguro",
    ],
    href: "/servicos/landing-pages",
    linkLabel: "Conhecer páginas e lojas de alta conversão",
    visual: "landing",
  },
  {
    number: "03",
    badge: "Zero retrabalho",
    title: "Integração de Sistemas & Automação de Rotinas",
    description:
      "Chega de digitar a mesma venda três vezes em sistemas diferentes. Conectamos seu setor comercial ao seu ERP (Bling, Omie, Tiny) e aos meios de pagamento para sua equipe focar em vender e atender bem.",
    highlights: [
      "Sincronização com Bling, Omie e Tiny (a nota fiscal sai sem redigitar)",
      "Histórico de vendas e propostas organizado para consulta imediata",
      "Menos erros manuais e horas economizadas toda semana",
    ],
    href: "/servicos/integracoes-automacao",
    linkLabel: "Entender integrações e automações de processo",
    visual: "automation",
  },
  {
    number: "04",
    badge: "Decisão com segurança",
    title: "Painéis de Controle e Lucro (BI)",
    description:
      "Pare de decidir no 'achismo' ou esperar dias por um relatório em planilha. Juntamos os dados espalhados da sua empresa em painéis visuais claros que mostram, ao vivo, onde está o lucro e onde estão os gargalos.",
    highlights: [
      "Indicadores claros e objetivos para a diretoria",
      "Acompanhamento de vendas, custos, rotas e frotas em tempo real",
      "Visão na tela do celular para você acompanhar de qualquer lugar",
    ],
    href: "/servicos/bi-dados",
    linkLabel: "Ver exemplos de painéis de dados",
    visual: "data",
  },
];

function SystemMockup() {
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-card/80 p-3.5 sm:p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <FileText className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs font-medium text-foreground">
            Pedido #2084 · Cliente Aprovou
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-accent/15 text-accent shrink-0">
          Gerado em 8s
        </span>
      </div>
      <div className="space-y-2 mb-3">
        <div className="flex flex-wrap items-center justify-between gap-1 text-xs bg-background/60 p-2.5 rounded-xl border border-border/40">
          <span className="text-muted-foreground text-[11px] sm:text-xs">Orçamento Personalizado</span>
          <span className="text-foreground font-medium">R$ 14.800,00</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-1 text-xs bg-background/60 p-2.5 rounded-xl border border-border/40">
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
    <div className="w-full rounded-2xl border border-border/80 bg-card/80 p-3.5 sm:p-5 shadow-xl">
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <Smartphone className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs font-medium text-foreground truncate">Acesso Rápido no Celular</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/15 text-accent shrink-0">
          <Zap className="w-3 h-3" /> 0,7s de abertura
        </span>
      </div>
      <div className="rounded-xl bg-background/70 border border-border/50 p-3 sm:p-4 text-center space-y-2.5">
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
      <p className="mt-2.5 text-[10px] sm:text-[11px] text-center text-muted-foreground">
        A conversa já abre com o produto ou serviço selecionado
      </p>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-card/80 p-3.5 sm:p-5 shadow-xl">
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <RefreshCw className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs font-medium text-foreground">Rotina Sem Redigitação</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/15 text-accent shrink-0">
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
            className="flex items-center justify-between gap-2 bg-background/60 border border-border/40 rounded-xl px-2.5 sm:px-3 py-2 text-xs"
          >
            <span className="text-foreground text-[11px] sm:text-xs">{item.step}</span>
            <span className="text-[10px] sm:text-[11px] text-primary font-medium shrink-0">
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
    <div className="w-full rounded-2xl border border-border/80 bg-card/80 p-3.5 sm:p-5 shadow-xl">
      <div className="flex items-center justify-between gap-2 pb-2.5 mb-3 border-b border-border/60">
        <div className="flex items-center gap-2 min-w-0">
          <TrendingUp className="w-4 h-4 text-primary shrink-0" />
          <span className="text-xs font-medium text-foreground">Painel da Diretoria</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-accent/15 text-accent shrink-0">
          Margem +22%
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-background/60 border border-border/40 rounded-xl p-2.5 sm:p-3">
          <span className="text-[10px] sm:text-[11px] text-muted-foreground block">
            Lucro Líquido
          </span>
          <span className="text-sm sm:text-base font-display text-foreground">Visão clara</span>
        </div>
        <div className="bg-background/60 border border-border/40 rounded-xl p-2.5 sm:p-3">
          <span className="text-[10px] sm:text-[11px] text-muted-foreground block">
            Custos fora meta
          </span>
          <span className="text-sm sm:text-base font-display text-accent">0 alertas</span>
        </div>
      </div>
      <div className="flex items-end justify-between gap-2 sm:gap-3 h-16 sm:h-20 pt-2 px-2 bg-background/40 rounded-xl p-2">
        {bars.map((b) => (
          <div key={b.label} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md brand-gradient-bg transition-all duration-700"
              style={{ height: `${b.value * 0.45}px` }}
            />
            <span className="text-[9px] sm:text-[10px] text-muted-foreground">{b.label}</span>
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
    <section id="features" ref={sectionRef} className="relative py-14 sm:py-20 lg:py-28 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-3xl mb-8 sm:mb-14 lg:mb-20">
          <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-primary mb-3">
            <span className="w-6 sm:w-8 h-px brand-gradient-bg" />
            O que construímos para você
          </span>
          <h2
            className={`text-2xl sm:text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Não entregamos templates <span className="brand-gradient">prontos</span>.
            <br />
            <span className="text-muted-foreground">Construímos soluções sob medida.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Desenvolvimento pensado para resolver a dor exata do seu negócio. Veja as 4 frentes em
            que ajudamos as empresas a operarem com eficiência e escala.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-8 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="rounded-2xl sm:rounded-3xl border border-border bg-card/30 p-4 sm:p-8 lg:p-12 hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {feature.number} · {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-4xl font-display text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {feature.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-xs sm:text-sm lg:text-base text-foreground/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:opacity-80 transition-opacity group"
                    >
                      {feature.linkLabel}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 w-full">
                  <ServiceVisual type={feature.visual} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

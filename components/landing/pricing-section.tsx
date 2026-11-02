"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig } from "@/lib/site-config";

function wa(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

const packages = [
  {
    name: "Páginas de Vendas & Sites",
    badge: "Para atrair mais clientes",
    description:
      "Páginas velozes e feitas para conversão. Ideal para quem quer aparecer bem no Google, valorizar sua marca e receber contatos qualificados no WhatsApp.",
    price: "Sob medida",
    priceNote: "Diagnóstico e proposta em até 24h",
    features: [
      "Design moderno, ultra-rápido e adaptado ao celular",
      "Textos claros focados em convencer o visitante",
      "Botão de contato com mensagem e item pré-selecionado",
      "Preparado para aparecer no Google (SEO) e anúncios",
      "Entrega rápida com validações de cada etapa",
    ],
    cta: "Pedir orçamento no WhatsApp",
    href: wa("Olá! Quero um orçamento para uma página de vendas / site para minha empresa."),
    highlight: false,
  },
  {
    name: "Sistemas Sob Medida",
    badge: "100% exclusivo para sua empresa",
    description:
      "Software desenhado do zero para a operação do seu negócio. Elimine planilhas, organize clientes, orçamentos, estoque e financeiro com as regras da sua empresa.",
    price: "Sob medida",
    priceNote: "Escopo, prazo e investimento fechados antes de começar",
    features: [
      "Construído exatamente para o seu fluxo de trabalho (sem telas inúteis)",
      "Cálculo de orçamentos e pedidos complexos em segundos",
      "Geração de pedidos em PDF prontos para enviar ao cliente",
      "Integração com seu ERP (Bling, Omie, Tiny) para nota fiscal",
      "Controle de estoque, compras, financeiro e comissões de vendedores",
      "Treinamento prático da equipe e suporte próximo contínuo",
    ],
    cta: "Solicitar proposta de sistema",
    href: wa("Olá! Gostaria de uma proposta para um sistema sob medida para minha empresa."),
    highlight: true,
  },
  {
    name: "Painéis em BI & E-commerce",
    badge: "Visão estratégica & Vendas online",
    description:
      "Para empresas que precisam de visibilidade total dos números em tempo real ou de uma loja virtual integrada para vender com segurança.",
    price: "Sob medida",
    priceNote: "Projeto estruturado com foco em retorno",
    features: [
      "Painéis de BI com consulta direta ao banco dos seus sistemas",
      "Visão de lucro, margens por rota, custos e metas ao vivo",
      "Lojas virtuais com checkout transparente ou direcionamento VIP",
      "Integrações de logística (Melhor Envio) e pagamentos",
      "Acompanhamento contínuo dos indicadores pela diretoria",
    ],
    cta: "Conversar sobre o projeto",
    href: wa("Olá! Quero conversar sobre BI / E-commerce para minha empresa."),
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-28 border-t border-border overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-primary mb-3">
              <span className="w-6 sm:w-8 h-px brand-gradient-bg" />
              Projetos personalizados
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl tracking-tight text-foreground mb-3 sm:mb-4 leading-[1.08]">
              Soluções desenhadas para a{' '}
              <span className="brand-gradient">realidade do seu negócio.</span>
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Cada empresa tem seus próprios processos e desafios. Construímos softwares sob medida
              com escopo e prazos transparentes do primeiro contato à entrega final.
            </p>
          </div>

          <Link
            href="/planos"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:opacity-80 transition-opacity group shrink-0"
          >
            Ver todos os formatos e planos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 transition-all ${
                pkg.highlight
                  ? "brand-border bg-card/70 shadow-2xl shadow-primary/10 lg:-mt-4 lg:mb-4"
                  : "border border-border bg-card/30 hover:border-primary/30"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 brand-gradient-bg text-white text-[11px] sm:text-xs font-semibold rounded-full shadow-lg whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" />
                  Mais procurado por empresas
                </span>
              )}

              <div className="mb-5 sm:mb-6">
                <span className="inline-block text-[11px] sm:text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full mb-2.5 sm:mb-3">
                  {pkg.badge}
                </span>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-foreground">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-border/70">
                <span className="font-display text-2xl sm:text-3xl text-foreground block">
                  {pkg.price}
                </span>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  {pkg.priceNote}
                </p>
              </div>

              <ul className="space-y-2.5 sm:space-y-3.5 mb-6 sm:mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 sm:gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-foreground/90 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={pkg.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full h-12 sm:h-13 px-5 sm:px-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium transition-all group rounded-full ${
                  pkg.highlight
                    ? "cta-primary"
                    : "border border-border bg-background/50 text-foreground hover:border-primary/50 hover:bg-primary/10"
                }`}
              >
                <WhatsAppIcon className="w-4 h-4 text-primary" />
                {pkg.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Rodapé da seção: menção suave ao CRM pronto para quem procura software pronto */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Precisa de um sistema de vendas pronto para usar hoje?{" "}
            <Link
              href="/planos#crm"
              className="text-primary font-medium hover:underline inline-flex items-center gap-1"
            >
              Conheça os planos do Nodeway CRM (a partir de R$ 69,90/mês)
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

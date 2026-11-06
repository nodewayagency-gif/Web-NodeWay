"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { SiteScreenshot } from "@/components/landing/site-screenshot";

type Story = {
  id: string;
  client: string;
  location: string;
  category: string;
  headline: string;
  before: string;
  after: string;
  results: string[];
  metricHighlight: string;
  image?: { src: string; width: number; height: number };
  url?: string;
};

const realStories: Story[] = [
  {
    id: "sistema-orcamento-etiquetas",
    client: "Newflexo",
    location: "Paraná",
    category: "Sistema Sob Medida",
    headline: "Orçamentos complexos que levavam horas agora ficam prontos em segundos.",
    before:
      "O setor comercial precisava calcular dezenas de variáveis (tipo de papel, tamanho, faca, cores e tiragem) manualmente. Demorava horas e qualquer erro na conta gerava prejuízo.",
    after:
      "Criamos uma calculadora inteligente sob medida: o vendedor preenche as medidas e o sistema entrega o valor exato na hora, já com a margem certa da empresa.",
    results: [
      "Orçamentos reduzidos de horas para poucos segundos",
      "Zero erros de cálculo no setor comercial",
      "Mais vendas fechadas por responder o cliente na hora",
    ],
    metricHighlight: "De horas para segundos",
    image: { src: "/cases/newflexo.webp", width: 1600, height: 765 },
  },
  {
    id: "transporte-mauricio-bi",
    client: "Transporte Maurício",
    location: "Toledo / PR",
    category: "Painéis de Dados (BI)",
    headline: "Fim das planilhas soltas: custo de cada caminhão e rota ao vivo na tela.",
    before:
      "A transportadora tinha muitos dados espalhados em sistemas antigos e planilhas, dificultando enxergar rápido o custo de combustível, manutenção e lucro real por rota.",
    after:
      "Conectamos os dados automaticamente e montamos painéis visuais simples. Hoje a diretoria acompanha abastecimento, manutenção e margem de cada viagem em tempo real.",
    results: [
      "Decisões rápidas baseadas em números reais do dia",
      "Identificação imediata de rotas com custo elevado",
      "Gestão de frota 100% clara para a diretoria",
    ],
    metricHighlight: "Frota 100% visível ao vivo",
    image: { src: "/cases/transporte-mauricio.webp", width: 1200, height: 676 },
  },
  {
    id: "jpb-joias",
    client: "JPB Joias",
    location: "Cascavel / PR",
    category: "E-commerce Humanizado",
    headline: "Uma vitrine de luxo que leva o cliente pronto para fechar no WhatsApp.",
    before:
      "Em peças de alto valor (joias), muitos clientes tinham receio de passar o cartão sozinhos num site frio sem antes tirar dúvidas com uma pessoa de confiança.",
    after:
      "Desenhamos uma loja virtual elegante onde, em vez de um carrinho impessoal, o botão envia a joia escolhida direto para o WhatsApp do consultor finalizar a venda com atendimento VIP.",
    results: [
      "Aumento expressivo nos fechamentos de alto valor",
      "Atendimento humano próximo e acolhedor",
      "Vendedores já recebem exatamente qual peça o cliente quer",
    ],
    metricHighlight: "Venda VIP no WhatsApp",
    image: { src: "/cases/jpb-joias.webp", width: 1200, height: 750 },
    url: "https://jpbjoias.com.br/",
  },
  {
    id: "formento-playgrounds",
    client: "Formento Playgrounds",
    location: "Blumenau / SC",
    category: "Sistema Comercial + BI",
    headline: "Montagem de kits de produtos, orçamentos e pedidos em minutos.",
    before:
      "Montar orçamentos com várias combinações de brinquedos e acompanhar os indicadores de produção manualmente tomava muito tempo da equipe.",
    after:
      "Construímos uma plataforma única onde a equipe monta kits padronizados, gera pedidos rapidamente e acompanha vendas e produção em painéis visuais.",
    results: [
      "Orçamentos completos gerados em poucos minutos",
      "Kits de produtos organizados e fáceis de reutilizar",
      "Visão clara do comercial e da produção em tempo real",
    ],
    metricHighlight: "Pedidos em minutos",
    image: { src: "/cases/formento-playgrounds.webp", width: 1200, height: 750 },
    url: "https://www.formento.com.br/",
  },
  {
    id: "primardi-saude",
    client: "Primardi Saúde & Vivre",
    location: "Guanambi / BA",
    category: "Plataforma Integrada",
    headline: "Atendimento, licitações, compras e fiscal trabalhando no mesmo sistema.",
    before:
      "No setor de distribuição de medicamentos e produtos hospitalares, setores desconectados e planilhas geravam retrabalho e lentidão para responder ao mercado.",
    after:
      "Unificamos teleatendimento, controle de licitações, compras e faturamento fiscal em uma plataforma feita sob medida para a rotina hospitalar.",
    results: [
      "Todos os setores conectados sem redigitação",
      "Respostas rápidas em processos de licitação",
      "Segurança fiscal e controle de compras centralizado",
    ],
    metricHighlight: "Operação 100% integrada",
    image: { src: "/cases/primardi-sistema.webp", width: 1600, height: 769 },
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = realStories[activeIndex];

  return (
    <section id="cases" className="relative py-16 sm:py-20 lg:py-28 border-t border-border bg-card/20 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Cabeçalho */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-primary mb-3">
              <span className="w-6 sm:w-8 h-px brand-gradient-bg" />
              Histórias reais de clientes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight text-foreground leading-[1.08]">
              Empresas reais que trocaram a{' '}
              <span className="brand-gradient">bagunça pela clareza.</span>
            </h2>
          </div>

          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:opacity-80 transition-opacity group shrink-0"
          >
            Ver todos os casos de sucesso
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Seletor de Clientes com scroll horizontal touch no mobile */}
        <div className="flex gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none sm:flex-wrap mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {realStories.map((story, idx) => (
            <button
              key={story.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 whitespace-nowrap ${
                activeIndex === idx
                  ? "brand-gradient-bg text-white shadow-md shadow-primary/20"
                  : "border border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {story.client}
            </button>
          ))}
        </div>

        {/* Card Principal da História Ativa */}
        <div className="rounded-2xl sm:rounded-3xl border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-8 lg:p-12 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Coluna Esquerda: Contexto + Antes e Depois */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  {active.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  {active.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display text-foreground leading-snug">
                “{active.headline}”
              </h3>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="rounded-xl sm:rounded-2xl border border-border/70 bg-background/50 p-4 sm:p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Como era antes
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {active.before}
                  </p>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block mb-1.5">
                    O que fizemos juntos
                  </span>
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                    {active.after}
                  </p>
                </div>
              </div>

              {active.image && (
                <SiteScreenshot
                  key={active.id}
                  src={active.image.src}
                  width={active.image.width}
                  height={active.image.height}
                  alt={`Projeto ${active.client} desenvolvido pela Nodeway`}
                  url={active.url}
                  sizes="(min-width: 1024px) 700px, 100vw"
                />
              )}
            </div>

            {/* Coluna Direita: Resultados Práticos */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-xl sm:rounded-2xl border border-border/80 bg-background/60 p-5 sm:p-7 space-y-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground block mb-1.5">
                  Impacto no dia a dia
                </span>
                <p className="text-xl sm:text-2xl lg:text-3xl font-display brand-gradient mb-4">
                  {active.metricHighlight}
                </p>

                <ul className="space-y-2.5 sm:space-y-3">
                  {active.results.map((res) => (
                    <li key={res} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-muted-foreground truncate">
                  Cliente: <strong className="text-foreground">{active.client}</strong>
                </span>
                <Link
                  href={`/cases/${active.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline shrink-0"
                >
                  Ver case
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

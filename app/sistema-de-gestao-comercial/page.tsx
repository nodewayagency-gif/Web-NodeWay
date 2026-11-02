import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Users,
  FileText,
  Boxes,
  Wallet,
  Percent,
  CalendarClock,
  Plug,
  Bot,
  ExternalLink,
} from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { FaqSection } from '@/components/seo/faq-section';
import { RelatedBlogPosts } from '@/components/seo/related-links';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { siteConfig, absoluteUrl, CRM_PLANOS_URL } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Sistema de Gestão Comercial e CRM',
  description:
    'CRM e gestão comercial: orçamentos, pedidos, estoque, financeiro e comissões, integrado ao seu ERP (Bling, Omie, Tiny). Não substitui o ERP fiscal.',
  keywords: [
    'sistema de gestão comercial',
    'CRM',
    'CRM de vendas',
    'sistema de orçamento e pedido',
    'controle de comissões',
    'gestão de clientes',
    'controle de estoque',
    'sistema integrado com Bling',
    'sistema de gestão para PME',
  ],
  alternates: { canonical: absoluteUrl('/sistema-de-gestao-comercial') },
  openGraph: {
    title: `Sistema de Gestão Comercial e CRM | ${siteConfig.name}`,
    description:
      'CRM, orçamentos, pedidos, estoque, financeiro e comissões em uma plataforma, conectada ao seu ERP. Teste grátis por 7 dias.',
    url: absoluteUrl('/sistema-de-gestao-comercial'),
  },
};

const modules = [
  { icon: Users, title: 'CRM e cadastro de clientes', desc: 'Centralize clientes e acompanhe cada oportunidade, do primeiro contato ao fechamento.' },
  { icon: FileText, title: 'Orçamentos e pedidos em PDF', desc: 'Monte o orçamento, converta em pedido e gere o PDF pronto para enviar.' },
  { icon: Percent, title: 'Comissões de vendedores', desc: 'Comissão básica em todos os planos e avançada por produto no Pro e Enterprise.' },
  { icon: CalendarClock, title: 'Agenda de atendimentos', desc: 'Organize retornos e compromissos junto do histórico comercial.' },
  { icon: Boxes, title: 'Controle de estoque', desc: 'Movimentações de entrada e saída com saldos sempre atualizados.' },
  { icon: Wallet, title: 'Financeiro', desc: 'Contas a receber e a pagar para acompanhar o caixa da operação comercial.' },
  { icon: Plug, title: 'Integração com ERP', desc: 'Sincronize com Bling, Omie ou Tiny para emissão fiscal centralizada.' },
  { icon: Bot, title: 'Equipe de vendas e maquininha', desc: 'Gestão de usuários, metas, controle de comissões e integração com Point.' },
];

const steps = [
  { n: '1', title: 'Cadastre clientes e produtos', desc: 'Uma base única, sem redigitar a mesma informação em vários lugares.' },
  { n: '2', title: 'Monte o orçamento', desc: 'Preços e produtos certos, com PDF pronto para enviar ao cliente.' },
  { n: '3', title: 'Converta em pedido', desc: 'Orçamento aprovado vira pedido com um clique, e o estoque acompanha.' },
  { n: '4', title: 'Sincronize com o ERP', desc: 'Os dados vão para o seu Bling/Omie/Tiny, onde a NF-e é emitida.' },
];

const faq = [
  {
    question: 'O que é um sistema de gestão comercial?',
    answer:
      'É a plataforma onde sua empresa gerencia o dia a dia da venda: clientes, produtos, orçamentos, pedidos, estoque, financeiro e comissões — em um só lugar, com as regras do seu negócio aplicadas automaticamente.',
  },
  {
    question: 'É um CRM?',
    answer:
      'Sim. Inclui CRM completo (clientes, leads, agenda de atendimentos e acompanhamento de propostas) e vai além, cobrindo estoque, compras, financeiro e comissões.',
  },
  {
    question: 'Substitui o meu ERP?',
    answer:
      'Não. Ele cuida da gestão comercial e se integra ao seu ERP (Bling, Omie ou Tiny). A emissão de NF-e e os pagamentos continuam no ERP.',
  },
  {
    question: 'Quais são os planos disponíveis?',
    answer:
      'Temos os planos Starter (R$ 69,90/mês), Pro (R$ 149,90/mês) e Enterprise (R$ 299,90/mês), além de 7 dias de teste grátis.',
  },
  {
    question: 'Tem teste grátis?',
    answer: 'Sim. Você pode experimentar os recursos por 7 dias grátis diretamente na plataforma.',
  },
];

const trialLink = CRM_PLANOS_URL;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sistema de Gestão Comercial e CRM',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: absoluteUrl('/sistema-de-gestao-comercial'),
  description:
    'Sistema de gestão comercial com CRM: orçamentos, pedidos, clientes, produtos, estoque, financeiro, comissões e equipe de vendas. Não emite NF-e nem processa pagamentos.',
  featureList: modules.map((m) => m.title),
  publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'BRL',
    lowPrice: 69.9,
    highPrice: 299.9,
    offerCount: 3,
    url: CRM_PLANOS_URL,
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: siteConfig.url },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sistema de Gestão Comercial e CRM',
      item: absoluteUrl('/sistema-de-gestao-comercial'),
    },
  ],
};

export default function SistemaGestaoComercialPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Produto
          </span>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6 leading-[1.05]">
            Sistema de <span className="brand-gradient">gestão comercial e CRM</span> para o seu dia a dia
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
            Orçamentos, pedidos, clientes, produtos, estoque, financeiro e comissões em uma única
            plataforma — conectada ao seu ERP. A gestão do dia a dia da sua empresa, sem planilhas
            soltas e sem trocar o seu sistema fiscal.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={CRM_PLANOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center justify-center gap-2 font-medium px-8 h-13 rounded-full"
            >
              Ver planos no CRM
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={CRM_PLANOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-border text-foreground font-medium px-8 h-13 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-primary" />
              Teste grátis por 7 dias
            </a>
          </div>
        </div>
      </section>

      {/* ── O que é ──────────────────────────────────────────── */}
      <section className="pb-16 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-display text-foreground mb-5">
            Gestão comercial e ERP: cada um no seu papel
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Muita empresa tenta usar o ERP fiscal para tudo — e acaba com um processo comercial
            travado. O nosso sistema resolve a parte que o ERP não foi feito para fazer: o{' '}
            <strong className="text-foreground font-medium">CRM</strong>, os orçamentos, os pedidos,
            o estoque, o financeiro e as comissões.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground font-medium">Não emitimos NF-e nem processamos
            pagamentos</strong> — isso continua no seu ERP (Bling, Omie ou Tiny). Nós cuidamos da
            operação comercial e sincronizamos os dados com ele.
          </p>
        </div>
      </section>

      {/* ── Recursos ─────────────────────────────────────────── */}
      <section className="pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-display text-foreground mb-8">Tudo que o sistema faz</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="flex flex-col rounded-2xl border border-border bg-card/30 p-6 hover:bg-card/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-display text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Como funciona ────────────────────────────────────── */}
      <section className="pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-display text-foreground mb-8">
          Do orçamento ao pedido, sem retrabalho
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card/30 p-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full brand-gradient-bg text-white font-display mb-4">
                {s.n}
              </span>
              <h3 className="text-base font-display text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Integração com ERP ───────────────────────────────── */}
      <section className="pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="rounded-3xl border border-border bg-card/30 p-8 lg:p-12">
          <h2 className="text-3xl font-display text-foreground mb-5">Integração com o seu ERP</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Cliente, produto e pedido cadastrados no sistema são sincronizados com o seu ERP — sem
            digitar a mesma coisa duas vezes. A nota fiscal e os pagamentos permanecem no ERP.
          </p>
          <ul className="grid sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { erp: 'Bling', plano: 'Planos Pro e Enterprise' },
              { erp: 'Omie', plano: 'Plano Enterprise' },
              { erp: 'Tiny', plano: 'Plano Enterprise' },
            ].map((i) => (
              <li key={i.erp} className="flex items-start gap-3 rounded-2xl border border-border bg-background/40 p-4">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <span className="block text-foreground font-medium">{i.erp}</span>
                  <span className="block text-xs text-muted-foreground">{i.plano}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="pb-8 px-5 sm:px-8 lg:px-16 max-w-[800px] mx-auto">
        <FaqSection faq={faq} title="Perguntas frequentes" />
      </section>

      {/* ── Cluster: artigos relacionados ────────────────────── */}
      <section className="pb-12 px-5 sm:px-8 lg:px-16 max-w-[800px] mx-auto">
        <RelatedBlogPosts
          slugs={[
            'o-que-e-crm-quando-empresa-precisa',
            'sistema-de-gestao-vs-planilha',
            'integrar-bling-sistema-de-gestao',
            'orcamento-pedido-comissao-processo-comercial',
          ]}
        />
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1000px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-display text-foreground mb-4">
              Organize sua operação comercial
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Acesse a página oficial do Nodeway CRM e comece agora com 7 dias grátis.
            </p>
            <a
              href={CRM_PLANOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center justify-center gap-2 font-medium px-8 h-14 rounded-full"
            >
              Conhecer planos no CRM
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  Sparkles,
  ArrowRight,
  Users,
  FileText,
  Boxes,
  Wallet,
  Percent,
  CalendarClock,
  Plug,
  Bot,
} from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { FaqSection } from '@/components/seo/faq-section';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { siteConfig, absoluteUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: `Sistema de Gestão Comercial e CRM — Planos e Preços | ${siteConfig.name}`,
  description:
    'CRM e gestão comercial: orçamentos, pedidos, clientes, estoque, financeiro e comissões, integrado ao seu ERP (Bling, Omie, Tiny). A partir de R$ 99/mês. Teste grátis 7 dias.',
  keywords: [
    'sistema de gestão comercial',
    'CRM',
    'CRM de vendas',
    'sistema de orçamento',
    'sistema de orçamento e pedido',
    'controle de comissões',
    'gestão de clientes',
    'gestão de vendas',
    'controle de estoque',
    'sistema integrado com Bling',
    'sistema de gestão para PME',
    'ERP Omie Tiny',
  ],
  alternates: { canonical: absoluteUrl('/planos') },
  openGraph: {
    title: `Sistema de Gestão Comercial e CRM — Planos e Preços | ${siteConfig.name}`,
    description:
      'CRM, orçamentos, pedidos, estoque, financeiro e comissões, integrados ao seu ERP. Planos Starter, Pro e Business. Teste grátis por 7 dias.',
    url: absoluteUrl('/planos'),
  },
};

// ── Módulos do sistema (para a seção de conteúdo e o featureList do schema) ──
const modules = [
  {
    icon: Users,
    title: 'CRM e cadastro de clientes',
    desc: 'Centralize seus clientes e acompanhe cada oportunidade, do primeiro contato ao fechamento do pedido.',
    plan: 'Todos os planos',
  },
  {
    icon: FileText,
    title: 'Orçamentos e pedidos em PDF',
    desc: 'Monte orçamentos, converta em pedido e gere o PDF pronto para enviar — sem retrabalho nem planilha.',
    plan: 'Todos os planos',
  },
  {
    icon: Percent,
    title: 'Comissões de vendedores',
    desc: 'Comissão básica em todos os planos e comissão avançada por produto nos planos Pro e Business.',
    plan: 'Todos os planos',
  },
  {
    icon: CalendarClock,
    title: 'Agenda de atendimentos',
    desc: 'Organize retornos e compromissos com clientes junto do histórico comercial.',
    plan: 'Pro e Business',
  },
  {
    icon: Boxes,
    title: 'Controle de estoque',
    desc: 'Registre movimentações de entrada e saída e mantenha os saldos sempre atualizados.',
    plan: 'Pro e Business',
  },
  {
    icon: Wallet,
    title: 'Financeiro',
    desc: 'Contas a receber e a pagar para acompanhar o caixa da operação comercial.',
    plan: 'Pro e Business',
  },
  {
    icon: Plug,
    title: 'Integração com seu ERP',
    desc: 'Sincronize dados com o Bling (Pro e Business) e com Omie ou Tiny no plano Business.',
    plan: 'Pro e Business',
  },
  {
    icon: Bot,
    title: 'Assistente de IA e multi-loja',
    desc: 'Assistente de IA (até 2.000 usos/mês), multi-loja e domínio próprio para operações maiores.',
    plan: 'Business',
  },
];

// ── Fonte de verdade: preços e recursos vêm do brief ────────────────────────
type Plan = {
  name: string;
  price: number;
  summary: string;
  featuresPrefix?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: 99,
    summary: 'O essencial para começar a vender com organização.',
    features: [
      'Vendas: orçamento → pedido → PDF',
      'Cadastro de Clientes',
      'Cadastro de Produtos',
      'Comissão básica de vendedores',
    ],
  },
  {
    name: 'Pro',
    price: 249,
    summary:
      'Gestão completa do dia a dia, com estoque, financeiro e integração ao seu ERP.',
    featuresPrefix: 'Tudo do Starter, e mais:',
    features: [
      'Agenda de atendimentos',
      'Financeiro (contas a receber e a pagar)',
      'Controle de estoque (movimentações)',
      'Comissão avançada por produto',
      'Integração com o Bling',
    ],
    highlighted: true,
    badge: 'Mais popular',
  },
  {
    name: 'Business',
    price: 599,
    summary: 'Para operações maiores e multi-loja, com IA e conectores extras.',
    featuresPrefix: 'Tudo do Pro, e mais:',
    features: [
      'Assistente de IA (até 2.000 usos por mês)',
      'Multi-loja',
      'Conectores extras de ERP (Omie, Tiny)',
      'Domínio próprio',
      'Suporte prioritário',
    ],
  },
];

type Cell = boolean | string;
const comparison: { feature: string; starter: Cell; pro: Cell; business: Cell }[] = [
  { feature: 'Vendas (orçamento → pedido → PDF)', starter: true, pro: true, business: true },
  { feature: 'Clientes', starter: true, pro: true, business: true },
  { feature: 'Produtos', starter: true, pro: true, business: true },
  { feature: 'Comissão básica', starter: true, pro: true, business: true },
  { feature: 'Agenda de atendimentos', starter: false, pro: true, business: true },
  { feature: 'Financeiro (a receber / a pagar)', starter: false, pro: true, business: true },
  { feature: 'Controle de estoque', starter: false, pro: true, business: true },
  { feature: 'Comissão avançada por produto', starter: false, pro: true, business: true },
  { feature: 'Integração com Bling', starter: false, pro: true, business: true },
  { feature: 'Assistente de IA', starter: false, pro: false, business: '2.000/mês' },
  { feature: 'Multi-loja', starter: false, pro: false, business: true },
  { feature: 'Conectores extras (Omie / Tiny)', starter: false, pro: false, business: true },
  { feature: 'Domínio próprio', starter: false, pro: false, business: true },
  { feature: 'Suporte prioritário', starter: false, pro: false, business: true },
];

const faq = [
  {
    question: 'É um CRM?',
    answer:
      'Sim. O sistema inclui CRM: cadastro de clientes, agenda de atendimentos e acompanhamento do funil de orçamentos e pedidos. E vai além do CRM tradicional, cobrindo também estoque, financeiro e comissões de vendedores.',
  },
  {
    question: 'Serve para gestão comercial e de vendas?',
    answer:
      'Sim. Você controla todo o fluxo de orçamento → pedido → PDF, o cadastro de clientes e produtos, o estoque e as comissões dos vendedores (básica no Starter; avançada por produto no Pro e Business).',
  },
  {
    question: 'O sistema substitui o meu ERP?',
    answer:
      'Não. Ele cuida da gestão comercial do dia a dia e se conecta ao seu ERP. A emissão de NF-e e os pagamentos continuam no ERP; nós sincronizamos os dados e cuidamos da operação comercial.',
  },
  {
    question: 'Com quais ERPs o sistema integra?',
    answer:
      'Com o Bling nos planos Pro e Business, e com o Omie e o Tiny no plano Business, para manter clientes, produtos e pedidos sincronizados.',
  },
  {
    question: 'Preciso ter um ERP para usar?',
    answer:
      'Não é obrigatório para começar, mas os planos Pro e Business integram com o Bling (e o Business com Omie/Tiny) para sincronizar seus dados.',
  },
  {
    question: 'A plataforma emite nota fiscal?',
    answer:
      'Não. A emissão de NF-e e os pagamentos continuam no seu ERP; nós cuidamos da gestão comercial e da integração.',
  },
  {
    question: 'Como funciona o teste grátis?',
    answer: 'Você usa todos os recursos do plano Pro por 7 dias, sem precisar de cartão.',
  },
  {
    question: 'Posso trocar de plano depois?',
    answer: 'Sim, o upgrade ou downgrade pode ser feito a qualquer momento.',
  },
];

// ── Links de WhatsApp com contexto do plano ─────────────────────────────────
function wa(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

const trialLink = wa('Olá! Quero começar o teste grátis de 7 dias.');
const teamLink = wa('Olá! Quero falar com o time sobre os planos.');
const subscribeLink = (p: Plan) =>
  wa(`Olá! Tenho interesse em assinar o plano ${p.name} (R$ ${p.price}/mês).`);

// ── Célula da tabela comparativa ────────────────────────────────────────────
function CompareCell({ value }: { value: Cell }) {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" aria-label="Incluído" />;
  if (value === false)
    return (
      <span className="text-muted-foreground/40" aria-label="Não incluído">
        —
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center gap-1.5 text-sm text-foreground">
      <Check className="w-4 h-4 text-primary shrink-0" />
      {value}
    </span>
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sistema de Gestão Comercial e CRM',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: absoluteUrl('/planos'),
  description:
    'Sistema de gestão comercial com CRM: orçamentos, pedidos, cadastro de clientes e produtos, controle de estoque, financeiro, comissões de vendedores e assistente de IA, integrado ao ERP (Bling, Omie, Tiny). Não emite NF-e nem processa pagamentos — isso continua no ERP do cliente.',
  featureList: [
    'CRM e cadastro de clientes',
    'Orçamentos e pedidos em PDF',
    'Cadastro de produtos',
    'Controle de estoque',
    'Financeiro (contas a receber e a pagar)',
    'Comissões de vendedores',
    'Agenda de atendimentos',
    'Integração com ERP (Bling, Omie, Tiny)',
    'Assistente de IA',
    'Multi-loja e domínio próprio',
  ],
  publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'BRL',
    lowPrice: 99,
    highPrice: 599,
    offerCount: plans.length,
    offers: plans.map((p) => ({
      '@type': 'Offer',
      name: `Plano ${p.name}`,
      price: p.price,
      priceCurrency: 'BRL',
      url: absoluteUrl('/planos'),
    })),
  },
};

export default function PlanosPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <section className="pt-32 pb-16 lg:pt-48 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Planos e Preços
          </span>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6 leading-[1.05]">
            Escolha o plano que <span className="brand-gradient">cresce com o seu negócio</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Gestão comercial completa — orçamentos, pedidos, estoque, financeiro e comissões —
            conectada ao seu ERP. Sem burocracia fiscal: a NF-e continua no seu Bling.
          </p>

          <div className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-4 text-sm text-muted-foreground">
            <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p>
              <span className="text-foreground font-medium">Teste grátis por 7 dias</span>, com todos
              os recursos do plano Pro. Sem cartão de crédito.
            </p>
          </div>
        </div>

        {/* ── Grade de 3 planos ────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const featured = plan.highlighted;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-6 lg:p-8 transition-colors ${
                  featured
                    ? 'brand-border bg-card/60 shadow-2xl shadow-primary/10 lg:-mt-4 lg:mb-4'
                    : 'border border-border bg-card/30'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full brand-gradient-bg text-white text-xs font-semibold px-4 py-1.5 shadow-lg shadow-primary/25 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </span>
                )}

                <h2 className="text-xl font-display text-foreground mb-2">{plan.name}</h2>

                <div className="mb-1 flex items-baseline gap-1.5">
                  <span className="text-4xl lg:text-5xl font-display text-foreground">
                    R$ {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">/mês</span>
                </div>
                <p className="text-xs text-muted-foreground/70 mb-5">por empresa · cobrança mensal</p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[40px]">
                  {plan.summary}
                </p>

                <a
                  href={subscribeLink(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 h-12 rounded-full font-medium transition-all mb-8 ${
                    featured
                      ? 'brand-gradient-bg text-white hover:opacity-90 shadow-lg shadow-primary/20'
                      : 'border border-border text-foreground hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  Assinar
                  <ArrowRight className="w-4 h-4" />
                </a>

                {plan.featuresPrefix && (
                  <p className="text-sm font-medium text-foreground mb-4">{plan.featuresPrefix}</p>
                )}
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground/70 mt-8">
          Valores em Real (R$), por empresa, com cobrança mensal.
        </p>
      </section>

      {/* ── Tabela comparativa ─────────────────────────────────── */}
      <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-display text-foreground mb-8 text-center">
          Compare os planos
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-sm font-medium text-muted-foreground">Recurso</th>
                {plans.map((p) => (
                  <th
                    key={p.name}
                    className={`p-4 text-center align-bottom ${
                      p.highlighted ? 'bg-primary/5' : ''
                    }`}
                  >
                    <span className="block font-display text-foreground">{p.name}</span>
                    <span className="block text-xs text-muted-foreground font-normal">
                      R$ {p.price}/mês
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border/60 ${i % 2 === 1 ? 'bg-card/20' : ''}`}
                >
                  <td className="p-4 text-sm text-foreground">{row.feature}</td>
                  <td className="p-4 text-center">
                    <CompareCell value={row.starter} />
                  </td>
                  <td className="p-4 text-center bg-primary/5">
                    <CompareCell value={row.pro} />
                  </td>
                  <td className="p-4 text-center">
                    <CompareCell value={row.business} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── O que o sistema faz (conteúdo de SEO) ──────────────── */}
      <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl lg:text-4xl font-display text-foreground mb-5 leading-tight">
            Um sistema de gestão comercial completo, do orçamento à comissão
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reúna <strong className="text-foreground font-medium">CRM</strong>, orçamentos, pedidos,
            cadastro de clientes e produtos, controle de estoque, financeiro e comissões de
            vendedores em uma única plataforma — conectada ao seu ERP. É a gestão comercial do dia a
            dia da sua empresa, sem planilhas soltas.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Sem burocracia fiscal: <strong className="text-foreground font-medium">não emitimos
            NF-e nem processamos pagamentos</strong> — isso continua no seu ERP (Bling, Omie ou
            Tiny). Nós cuidamos da operação comercial e sincronizamos os dados.
          </p>
        </div>

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
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{m.desc}</p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full border border-border px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                  {m.plan}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <Link
            href="/sistema-de-gestao-comercial"
            className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            Conheça o sistema de gestão comercial em detalhes
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="pb-8 px-5 sm:px-8 lg:px-16 max-w-[800px] mx-auto">
        <FaqSection faq={faq} title="Perguntas frequentes sobre o sistema" />
      </section>

      {/* ── CTA final ──────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1000px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-display text-foreground mb-4">
              Pronto para organizar suas vendas?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Comece hoje com 7 dias grátis ou fale com nosso time para tirar suas dúvidas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={trialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 brand-gradient-bg text-white font-medium px-8 h-14 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Começar teste grátis
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={teamLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-border text-foreground font-medium px-8 h-14 rounded-full hover:border-primary/50 hover:text-primary transition-colors w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar com o time
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

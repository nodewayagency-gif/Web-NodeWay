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
  LayoutTemplate,
  SlidersHorizontal,
  BarChart3,
  ShoppingCart,
  Lightbulb,
  Puzzle,
  Target,
  ClipboardList,
  Code2,
  Rocket,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { FaqSection } from '@/components/seo/faq-section';
import { RelatedBlogPosts } from '@/components/seo/related-links';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { siteConfig, absoluteUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Planos e Soluções — CRM, Landing Pages, BI e E-commerce',
  description:
    'CRM a partir de R$ 99/mês e soluções sob medida: landing pages, BI, e-commerce, customizações e consultoria — planos fixos e orçamento sob consulta.',
  keywords: [
    'sistema de gestão comercial',
    'CRM',
    'CRM de vendas',
    'CRM customizado',
    'sistema de orçamento e pedido',
    'controle de comissões',
    'gestão de clientes',
    'controle de estoque',
    'sistema integrado com Bling',
    'sistema de gestão para PME',
    'ERP Omie Tiny',
    'criação de landing page',
    'landing page com SEO',
    'relatórios em BI',
    'dashboards de dados',
    'desenvolvimento de e-commerce',
    'consultoria de sistemas',
    'customização de sistema',
  ],
  alternates: { canonical: absoluteUrl('/planos') },
  openGraph: {
    title: `Planos e Soluções — CRM, Landing Pages, BI e E-commerce | ${siteConfig.name}`,
    description:
      'CRM com planos fixos (Starter, Pro e Business) e demais linhas — landing pages, BI, e-commerce, customizações e consultoria — com orçamento sob consulta.',
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

// ── Links de WhatsApp com contexto ──────────────────────────────────────────
function wa(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

// ── Linhas de solução que atendemos ─────────────────────────────────────────
type Solution = {
  icon: typeof Users;
  title: string;
  desc: string;
  bullets: string[];
  priceLabel: string;
  priceNote?: string;
  cta: { label: string; href: string; external: boolean; primary?: boolean };
};

const solutions: Solution[] = [
  {
    icon: Users,
    title: 'CRM e Gestão Comercial',
    desc: 'Nosso sistema pronto para o comercial do dia a dia — do orçamento ao pedido, tudo em um só lugar.',
    bullets: [
      'Fluxo orçamento → pedido → PDF em 1 clique',
      'Integração com Bling, Omie e Tiny',
      'Teste grátis por 7 dias, sem cartão',
    ],
    priceLabel: 'A partir de R$ 99/mês',
    priceNote: 'planos e preços fixos',
    cta: { label: 'Ver planos do CRM', href: '#crm', external: false, primary: true },
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    desc: 'Páginas rápidas e feitas para converter, prontas para receber tráfego pago.',
    bullets: [
      'SEO técnico e performance otimizada',
      'Copy e design focados em conversão',
      'Pronta para tráfego pago (pixel, GA, WhatsApp)',
    ],
    priceLabel: 'Valor a consultar',
    priceNote: 'por projeto',
    cta: {
      label: 'Solicitar orçamento',
      href: wa('Olá! Tenho interesse em uma landing page com SEO. Podemos conversar?'),
      external: true,
    },
  },
  {
    icon: SlidersHorizontal,
    title: 'CRM Customizado',
    desc: 'O sistema se adapta à sua empresa — não o contrário. Regras, telas e rotinas do seu jeito.',
    bullets: [
      'Campos, telas e relatórios personalizados',
      'Automação das regras da sua operação',
      'Integração com as ferramentas que você já usa',
    ],
    priceLabel: 'Valor a consultar',
    priceNote: 'conforme demanda',
    cta: {
      label: 'Solicitar orçamento',
      href: wa('Olá! Quero um CRM customizado com rotinas personalizadas para a minha empresa.'),
      external: true,
    },
  },
  {
    icon: BarChart3,
    title: 'Relatórios em BI',
    desc: 'Seus dados virando decisão: dashboards com consulta direta ao banco dos seus sistemas.',
    bullets: [
      'Consulta direta ao banco dos seus sistemas',
      'KPIs de vendas, estoque e financeiro em tempo real',
      'Painéis em Power BI, Metabase ou sob medida',
    ],
    priceLabel: 'Valor a consultar',
    priceNote: 'por projeto',
    cta: {
      label: 'Solicitar orçamento',
      href: wa('Olá! Tenho interesse em relatórios e dashboards em BI. Podemos conversar?'),
      external: true,
    },
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Sua loja online, do catálogo ao checkout — fechando no WhatsApp ou em gateway de pagamento.',
    bullets: [
      'Checkout no WhatsApp ou com gateway de pagamento',
      'Cálculo de frete na cotação',
      'Catálogo, pedidos e pagamento integrados',
    ],
    priceLabel: 'Valor a consultar',
    priceNote: 'por projeto',
    cta: {
      label: 'Solicitar orçamento',
      href: wa('Olá! Quero desenvolver um e-commerce. Podemos conversar?'),
      external: true,
    },
  },
  {
    icon: Lightbulb,
    title: 'Consultoria e Customização Pontual',
    desc: 'Um ajuste específico ou uma direção técnica, sem precisar de um projeto grande.',
    bullets: [
      'Melhorias e ajustes pontuais no sistema',
      'Consultoria técnica e de processos',
      'Integrações e automações avulsas',
    ],
    priceLabel: 'Valor a consultar',
    priceNote: 'sob demanda',
    cta: {
      label: 'Falar com o time',
      href: wa('Olá! Preciso de consultoria / customização pontual no sistema.'),
      external: true,
    },
  },
];

// ── Selos de confiança (strip do hero) ──────────────────────────────────────
const trustBadges = [
  'CRM com teste grátis de 7 dias',
  'Diagnóstico e orçamento grátis em 24h',
  'Projetos 100% sob medida',
  'Sem fidelidade no CRM',
];

// ── Diferenciais (por que a Nodeway) ────────────────────────────────────────
const differentials = [
  {
    icon: Puzzle,
    title: 'Soluções sob medida',
    desc: 'Nada de fórmula pronta. Cada projeto é pensado para o seu cenário real — o sistema se adapta à empresa, não o contrário.',
  },
  {
    icon: Target,
    title: 'Foco em resultado e conversão',
    desc: 'Bonito e funcional não se excluem. Construímos com foco em performance e em gerar resultado mensurável.',
  },
  {
    icon: Plug,
    title: 'Integração com o que você já usa',
    desc: 'Conectamos ERPs, gateways, bancos de dados e APIs. Sua stack unificada, sem retrabalho.',
  },
  {
    icon: Lightbulb,
    title: 'Estratégia + execução técnica',
    desc: 'Pensamos o negócio antes de escrever a primeira linha de código. Visão de produto com mão na massa.',
  },
];

// ── Como funciona (linhas sob consulta) ─────────────────────────────────────
const processSteps = [
  {
    n: '1',
    title: 'Fale com a gente',
    desc: 'Conte seu desafio pelo WhatsApp. Respondemos rápido, sem robô e sem compromisso.',
  },
  {
    n: '2',
    title: 'Diagnóstico e proposta',
    desc: 'Em até 24h enviamos o diagnóstico com escopo, prazo e valor — de graça e sem compromisso.',
  },
  {
    n: '3',
    title: 'Desenvolvimento sob medida',
    desc: 'Construímos com validações no caminho, para o resultado sair exatamente como o combinado.',
  },
  {
    n: '4',
    title: 'Entrega e suporte',
    desc: 'Publicamos, orientamos o uso e seguimos com suporte e acompanhamento contínuo.',
  },
];

const processIcons = [WhatsAppIcon, ClipboardList, Code2, Rocket];

// ── Prova social: clientes e resultados reais (fonte: lib/data.ts cases) ─────
const clientNames = [
  'ILC',
  'Carmax Baterias',
  'Transporte Maurício',
  'JPB Joias',
  'JPB StoreX',
  'Newflexo',
  'Formento',
  'Primardi Saúde',
  'Vivre',
];

type Proof = { slug: string; client: string; tag: string; icon: typeof Users; result: string };
const featuredProof: Proof[] = [
  {
    slug: 'newflexo-crm',
    client: 'Newflexo',
    tag: 'CRM sob medida',
    icon: Users,
    result: 'Funil de vendas centralizado e fim dos leads esquecidos sem retorno.',
  },
  {
    slug: 'carmax-baterias',
    client: 'Carmax Baterias',
    tag: 'Landing Page + Tráfego',
    icon: LayoutTemplate,
    result: 'Landing pronta para tráfego pago, com contato em 1 clique no mobile.',
  },
  {
    slug: 'transporte-mauricio-bi',
    client: 'Transporte Maurício',
    tag: 'Relatórios em BI',
    icon: BarChart3,
    result: 'Custos por rota e frota transparentes para a diretoria, em tempo real.',
  },
  {
    slug: 'jpb-storex',
    client: 'JPB StoreX',
    tag: 'E-commerce',
    icon: ShoppingCart,
    result: 'Loja com checkout, cálculo de frete e pagamento 100% automatizados.',
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
    question: 'Como funciona o orçamento das soluções "sob consulta"?',
    answer:
      'Você fala com a gente pelo WhatsApp e conta o que precisa. Fazemos um diagnóstico do seu cenário e enviamos uma proposta com escopo, prazo e valor — sem compromisso. Só o CRM tem planos e preços fixos e públicos.',
  },
  {
    question: 'Quanto tempo leva para entregar um projeto?',
    answer:
      'Depende do escopo. Landing pages e ajustes pontuais costumam sair rápido; e-commerce, relatórios em BI e customizações têm o prazo definido na proposta, logo após o diagnóstico.',
  },
  {
    question: 'Vocês atendem a minha cidade?',
    answer:
      'Atendemos presencialmente em Cascavel e região (PR) e remotamente em todo o Brasil. Já entregamos projetos em Blumenau, Guanambi, Toledo e outras cidades.',
  },
  {
    question: 'Preciso já saber exatamente o que quero?',
    answer:
      'Não. No diagnóstico gratuito a gente ajuda a definir o melhor caminho para o seu objetivo antes de fechar o escopo e o valor.',
  },
  {
    question: 'As landing pages já vêm com SEO?',
    answer:
      'Sim. Entregamos com SEO técnico, meta tags completas, performance otimizada (Core Web Vitals) e estrutura pronta para campanhas de tráfego pago — feita para converter.',
  },
  {
    question: 'Como funciona o e-commerce de vocês?',
    answer:
      'Você escolhe entre checkout via WhatsApp ou integrado a um gateway de pagamento, com cálculo de frete na cotação e integração ao seu catálogo de produtos.',
  },
  {
    question: 'Para os relatórios em BI, vocês acessam meu banco de dados?',
    answer:
      'Sim, com a sua autorização fazemos consulta direta ao banco de dados dos seus sistemas para montar dashboards e relatórios sob medida para a gestão.',
  },
  {
    question: 'Qual a diferença entre o CRM pronto e o CRM customizado?',
    answer:
      'O CRM pronto tem planos e preços fixos (Starter, Pro e Business) e você já começa a usar. O CRM customizado adapta rotinas, telas e regras ao seu processo — escopo e valor sob demanda.',
  },
  {
    question: 'O CRM tem teste grátis?',
    answer:
      'Sim. Você usa todos os recursos do plano Pro por 7 dias, sem precisar de cartão de crédito.',
  },
  {
    question: 'O CRM substitui o meu ERP?',
    answer:
      'Não. Ele cuida da gestão comercial do dia a dia e se conecta ao seu ERP. A emissão de NF-e e os pagamentos continuam no ERP; nós sincronizamos os dados.',
  },
  {
    question: 'Com quais ERPs o CRM integra?',
    answer:
      'Com o Bling nos planos Pro e Business, e com o Omie e o Tiny no plano Business, para manter clientes, produtos e pedidos sincronizados.',
  },
  {
    question: 'Posso trocar de plano do CRM depois?',
    answer: 'Sim, o upgrade ou downgrade pode ser feito a qualquer momento.',
  },
  {
    question: 'Tem fidelidade ou contrato de permanência?',
    answer:
      'O CRM é mensal e sem fidelidade. Os projetos sob medida seguem o que for combinado na proposta.',
  },
  {
    question: 'Vocês dão suporte depois da entrega?',
    answer:
      'Sim. Oferecemos suporte e acompanhamento contínuo — tanto no CRM quanto nos projetos sob medida.',
  },
];

// ── Links de WhatsApp com contexto do plano ─────────────────────────────────
const trialLink = wa('Olá! Quero começar o teste grátis de 7 dias.');
const budgetLink = wa('Olá! Quero um orçamento sob medida para o meu projeto.');
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

const orgRef = { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url };

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Trilha de navegação (breadcrumb rich result)
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: siteConfig.url },
        { '@type': 'ListItem', position: 2, name: 'Planos e Soluções', item: absoluteUrl('/planos') },
      ],
    },
    // Produto CRM com preços (rich result de produto/software)
    {
      '@type': 'SoftwareApplication',
      name: 'Sistema de Gestão Comercial e CRM',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: `${absoluteUrl('/planos')}#crm`,
      description:
        'Sistema de gestão comercial com CRM: orçamentos, pedidos, cadastro de clientes e produtos, controle de estoque, financeiro, comissões de vendedores e assistente de IA, integrado ao ERP (Bling, Omie, Tiny). Não emite NF-e nem processa pagamentos — isso continua no ERP do cliente.',
      featureList: modules.map((m) => m.title),
      publisher: orgRef,
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
          url: `${absoluteUrl('/planos')}#crm`,
        })),
      },
    },
    // Catálogo de linhas de serviço (ajuda o Google a entender o escopo)
    {
      '@type': 'ItemList',
      name: 'Soluções e serviços da Nodeway Agency',
      itemListElement: solutions.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.desc,
          provider: orgRef,
          areaServed: { '@type': 'Country', name: 'Brasil' },
        },
      })),
    },
  ],
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
        {/* ── Breadcrumb ───────────────────────────────────────── */}
        <nav aria-label="Trilha de navegação" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <li className="text-foreground">Planos e Soluções</li>
          </ol>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Planos e Soluções
          </span>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6 leading-[1.05]">
            Soluções sob medida, do <span className="brand-gradient">CRM ao e-commerce</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            CRM com planos fixos e as demais linhas com orçamento sob consulta — tudo direto no
            WhatsApp.
          </p>

          <div className="mt-8 inline-flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-4 text-sm text-muted-foreground">
            <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p>
              <span className="text-foreground font-medium">CRM com teste grátis por 7 dias</span> e
              demais linhas com orçamento sob medida para a sua operação.
            </p>
          </div>
        </div>

        {/* ── Selos de confiança ───────────────────────────────── */}
        <ul className="flex flex-wrap gap-2.5 mb-10 lg:mb-12">
          {trustBadges.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-4 py-2 text-sm text-muted-foreground"
            >
              <Check className="w-4 h-4 text-primary shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        {/* ── Linhas de solução ────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col rounded-3xl border border-border bg-card/30 p-6 lg:p-7 hover:bg-card/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-display text-foreground mb-2">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>

                <ul className="space-y-2.5 mb-6">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="mb-4">
                    <span className="block text-base font-display text-foreground">
                      {s.priceLabel}
                    </span>
                    {s.priceNote && (
                      <span className="block text-xs text-muted-foreground/70">{s.priceNote}</span>
                    )}
                  </div>
                  <a
                    href={s.cta.href}
                    {...(s.cta.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={`inline-flex w-full items-center justify-center gap-2 h-11 rounded-full font-medium transition-all ${
                      s.cta.primary
                        ? 'cta-primary'
                        : 'border border-border text-foreground hover:border-primary/50 hover:text-primary'
                    }`}
                  >
                    {s.cta.external && <WhatsAppIcon className="w-4 h-4" />}
                    {s.cta.label}
                    {!s.cta.external && <ArrowRight className="w-4 h-4" />}
                  </a>
                  {s.cta.external && (
                    <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/80">
                      <Clock className="w-3.5 h-3.5 text-primary/80 shrink-0" />
                      Diagnóstico e orçamento grátis em 24h
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Diferenciais ───────────────────────────────────────── */}
      <section className="pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Por que a Nodeway
          </span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight text-foreground leading-tight">
            Tecnologia sob medida, feita para <span className="brand-gradient">gerar resultado</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="flex flex-col rounded-2xl border border-border bg-card/30 p-6 hover:bg-card/50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-display text-foreground mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Como funciona (linhas sob consulta) ────────────────── */}
      <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Como funciona
          </span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight text-foreground mb-4 leading-tight">
            Do primeiro contato à entrega, sem enrolação
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Para as linhas com orçamento sob consulta, o caminho é simples e transparente. O CRM,
            você já assina e começa a usar na hora.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {processSteps.map((s, i) => {
            const Icon = processIcons[i];
            return (
              <div key={s.n} className="relative rounded-2xl border border-border bg-card/30 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full brand-gradient-bg text-white font-display shrink-0">
                    {s.n}
                  </span>
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-display text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <a
            href={budgetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center justify-center gap-2.5 font-medium px-8 h-13 rounded-full"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Pedir um orçamento sob medida
          </a>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary/80 shrink-0" />
            Diagnóstico e orçamento grátis, sem compromisso, em até 24h.
          </p>
        </div>
      </section>

      {/* ── CRM: planos e preços fixos ─────────────────────────── */}
      <section
        id="crm"
        className="scroll-mt-24 pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto"
      >
        <div className="max-w-3xl mb-10 lg:mb-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            CRM · Planos e Preços
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight text-foreground mb-5 leading-[1.05]">
            Escolha o plano que <span className="brand-gradient">cresce com o seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Gestão comercial completa — orçamentos, pedidos, estoque, financeiro e comissões —
            conectada ao seu ERP. Sem burocracia fiscal: a NF-e continua no seu Bling.
          </p>
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
                      ? 'cta-primary'
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

      {/* ── Prova social: clientes e resultados reais ──────────── */}
      <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1200px] mx-auto">
        <div className="max-w-3xl mb-8 lg:mb-10">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Prova real
          </span>
          <h2 className="text-3xl lg:text-4xl font-display tracking-tight text-foreground mb-4 leading-tight">
            Resultados reais, <span className="brand-gradient">clientes reais</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Não falamos de tecnologia no vácuo. Veja o que já construímos para empresas como a
            sua — do CRM ao e-commerce.
          </p>
        </div>

        {/* Faixa de clientes */}
        <div className="mb-10 rounded-2xl border border-border bg-card/20 px-5 py-5">
          <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70 mb-3">
            Empresas que já contam com a Nodeway
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {clientNames.map((name) => (
              <li key={name} className="text-sm sm:text-base font-display text-foreground/80">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Cases em destaque, um por linha de produto */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProof.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.slug}
                href={`/cases/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card/30 p-6 hover:bg-card/50 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-9 h-9 rounded-lg border border-border flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <p className="text-base text-foreground leading-relaxed mb-5 flex-1">{p.result}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {p.client}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-8">
          <Link
            href="/cases"
            className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80 transition-opacity"
          >
            Ver todos os cases
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="pb-8 px-5 sm:px-8 lg:px-16 max-w-[800px] mx-auto">
        <FaqSection faq={faq} title="Perguntas frequentes" />
      </section>

      {/* ── Cluster: artigos relacionados ──────────────────────── */}
      <section className="pb-12 px-5 sm:px-8 lg:px-16 max-w-[800px] mx-auto">
        <RelatedBlogPosts
          slugs={[
            'landing-pages-alta-conversao',
            'bi-dados-decisoes-estrategicas',
            'o-que-e-crm-quando-empresa-precisa',
            'por-que-sistema-sob-medida-escala-sua-empresa',
          ]}
        />
      </section>

      {/* ── CTA final ──────────────────────────────────────────── */}
      <section className="pb-24 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1000px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-display text-foreground mb-4">
              Pronto para tirar seu projeto do papel?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Comece o CRM com 7 dias grátis ou peça um orçamento sob medida para as demais linhas —
              a gente responde no WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={trialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex items-center justify-center gap-2 font-medium px-8 h-14 rounded-full w-full sm:w-auto"
              >
                Começar teste grátis do CRM
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={budgetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-border text-foreground font-medium px-8 h-14 rounded-full hover:border-primary/50 hover:text-primary transition-colors w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Pedir orçamento sob medida
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

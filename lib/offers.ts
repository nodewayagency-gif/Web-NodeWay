import {
  Users,
  LayoutTemplate,
  ShoppingCart,
  BarChart3,
  SlidersHorizontal,
  Plug,
  type LucideIcon,
} from 'lucide-react';

/**
 * ============================================================================
 *  OFERTAS — landing pages de conversão para tráfego pago
 * ============================================================================
 *  Cada objeto aqui vira uma LP enxuta em /lp/[slug], focada em UMA oferta
 *  (message match com o anúncio). Para criar uma nova campanha, basta adicionar
 *  um item neste array — o template, o sitemap e a imagem OG se ajustam sozinhos.
 *
 *  Diferente de /planos (apresentação/catálogo) e /servicos (SEO): aqui o foco
 *  é converter — pouco texto, prova real e um CTA claro.
 * ============================================================================
 */

export interface OfferInclude {
  title: string;
  desc: string;
}

export interface OfferFaq {
  question: string;
  answer: string;
}

export interface Offer {
  slug: string;
  icon: LucideIcon;
  eyebrow: string;
  /** Headline em duas partes: lead normal + accent com gradiente de marca. */
  headlineLead: string;
  headlineAccent: string;
  subhead: string;
  ctaLabel: string;
  /** Mensagem pré-preenchida no WhatsApp (contexto da oferta). */
  whatsappMessage: string;
  /** Linha de reforço perto do CTA (preço ou promessa). */
  priceNote: string;
  /** CTA secundário opcional (ex.: "Ver planos" no CRM). */
  secondaryCta?: { label: string; href: string };
  /** 3 dores/objeções que a oferta resolve. */
  pains: string[];
  /** 3–4 itens do que está incluído/o que entregamos. */
  includes: OfferInclude[];
  /** Slugs de cases reais (lib/data.ts) usados como prova. */
  caseSlugs: string[];
  /** 3–4 perguntas frequentes (também viram FAQPage schema). */
  faq: OfferFaq[];
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogSubtitle: string;
}

export const offers: Offer[] = [
  {
    slug: 'crm',
    icon: Users,
    eyebrow: 'CRM e Gestão Comercial',
    headlineLead: 'Organize as vendas e',
    headlineAccent: 'pare de perder pedido',
    subhead:
      'Do orçamento ao pedido, com clientes, estoque, financeiro e comissões num sistema só. A partir de R$ 69,90/mês, com 7 dias grátis.',
    ctaLabel: 'Testar grátis por 7 dias',
    whatsappMessage: 'Olá! Quero testar o CRM / sistema de gestão comercial.',
    priceNote: 'A partir de R$ 69,90/mês · 7 dias grátis, sem cartão',
    secondaryCta: { label: 'Ver planos e preços', href: '/planos#crm' },
    pains: [
      'Orçamento no WhatsApp, pedido na planilha, cliente na cabeça de alguém',
      'Vendedor esquece de retornar e a venda esfria',
      'Comissão vira discussão todo fim de mês',
    ],
    includes: [
      { title: 'Orçamento → pedido → PDF', desc: 'Monte, aprove e envie em 1 clique, sem redigitar.' },
      { title: 'Clientes, estoque e financeiro', desc: 'Tudo em um lugar, com dado único e atualizado.' },
      { title: 'Comissões automáticas', desc: 'Básica ou por produto — o número sai sozinho.' },
      { title: 'Cobra na maquininha Point', desc: 'O pedido é cobrado direto na maquininha do Mercado Pago.' },
    ],
    caseSlugs: ['sistema-orcamento-etiquetas', 'formento-playgrounds'],
    faq: [
      {
        question: 'É um CRM mesmo?',
        answer:
          'Sim — clientes, funil de orçamentos e pedidos, agenda e comissões. E vai além, cobrindo estoque e financeiro.',
      },
      {
        question: 'Substitui o meu ERP?',
        answer:
          'Não. Ele cuida da gestão comercial; a NF-e continua no seu ERP. A integração com Bling, Omie e Tiny está em desenvolvimento.',
      },
      {
        question: 'Como funciona o teste grátis?',
        answer: 'São 7 dias com todos os recursos do plano Pro, sem precisar de cartão.',
      },
      {
        question: 'Quanto custa?',
        answer: 'A partir de R$ 69,90/mês, nos planos Starter (R$ 69,90), Pro (R$ 149,90) e Enterprise (R$ 299,90).',
      },
    ],
    metaTitle: 'CRM e Sistema de Gestão Comercial — Teste Grátis 7 Dias',
    metaDescription:
      'CRM com orçamentos, pedidos, estoque, financeiro, comissões e maquininha Point. A partir de R$ 69,90/mês. Teste grátis por 7 dias, sem cartão.',
    ogTitle: 'CRM e Gestão Comercial',
    ogSubtitle: 'A partir de R$ 69,90/mês · teste grátis por 7 dias',
  },
  {
    slug: 'landing-pages',
    icon: LayoutTemplate,
    eyebrow: 'Landing Pages',
    headlineLead: 'Uma landing page que',
    headlineAccent: 'converte o seu tráfego pago',
    subhead:
      'Página rápida, com SEO e feita pra vender — pronta pra receber seus anúncios sem jogar verba fora.',
    ctaLabel: 'Pedir orçamento no WhatsApp',
    whatsappMessage: 'Olá! Quero uma landing page de alta conversão.',
    priceNote: 'Diagnóstico e orçamento grátis em 24h',
    pains: [
      'Você paga anúncio, o cara clica e vai embora sem pedir orçamento',
      'Site lento derruba metade das visitas no celular',
      'Página confusa, cheia de link, sem foco em conversão',
    ],
    includes: [
      { title: 'Velocidade que segura o clique', desc: 'Carregamento instantâneo e foco total no mobile.' },
      { title: 'Estrutura que converte', desc: 'Hero, dores, prova, FAQ e CTA — sem distração.' },
      { title: 'SEO técnico completo', desc: 'Meta tags, performance e Core Web Vitals no ponto.' },
      { title: 'Pronta pra tráfego', desc: 'Pixel, Google Analytics e WhatsApp integrados.' },
    ],
    caseSlugs: ['carmax-baterias', 'legado-e-conforto'],
    faq: [
      {
        question: 'Em quanto tempo fica pronta?',
        answer:
          'Landing pages costumam ser rápidas; o prazo exato vai na proposta, logo após o diagnóstico.',
      },
      {
        question: 'Já vem com SEO?',
        answer: 'Sim: SEO técnico, meta tags e performance otimizada para campanhas.',
      },
      {
        question: 'Vocês cuidam do tráfego também?',
        answer:
          'Preparamos a página para tráfego pago e alinhamos com quem gerencia os seus anúncios.',
      },
      {
        question: 'Quanto custa?',
        answer: 'Sob consulta. Fazemos diagnóstico e orçamento grátis em até 24h.',
      },
    ],
    metaTitle: 'Criação de Landing Page de Alta Conversão',
    metaDescription:
      'Landing pages rápidas, com SEO e feitas para converter tráfego pago. Diagnóstico e orçamento grátis em 24h.',
    ogTitle: 'Landing Pages de Alta Conversão',
    ogSubtitle: 'Feitas pra vender · diagnóstico grátis em 24h',
  },
  {
    slug: 'ecommerce',
    icon: ShoppingCart,
    eyebrow: 'E-commerce',
    headlineLead: 'Sua loja online',
    headlineAccent: 'vendendo no automático',
    subhead:
      'Do catálogo ao checkout, fechando no WhatsApp ou em gateway de pagamento, com frete calculado na hora.',
    ctaLabel: 'Pedir orçamento no WhatsApp',
    whatsappMessage: 'Olá! Quero desenvolver um e-commerce.',
    priceNote: 'Diagnóstico e orçamento grátis em 24h',
    pains: [
      'Perde venda porque o cliente quer falar antes de pagar',
      'Frete errado comendo a sua margem',
      'Operação manual travando os pedidos',
    ],
    includes: [
      { title: 'Checkout do seu jeito', desc: 'No WhatsApp (alto ticket) ou com gateway de pagamento.' },
      { title: 'Frete na cotação', desc: 'Cálculo automático direto no carrinho.' },
      { title: 'Pagamento integrado', desc: 'Mercado Pago e outros, com transação segura.' },
      { title: 'Operação automatizada', desc: 'Catálogo, pedidos e logística rodando sozinhos.' },
    ],
    caseSlugs: ['jpb-storex', 'jpb-joias'],
    faq: [
      {
        question: 'Dá pra fechar no WhatsApp em vez de checkout?',
        answer:
          'Sim. Para alto ticket, o botão envia o produto e os dados direto ao vendedor, pronto pra fechar.',
      },
      {
        question: 'Integra com pagamento e frete?',
        answer: 'Sim — gateways (ex.: Mercado Pago) e cotação de frete (ex.: Melhor Envio).',
      },
      {
        question: 'Quanto custa?',
        answer: 'Sob consulta. Diagnóstico e orçamento grátis em até 24h.',
      },
    ],
    metaTitle: 'Desenvolvimento de E-commerce Sob Medida',
    metaDescription:
      'Loja virtual do catálogo ao checkout, com fechamento no WhatsApp ou gateway de pagamento e cálculo de frete. Orçamento grátis em 24h.',
    ogTitle: 'E-commerce Sob Medida',
    ogSubtitle: 'WhatsApp ou gateway · frete e pagamento integrados',
  },
  {
    slug: 'bi',
    icon: BarChart3,
    eyebrow: 'Relatórios em BI',
    headlineLead: 'Pare de decidir no achismo,',
    headlineAccent: 'decida com dados',
    subhead:
      'Dashboards com consulta direta ao banco dos seus sistemas — a saúde da empresa ao vivo, não em relatório de 3 dias.',
    ctaLabel: 'Pedir orçamento no WhatsApp',
    whatsappMessage: 'Olá! Quero relatórios e dashboards em BI.',
    priceNote: 'Diagnóstico e orçamento grátis em 24h',
    pains: [
      'Dado espalhado em vários sistemas e planilhas que não conversam',
      'Relatório que demora dias pra ficar pronto',
      'Ninguém enxerga onde está o prejuízo',
    ],
    includes: [
      { title: 'Consulta direta ao banco', desc: 'Conectamos seus sistemas por pipelines automatizados.' },
      { title: 'Painéis em tempo real', desc: 'Indicadores visuais de vendas, estoque e financeiro.' },
      { title: 'KPIs sob medida', desc: 'Os números que importam pra sua gestão, não genéricos.' },
      { title: 'Power BI, Metabase ou custom', desc: 'A ferramenta certa para o seu caso.' },
    ],
    caseSlugs: ['transporte-mauricio-bi', 'formento-playgrounds'],
    faq: [
      {
        question: 'Precisam acessar meu banco de dados?',
        answer: 'Sim, com a sua autorização, para montar os painéis com dado real.',
      },
      {
        question: 'Funciona com quais sistemas?',
        answer:
          'Conectamos ERPs, CRMs e planilhas via pipelines; usamos Power BI, Metabase ou painéis sob medida.',
      },
      {
        question: 'Quanto custa?',
        answer: 'Sob consulta. Diagnóstico e orçamento grátis em até 24h.',
      },
    ],
    metaTitle: 'Relatórios e Dashboards em BI (Business Intelligence)',
    metaDescription:
      'Dashboards e relatórios com consulta direta ao banco dos seus sistemas. Decisões com dados em tempo real. Orçamento grátis em 24h.',
    ogTitle: 'Relatórios em BI',
    ogSubtitle: 'Seus dados virando decisão · diagnóstico grátis em 24h',
  },
  {
    slug: 'sistemas-sob-medida',
    icon: SlidersHorizontal,
    eyebrow: 'Sistemas Sob Medida',
    headlineLead: 'Um sistema que se adapta',
    headlineAccent: 'à sua empresa',
    subhead:
      'Quando o software de prateleira trava a sua operação, a gente constrói exatamente o que o seu processo precisa.',
    ctaLabel: 'Pedir orçamento no WhatsApp',
    whatsappMessage: 'Olá! Preciso de um sistema sob medida para a minha empresa.',
    priceNote: 'Diagnóstico e orçamento grátis em 24h',
    pains: [
      'Você adapta a empresa ao sistema, e não o contrário',
      'Retrabalho e "exportar pro Excel" pra tudo',
      'Regras do seu negócio que nenhum sistema pronto atende',
    ],
    includes: [
      { title: 'Feito pro seu processo', desc: 'Telas, campos e regras do jeito que você opera.' },
      { title: 'Automação de verdade', desc: 'As suas regras rodando sozinhas, sem planilha paralela.' },
      { title: 'Integrado ao que você usa', desc: 'ERPs, APIs e ferramentas conectados.' },
      { title: 'Escala com você', desc: 'Arquitetura moderna que cresce junto com a operação.' },
    ],
    caseSlugs: ['sistema-orcamento-etiquetas', 'primardi-saude', 'formento-playgrounds'],
    faq: [
      {
        question: 'Quanto tempo leva?',
        answer:
          'Depende do escopo, definido no diagnóstico. Dá pra começar por um módulo e evoluir.',
      },
      {
        question: 'Vocês integram com o meu ERP?',
        answer: 'Sim — conectamos aos sistemas que você já usa.',
      },
      {
        question: 'Quanto custa?',
        answer: 'Sob consulta. Diagnóstico e orçamento grátis em até 24h.',
      },
    ],
    metaTitle: 'Desenvolvimento de Sistemas Sob Medida',
    metaDescription:
      'Sistemas sob medida que se adaptam ao seu processo — sem retrabalho e sem planilha paralela. Diagnóstico e orçamento grátis em 24h.',
    ogTitle: 'Sistemas Sob Medida',
    ogSubtitle: 'O sistema se adapta à empresa · orçamento grátis em 24h',
  },
  {
    slug: 'automacao',
    icon: Plug,
    eyebrow: 'Automação e Integrações',
    headlineLead: 'Chega de digitar a',
    headlineAccent: 'mesma coisa duas vezes',
    subhead:
      'Conectamos os seus sistemas e automatizamos as tarefas manuais que consomem o tempo do seu time.',
    ctaLabel: 'Pedir orçamento no WhatsApp',
    whatsappMessage: 'Olá! Quero automatizar processos / integrar meus sistemas.',
    priceNote: 'Diagnóstico e orçamento grátis em 24h',
    pains: [
      'Mesma informação digitada em três lugares diferentes',
      'Sistemas que não conversam entre si',
      'Tarefa manual repetitiva comendo o dia da equipe',
    ],
    includes: [
      { title: 'Integração entre sistemas', desc: 'ERP, e-commerce, pagamento, frete e APIs conectados.' },
      { title: 'Automação de rotinas', desc: 'O que era manual passa a rodar sozinho.' },
      { title: 'Menos erro, mais tempo', desc: 'Dado único, sem redigitação nem retrabalho.' },
      { title: 'Sob medida para o seu processo', desc: 'Trabalhamos com as ferramentas que você já tem.' },
    ],
    caseSlugs: ['jpb-storex', 'primardi-saude'],
    faq: [
      {
        question: 'Vocês integram com qual sistema?',
        answer:
          'ERPs, gateways, transportadoras, planilhas e APIs em geral — conforme a sua operação.',
      },
      {
        question: 'Dá pra automatizar só uma parte?',
        answer: 'Sim. Dá pra começar por um processo pontual e expandir.',
      },
      {
        question: 'Quanto custa?',
        answer: 'Sob consulta. Diagnóstico e orçamento grátis em até 24h.',
      },
    ],
    metaTitle: 'Automação de Processos e Integração de Sistemas',
    metaDescription:
      'Integramos os seus sistemas e automatizamos tarefas manuais — menos retrabalho, mais tempo. Diagnóstico e orçamento grátis em 24h.',
    ogTitle: 'Automação e Integrações',
    ogSubtitle: 'Seus sistemas conversando · orçamento grátis em 24h',
  },
];

export const getOffer = (slug: string) => offers.find((o) => o.slug === slug);

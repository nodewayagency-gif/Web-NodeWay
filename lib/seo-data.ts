export type PresenceStatus = 'sede' | 'cliente_ativo' | 'em_expansao' | 'nacional';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  title: string;
  content: string;
}

export interface LocalClient {
  clientName: string;
  sector: string;
  solutions: string[];
  caseSlug: string;
  relatedServiceSlugs: string[];
}

export interface ServicePillar {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  sections: ContentSection[];
  faq: FaqItem[];
  relatedCaseSlugs: string[];
  relatedBlogSlugs: string[];
}

export interface CityHub {
  slug: string;
  name: string;
  state: string;
  region: string;
  presenceStatus: PresenceStatus;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  localIntro: string;
  highlights: string[];
  clients: LocalClient[];
  faq: FaqItem[];
}

export const BASE_URL = 'https://nodewayagency.com.br';

export const servicePillars: ServicePillar[] = [
  {
    slug: 'desenvolvimento-web',
    title: 'Desenvolvimento Web',
    h1: 'Desenvolvimento Web sob medida para empresas que querem escalar',
    metaDescription:
      'Desenvolvimento web com Next.js, performance e SEO. A Nodeway Agency cria plataformas digitais em Cascavel, Blumenau, Guanambi e todo o Brasil.',
    intro:
      'Construímos sites e plataformas web com foco em performance, SEO e conversão. Cada projeto é pensado para o seu negócio — sem templates limitados.',
    sections: [
      {
        title: 'Por que desenvolvimento web sob medida?',
        content:
          'Sites genéricos atendem até certo ponto. Quando sua operação exige fluxos específicos, integrações ou posicionamento de marca diferenciado, um desenvolvimento web dedicado elimina gargalos e abre espaço para crescimento orgânico e pago.',
      },
      {
        title: 'Como a Nodeway desenvolve',
        content:
          'Utilizamos Next.js, React e arquitetura moderna em nuvem. Entregamos páginas rápidas, responsivas e preparadas para indexação no Google — com atendimento presencial em Cascavel e remoto para todo o Brasil.',
      },
      {
        title: 'Projetos reais',
        content:
          'Já desenvolvemos plataformas para o ILC - Instituto Legado e Conforto em Cascavel e landing pages de alta conversão para a Carmax Baterias, com foco em tráfego e SEO local.',
      },
    ],
    faq: [
      {
        question: 'A Nodeway atende empresas fora de Cascavel?',
        answer:
          'Sim. Temos sede em Cascavel/PR e atendemos clientes em Blumenau, Guanambi, Toledo, Curitiba e em todo o Brasil de forma remota.',
      },
      {
        question: 'Quanto tempo leva um projeto web?',
        answer:
          'Depende do escopo. Landing pages podem sair em semanas; plataformas completas exigem planejamento maior. Fazemos diagnóstico gratuito antes de qualquer proposta.',
      },
    ],
    relatedCaseSlugs: ['legado-e-conforto', 'carmax-baterias'],
    relatedBlogSlugs: ['landing-pages-alta-conversao'],
  },
  {
    slug: 'sistemas-sob-medida',
    title: 'Sistemas Sob Medida',
    h1: 'Sistemas sob medida que se adaptam ao seu processo',
    metaDescription:
      'Desenvolvimento de sistemas personalizados: CRM, orçamentos, ERPs e plataformas operacionais. Nodeway Agency — Cascavel, Blumenau, Guanambi e Brasil.',
    intro:
      'Software que segue a lógica do seu negócio — não o contrário. Automatizamos orçamentos, pedidos, CRM, licitações e operações complexas.',
    sections: [
      {
        title: 'O problema dos sistemas de prateleira',
        content:
          'Planilhas e ERPs genéricos geram retrabalho, erros e falta de visibilidade. Um sistema sob medida centraliza a operação e aplica suas regras de negócio automaticamente.',
      },
      {
        title: 'O que já entregamos',
        content:
          'CRM para Consultor Newflexo em Cascavel, plataforma de orçamentos e kits para Formento Playgrounds em Blumenau, e sistemas integrados de teleatendimento, licitações e fiscal para Primardi Saúde e Vivre em Guanambi/BA.',
      },
      {
        title: 'Tecnologia e escala',
        content:
          'Stack moderna com React, Next.js e bancos em nuvem. Sistemas preparados para crescer com sua empresa, com integrações via API quando necessário.',
      },
    ],
    faq: [
      {
        question: 'Sistema sob medida é viável para PMEs?',
        answer:
          'Sim. Com arquitetura moderna, o custo e prazo de desenvolvimento caíram muito. Muitos dos nossos clientes são empresas em crescimento no interior do Brasil.',
      },
      {
        question: 'Vocês integram com sistemas que já uso?',
        answer:
          'Sim. Conectamos ERPs, gateways de pagamento, APIs fiscais e ferramentas de logística conforme a necessidade do projeto.',
      },
    ],
    relatedCaseSlugs: [
      'newflexo-crm',
      'formento-playgrounds',
      'primardi-saude',
      'vivre-produtos-hospitalares',
      'sistema-orcamento-etiquetas',
    ],
    relatedBlogSlugs: ['por-que-sistema-sob-medida-escala-sua-empresa'],
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce',
    h1: 'E-commerce de alta conversão e operação automatizada',
    metaDescription:
      'Lojas virtuais sob medida com WhatsApp, Mercado Pago e logística integrada. Cases JPB Joias e JPB StoreX em Cascavel pela Nodeway Agency.',
    intro:
      'E-commerce que vende de verdade — seja com checkout tradicional ou fluxo híbrido via WhatsApp para produtos de alto ticket.',
    sections: [
      {
        title: 'E-commerce para cada modelo de negócio',
        content:
          'Joias de alto valor pedem atendimento humano; produtos de volume pedem automação total. Desenhamos o fluxo certo para o seu ticket médio e público.',
      },
      {
        title: 'Integrações que importam',
        content:
          'Mercado Pago, Melhor Envio, cálculo de frete dinâmico, split de pagamento e rastreamento. A JPB StoreX opera com checkout transparente e logística automatizada em Cascavel.',
      },
      {
        title: 'Conversão acima de tudo',
        content:
          'A JPB Joias usa vitrine de luxo com direcionamento para WhatsApp — aumentando conversão em produtos premium sem sacrificar a experiência.',
      },
    ],
    faq: [
      {
        question: 'Vocês fazem e-commerce com fechamento no WhatsApp?',
        answer:
          'Sim. Para nichos de alto ticket, customizamos o fluxo para enviar leads qualificados direto ao vendedor com produto e UTMs pré-preenchidos.',
      },
    ],
    relatedCaseSlugs: ['jpb-joias', 'jpb-storex'],
    relatedBlogSlugs: [],
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    h1: 'Landing pages de alta conversão e prontas para tráfego pago',
    metaDescription:
      'Landing pages rápidas, mobile-first e otimizadas para Google Ads e SEO. Case Carmax Baterias — Nodeway Agency, Cascavel e Brasil.',
    intro:
      'Páginas focadas em uma única conversão: orçamento, ligação ou WhatsApp. Velocidade, copy e CTA pensados para campanhas de tráfego.',
    sections: [
      {
        title: 'Landing page não é site institucional',
        content:
          'Sem menu distraindo, sem links desnecessários. Uma promessa clara, prova social e botão de ação. É assim que convertemos visitantes de anúncios em leads.',
      },
      {
        title: 'Performance é conversão',
        content:
          'Usamos Next.js para entregar páginas instantâneas no mobile — crítico quando 90% do tráfego de urgência vem do celular, como no case da Carmax Baterias.',
      },
    ],
    faq: [
      {
        question: 'Landing page serve para SEO também?',
        answer:
          'Sim. Além de campanhas pagas, estruturamos a página para ranquear em buscas locais e de intenção comercial.',
      },
    ],
    relatedCaseSlugs: ['carmax-baterias'],
    relatedBlogSlugs: ['landing-pages-alta-conversao'],
  },
  {
    slug: 'bi-dados',
    title: 'BI e Dados',
    h1: 'Business Intelligence e painéis de dados para decisões em tempo real',
    metaDescription:
      'Painéis de BI, dashboards e inteligência de dados. Cases Transporte Maurício (Toledo) e Formento Playgrounds (Blumenau) — Nodeway Agency.',
    intro:
      'Transformamos dados espalhados em painéis visuais que a diretoria entende — sem esperar relatórios manuais de dias.',
    sections: [
      {
        title: 'Dados que não conversam são custo',
        content:
          'ERPs, planilhas e sistemas legados geram volume, mas não insight. Conectamos as fontes e montamos indicadores em tempo real.',
      },
      {
        title: 'Cases reais de BI',
        content:
          'Para o Transporte Maurício em Toledo/PR, criamos painéis de frota, rotas e custos. Para a Formento em Blumenau, indicadores comerciais e operacionais integrados ao sistema de pedidos.',
      },
    ],
    faq: [
      {
        question: 'Preciso trocar meu ERP para ter BI?',
        answer:
          'Não necessariamente. Conectamos aos bancos e APIs existentes e montamos camadas de visualização por cima da sua operação atual.',
      },
    ],
    relatedCaseSlugs: ['transporte-mauricio-bi', 'formento-playgrounds'],
    relatedBlogSlugs: ['bi-dados-decisoes-estrategicas'],
  },
  {
    slug: 'integracoes-automacao',
    title: 'Integrações e Automação',
    h1: 'Integrações e automação de processos empresariais',
    metaDescription:
      'Automatize compras, fiscal, licitações, pagamentos e logística. Nodeway integra sistemas em Guanambi, Cascavel, Blumenau e todo o Brasil.',
    intro:
      'Eliminamos tarefas manuais conectando ferramentas, APIs e fluxos operacionais — do teleatendimento ao faturamento fiscal.',
    sections: [
      {
        title: 'Automação que libera o time',
        content:
          'Quando setores não conversam, surgem retrabalho e erro humano. Integramos módulos de compras, fiscal, licitações e atendimento em uma operação fluida.',
      },
      {
        title: 'Onde já aplicamos',
        content:
          'Primardi Saúde e Vivre em Guanambi/BA com teleatendimento, licitações e fiscal integrados. JPB StoreX com Mercado Pago e logística automatizada em Cascavel.',
      },
    ],
    faq: [
      {
        question: 'Vocês automatizam processos em empresas do interior?',
        answer:
          'Sim. Guanambi/BA é um dos nossos cases — prova de que atendemos e entregamos fora dos grandes centros, com suporte remoto contínuo.',
      },
    ],
    relatedCaseSlugs: ['primardi-saude', 'vivre-produtos-hospitalares', 'jpb-storex'],
    relatedBlogSlugs: [],
  },
];

export const cityHubs: CityHub[] = [
  {
    slug: 'cascavel',
    name: 'Cascavel',
    state: 'PR',
    region: 'Oeste do Paraná',
    presenceStatus: 'sede',
    metaTitle: 'Agência de Desenvolvimento em Cascavel | Nodeway Agency',
    metaDescription:
      'Sede Nodeway em Cascavel/PR. Desenvolvimento web, e-commerce, CRM e landing pages. Clientes: ILC, JPB, Carmax, Newflexo.',
    h1: 'Desenvolvimento digital em Cascavel',
    localIntro:
      'Cascavel é a sede da Nodeway Agency. Aqui desenvolvemos e acompanhamos de perto projetos para empresas da região oeste do Paraná — com atendimento presencial e remoto para todo o Brasil.',
    highlights: [
      'Sede da Nodeway Agency',
      'Atendimento presencial e remoto',
      '5 clientes ativos na cidade',
      'Especialistas em Next.js, e-commerce e sistemas sob medida',
    ],
    clients: [
      {
        clientName: 'ILC - Instituto Legado e Conforto',
        sector: 'Plataforma web / saúde emocional',
        solutions: ['Plataforma web sensível', 'Alta performance', 'UX acolhedora'],
        caseSlug: 'legado-e-conforto',
        relatedServiceSlugs: ['desenvolvimento-web'],
      },
      {
        clientName: 'JPB Joias',
        sector: 'E-commerce de joias',
        solutions: ['Loja virtual premium', 'Checkout via WhatsApp', 'Vitrine de luxo'],
        caseSlug: 'jpb-joias',
        relatedServiceSlugs: ['e-commerce'],
      },
      {
        clientName: 'JPB StoreX',
        sector: 'E-commerce',
        solutions: ['Mercado Pago', 'Melhor Envio', 'Checkout automatizado'],
        caseSlug: 'jpb-storex',
        relatedServiceSlugs: ['e-commerce', 'integracoes-automacao'],
      },
      {
        clientName: 'Consultor Newflexo',
        sector: 'Consultoria comercial',
        solutions: ['CRM sob medida', 'Pipeline de vendas', 'Gestão de follow-ups'],
        caseSlug: 'newflexo-crm',
        relatedServiceSlugs: ['sistemas-sob-medida'],
      },
      {
        clientName: 'Carmax Baterias',
        sector: 'Automotivo / baterias',
        solutions: ['Landing page de conversão', 'SEO local', 'Tráfego pago'],
        caseSlug: 'carmax-baterias',
        relatedServiceSlugs: ['landing-pages', 'desenvolvimento-web'],
      },
    ],
    faq: [
      {
        question: 'A Nodeway tem escritório em Cascavel?',
        answer: 'Sim. Cascavel/PR é a sede da Nodeway Agency, com atendimento presencial e reuniões agendadas.',
      },
      {
        question: 'Vocês atendem outras cidades além de Cascavel?',
        answer:
          'Sim. Temos clientes em Blumenau, Guanambi, Toledo e atendemos empresas em todo o Brasil remotamente.',
      },
    ],
  },
  {
    slug: 'blumenau',
    name: 'Blumenau',
    state: 'SC',
    region: 'Vale do Itajaí',
    presenceStatus: 'cliente_ativo',
    metaTitle: 'Desenvolvimento de Sistemas em Blumenau | Nodeway Agency',
    metaDescription:
      'Nodeway atende Blumenau/SC. Case Formento Playgrounds: orçamentos, kits de produtos, pedidos e indicadores. Sistemas sob medida.',
    h1: 'Desenvolvimento de sistemas em Blumenau',
    localIntro:
      'Já entregamos soluções para empresas de Blumenau/SC. A Formento Indústria e Comércio de Playgrounds opera com nosso sistema de orçamentos, kits, pedidos e indicadores — com suporte remoto contínuo da Nodeway.',
    highlights: [
      'Cliente ativo: Formento Playgrounds',
      'Orçamentos e kits de produtos automatizados',
      'Geração de pedidos integrada',
      'Painéis de indicadores comerciais',
    ],
    clients: [
      {
        clientName: 'Formento Indústria e Comércio de Playgrounds',
        sector: 'Indústria de playgrounds',
        solutions: [
          'Orçamentos dinâmicos',
          'Criação de kits de produtos',
          'Geração de pedidos',
          'Painéis de indicadores',
        ],
        caseSlug: 'formento-playgrounds',
        relatedServiceSlugs: ['sistemas-sob-medida', 'bi-dados'],
      },
    ],
    faq: [
      {
        question: 'A Nodeway tem equipe presencial em Blumenau?',
        answer:
          'O atendimento é remoto com entregas já em operação na cidade. Reuniões online e acompanhamento contínuo fazem parte do modelo.',
      },
    ],
  },
  {
    slug: 'guanambi',
    name: 'Guanambi',
    state: 'BA',
    region: 'Sudoeste da Bahia',
    presenceStatus: 'cliente_ativo',
    metaTitle: 'Sistemas para Empresas em Guanambi | Nodeway Agency',
    metaDescription:
      'Nodeway atende Guanambi/BA. Cases Primardi Saúde e Vivre: teleatendimento, licitações, faturamento fiscal e compras para distribuição.',
    h1: 'Desenvolvimento de sistemas em Guanambi',
    localIntro:
      'No interior da Bahia, a Nodeway já entrega soluções para duas empresas de Guanambi — Primardi Saúde e Vivre Comércio de Produtos Hospitalares — com módulos de teleatendimento, licitações, fiscal e compras integrados.',
    highlights: [
      '2 clientes ativos em Guanambi',
      'Distribuição de medicamentos e produtos hospitalares',
      'Teleatendimento e licitações integrados',
      'Faturamento fiscal e compras automatizados',
    ],
    clients: [
      {
        clientName: 'Primardi Saúde',
        sector: 'Distribuição de medicamentos',
        solutions: ['Teleatendimento', 'Licitações', 'Faturamento e fiscal', 'Compras'],
        caseSlug: 'primardi-saude',
        relatedServiceSlugs: ['sistemas-sob-medida', 'integracoes-automacao'],
      },
      {
        clientName: 'Vivre Comércio de Produtos Hospitalares LTDA',
        sector: 'Produtos hospitalares',
        solutions: ['Teleatendimento', 'Licitações', 'Faturamento e fiscal', 'Compras'],
        caseSlug: 'vivre-produtos-hospitalares',
        relatedServiceSlugs: ['sistemas-sob-medida', 'integracoes-automacao'],
      },
    ],
    faq: [
      {
        question: 'Vocês desenvolvem sistemas para o interior da Bahia?',
        answer:
          'Sim. Guanambi é um dos nossos cases ativos, com soluções completas para distribuidoras do setor de saúde.',
      },
    ],
  },
  {
    slug: 'toledo',
    name: 'Toledo',
    state: 'PR',
    region: 'Oeste do Paraná',
    presenceStatus: 'cliente_ativo',
    metaTitle: 'BI e Desenvolvimento em Toledo | Nodeway Agency',
    metaDescription:
      'Nodeway atende Toledo/PR. Case Transporte Maurício: painéis de B.I. logístico, frota, rotas e custos em tempo real.',
    h1: 'Business Intelligence em Toledo',
    localIntro:
      'Em Toledo/PR, a Nodeway implementou painéis de Business Intelligence para o Transporte Maurício — com indicadores de frota, rotas e custos operacionais em tempo real.',
    highlights: [
      'Cliente ativo: Transporte Maurício',
      'Painéis de BI logístico',
      'Indicadores de frota e rotas',
      'Dados em tempo real para diretoria',
    ],
    clients: [
      {
        clientName: 'Transporte Maurício',
        sector: 'Transporte e logística',
        solutions: ['Painéis de B.I.', 'Indicadores de frota', 'Análise de rotas e custos'],
        caseSlug: 'transporte-mauricio-bi',
        relatedServiceSlugs: ['bi-dados'],
      },
    ],
    faq: [
      {
        question: 'A Nodeway atende transportadoras em Toledo?',
        answer:
          'Sim. O Transporte Maurício é nosso case ativo na cidade, com dashboards de inteligência de dados para gestão de frota.',
      },
    ],
  },
  {
    slug: 'curitiba',
    name: 'Curitiba',
    state: 'PR',
    region: 'Paraná',
    presenceStatus: 'em_expansao',
    metaTitle: 'Desenvolvimento Web em Curitiba | Nodeway Agency',
    metaDescription:
      'Nodeway Agency em expansão para Curitiba/PR. Desenvolvimento web, sistemas sob medida e BI. Cases em Cascavel, Toledo e Blumenau.',
    h1: 'Desenvolvimento digital em Curitiba',
    localIntro:
      'Estamos em expansão para Curitiba e a região metropolitana. Com sede em Cascavel e cases em Toledo, Blumenau e Guanambi, trazemos a mesma capacidade técnica para empresas curitibanas — presencialmente ou remoto.',
    highlights: [
      'Expansão ativa para Curitiba',
      'Sede em Cascavel a 2h30 de Curitiba',
      'Cases comprovados no Paraná e Brasil',
      'Aceitando novos projetos na região',
    ],
    clients: [],
    faq: [
      {
        question: 'A Nodeway já tem clientes em Curitiba?',
        answer:
          'Estamos em fase de expansão para Curitiba. Nossos cases ativos estão em Cascavel, Toledo, Blumenau e Guanambi — com atendimento remoto imediato para a capital.',
      },
    ],
  },
  {
    slug: 'brasil',
    name: 'Brasil',
    state: '',
    region: 'Nacional',
    presenceStatus: 'nacional',
    metaTitle: 'Desenvolvimento para Todo o Brasil | Nodeway Agency',
    metaDescription:
      'Nodeway Agency atende empresas em todo o Brasil. Cascavel, Blumenau, Guanambi, Toledo, Curitiba. Sistemas, e-commerce, BI e landing pages.',
    h1: 'Desenvolvimento digital para todo o Brasil',
    localIntro:
      'De Cascavel ao interior da Bahia — a Nodeway entrega soluções digitais em múltiplas regiões e segue em expansão. Atendimento remoto com a mesma qualidade técnica, independente da cidade.',
    highlights: [
      'Presença em PR, SC e BA',
      'Atendimento 100% remoto disponível',
      'Em expansão para novas regiões',
      'Sistemas, e-commerce, BI e landing pages',
    ],
    clients: [],
    faq: [
      {
        question: 'Posso contratar a Nodeway de qualquer cidade?',
        answer:
          'Sim. Atendemos empresas em todo o Brasil remotamente. Temos sede em Cascavel/PR e clientes ativos em Blumenau, Guanambi e Toledo.',
      },
    ],
  },
];

export function getServicePillar(slug: string) {
  return servicePillars.find((p) => p.slug === slug);
}

export function getCityHub(slug: string) {
  return cityHubs.find((c) => c.slug === slug);
}

export const presenceStatusLabels: Record<PresenceStatus, string> = {
  sede: 'Sede',
  cliente_ativo: 'Cliente ativo',
  em_expansao: 'Em expansão',
  nacional: 'Nacional',
};

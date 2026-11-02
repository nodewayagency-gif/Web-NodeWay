import { siteConfig } from './site-config';

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
  /** Blocos de conteúdo local único (SEO) renderizados na página da cidade. */
  sections?: ContentSection[];
  highlights: string[];
  clients: LocalClient[];
  faq: FaqItem[];
}

export const BASE_URL = siteConfig.url;

export const servicePillars: ServicePillar[] = [
  {
    slug: 'desenvolvimento-web',
    title: 'Desenvolvimento Web',
    h1: 'Desenvolvimento Web sob medida para empresas que querem escalar',
    metaDescription:
      'Desenvolvimento web sob medida, performance e SEO. A Nodeway Agency cria plataformas digitais em Cascavel, Blumenau, Guanambi e todo o Brasil.',
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
          'Desenvolvemos com arquitetura moderna e segura em nuvem. Entregamos páginas rápidas, responsivas e preparadas para indexação no Google — com atendimento presencial em Cascavel e remoto para todo o Brasil.',
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
          'Engenharia moderna, segura e com bancos em nuvem. Sistemas preparados para crescer com sua empresa, com integrações via API quando necessário.',
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
    relatedBlogSlugs: ['landing-pages-alta-conversao', 'o-custo-de-nao-investir-no-sistema-certo'],
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
          'Desenvolvemos com foco em alta performance para entregar páginas instantâneas no mobile — crítico quando 90% do tráfego de urgência vem do celular, como no case da Carmax Baterias.',
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
    relatedBlogSlugs: ['integrar-bling-sistema-de-gestao', 'orcamento-pedido-comissao-processo-comercial'],
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
      'Cascavel é a sede da Nodeway Agency e nosso ponto de partida no Oeste do Paraná — polo do agronegócio, da indústria e do comércio regional. Aqui construímos e acompanhamos de perto sistemas sob medida, e-commerces e landing pages para empresas cascavelenses, com atendimento presencial na cidade e remoto para todo o Brasil.',
    sections: [
      {
        title: 'Tecnologia sob medida para o agro, a indústria e o comércio de Cascavel',
        content:
          'Cascavel é o principal polo econômico do Oeste do Paraná, com base sólida no agronegócio — soja, milho, trigo e a produção de frango e suínos — somada a uma indústria forte de alimentos, metalurgia e confecção e a um comércio regional com milhares de estabelecimentos. Esse perfil gera empresas que crescem rápido e logo esbarram em planilhas e processos manuais. É aí que entramos: desenvolvemos sistemas sob medida em Cascavel para orçamentos, pedidos, estoque e gestão comercial, além de dashboards de BI que transformam dados de vendas e operação em decisões. Para o comércio local, criamos sites e lojas virtuais rápidos e otimizados para o Google, conectando negócios cascavelenses ao público da região.',
      },
      {
        title: 'E-commerce, CRM e conversão: cases reais em Cascavel',
        content:
          'Como agência sediada na cidade, nossos projetos nascem perto de quem contrata. Para a JPB Joias e a JPB StoreX desenvolvemos e-commerces completos, com Mercado Pago, Melhor Envio e checkout automatizado — a estrutura que o varejo de Cascavel precisa para vender online com frete e pagamento resolvidos. Para o Consultor Newflexo entregamos um CRM sob medida, com pipeline de vendas e controle de follow-ups. Já a Carmax Baterias, do setor automotivo, conta com landing page de conversão e SEO local para captar clientes na cidade. E o ILC — Instituto Legado e Conforto opera uma plataforma web de alto desempenho voltada à saúde emocional, mostrando nossa faixa de atuação em Cascavel.',
      },
      {
        title: 'Integrações e automação para empresas do Oeste do Paraná',
        content:
          'Cascavel concentra logística, atacado e um Porto Seco (EADI) que movimenta importação e exportação com o Mercosul. Empresas nesse ambiente lidam com muitos sistemas ao mesmo tempo — ERP, financeiro, fiscal, frete e canais de venda — que raramente conversam entre si. A Nodeway integra e automatiza esses fluxos: conectamos e-commerce a gateways de pagamento e transportadoras, sincronizamos pedidos com o back-office e eliminamos o retrabalho de digitação manual. Também montamos relatórios e dashboards de BI para que gestores acompanhem faturamento, estoque e metas em tempo real. Por estarmos na cidade, entendemos a rotina do empresário do Oeste do Paraná e ajustamos cada automação ao processo real do negócio.',
      },
    ],
    highlights: [
      'Sede da Nodeway Agency, em Cascavel/PR',
      'Atendimento presencial na cidade e remoto para todo o Brasil',
      '5 clientes ativos em Cascavel: ILC, JPB Joias, JPB StoreX, Newflexo e Carmax Baterias',
      'Especialistas em software sob medida, e-commerce, CRM e landing pages de conversão',
      'Foco no Oeste do Paraná: agro, indústria, comércio e serviços',
      'Dashboards de BI e integrações para automatizar rotinas comerciais e fiscais',
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
        answer:
          'Sim. Cascavel/PR é a sede da Nodeway Agency. Atendemos presencialmente, com reuniões agendadas, e também de forma remota.',
      },
      {
        question: 'Que tipo de empresa de Cascavel a Nodeway atende?',
        answer:
          'Pequenas e médias empresas de comércio, agro, indústria e serviços — de e-commerce e varejo a consultorias e setor automotivo, como nossos clientes JPB, Newflexo e Carmax.',
      },
      {
        question: 'Vocês desenvolvem e-commerce e sistemas sob medida em Cascavel?',
        answer:
          'Sim. Criamos lojas virtuais com Mercado Pago e Melhor Envio, sistemas sob medida como CRM e módulos de gestão, além de landing pages de conversão e dashboards de BI.',
      },
      {
        question: 'Vocês atendem outras cidades além de Cascavel?',
        answer:
          'Sim. A partir da sede em Cascavel atendemos toda a região Oeste do Paraná e clientes em Blumenau, Guanambi, Toledo e todo o Brasil de forma remota.',
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
      'A Nodeway Agency atua em Blumenau/SC com projetos de desenvolvimento sob medida, criação de sites rápidos, e-commerce e automação para indústrias e empresas do Vale do Itajaí. Somos parceiros ativos da região: aqui atendemos a Formento Indústria e Comércio de Playgrounds, com um sistema próprio de orçamentos, kits de produtos, pedidos e painéis de indicadores.',
    sections: [
      {
        title: 'Do têxtil ao TI: a indústria de Blumenau precisa de sistemas sob medida',
        content:
          'Blumenau é uma das cidades mais fortes de Santa Catarina e o berço da maior região têxtil e de confecção do país, no Vale do Itajaí. Além do têxtil, a cidade concentra indústrias de plásticos, metalurgia, brinquedos e equipamentos, muitas com processos complexos de orçamento, produção e pedidos. É exatamente esse cenário que a Nodeway atende: para a Formento Indústria e Comércio de Playgrounds, desenvolvemos um sistema sob medida que trata orçamentos, kits de produtos, pedidos e painéis de indicadores em um só lugar. Para indústrias e distribuidoras de Blumenau que ainda dependem de planilhas soltas, o desenvolvimento de sistemas em Blumenau elimina retrabalho, padroniza preços e dá visibilidade real da operação.',
      },
      {
        title: 'Blumenau como polo de tecnologia: e-commerce, sites e automação no Vale do Itajaí',
        content:
          'Blumenau deixou de ser apenas a capital do têxtil e virou um dos maiores polos de tecnologia de Santa Catarina, respondendo por cerca de 12% do setor no estado e reunindo milhares de empresas de TI na região. Esse ambiente maduro eleva a régua: comércios, indústrias e prestadores de serviço do Vale do Itajaí precisam de presença digital rápida e de operações integradas. A Nodeway entrega criação de sites com foco em performance e SEO, e-commerce em Blumenau/SC para vender além da loja física, e landing pages de conversão para campanhas. Quando os sistemas não conversam, cuidamos das integrações e automação, conectando ERP, loja virtual, financeiro e planilhas para reduzir digitação manual e erros.',
      },
      {
        title: 'Decisão com dados: BI e dashboards para empresas de Blumenau',
        content:
          'Numa economia industrial e diversificada como a de Blumenau, decidir no achismo custa caro. Empresas com produção, estoque, vendas e vários canais geram muitos dados, mas raramente conseguem enxergá-los de forma clara. A Nodeway constrói relatórios e dashboards em BI que reúnem essas informações em painéis objetivos: faturamento, pedidos, itens mais vendidos, margem por produto e desempenho por período. Foi assim com os painéis de indicadores da Formento, que passaram a acompanhar a operação de perto. Para pequenas e médias empresas do Vale do Itajaí, isso significa reuniões mais rápidas, metas acompanhadas em tempo real e menos surpresas no fim do mês, com sistemas sob medida que crescem junto com o negócio.',
      },
    ],
    highlights: [
      'Cliente ativo em Blumenau/SC, no coração do Vale do Itajaí',
      'Case real: Formento Indústria e Comércio de Playgrounds',
      'Sistema sob medida de orçamentos, kits de produtos e pedidos',
      'Painéis de indicadores (BI) para acompanhar produção e vendas',
      'Desenvolvimento web sob medida, e-commerce e landing pages de conversão',
      'Integrações e automação entre ERP, loja e planilhas',
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
        question: 'A Nodeway já atende empresas em Blumenau?',
        answer:
          'Sim. Blumenau é uma cidade onde temos cliente ativo: a Formento Indústria e Comércio de Playgrounds, para quem desenvolvemos um sistema sob medida de orçamentos, kits de produtos, pedidos e painéis de indicadores.',
      },
      {
        question: 'Que serviços a Nodeway oferece em Blumenau/SC?',
        answer:
          'Desenvolvimento web sob medida, sistemas personalizados, e-commerce, landing pages de conversão, relatórios e dashboards em BI, além de integrações e automação entre sistemas como ERP, loja e planilhas.',
      },
      {
        question: 'Preciso estar em Blumenau para contratar? A Nodeway fica em Cascavel/PR.',
        answer:
          'Não é necessário. Nossa sede fica em Cascavel/PR, mas atendemos empresas de Blumenau e de todo o Vale do Itajaí de forma remota, com reuniões online e entregas acompanhadas de perto, como já fazemos com clientes da região.',
      },
      {
        question: 'Minha indústria ainda usa planilhas. Vale a pena um sistema sob medida?',
        answer:
          'Sim, especialmente em uma economia industrial como a de Blumenau. Um sistema sob medida padroniza orçamentos e pedidos, reduz erros e retrabalho e, com painéis de BI, dá visibilidade real da produção e das vendas para decidir com dados.',
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
      'Guanambi é um dos principais polos de saúde e comércio do Sudoeste da Bahia, com economia puxada por serviços, distribuição e um comércio que atende dezenas de municípios vizinhos. É nesse cenário que a Nodeway já mantém dois clientes ativos na cidade — Primardi Saúde e Vivre Comércio de Produtos Hospitalares — com sistemas de teleatendimento, licitações, faturamento fiscal e compras totalmente integrados.',
    sections: [
      {
        title: 'Guanambi: polo de saúde e comércio do Sudoeste da Bahia',
        content:
          'Com economia fortemente baseada em serviços e num comércio diversificado, Guanambi consolidou-se como cidade-referência para dezenas de municípios do Sudoeste baiano. A saúde é um dos setores mais fortes: a cidade concentra distribuidoras, clínicas e uma rede que abastece toda a região. Esse perfil de hub regional exige software que dê conta de volume, prazos e obrigações fiscais. É exatamente onde a Nodeway atua — foi para empresas de distribuição hospitalar de Guanambi que desenvolvemos sistemas de teleatendimento, licitações, faturamento fiscal e compras. Para o comércio e a saúde da cidade, desenvolvimento de sistemas em Guanambi significa trocar planilhas e processos manuais por plataformas sob medida que acompanham o crescimento do negócio.',
      },
      {
        title: 'Distribuição, licitações e fiscal: onde a tecnologia faz diferença',
        content:
          'Distribuidoras de medicamentos e produtos hospitalares em Guanambi vivem de margens apertadas, prazos curtos e regras rígidas — nota fiscal, rastreabilidade de lote, editais de licitação e reposição de estoque não podem falhar. Para a Primardi Saúde e a Vivre, a Nodeway integrou teleatendimento, participação em licitações, faturamento fiscal e compras num fluxo único, eliminando digitação duplicada e reduzindo erros. O mesmo raciocínio vale para comércio, atacado e serviços da região: sistemas sob medida, integrações e automação de sistemas conectam vendas, financeiro e fiscal, enquanto relatórios e dashboards em BI dão à diretoria visão real de faturamento, giro e resultado — sem depender de um único funcionário que domina a planilha.',
      },
      {
        title: 'Como a Nodeway atende empresas de Guanambi',
        content:
          'A Nodeway tem sede em Cascavel/PR e atende Guanambi de forma remota, com a mesma equipe que já entrega para os clientes locais. Na prática, isso quer dizer reuniões de descoberta por vídeo, entregas em ciclos curtos e suporte contínuo — sem precisar de fornecedor na porta ao lado. Além de sistemas sob medida e integrações, desenvolvemos sites e landing pages de conversão de alto impacto (rápidas e otimizadas para SEO), lojas de e-commerce e painéis de BI. Para pequenas e médias empresas de Guanambi e de todo o Sudoeste da Bahia, é acesso a um padrão técnico de grande centro, com a proximidade de quem já conhece a realidade da distribuição e do comércio regional.',
      },
    ],
    highlights: [
      '2 clientes ativos em Guanambi/BA: Primardi Saúde e Vivre Comércio de Produtos Hospitalares',
      'Setor de distribuição de medicamentos e produtos hospitalares atendido de ponta a ponta',
      'Teleatendimento e participação em licitações integrados ao sistema',
      'Faturamento fiscal e compras automatizados, com menos retrabalho',
      'Desenvolvimento de sistemas sob medida e integrações para empresas do Sudoeste da Bahia',
      'Suporte remoto contínuo, com a mesma equipe técnica da sede em Cascavel/PR',
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
        question: 'A Nodeway atende empresas em Guanambi/BA?',
        answer:
          'Sim. Guanambi é um dos nossos cases ativos: atendemos a Primardi Saúde e a Vivre Comércio de Produtos Hospitalares, ambas na cidade, com suporte remoto contínuo.',
      },
      {
        question: 'Que tipo de sistema vocês já desenvolveram para empresas de Guanambi?',
        answer:
          'Sistemas para distribuição hospitalar com teleatendimento, participação em licitações, faturamento fiscal e compras — todos integrados num fluxo único, reduzindo retrabalho e erros.',
      },
      {
        question: 'Só trabalham com o setor de saúde em Guanambi?',
        answer:
          'Não. A saúde é onde temos cases, mas atendemos comércio, atacado e serviços da região com sistemas sob medida, e-commerce, sites de alta velocidade, integrações e dashboards de BI.',
      },
      {
        question: 'Como funciona o atendimento à distância, já que a sede é em Cascavel/PR?',
        answer:
          'Trabalhamos de forma 100% remota, com reuniões por vídeo, entregas em ciclos curtos e suporte contínuo. É o mesmo modelo que já usamos com os clientes ativos de Guanambi.',
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
      'A Nodeway Agency atende Toledo, a Capital do Agronegócio do Paraná, com desenvolvimento web sob medida, sistemas dedicados, e-commerce e painéis de BI. Já somos parceiros ativos na cidade, ajudando empresas do Oeste do Paraná a transformar a força do agro, da indústria e da logística em tecnologia que gera resultado.',
    sections: [
      {
        title: 'Tecnologia para a Capital do Agronegócio do Paraná',
        content:
          'Toledo é líder estadual em Valor Bruto da Produção Agropecuária e concentra abate de suínos, aves, grãos e laticínios, com grandes indústrias de alimentos, cooperativas e um forte polo farmacêutico. Essa base agroindustrial gera um fluxo intenso de dados de produção, estoques e logística que a planilha não dá mais conta de acompanhar. É aí que entra a Nodeway: desenvolvemos sistemas sob medida em Toledo para controlar operações complexas e painéis de BI que consolidam indicadores de produção, custo e margem em tempo real. Para a agroindústria e as cooperativas do Oeste do Paraná, transformar esse volume de dados em decisão rápida é o que separa quem cresce de quem só reage ao mercado.',
      },
      {
        title: 'Logística e transporte: BI que enxuga custo de frota',
        content:
          'Como epicentro da produção de proteína animal e grãos, Toledo movimenta um dos maiores fluxos logísticos do Paraná. Transportadoras e operadores da região lidam diariamente com frota, roteirização e custo por quilômetro, e é justamente nesse cenário que atuamos com a Transporte Maurício, nossa cliente na cidade, para quem construímos painéis de BI de frota, rotas e custos. Consolidamos abastecimento, manutenção, produtividade por veículo e rentabilidade por rota em dashboards claros, que mostram onde o dinheiro escapa. Para empresas de logística de Toledo, esse tipo de visibilidade reduz desperdício e sustenta a expansão sem perder controle da operação.',
      },
      {
        title: 'Comércio, serviços e sites que convertem em Toledo/PR',
        content:
          'Toledo cresceu mais de 20% em população na última década e mantém saldo positivo de empregos puxado por serviços, indústria e construção, o que aquece o comércio local e a demanda por presença digital. Criação de sites em Toledo, e-commerce em Toledo/PR e landing pages de conversão ajudam lojas, prestadores e indústrias a vender e captar clientes fora do balcão. A Nodeway desenvolve tudo sob medida, com foco em velocidade, SEO e experiência mobile, além de integrar sistemas de ERP, financeiro e atendimento para automatizar tarefas repetitivas. Para a pequena e média empresa toledana, é tecnologia sob medida que acompanha o ritmo de uma cidade que não para de crescer.',
      },
    ],
    highlights: [
      'Nodeway é parceira ativa em Toledo/PR, com clientes reais na cidade',
      'Cliente na cidade: Transporte Maurício, com painéis de BI de frota, rotas e custos',
      'Desenvolvimento de sistemas sob medida e sites rápidos para o Oeste do Paraná',
      'E-commerce e landing pages de conversão para o comércio e o agro toledano',
      'Dashboards de BI para agroindústria, logística e indústria da região',
      'Integrações e automação de sistemas para pequenas e médias empresas',
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
        question: 'A Nodeway atende empresas em Toledo/PR?',
        answer:
          'Sim. Somos parceiros ativos em Toledo, com cliente real na cidade, e atendemos toda a região Oeste do Paraná de forma presencial e remota, com sede em Cascavel.',
      },
      {
        question: 'Que tipo de projeto a Nodeway já entrega em Toledo?',
        answer:
          'Na cidade atuamos com a Transporte Maurício, do setor de transporte e logística, desenvolvendo painéis de BI de frota, rotas e custos. Também fazemos sistemas sob medida, sites, e-commerce e integrações.',
      },
      {
        question: 'Empresas do agronegócio e da indústria de Toledo se beneficiam de BI?',
        answer:
          'Sim. Como capital do agronegócio do Paraná, Toledo gera muitos dados de produção, custo e logística. Dashboards de BI consolidam esses indicadores e ajudam a decidir com base em números, não em achismo.',
      },
      {
        question: 'Preciso estar em Cascavel para contratar a Nodeway?',
        answer:
          'Não. Atendemos Toledo e todo o Oeste do Paraná. O trabalho é feito de forma remota com reuniões e acompanhamento próximos, e visitas presenciais quando o projeto exige.',
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
      'Curitiba concentra o setor de serviços mais robusto do Paraná e um dos maiores polos de tecnologia do Sul do país — terreno natural para software sob medida, dados e automação. A Nodeway está em expansão para a capital e sua região metropolitana: com sede em Cascavel (a cerca de 2h30) e cases entregues em Toledo, Blumenau e Guanambi, atendemos empresas curitibanas de forma remota ou presencial, com a mesma engenharia que aplicamos no interior.',
    sections: [
      {
        title: 'O maior polo de serviços e tecnologia do Paraná',
        content:
          'Curitiba é uma economia movida a serviços: cerca de dois terços do valor adicionado da cidade vêm desse setor, com destaque para tecnologia da informação, que emprega dezenas de milhares de profissionais e reúne milhares de empresas de software. Programas como o Tecnoparque reforçam esse ecossistema. Nesse ambiente, o padrão técnico é alto e a concorrência digital é intensa — pequenas e médias empresas precisam de sites rápidos e sistemas bem construídos para não ficar para trás. É exatamente aí que a Nodeway atua: desenvolvimento web em Curitiba sob medida, landing pages de conversão e sistemas robustos que acompanham a maturidade digital da capital paranaense.',
      },
      {
        title: 'Indústria, automotivo e comércio: dados e sistemas sob medida',
        content:
          'Além dos serviços, Curitiba e a região metropolitana abrigam a Cidade Industrial (CIC), um dos maiores polos industriais do Brasil, forte em setores automotivo, de máquinas e equipamentos, alimentos e dispositivos médicos. Indústrias, distribuidoras e comércios desse porte lidam com estoques, pedidos, produção e vendas que raramente cabem em planilhas. A Nodeway desenvolve sistemas sob medida, e-commerce e integrações entre ERPs, marketplaces e ferramentas internas para empresas de Curitiba/PR — eliminando retrabalho manual e conectando áreas que hoje operam isoladas. É a mesma base técnica que já sustenta operações de comércio e logística que atendemos no oeste do Paraná.',
      },
      {
        title: 'BI e automação para decisões mais rápidas na capital',
        content:
          'Empresas curitibanas em crescimento acumulam dados em vários sistemas, mas nem sempre conseguem enxergar o essencial na hora certa. A Nodeway constrói relatórios e dashboards em BI que reúnem vendas, financeiro e operação em uma visão única, além de automações que reduzem tarefas repetitivas — de conciliações a envios e atualizações entre plataformas. Para a densidade competitiva de Curitiba, isso significa decidir com base em números confiáveis e liberar a equipe para o que gera receita. Trabalhamos de forma remota com reuniões e entregas contínuas, e podemos ir presencialmente à capital quando o projeto pede — sem que a distância da sede em Cascavel pese no resultado.',
      },
    ],
    highlights: [
      'Em expansão ativa para Curitiba e região metropolitana',
      'Sede em Cascavel/PR, a cerca de 2h30 da capital',
      'Cases reais no Paraná (Cascavel, Toledo), em SC (Blumenau) e na BA (Guanambi)',
      'Ainda sem cliente em Curitiba — atendimento remoto imediato disponível',
      'Foco em sistemas sob medida, sites rápidos, BI e automação para PMEs',
      'Aceitando novos projetos de desenvolvimento e integração na região',
    ],
    clients: [],
    faq: [
      {
        question: 'A Nodeway já tem clientes em Curitiba?',
        answer:
          'Ainda não. Estamos em fase de expansão para Curitiba e a região metropolitana. Nossos cases ativos estão em Cascavel, Toledo, Blumenau e Guanambi, com atendimento remoto imediato para a capital.',
      },
      {
        question: 'Como funciona o atendimento em Curitiba se a sede é em Cascavel?',
        answer:
          'Trabalhamos de forma remota com reuniões, acompanhamento e entregas contínuas — modelo que já usamos com clientes em outros estados. Quando o projeto exige presença, Cascavel fica a cerca de 2h30 de Curitiba e organizamos encontros presenciais.',
      },
      {
        question: 'Que serviços a Nodeway oferece para empresas de Curitiba?',
        answer:
          'Desenvolvimento web sob medida, sistemas dedicados, e-commerce, landing pages de conversão, relatórios e dashboards em BI, e integrações e automação entre sistemas — sempre focados em pequenas e médias empresas.',
      },
      {
        question: 'A Nodeway atende a indústria e o comércio da região metropolitana?',
        answer:
          'Sim. Desenvolvemos sistemas de gestão, integrações com ERPs e painéis de BI voltados a indústrias, distribuidoras e comércios — perfil forte na Cidade Industrial de Curitiba e nos municípios do entorno.',
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
      'Da sede em Cascavel/PR ao Nordeste, a Nodeway Agency desenvolve sites, sistemas sob medida, e-commerce, landing pages e dashboards de BI para pequenas e médias empresas em todo o Brasil. O atendimento é 100% remoto, com a mesma engenharia de alto padrão e o mesmo acompanhamento próximo, esteja o cliente no oeste do Paraná, no Vale do Itajaí ou no sertão baiano.',
    sections: [
      {
        title: 'Tecnologia para PMEs de todas as regiões do Brasil',
        content:
          'As pequenas e médias empresas respondem por mais de um quarto do PIB brasileiro e vivem hoje seu maior patamar de digitalização: segundo o Sebrae, 76% dos empreendedores já usam computador no negócio e quase metade adota algum software de gestão integrada. O problema é que boa parte ainda depende de planilhas soltas, ERPs engessados e sites lentos que não convertem. A Nodeway atende esse cenário de ponta a ponta, do interior do Paraná às capitais, com desenvolvimento sob medida de alta velocidade, sistemas dedicados e integrações que conectam vendas, estoque e financeiro. Por ser 100% remota, a agência entrega a mesma qualidade técnica para empresas de qualquer cidade, sem custo de deslocamento embutido no projeto.',
      },
      {
        title: 'Atendimento remoto sem perder proximidade',
        content:
          'Trabalhar à distância não significa atendimento genérico. A Nodeway mantém clientes ativos em quatro estados — Cascavel e Toledo no oeste do Paraná, Blumenau em Santa Catarina e Guanambi na Bahia — e usa esse mesmo método para qualquer empresa do país: descoberta do processo real, escopo claro, entregas em ciclos curtos e comunicação direta com quem decide. Reuniões por vídeo, ambientes de homologação e documentação substituem a presença física sem perder o acompanhamento. Assim, uma indústria de Santa Catarina, um comércio do Paraná ou uma empresa de serviços do Nordeste recebem a mesma engenharia moderna, com foco em performance, SEO e sistemas que realmente encaixam na operação de cada negócio.',
      },
      {
        title: 'Do site ao dashboard: uma solução completa para crescer',
        content:
          'Contratar fornecedores diferentes para site, sistema, loja e relatórios costuma gerar retrabalho e dados desconectados. A Nodeway concentra tudo em uma solução única e integrada: criação de sites e landing pages rápidas e mobile-first, e-commerce, sistemas web sob medida (CRM, orçamentos, gestão operacional), painéis de BI e automações que eliminam tarefas manuais. Para a PME brasileira em crescimento, isso significa um site que indexa bem no Google, uma operação organizada em sistema próprio e indicadores atualizados para decidir com dados. Empresas de comércio, indústria, agronegócio, logística e serviços em qualquer estado podem contratar módulos isolados ou evoluir para uma plataforma integrada, no ritmo do orçamento e da maturidade digital de cada uma.',
      },
    ],
    highlights: [
      'Sede em Cascavel/PR com atendimento nacional 100% remoto',
      'Clientes reais ativos em Cascavel/PR, Toledo/PR, Blumenau/SC e Guanambi/BA',
      'Desenvolvimento web sob medida, sistemas dedicados e e-commerce',
      'Landing pages de conversão para Google Ads e SEO',
      'Relatórios e dashboards em BI para decisão baseada em dados',
      'Integrações e automação entre ERP, financeiro, fiscal e logística',
    ],
    clients: [],
    faq: [
      {
        question: 'Posso contratar a Nodeway de qualquer cidade do Brasil?',
        answer:
          'Sim. O atendimento é 100% remoto e nacional. A sede fica em Cascavel/PR e há clientes ativos em Toledo/PR, Blumenau/SC e Guanambi/BA.',
      },
      {
        question: 'O atendimento remoto tem a mesma qualidade do presencial?',
        answer:
          'Tem. Usamos o mesmo processo em todos os projetos: escopo claro, entregas em ciclos curtos, ambiente de homologação e comunicação direta por vídeo com quem decide.',
      },
      {
        question: 'Quais serviços a Nodeway oferece para empresas de outras regiões?',
        answer:
          'Desenvolvimento web sob medida, sistemas dedicados, e-commerce, landing pages de conversão, dashboards de BI e integrações e automação entre sistemas.',
      },
      {
        question: 'A Nodeway atende empresas de qualquer setor?',
        answer:
          'Sim. Atendemos PMEs de comércio, indústria, agronegócio, logística e serviços, adaptando site, sistema, loja e relatórios ao processo real de cada negócio.',
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

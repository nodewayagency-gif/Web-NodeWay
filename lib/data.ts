export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  title: string;
  description: string;
  category: string;
  url?: string;
  city?: string;
  state?: string;
  serviceTags?: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export const cases: CaseStudy[] = [
  {
    id: "1",
    slug: "legado-e-conforto",
    client: "ILC - Instituto Legado e Conforto",
    title: "Plataforma digital acolhedora e sensível sobre luto e memória",
    description: "Desenvolvimento de um espaço seguro e acolhedor para conectar e apoiar pessoas passando por momentos de perda, focado no legado da vida.",
    category: "Plataforma Web",
    url: "https://legadoeconforto.com.br/",
    city: "Cascavel",
    state: "PR",
    serviceTags: ["desenvolvimento-web"],
    challenge: "A criação de uma presença digital precisava comunicar empatia profunda. O desafio era construir um ambiente livre de atritos, focado na mensagem principal: 'A dor da perda não precisa ser vivida em silêncio'.",
    solution: "Criamos uma plataforma com design sensível, paleta de cores acolhedora e navegação extremamente fluida. A estrutura foi desenhada para que os usuários sintam que 'toda vida deve ser cuidada e lembrada com carinho'.",
    results: [
      "Design e usabilidade focados puramente em empatia",
      "Navegação intuitiva para usuários em momentos de vulnerabilidade",
      "Ambiente digital acolhedor de altíssima performance"
    ]
  },
  {
    id: "2",
    slug: "carmax-baterias",
    client: "Carmax Baterias",
    title: "Landing page de alta conversão e gestão de tráfego para baterias automotivas",
    description: "Landing page otimizada para conversão e campanhas de tráfego pago, com foco em urgência e SEO local no setor automotivo de Cascavel.",
    category: "Landing Pages + Tráfego",
    url: "https://www.carmaxbaterias.com.br/",
    city: "Cascavel",
    state: "PR",
    serviceTags: ["landing-pages", "desenvolvimento-web"],
    challenge: "No mercado automotivo, a agilidade no momento de urgência (pane de bateria) é fundamental. O site antigo não passava credibilidade, não convertia tráfego pago e não ranqueava bem no Google.",
    solution: "Desenvolvemos uma landing page otimizada para SEO local e campanhas de tráfego, com foco total em mobile. O fluxo de contato para resgate foi reduzido a 1 clique e a estrutura da página foi pensada para maximizar conversão de visitantes vindos de anúncios.",
    results: [
      "Crescimento orgânico de visitas locais",
      "Landing page preparada para campanhas de tráfego pago",
      "Experiência mobile otimizada com conversão em 1 clique"
    ]
  },
  {
    id: "3",
    slug: "sistema-orcamento-etiquetas",
    client: "Indústria Gráfica",
    title: "Solução customizada de orçamento inteligente para etiquetas",
    description: "Desenvolvimento de um sistema sob medida para calcular custos e viabilidade de impressão de etiquetas em tempo real.",
    category: "Desenvolvimento Sob Medida",
    serviceTags: ["sistemas-sob-medida"],
    challenge: "O processo de orçar etiquetas envolvia dezenas de variáveis (tipo de papel, tamanho, faca, cores, tiragem) e levava muito tempo do setor comercial, além da alta margem para erro humano nos cálculos.",
    solution: "A Nodeway Agency construiu um software de orçamento embutido, que processa a matriz de custos instantaneamente. O cliente preenche as dimensões e especificações, e o sistema entrega o preço exato baseado no markup da empresa.",
    results: [
      "Processo de orçamentação reduzido de horas para segundos",
      "Zero erros de cálculo comercial",
      "Aumento da taxa de fechamento por resposta imediata ao cliente"
    ]
  },
  {
    id: "4",
    slug: "transporte-mauricio-bi",
    client: "Transporte Maurício",
    title: "Montagem de painéis em B.I. e Inteligência de Dados Logísticos",
    description: "Implementação de relatórios dinâmicos para visualização de frotas, custos e rotas em tempo real em Toledo/PR.",
    category: "Dados & BI",
    city: "Toledo",
    state: "PR",
    serviceTags: ["bi-dados"],
    challenge: "A transportadora possuía um volume gigantesco de dados brutos espalhados em sistemas antigos e planilhas, dificultando a visão dos custos operacionais e margem de lucro por rota.",
    solution: "Conectamos os bancos de dados através de pipelines automatizados e montamos painéis visuais interativos. Os gestores agora conseguem ver, em tempo real, os indicadores de manutenção, abastecimento e tempo de trânsito.",
    results: [
      "Tomada de decisão baseada em dados em tempo real",
      "Identificação e corte de gargalos operacionais",
      "Gestão de frota 100% transparente para a diretoria"
    ]
  },
  {
    id: "5",
    slug: "jpb-joias",
    client: "JPB Joias",
    title: "E-commerce de alto valor direcionado para fechamento no WhatsApp",
    description: "Uma loja virtual híbrida que funciona como vitrine de luxo, canalizando o cliente para atendimento VIP humano.",
    category: "E-commerce",
    url: "https://jpbjoias.com.br/",
    city: "Cascavel",
    state: "PR",
    serviceTags: ["e-commerce"],
    challenge: "Para peças de alto ticket (joias), muitos clientes sentem insegurança em passar o cartão direto no site sem antes falar com um consultor humano para tirar dúvidas.",
    solution: "Construímos o e-commerce focando na estética de vitrine de luxo, mas o fluxo de checkout foi customizado: em vez do carrinho tradicional, os botões enviam o produto, especificações e UTMs direto para o WhatsApp do vendedor, pronto para fechar a venda.",
    results: [
      "Aumento drástico na taxa de conversão final",
      "Atendimento humanizado alinhado ao nicho premium",
      "Vendedores recebem leads altamente qualificados"
    ]
  },
  {
    id: "6",
    slug: "jpb-storex",
    client: "JPB StoreX",
    title: "E-commerce automatizado com Mais Envio e Mercado Pago",
    description: "Plataforma completa de ponta a ponta com integrações robustas de logística e pagamentos.",
    category: "E-commerce",
    url: "https://www.jpbstorex.com.br/",
    city: "Cascavel",
    state: "PR",
    serviceTags: ["e-commerce", "integracoes-automacao"],
    challenge: "O cliente precisava de uma operação de e-commerce que rodasse praticamente sozinha, sem gargalos na aprovação de pagamento e no cálculo de fretes dinâmicos pelo Brasil.",
    solution: "Desenvolvemos o sistema integrado profundamente com as APIs do Mercado Pago (para transações seguras, split e recorrência) e do Melhor Envio (para cotação instantânea de correios e transportadoras diretamente no carrinho).",
    results: [
      "Checkout transparente e de alta conversão",
      "Operação logística 100% automatizada",
      "Cálculo de frete preciso que evitou prejuízos na margem"
    ]
  },
  {
    id: "7",
    slug: "newflexo-crm",
    client: "Consultor Newflexo",
    title: "CRM sob medida para gestão comercial e relacionamento",
    description: "Sistema de CRM personalizado para organizar pipeline de vendas, follow-ups e gestão de clientes em Cascavel.",
    category: "Desenvolvimento Sob Medida",
    city: "Cascavel",
    state: "PR",
    serviceTags: ["sistemas-sob-medida"],
    challenge: "A operação comercial dependia de planilhas e anotações dispersas, dificultando o acompanhamento de leads, propostas enviadas e retornos de clientes em diferentes estágios do funil.",
    solution: "Desenvolvemos um CRM sob medida alinhado ao processo comercial do consultor, com gestão de pipeline, histórico de interações, alertas de follow-up e visão clara de oportunidades em aberto.",
    results: [
      "Pipeline comercial centralizado e organizado",
      "Redução de leads esquecidos sem retorno",
      "Visibilidade total do funil de vendas"
    ]
  },
  {
    id: "8",
    slug: "formento-playgrounds",
    client: "Formento Indústria e Comércio de Playgrounds",
    title: "Sistema de orçamentos, kits de produtos e geração de pedidos",
    description: "Plataforma sob medida para orçamentação dinâmica, montagem de kits de playgrounds, pedidos e painéis de indicadores em Blumenau/SC.",
    category: "Desenvolvimento Sob Medida",
    city: "Blumenau",
    state: "SC",
    serviceTags: ["sistemas-sob-medida", "bi-dados"],
    challenge: "O processo comercial envolvia orçamentos complexos com combinações de produtos, montagem manual de kits e falta de visibilidade sobre pedidos e indicadores de performance da operação.",
    solution: "Construímos um sistema integrado com módulo de orçamentos dinâmicos, criação automatizada de kits de produtos, geração de pedidos e painéis de indicadores para acompanhar vendas e produção em tempo real.",
    results: [
      "Orçamentos complexos gerados em minutos",
      "Kits de produtos padronizados e reutilizáveis",
      "Indicadores comerciais e operacionais em painéis visuais"
    ]
  },
  {
    id: "9",
    slug: "primardi-saude",
    client: "Primardi Saúde",
    title: "Sistema integrado para distribuição de medicamentos na Bahia",
    description: "Solução completa com teleatendimento, licitações, faturamento fiscal e compras para distribuidora em Guanambi/BA.",
    category: "Desenvolvimento Sob Medida",
    city: "Guanambi",
    state: "BA",
    serviceTags: ["sistemas-sob-medida", "integracoes-automacao"],
    challenge: "A operação da distribuidora envolvia múltiplos setores desconectados — atendimento, licitações públicas, faturamento fiscal e compras — gerando retrabalho e lentidão na resposta ao mercado.",
    solution: "Desenvolvemos um sistema integrado com módulo de teleatendimento, gestão de licitações, faturamento e controle fiscal, além de fluxo de compras conectado à operação comercial da Primardi Saúde.",
    results: [
      "Setores operacionais integrados em uma única plataforma",
      "Agilidade no atendimento e resposta a licitações",
      "Controle fiscal e de compras centralizado"
    ]
  },
  {
    id: "10",
    slug: "vivre-produtos-hospitalares",
    client: "Vivre Comércio de Produtos Hospitalares LTDA",
    title: "Plataforma operacional para produtos hospitalares em Guanambi",
    description: "Sistema sob medida com teleatendimento, licitações, faturamento fiscal e gestão de compras para o setor hospitalar na Bahia.",
    category: "Desenvolvimento Sob Medida",
    city: "Guanambi",
    state: "BA",
    serviceTags: ["sistemas-sob-medida", "integracoes-automacao"],
    challenge: "A Vivre precisava digitalizar processos críticos do comércio de produtos hospitalares, desde o atendimento remoto até a conformidade fiscal e participação em licitações, sem depender de planilhas.",
    solution: "Implementamos módulos de teleatendimento integrado, gestão de licitações, faturamento com regras fiscais do setor e controle de compras, adaptados à realidade da distribuição hospitalar no interior da Bahia.",
    results: [
      "Operação hospitalar digitalizada ponta a ponta",
      "Conformidade fiscal integrada ao fluxo de vendas",
      "Gestão de licitações e compras sem retrabalho manual"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "por-que-sistema-sob-medida-escala-sua-empresa",
    title: "Por que um sistema sob medida é o segredo para escalar sua operação?",
    excerpt: "Sistemas de prateleira funcionam até a página dois. Descubra como criar um software que se adapta ao seu processo, e não o contrário.",
    date: "10 de Maio de 2025",
    category: "Desenvolvimento",
    readTime: "5 min",
    content: `
Muitas empresas começam suas operações usando planilhas e softwares genéricos. No início, isso faz sentido: o custo é baixo e a implementação é rápida. No entanto, à medida que a empresa cresce, esses sistemas "de prateleira" começam a se tornar o maior gargalo da operação.

### O Problema do Software Engessado
Quando você usa um software pronto, você é obrigado a adaptar o processo exclusivo da sua empresa para caber dentro das limitações da ferramenta. Isso gera:
- Trabalhos manuais paralelos (o famoso "exportar para o Excel para cruzar dados").
- Falta de integração entre setores.
- Erros humanos devido à re-digitação de informações.

### A Vantagem Sob Medida
Um **sistema sob medida** é construído do zero, olhando exatamente para como o seu negócio funciona. Ele automatiza as suas regras de negócio específicas.
Se o seu setor comercial precisa que o cálculo de um orçamento demore 2 segundos e puxe o preço atualizado do dólar, nós programamos isso.

Com a arquitetura moderna (usando React, Next.js e bancos de dados em nuvem), o custo e o tempo de desenvolvimento de sistemas dedicados caiu muito, tornando essa estratégia acessível para PMEs que desejam saltar para o próximo nível de escala.
    `
  },
  {
    id: "2",
    slug: "landing-pages-alta-conversao",
    title: "Anatomia de uma Landing Page que converte até 5x mais",
    excerpt: "Não basta ter tráfego. Se a sua landing page é confusa ou lenta, você está jogando dinheiro fora no Google Ads.",
    date: "22 de Abril de 2025",
    category: "Marketing",
    readTime: "4 min",
    content: `
Você investe milhares de reais em tráfego pago. Os usuários clicam no seu anúncio. Mas eles chegam na página e vão embora sem pedir um orçamento. O que está errado?

Geralmente, o problema está na **Landing Page**.

### 1. Velocidade é Dinheiro
Estudos do Google mostram que se a sua página demora mais de 3 segundos para carregar no 4G, 53% das pessoas abandonam a aba. Nós utilizamos **Next.js** justamente por isso: as páginas são pré-renderizadas e entregues instantaneamente.

### 2. Copywriting e Hierarquia
Uma landing page não é um site institucional. Ela não deve ter dezenas de links num menu que distraem o usuário. O foco deve ser único: a conversão.
A anatomia ideal:
- **Hero Section**: Promessa clara (H1) + Botão de CTA contrastante.
- **Dores e Soluções**: Mostre que você entende o problema dele.
- **Prova Social**: Casos de sucesso, logos de clientes, depoimentos reais.
- **FAQ**: Quebre objeções antes que ele tenha que falar com um vendedor.

### 3. Fricção Zero
No Brasil, o WhatsApp é rei. Para muitos nichos (como E-commerce de alto ticket ou B2B), um botão flutuante bem programado levando direto para o WhatsApp do vendedor com uma mensagem pré-pronta converte absurdamente mais do que formulários complexos.
    `
  },
  {
    id: "3",
    slug: "bi-dados-decisoes-estrategicas",
    title: "Business Intelligence: Como parar de achar e começar a ter certeza",
    excerpt: "O volume de dados gerados pela sua empresa hoje é gigante. Se você não os está usando para ver o futuro, seu concorrente está.",
    date: "05 de Abril de 2025",
    category: "Dados & BI",
    readTime: "6 min",
    content: `
O gestor moderno sofre de um problema curioso: ele não tem falta de dados, ele tem *excesso de dados inúteis*. Sistemas logísticos, CRMs, ERPs, controle financeiro... tudo gera dados, mas nada conversa.

### O papel do B.I. (Business Intelligence)
O objetivo de implementar inteligência de dados na sua empresa é simples: criar um painel central onde toda a complexidade vira gráficos simples e indicativos visuais (verde, amarelo e vermelho).

### Casos de Uso Reais
Imagine uma transportadora. Ao cruzar os dados do sistema de abastecimento (telemetria dos caminhões) com os dados de rotas do ERP, um painel de B.I. pode mostrar exatamente quais rotas ou motoristas estão gerando prejuízo invisível.

Ao conectar seu banco de dados a ferramentas como PowerBI, Metabase ou dashboards customizados em React, a diretoria deixa de pedir "relatórios mensais que demoram 3 dias para ficarem prontos" e passa a olhar a saúde da empresa ao vivo.
    `
  }
];

export function getCasesByCity(city: string) {
  return cases.filter((c) => c.city?.toLowerCase() === city.toLowerCase());
}

export function getCasesByServiceTag(tag: string) {
  return cases.filter((c) => c.serviceTags?.includes(tag));
}

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}

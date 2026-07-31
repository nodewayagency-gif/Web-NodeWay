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
  /** Data exibida na tela (texto livre em PT). */
  date: string;
  /** Data ISO 8601 (com fuso) — usada no schema BlogPosting. */
  datePublished: string;
  /** Data ISO 8601 da última atualização (opcional). */
  dateModified?: string;
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
    id: "8",
    slug: "o-custo-de-nao-investir-no-sistema-certo",
    title: "O custo da inação: quanto sua empresa perde por não investir no sistema certo",
    excerpt: "Não investir também tem preço — só que ele não aparece na planilha. Veja onde o dinheiro vaza quando a empresa insiste numa plataforma que não atende.",
    date: "30 de Julho de 2026",
    datePublished: "2026-07-30T09:00:00-03:00",
    category: "Estratégia",
    readTime: "6 min",
    content: `
Existe um número que quase nenhuma empresa calcula: o custo de continuar como está. É fácil ver quanto custa contratar um novo sistema — o valor vem numa proposta, redondinho. Difícil é enxergar quanto custa **não** contratar: o dinheiro que escorre todos os meses por causa de uma ferramenta que não dá conta.

Esse é o **custo da inação** — o prejuízo silencioso de manter um processo que "está funcionando", mas que trava o crescimento e sangra o caixa sem aparecer em lugar nenhum.

## O custo que não aparece na planilha
Quando a ferramenta é ruim, o prejuízo não chega como uma fatura. Ele vem diluído: uma venda que esfriou, um relatório que atrasou, um erro que teve que ser refeito. Ninguém soma esses pequenos vazamentos — e é justamente por isso que eles saem tão caro.

Estudos de mercado ajudam a dimensionar o problema. A Gartner estima que dados de baixa qualidade custam milhões por ano às empresas que convivem com informação espalhada e inconsistente. E a Forrester popularizou uma referência que virou clássico: cada real bem investido em experiência e processo tende a voltar multiplicado. O recado dos dois é o mesmo — o problema quase nunca é o preço do sistema, e sim o preço de **não** ter o sistema certo.

## Onde o dinheiro vaza
Na prática, a conta da inação se forma em lugares bem concretos:

- **Vendas perdidas**: orçamento que demora, retorno que ninguém deu, cliente que foi para o concorrente
- **Retrabalho**: a mesma informação digitada em três lugares diferentes
- **Erros caros**: uma célula sobrescrita, um preço errado, um pedido faturado torto
- **Decisão no escuro**: sem dado confiável, a gestão decide no "achismo"
- **Tempo do time**: gente qualificada fazendo trabalho manual que um sistema resolveria em segundos

Nenhum desses itens vem com etiqueta de preço. Mas todos, somados, costumam custar muito mais do que a assinatura de qualquer plataforma decente.

## "Está funcionando" não é o mesmo que "está eficiente"
O maior inimigo da eficiência é a frase "sempre foi assim e deu certo". Dar certo no volume de ontem não significa dar certo no volume de amanhã. A planilha que segurava 50 pedidos por mês trava com 500. O controle que uma pessoa fazia de cabeça vira um risco no dia em que essa pessoa entra de férias.

Investir no sistema certo não é gasto — é estancar a sangria [antes que a planilha vire o gargalo](/blog/sistema-de-gestao-vs-planilha) da operação.

## Como parar de perder dinheiro
O primeiro passo é simples: colocar um número no que hoje é invisível. Quantas horas o time gasta em tarefa manual? Quantos orçamentos ficam sem resposta? Quantos erros viram retrabalho todo mês?

Com esse número na mão, a decisão fica óbvia. E a solução não precisa ser gigante de uma vez: dá para começar organizando o comercial com um [sistema de gestão](/sistema-de-gestao-comercial), ganhar visão com [relatórios em BI](/blog/bi-dados-decisoes-estrategicas) e evoluir conforme a operação pedir.

O que não dá é seguir pagando a conta da inação sem nem saber o tamanho dela. [Compare os planos](/planos), peça um diagnóstico e descubra quanto a sua empresa está deixando na mesa todo mês.
    `
  },
  {
    id: "1",
    slug: "por-que-sistema-sob-medida-escala-sua-empresa",
    title: "Por que um sistema sob medida é o segredo para escalar sua operação?",
    excerpt: "Sistemas de prateleira funcionam até a página dois. Descubra como criar um software que se adapta ao seu processo, e não o contrário.",
    date: "10 de Maio de 2025",
    datePublished: "2025-05-10T09:00:00-03:00",
    category: "Desenvolvimento",
    readTime: "5 min",
    content: `
Muitas empresas começam suas operações usando planilhas e softwares genéricos. No início, isso faz sentido: o custo é baixo e a implementação é rápida. No entanto, à medida que a empresa cresce, esses sistemas "de prateleira" começam a se tornar o maior gargalo da operação.

## O Problema do Software Engessado
Quando você usa um software pronto, você é obrigado a adaptar o processo exclusivo da sua empresa para caber dentro das limitações da ferramenta. Isso gera:
- Trabalhos manuais paralelos (o famoso "exportar para o Excel para cruzar dados").
- Falta de integração entre setores.
- Erros humanos devido à re-digitação de informações.

## A Vantagem Sob Medida
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
    datePublished: "2025-04-22T09:00:00-03:00",
    category: "Marketing",
    readTime: "4 min",
    content: `
Você investe milhares de reais em tráfego pago. Os usuários clicam no seu anúncio. Mas eles chegam na página e vão embora sem pedir um orçamento. O que está errado?

Geralmente, o problema está na **Landing Page**.

## 1. Velocidade é Dinheiro
Estudos do Google mostram que se a sua página demora mais de 3 segundos para carregar no 4G, 53% das pessoas abandonam a aba. Nós utilizamos **Next.js** justamente por isso: as páginas são pré-renderizadas e entregues instantaneamente.

## 2. Copywriting e Hierarquia
Uma landing page não é um site institucional. Ela não deve ter dezenas de links num menu que distraem o usuário. O foco deve ser único: a conversão.
A anatomia ideal:
- **Hero Section**: Promessa clara (H1) + Botão de CTA contrastante.
- **Dores e Soluções**: Mostre que você entende o problema dele.
- **Prova Social**: Casos de sucesso, logos de clientes, depoimentos reais.
- **FAQ**: Quebre objeções antes que ele tenha que falar com um vendedor.

## 3. Fricção Zero
No Brasil, o WhatsApp é rei. Para muitos nichos (como E-commerce de alto ticket ou B2B), um botão flutuante bem programado levando direto para o WhatsApp do vendedor com uma mensagem pré-pronta converte absurdamente mais do que formulários complexos.
    `
  },
  {
    id: "3",
    slug: "bi-dados-decisoes-estrategicas",
    title: "Business Intelligence: Como parar de achar e começar a ter certeza",
    excerpt: "O volume de dados gerados pela sua empresa hoje é gigante. Se você não os está usando para ver o futuro, seu concorrente está.",
    date: "05 de Abril de 2025",
    datePublished: "2025-04-05T09:00:00-03:00",
    category: "Dados & BI",
    readTime: "6 min",
    content: `
O gestor moderno sofre de um problema curioso: ele não tem falta de dados, ele tem *excesso de dados inúteis*. Sistemas logísticos, CRMs, ERPs, controle financeiro... tudo gera dados, mas nada conversa.

## O papel do B.I. (Business Intelligence)
O objetivo de implementar inteligência de dados na sua empresa é simples: criar um painel central onde toda a complexidade vira gráficos simples e indicativos visuais (verde, amarelo e vermelho).

## Casos de Uso Reais
Imagine uma transportadora. Ao cruzar os dados do sistema de abastecimento (telemetria dos caminhões) com os dados de rotas do ERP, um painel de B.I. pode mostrar exatamente quais rotas ou motoristas estão gerando prejuízo invisível.

Ao conectar seu banco de dados a ferramentas como PowerBI, Metabase ou dashboards customizados em React, a diretoria deixa de pedir "relatórios mensais que demoram 3 dias para ficarem prontos" e passa a olhar a saúde da empresa ao vivo.
    `
  },
  {
    id: "4",
    slug: "o-que-e-crm-quando-empresa-precisa",
    title: "O que é um CRM e quando sua empresa realmente precisa de um",
    excerpt: "CRM é mais do que uma agenda de contatos. Entenda o que um sistema de CRM faz, quando ele deixa de ser opcional e como ele se conecta à sua operação comercial.",
    date: "01 de Julho de 2026",
    datePublished: "2026-07-01T09:00:00-03:00",
    category: "Gestão Comercial",
    readTime: "5 min",
    content: `
CRM é a sigla para Customer Relationship Management — em português, gestão do relacionamento com o cliente. Na prática, é o sistema onde a sua empresa organiza clientes, contatos, oportunidades e todo o histórico comercial em um só lugar.

Mas um bom CRM vai muito além de uma lista de telefones. Ele acompanha o cliente do primeiro contato até o fechamento do pedido — e ajuda o time comercial a não perder nenhuma venda pelo caminho.

## O que um CRM resolve no dia a dia
Sem um CRM, as informações ficam espalhadas: um orçamento no WhatsApp, um contato na agenda do celular, um pedido numa planilha. Quando alguém sai de férias ou troca de função, esse conhecimento se perde.

Com um CRM, você centraliza:

- **Cadastro de clientes** e o histórico de cada um
- **Orçamentos e pedidos**, com status claro de cada negociação
- **Agenda de atendimentos** e retornos combinados
- **Comissões** dos vendedores por venda fechada

## Quando o CRM deixa de ser opcional
Alguns sinais de que sua empresa já passou do ponto de usar planilha:

- Vendedores esquecem de retornar para clientes interessados
- Ninguém sabe ao certo quantos orçamentos estão em aberto
- O cálculo de comissão dá trabalho (e gera discussão) todo mês
- A informação depende da memória de uma pessoa só

Se dois ou mais desses pontos soam familiares, é hora de estruturar.

## CRM e o resto da operação
O ponto que muita empresa descobre tarde: o CRM não vive isolado. Ele conversa com estoque, financeiro e com o seu ERP.

No nosso [sistema de gestão comercial](/sistema-de-gestao-comercial), o CRM vem junto do fluxo de **orçamento → pedido → PDF**, do controle de estoque e do financeiro (contas a receber e a pagar). E ele se integra ao seu ERP (Bling, Omie ou Tiny) para manter os dados sincronizados — a emissão de NF-e e os pagamentos continuam no ERP, como devem ser.

Quer ver na prática? Compare os [planos e preços](/planos) e comece com 7 dias grátis.
    `
  },
  {
    id: "5",
    slug: "sistema-de-gestao-vs-planilha",
    title: "Sistema de gestão comercial vs. planilha: quando dar o salto",
    excerpt: "A planilha resolve no começo — até virar gargalo. Veja os sinais de que sua operação comercial já pede um sistema de gestão de verdade.",
    date: "24 de Junho de 2026",
    datePublished: "2026-06-24T09:00:00-03:00",
    category: "Gestão Comercial",
    readTime: "4 min",
    content: `
Toda empresa começa no Excel. E faz sentido: a planilha é barata, flexível e todo mundo sabe usar. O problema aparece quando a operação cresce e a planilha vira o gargalo em vez da solução.

## Os limites da planilha
- **Erro humano**: uma célula sobrescrita e o número do mês inteiro muda
- **Sem controle de acesso**: todo mundo vê e edita tudo
- **Não escala**: com centenas de pedidos, a planilha trava e ninguém confia mais nela
- **Retrabalho**: os mesmos dados digitados em vários lugares

## O que muda com um sistema de gestão
Um **sistema de gestão comercial** aplica as regras do seu negócio automaticamente. O orçamento vira pedido com um clique, o estoque baixa sozinho, a comissão é calculada na hora.

Mais importante: o dado é único. Você cadastra o cliente uma vez e ele aparece no orçamento, no pedido e no financeiro — sem redigitar.

## "Mas eu já tenho um ERP"
Ter ERP e ter gestão comercial não são a mesma coisa. O ERP cuida do fiscal — nota, imposto, pagamento. A gestão comercial cuida do dia a dia da venda: cliente, orçamento, pedido, comissão, agenda.

O ideal é que os dois conversem. O nosso [sistema](/sistema-de-gestao-comercial) não substitui o seu ERP — ele se conecta a ele (Bling, Omie, Tiny) e assume a parte comercial, deixando a NF-e e os pagamentos onde já estão.

## Quando dar o salto
Se a sua planilha já tem abas demais, fórmulas que só uma pessoa entende e um "cuidado pra não bagunçar", o momento é agora. Veja os [planos e preços](/planos) — dá para começar pequeno e crescer.
    `
  },
  {
    id: "6",
    slug: "integrar-bling-sistema-de-gestao",
    title: "Como integrar o Bling a um sistema de gestão comercial",
    excerpt: "O Bling cuida do fiscal; um sistema de gestão comercial cuida da venda. Veja como integrar os dois e parar de digitar a mesma coisa duas vezes.",
    date: "17 de Junho de 2026",
    datePublished: "2026-06-17T09:00:00-03:00",
    category: "Integrações",
    readTime: "4 min",
    content: `
O Bling é um dos ERPs mais usados por pequenas e médias empresas no Brasil, principalmente para emissão de NF-e e controle fiscal. Mas muita gente usa o Bling também como sistema comercial — e aí começa o retrabalho.

## Por que integrar em vez de duplicar
Quando a venda acontece num lugar e a nota noutro, o dado é digitado duas vezes. Isso significa mais tempo e mais chance de erro.

A integração resolve isso: cliente, produto e pedido cadastrados no sistema de gestão são sincronizados com o Bling — e a nota sai lá, sem redigitação.

## Como a integração funciona no nosso sistema
No nosso [sistema de gestão comercial](/sistema-de-gestao-comercial), a integração com o Bling está disponível nos planos **Pro e Business**. Na prática:

- Você gerencia clientes, orçamentos, pedidos, estoque e comissões no sistema
- Os dados são sincronizados com o Bling
- A **emissão de NF-e e os pagamentos continuam no Bling** — não emitimos nota nem processamos pagamento, isso é papel do ERP

Precisa de mais? O plano Business adiciona conectores para **Omie e Tiny**, além de multi-loja e assistente de IA.

## O melhor dos dois mundos
Você não troca o seu ERP — você tira dele o peso da operação comercial. O Bling faz o que faz bem (fiscal), e o sistema de gestão faz o que ele não foi feito para fazer (o dia a dia da venda).

Veja como isso se encaixa no seu caso nos [planos e preços](/planos).
    `
  },
  {
    id: "7",
    slug: "orcamento-pedido-comissao-processo-comercial",
    title: "Orçamento, pedido e comissão: como organizar o processo comercial",
    excerpt: "Do orçamento ao pagamento da comissão, um processo comercial organizado vende mais e discute menos. Veja como estruturar cada etapa.",
    date: "10 de Junho de 2026",
    datePublished: "2026-06-10T09:00:00-03:00",
    category: "Gestão Comercial",
    readTime: "4 min",
    content: `
Todo negócio tem um processo comercial — mesmo quem acha que não tem. A diferença é que, sem estrutura, esse processo mora na cabeça das pessoas e falha na hora errada.

## As três etapas que não podem falhar

### 1. Orçamento
O orçamento é a primeira impressão. Se ele demora ou vem com erro, a venda esfria. Um **sistema de orçamento** deixa o vendedor montar a proposta rápido, com preços e produtos certos, e gerar o PDF pronto para enviar.

### 2. Pedido
Orçamento aprovado precisa virar pedido sem retrabalho — sem redigitar tudo em outro lugar. No fluxo **orçamento → pedido → PDF**, o dado passa adiante com um clique, e o estoque acompanha.

### 3. Comissão
A comissão é onde nascem as discussões. Cálculo manual gera dúvida e desconfiança. Com regras claras — **comissão básica** ou **avançada por produto** — o número sai sozinho e todo mundo confia.

## Tudo conectado
Essas três etapas não deveriam viver em sistemas diferentes. No nosso [sistema de gestão comercial](/sistema-de-gestao-comercial), orçamento, pedido, estoque, financeiro e comissão fazem parte do mesmo fluxo — e ainda se conectam ao seu ERP (Bling, Omie, Tiny) para o fiscal.

## Comece pelo essencial
Não precisa organizar tudo de uma vez. Dá para começar pelo básico — orçamento, pedido, clientes e comissão — e evoluir. Veja os [planos e preços](/planos) e teste grátis por 7 dias.
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

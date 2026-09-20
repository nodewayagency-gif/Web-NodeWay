/**
 * ============================================================================
 *  SITE CONFIG — Painel de controle central do site
 * ============================================================================
 *  Este é o ÚNICO arquivo que você precisa editar para clonar este site para
 *  um novo cliente/projeto. Altere os dados abaixo e o site inteiro se ajusta
 *  automaticamente: metadata, SEO, JSON-LD, sitemap, robots, manifest, header,
 *  footer, cores da marca e imagens Open Graph.
 *
 *  O que NÃO fica aqui (editar nos arquivos indicados):
 *   - Conteúdo dos serviços e cidades ....... lib/seo-data.ts
 *   - Cases e posts do blog ................. lib/data.ts
 *   - Fontes (Google Fonts) ................. lib/fonts.ts
 *   - Escala de cores do tema (OKLCH) ....... app/globals.css  (:root)
 *
 *  Dica: as cores de marca (brand.colors) são injetadas como variáveis CSS
 *  (--brand-green / --brand-cyan / --brand-blue) em app/layout.tsx, então
 *  mudar o hex aqui já atualiza os gradientes da marca em TODO o site.
 * ============================================================================
 */

export const siteConfig = {
  // ── Identidade ────────────────────────────────────────────────────────────
  name: 'Nodeway Agency',
  shortName: 'Nodeway',
  /** Segunda palavra do logo (ex.: "AGENCY"). Deixe '' para ocultar. */
  brandSuffix: 'AGENCY',
  tagline: 'Soluções Digitais Sob Medida',
  description:
    'Nodeway Agency — desenvolvimento web, sistemas sob medida, e-commerce e BI. Sede em Cascavel, clientes em Blumenau, Guanambi, Toledo. Em expansão para Curitiba e todo o Brasil.',
  /** Descrição curta e "vendedora" usada em Open Graph / redes sociais. */
  ogDescription:
    'Criamos sistemas, plataformas e experiências digitais personalizadas para empresas que buscam escala e performance.',
  keywords: [
    'agência de desenvolvimento web',
    'Nodeway Agency',
    'desenvolvimento Cascavel',
    'desenvolvimento Blumenau',
    'desenvolvimento Guanambi',
    'sistemas sob medida',
    'e-commerce',
    'landing pages',
    'business intelligence',
    'automação de processos',
    'desenvolvimento next.js',
  ],
  /** Categoria (metadata) e idioma. */
  category: 'technology',
  locale: 'pt_BR', // formato Open Graph
  lang: 'pt-BR', // atributo <html lang>
  /** ID da tag do Google Ads / Google Analytics */
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,

  // ── Domínio ───────────────────────────────────────────────────────────────
  /** SEM barra no final. Ex.: https://exemplo.com.br */
  url: 'https://nodewayagency.com.br',

  // ── Contato ───────────────────────────────────────────────────────────────
  contact: {
    email: 'contato@nodewayagency.com.br',
    /** Formato E.164 — usado em JSON-LD e links tel:. Ex.: +5545999403598 */
    phone: '+5545998358847',
    /** Como o telefone aparece na tela. */
    phoneDisplay: '(45) 99835-8847',
    /** Só dígitos, com DDI (55) — usado nos links wa.me. */
    whatsapp: '5545998358847',
    /** Mensagem pré-preenchida ao abrir o WhatsApp. */
    whatsappMessage: 'Olá Nodeway, quero um orçamento.',
  },

  // ── Redes sociais (deixe '' para ocultar do site e do JSON-LD) ────────────
  social: {
    instagram: 'https://www.instagram.com/nodewayagency/',
    linkedin: 'https://www.linkedin.com/company/nodewayagency/',
    facebook: '',
    youtube: '',
  },

  // ── Dados da empresa (SEO local / JSON-LD Organization) ───────────────────
  business: {
    priceRange: '$$',
    address: {
      locality: 'Cascavel',
      region: 'PR',
      country: 'BR',
    },
    geo: { latitude: -24.955, longitude: -53.455 },
    openingHours: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    /** Ano de fundação — usado no copyright do rodapé. */
    foundingYear: 2025,
  },

  // ── Marca: cores (hex) ────────────────────────────────────────────────────
  //  Injetadas como CSS vars (--brand-*) no layout e usadas nas imagens OG.
  brand: {
    colors: {
      background: '#0A1628', // navy de fundo / theme-color do navegador
      green: '#7ED957',
      cyan: '#00C2CB',
      blue: '#0095DB',
      foreground: '#F5F7FA', // texto claro (usado nas imagens OG geradas)
      muted: '#94A3B8',
    },
  },
};

// ── Helpers derivados (não precisa editar) ──────────────────────────────────

/** Link do WhatsApp com mensagem pré-preenchida. */
export const WHATSAPP_URL = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  siteConfig.contact.whatsappMessage,
)}`;

/** Link do WhatsApp "limpo" (sem mensagem). */
export const WHATSAPP_URL_SHORT = `https://wa.me/${siteConfig.contact.whatsapp}`;

/** Link mailto: pronto. */
export const MAILTO = `mailto:${siteConfig.contact.email}`;

/** Monta uma URL absoluta a partir de um path. absoluteUrl('/blog') → https://.../blog */
export function absoluteUrl(path = ''): string {
  if (!path || path === '/') return siteConfig.url;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${clean}`;
}

/** Perfis sociais preenchidos, para o footer e o JSON-LD `sameAs`. */
export const socialProfiles = Object.entries(siteConfig.social)
  .filter(([, url]) => Boolean(url))
  .map(([network, url]) => ({ network, url }));

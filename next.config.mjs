/** @type {import('next').NextConfig} */
const nextConfig = {
  // Coloca o CSS inline no <head> (tira os .css do caminho crítico — PageSpeed
  // apontava ~150 ms de bloqueio de renderização).
  experimental: {
    inlineCss: true,
  },
  // Otimização de imagem do Next ligada (melhor LCP/SEO). Se você fizer deploy
  // em um host estático sem otimizador, volte para `unoptimized: true`.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Os cases "Consultor Newflexo" e "orçamento de etiquetas" eram o mesmo projeto.
      { source: '/cases/newflexo-crm', destination: '/cases/sistema-orcamento-etiquetas', permanent: true },
    ];
  },
}

export default nextConfig

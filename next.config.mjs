/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimização de imagem do Next ligada (melhor LCP/SEO). Se você fizer deploy
  // em um host estático sem otimizador, volte para `unoptimized: true`.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig

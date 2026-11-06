import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { siteConfig } from '@/lib/site-config';

export const alt = `Planos e Soluções | ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Planos e Soluções',
    title: 'CRM, Landing Pages, BI e E-commerce sob medida',
    subtitle: 'CRM a partir de R$ 69,90/mês · demais linhas com orçamento sob consulta',
  });
}

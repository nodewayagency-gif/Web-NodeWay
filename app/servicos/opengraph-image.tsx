import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { siteConfig } from '@/lib/site-config';

export const alt = `Serviços de Desenvolvimento Digital | ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Serviços',
    title: 'Desenvolvimento digital sob medida',
    subtitle: 'Web, sistemas, e-commerce, landing pages, BI e automação',
  });
}

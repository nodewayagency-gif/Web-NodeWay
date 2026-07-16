import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { siteConfig } from '@/lib/site-config';

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    title: siteConfig.tagline,
    subtitle: 'Desenvolvimento web, sistemas sob medida, e-commerce e BI.',
  });
}

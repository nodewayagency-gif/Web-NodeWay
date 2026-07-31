import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { siteConfig } from '@/lib/site-config';

export const alt = `Blog | ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Blog',
    title: 'Blog da Nodeway Agency',
    subtitle: 'Estratégias de tecnologia, gestão e conversão',
  });
}

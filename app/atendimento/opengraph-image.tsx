import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { siteConfig } from '@/lib/site-config';

export const alt = `Onde Atendemos | ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Atendimento',
    title: 'Onde a Nodeway atende',
    subtitle: 'Cascavel, Blumenau, Guanambi, Toledo, Curitiba e todo o Brasil',
  });
}

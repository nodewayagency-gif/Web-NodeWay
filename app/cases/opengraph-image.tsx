import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { siteConfig } from '@/lib/site-config';

export const alt = `Casos de Sucesso | ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: 'Cases',
    title: 'Casos de sucesso da Nodeway',
    subtitle: 'Resultados reais em desenvolvimento, automação e dados',
  });
}

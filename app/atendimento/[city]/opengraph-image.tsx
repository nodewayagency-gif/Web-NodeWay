import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { getCityHub, cityHubs } from '@/lib/seo-data';
import { siteConfig } from '@/lib/site-config';

export function generateStaticParams() {
  return cityHubs.map((c) => ({ city: c.slug }));
}

export const alt = `Atendimento | ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const hub = getCityHub(city);

  if (!hub) {
    return renderOgImage({ eyebrow: 'Atendimento', title: siteConfig.name });
  }

  return renderOgImage({
    eyebrow: 'Atendimento',
    title: hub.h1,
    subtitle: `${hub.name}${hub.state ? `/${hub.state}` : ''} · presencial e remoto`,
  });
}

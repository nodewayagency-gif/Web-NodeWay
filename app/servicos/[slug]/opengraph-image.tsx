import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { getServicePillar, servicePillars } from '@/lib/seo-data';
import { siteConfig } from '@/lib/site-config';

export function generateStaticParams() {
  return servicePillars.map((p) => ({ slug: p.slug }));
}

export const alt = `Serviços | ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pillar = getServicePillar(slug);

  if (!pillar) {
    return renderOgImage({ eyebrow: 'Serviços', title: siteConfig.name });
  }

  return renderOgImage({
    eyebrow: 'Serviços',
    title: pillar.title,
    subtitle: 'Desenvolvimento digital sob medida · Cascavel e todo o Brasil',
  });
}

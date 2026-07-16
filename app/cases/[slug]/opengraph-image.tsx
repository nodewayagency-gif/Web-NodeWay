import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { cases } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';

export const alt = `Caso de Sucesso da ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseData = cases.find((c) => c.slug === slug);

  if (!caseData) {
    return renderOgImage({ eyebrow: 'Caso de Sucesso', title: siteConfig.name });
  }

  return renderOgImage({
    eyebrow: 'Caso de Sucesso',
    badge: caseData.category,
    title: caseData.title,
    subtitle: `Cliente: ${caseData.client}`,
  });
}

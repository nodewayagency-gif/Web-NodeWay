import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { offers, getOffer } from '@/lib/offers';
import { siteConfig } from '@/lib/site-config';

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export const alt = siteConfig.name;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const offer = getOffer(slug);

  if (!offer) {
    return renderOgImage({ title: siteConfig.name });
  }

  return renderOgImage({
    eyebrow: offer.eyebrow,
    title: offer.ogTitle,
    subtitle: offer.ogSubtitle,
  });
}

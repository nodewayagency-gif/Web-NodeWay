import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { blogPosts } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';

export const alt = `Artigo do Blog da ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return renderOgImage({ eyebrow: 'Blog', title: siteConfig.name });
  }

  return renderOgImage({
    eyebrow: 'Blog',
    badge: post.category,
    title: post.title,
    subtitle: `Tempo de leitura: ${post.readTime}`,
  });
}

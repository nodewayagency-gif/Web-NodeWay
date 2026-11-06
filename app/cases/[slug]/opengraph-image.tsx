import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { renderOgImage, renderCaseOgImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og-template';
import { cases } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';

export const alt = `Caso de Sucesso da ${siteConfig.name}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

/** Lê a versão JPG do print (public/cases/og) — o gerador de OG não aceita WebP. */
async function loadScreenshot(src?: string) {
  if (!src) return null;
  const name = path.basename(src).replace(/\.webp$/, '.jpg');
  try {
    const buf = await readFile(path.join(process.cwd(), 'public', 'cases', 'og', name));
    return `data:image/jpeg;base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseData = cases.find((c) => c.slug === slug);

  if (!caseData) {
    return renderOgImage({ eyebrow: 'Caso de Sucesso', title: siteConfig.name });
  }

  const screenshot = await loadScreenshot(caseData.images?.[0]?.src);
  if (screenshot) {
    return renderCaseOgImage({ client: caseData.client, category: caseData.category, screenshot });
  }

  return renderOgImage({
    eyebrow: 'Caso de Sucesso',
    badge: caseData.category,
    title: caseData.title,
    subtitle: `Cliente: ${caseData.client}`,
  });
}

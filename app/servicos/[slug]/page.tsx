import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SeoPageShell } from '@/components/seo/seo-page-shell';
import { FaqSection } from '@/components/seo/faq-section';
import { RelatedCases, RelatedBlogPosts, SeoCta } from '@/components/seo/related-links';
import { getServicePillar, servicePillars, BASE_URL } from '@/lib/seo-data';

export async function generateStaticParams() {
  return servicePillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getServicePillar(slug);
  if (!pillar) return { title: 'Serviço não encontrado' };

  return {
    title: pillar.title,
    description: pillar.metaDescription,
    alternates: { canonical: `${BASE_URL}/servicos/${pillar.slug}` },
    openGraph: {
      title: `${pillar.title} | Nodeway Agency`,
      description: pillar.metaDescription,
      url: `${BASE_URL}/servicos/${pillar.slug}`,
    },
  };
}

export default async function ServicePillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = getServicePillar(slug);

  if (!pillar) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: pillar.title,
    description: pillar.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Nodeway Agency',
      url: BASE_URL,
    },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    url: `${BASE_URL}/servicos/${pillar.slug}`,
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${BASE_URL}/servicos` },
      { '@type': 'ListItem', position: 3, name: pillar.title, item: `${BASE_URL}/servicos/${pillar.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <SeoPageShell eyebrow="Serviços" h1={pillar.h1} intro={pillar.intro}>
        <Link
          href="/servicos"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Todos os serviços
        </Link>

        {pillar.sections.map((section) => (
          <div key={section.title} className="mb-12">
            <h2 className="text-2xl font-display text-foreground mb-4">{section.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
          </div>
        ))}

        <RelatedCases
          slugs={pillar.relatedCaseSlugs}
          preferSystem={['sistemas-sob-medida', 'bi-dados', 'integracoes-automacao'].includes(pillar.slug)}
        />
        <RelatedBlogPosts slugs={pillar.relatedBlogSlugs} />
        <FaqSection faq={pillar.faq} />
        <SeoCta />
      </SeoPageShell>
    </>
  );
}

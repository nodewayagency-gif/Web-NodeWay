import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SeoPageShell } from '@/components/seo/seo-page-shell';
import { CityClientsSection } from '@/components/seo/city-clients-section';
import { FaqSection } from '@/components/seo/faq-section';
import { ExpansionSection } from '@/components/seo/expansion-section';
import { RelatedServices, SeoCta } from '@/components/seo/related-links';
import { getCityHub, cityHubs, BASE_URL } from '@/lib/seo-data';
import { servicePillars } from '@/lib/seo-data';

export async function generateStaticParams() {
  return cityHubs.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const hub = getCityHub(slug);
  if (!hub) return { title: 'Região não encontrada' };

  return {
    // metaTitle já traz "| Nodeway Agency"; absolute evita duplicar o sufixo do template.
    title: { absolute: hub.metaTitle },
    description: hub.metaDescription,
    alternates: { canonical: `${BASE_URL}/atendimento/${hub.slug}` },
    openGraph: {
      title: hub.metaTitle,
      description: hub.metaDescription,
      url: `${BASE_URL}/atendimento/${hub.slug}`,
    },
  };
}

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const hub = getCityHub(slug);

  if (!hub) notFound();

  const serviceSlugs = [
    ...new Set(hub.clients.flatMap((c) => c.relatedServiceSlugs)),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Nodeway Agency - ${hub.name}`,
    description: hub.metaDescription,
    url: `${BASE_URL}/atendimento/${hub.slug}`,
    // Referencia a Organization canônica por @id (evita entidade duplicada e "fina").
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: hub.state
      ? {
          '@type': 'City',
          name: hub.name,
          containedInPlace: { '@type': 'State', name: hub.state },
        }
      : { '@type': 'Country', name: 'Brasil' },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Atendimento', item: `${BASE_URL}/atendimento` },
      { '@type': 'ListItem', position: 3, name: hub.name, item: `${BASE_URL}/atendimento/${hub.slug}` },
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
      <SeoPageShell
        eyebrow={`${hub.name}${hub.state ? `, ${hub.state}` : ''} · ${hub.region}`}
        h1={hub.h1}
        intro={hub.localIntro}
        presenceStatus={hub.presenceStatus}
      >
        <Link
          href="/atendimento"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Todas as regiões
        </Link>

        {hub.highlights.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-display text-foreground mb-6">Destaques</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {hub.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </section>
        )}

        <CityClientsSection clients={hub.clients} />

        {hub.clients.length === 0 && hub.presenceStatus === 'em_expansao' && (
          <section className="mb-16 bg-card/30 border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-display text-foreground mb-4">Em expansão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estamos abrindo carteira de clientes em {hub.name}. Enquanto isso, conheça nossos
              cases em Cascavel, Toledo, Blumenau e Guanambi — mesma equipe, mesmo padrão técnico.
            </p>
          </section>
        )}

        {hub.clients.length === 0 && hub.presenceStatus === 'nacional' && (
          <ExpansionSection compact />
        )}

        {serviceSlugs.length > 0 && <RelatedServices slugs={serviceSlugs} />}

        {hub.presenceStatus !== 'nacional' && (
          <section className="mb-16">
            <h2 className="text-2xl font-display text-foreground mb-6">Serviços disponíveis</h2>
            <div className="flex flex-wrap gap-3">
              {servicePillars.map((p) => (
                <Link
                  key={p.slug}
                  href={`/servicos/${p.slug}`}
                  className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        <FaqSection faq={hub.faq} />
        <SeoCta />
      </SeoPageShell>
    </>
  );
}

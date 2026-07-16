import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ExternalLink } from 'lucide-react';
import { cases } from '@/lib/data';
import { siteConfig, absoluteUrl } from '@/lib/site-config';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';

export async function generateStaticParams() {
  return cases.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const caseData = cases.find((c) => c.slug === resolvedParams.slug);
  if (!caseData) return { title: 'Case Não Encontrado' };

  const url = absoluteUrl(`/cases/${caseData.slug}`);

  return {
    title: `${caseData.client} - Case de Sucesso | ${siteConfig.name}`,
    description: caseData.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${caseData.client} - Case de Sucesso | ${siteConfig.name}`,
      description: caseData.description,
      url,
      type: 'article',
    },
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const caseData = cases.find((c) => c.slug === resolvedParams.slug);

  if (!caseData) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${caseData.client} - ${caseData.title}`,
    "description": caseData.description,
    "image": absoluteUrl('/cases/' + caseData.slug + '/opengraph-image'),
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": `${siteConfig.url}/`
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl('/icon.png')
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": absoluteUrl(`/cases/${caseData.slug}`)
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      
      <article className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1000px] mx-auto">
        
        <Link href="/cases" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 group transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Voltar para todos os cases
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider bg-primary/5">
              {caseData.category}
            </span>
            <span className="text-muted-foreground text-sm font-medium">Cliente: {caseData.client}</span>
            {caseData.city && caseData.state && (
              <span className="text-muted-foreground text-sm font-medium">
                {caseData.city}, {caseData.state}
              </span>
            )}
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-8">
            {caseData.title}
          </h1>
          
          {caseData.url && (
            <a 
              href={caseData.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors border-b border-primary/30 pb-0.5"
            >
              Visitar projeto <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
          
          <div className="bg-card/30 border border-border rounded-3xl p-8 lg:p-12 mb-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
             <h2 className="text-2xl font-display text-foreground mb-6">O Desafio</h2>
             <p className="text-lg leading-relaxed">{caseData.challenge}</p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display text-foreground mb-6">A Solução Nodeway</h2>
            <p className="text-lg leading-relaxed">{caseData.solution}</p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-display text-foreground mb-8">Resultados Obtidos</h2>
            <ul className="space-y-4 m-0 p-0 list-none">
              {caseData.results.map((result, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-xl text-foreground font-medium">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

      </article>

      <FooterSection />
    </main>
  );
}

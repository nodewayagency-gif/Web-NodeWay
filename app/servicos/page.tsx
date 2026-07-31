import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { ExpansionSection } from '@/components/seo/expansion-section';
import { SeoCta } from '@/components/seo/related-links';
import { servicePillars, BASE_URL } from '@/lib/seo-data';

const servicosDescription =
  'Desenvolvimento web, sistemas sob medida, e-commerce, landing pages, BI e automação. Nodeway Agency — Cascavel, Blumenau, Guanambi e todo o Brasil.';

export const metadata: Metadata = {
  title: 'Serviços de Desenvolvimento Digital',
  description: servicosDescription,
  alternates: { canonical: `${BASE_URL}/servicos` },
  openGraph: {
    title: 'Serviços de Desenvolvimento Digital | Nodeway Agency',
    description: servicosDescription,
    url: `${BASE_URL}/servicos`,
    type: 'website',
  },
};

export default function ServicosPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Nossos Serviços
          </span>
          <h1 className="text-4xl lg:text-7xl font-display tracking-tight text-foreground mb-6">
            Desenvolvimento digital <span className="brand-gradient">sob medida</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Sistemas, plataformas e experiências digitais para empresas em Cascavel, Blumenau,
            Guanambi, Toledo e em todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {servicePillars.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/servicos/${pillar.slug}`}
              className="group flex flex-col bg-card/30 border border-border rounded-2xl p-6 lg:p-8 hover:bg-card/60 transition-colors"
            >
              <h2 className="text-xl lg:text-2xl font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                {pillar.title}
              </h2>
              <p className="text-muted-foreground mb-6 flex-1">{pillar.intro}</p>
              <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <ExpansionSection />
        <div className="mt-16">
          <SeoCta />
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

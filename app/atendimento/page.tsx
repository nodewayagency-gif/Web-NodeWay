import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { PresenceBadge } from '@/components/seo/presence-badge';
import { SeoCta } from '@/components/seo/related-links';
import { cityHubs, BASE_URL } from '@/lib/seo-data';

const atendimentoDescription =
  'Nodeway Agency atende Cascavel (sede), Blumenau, Guanambi, Toledo, Curitiba e todo o Brasil. Clientes reais em múltiplas regiões, em expansão.';

export const metadata: Metadata = {
  title: 'Onde Atendemos',
  description: atendimentoDescription,
  alternates: { canonical: `${BASE_URL}/atendimento` },
  openGraph: {
    title: 'Onde Atendemos | Nodeway Agency',
    description: atendimentoDescription,
    url: `${BASE_URL}/atendimento`,
    type: 'website',
  },
};

export default function AtendimentoPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Presença Nacional
          </span>
          <h1 className="text-4xl lg:text-7xl font-display tracking-tight text-foreground mb-6">
            Onde a <span className="brand-gradient">Nodeway</span> atende
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Sede em Cascavel/PR, clientes ativos em Blumenau, Guanambi e Toledo. Em expansão
            para Curitiba e todo o Brasil — presencial ou remoto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {cityHubs.map((city) => (
            <Link
              key={city.slug}
              href={`/atendimento/${city.slug}`}
              className="group flex flex-col bg-card/30 border border-border rounded-2xl p-6 lg:p-8 hover:bg-card/60 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h2 className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                    {city.name}
                    {city.state && `, ${city.state}`}
                  </h2>
                </div>
                <PresenceBadge status={city.presenceStatus} />
              </div>
              <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                {city.localIntro.slice(0, 140)}...
              </p>
              {city.clients.length > 0 && (
                <p className="text-xs font-mono text-primary mb-4">
                  {city.clients.map((c) => c.clientName).join(' · ')}
                </p>
              )}
              <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Ver região
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <SeoCta />
      </section>
      <FooterSection />
    </main>
  );
}

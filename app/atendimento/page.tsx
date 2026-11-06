import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { BrazilMap, mapLegend } from '@/components/seo/brazil-map';
import { WHATSAPP_URL } from '@/lib/site-config';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { PresenceBadge } from '@/components/seo/presence-badge';
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
  const served = cityHubs.filter((c) => c.presenceStatus === 'sede' || c.presenceStatus === 'cliente_ativo');
  const states = new Set(served.map((c) => c.state)).size;

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

        {/* Mapa + chamariz */}
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-center mb-24">
          <div className="relative rounded-3xl border border-border bg-card/30 p-4 sm:p-8 text-foreground overflow-hidden">
            <BrazilMap />
            <ul className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              {mapLegend.map((l) => (
                <li key={l.status} className="inline-flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={
                      l.status === 'em_expansao'
                        ? { border: `1.5px dashed ${l.color}` }
                        : { background: l.color }
                    }
                  />
                  {l.label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <dl className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-2xl border border-border bg-card/30 p-5">
                <dt className="text-sm text-muted-foreground">Cidades com clientes</dt>
                <dd className="text-4xl font-display brand-gradient mt-1">{served.length}</dd>
              </div>
              <div className="rounded-2xl border border-border bg-card/30 p-5">
                <dt className="text-sm text-muted-foreground">Estados</dt>
                <dd className="text-4xl font-display brand-gradient mt-1">{states}</dd>
              </div>
            </dl>

            <div className="relative rounded-3xl border border-primary/30 bg-card/50 p-7 lg:p-9 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full brand-gradient-bg opacity-20 blur-3xl" />
              <p className="relative text-sm font-mono text-primary mb-3">Sua cidade não está no mapa?</p>
              <h2 className="relative text-2xl lg:text-3xl font-display text-foreground mb-3">
                Sua empresa pode ser o próximo ponto aqui.
              </h2>
              <p className="relative text-muted-foreground mb-7">
                Atendemos de forma remota em todo o Brasil, com reuniões online e acompanhamento a cada entrega.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative cta-primary inline-flex items-center gap-2 h-12 px-6 rounded-full font-medium"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Falar com a Nodeway
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      </section>
      <FooterSection />
    </main>
  );
}

import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { cityHubs } from '@/lib/seo-data';
import { PresenceBadge } from './presence-badge';

export function ExpansionSection({ compact = false }: { compact?: boolean }) {
  const locations = cityHubs.filter((c) => c.slug !== 'brasil');

  return (
    <section className={compact ? 'mb-12' : 'mb-16'}>
      {!compact && (
        <h2 className="text-3xl font-display text-foreground mb-4">Onde já entregamos</h2>
      )}
      <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
        De Cascavel ao interior da Bahia — já entregamos soluções em Blumenau, Guanambi e Toledo.
        Seguimos em expansão para Curitiba e todo o Brasil.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {locations.map((city) => (
          <Link
            key={city.slug}
            href={`/atendimento/${city.slug}`}
            className="group flex flex-col bg-card/30 border border-border rounded-2xl p-5 hover:bg-card/60 hover:border-primary/30 transition-all"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-display text-lg">
                  {city.name}
                  {city.state && `, ${city.state}`}
                </span>
              </div>
              <PresenceBadge status={city.presenceStatus} />
            </div>
            <p className="text-sm text-muted-foreground mb-3 flex-1">
              {city.clients.length > 0
                ? `${city.clients.length} cliente${city.clients.length > 1 ? 's' : ''} ativo${city.clients.length > 1 ? 's' : ''}`
                : city.presenceStatus === 'em_expansao'
                  ? 'Aceitando novos projetos'
                  : city.region}
            </p>
            <span className="inline-flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Saiba mais <ArrowRight className="w-3 h-3 ml-1" />
            </span>
          </Link>
        ))}
      </div>
      {!compact && (
        <div className="mt-8">
          <Link
            href="/atendimento"
            className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Ver todas as regiões
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      )}
    </section>
  );
}

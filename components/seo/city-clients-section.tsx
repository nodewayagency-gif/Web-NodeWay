import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LocalClient } from '@/lib/seo-data';

export function CityClientsSection({
  clients,
  title = 'Nossos clientes na região',
}: {
  clients: LocalClient[];
  title?: string;
}) {
  if (!clients.length) return null;

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-display text-foreground mb-8">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {clients.map((client) => (
          <div
            key={client.caseSlug}
            className="bg-card/30 border border-border rounded-2xl p-6 lg:p-8 hover:bg-card/50 transition-colors"
          >
            <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">
              {client.sector}
            </p>
            <h3 className="text-xl font-display text-foreground mb-4">{client.clientName}</h3>
            <ul className="space-y-2 mb-6">
              {client.solutions.map((s) => (
                <li key={s} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href={`/cases/${client.caseSlug}`}
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Ver case completo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

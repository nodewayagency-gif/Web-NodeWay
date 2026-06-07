import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { WHATSAPP_URL_SHORT } from '@/lib/contact';
import { getCaseBySlug } from '@/lib/data';
import { blogPosts } from '@/lib/data';
import { servicePillars } from '@/lib/seo-data';

export function RelatedCases({ slugs }: { slugs: string[] }) {
  const items = slugs.map(getCaseBySlug).filter(Boolean);
  if (!items.length) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-display text-foreground mb-6">Cases relacionados</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((c) => (
          <Link
            key={c!.slug}
            href={`/cases/${c!.slug}`}
            className="group bg-card/30 border border-border rounded-xl p-5 hover:bg-card/60 transition-colors"
          >
            <p className="text-xs font-mono text-primary mb-2">{c!.client}</p>
            <p className="text-foreground font-medium group-hover:text-primary transition-colors">
              {c!.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function RelatedBlogPosts({ slugs }: { slugs: string[] }) {
  const items = blogPosts.filter((p) => slugs.includes(p.slug));
  if (!items.length) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-display text-foreground mb-6">Artigos relacionados</h2>
      <div className="space-y-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group flex items-center justify-between bg-card/30 border border-border rounded-xl p-5 hover:bg-card/60 transition-colors"
          >
            <span className="text-foreground group-hover:text-primary transition-colors">{p.title}</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 ml-4" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export function RelatedServices({ slugs }: { slugs: string[] }) {
  const items = servicePillars.filter((p) => slugs.includes(p.slug));
  if (!items.length) return null;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-display text-foreground mb-6">Serviços relacionados</h2>
      <div className="flex flex-wrap gap-3">
        {items.map((p) => (
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
  );
}

export function SeoCta() {
  return (
    <div className="p-8 sm:p-12 bg-card border border-border rounded-3xl text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="relative z-10">
        <h3 className="text-2xl font-display text-foreground mb-4">Pronto para começar?</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Conte seu projeto. Fazemos diagnóstico gratuito e proposta sob medida — Cascavel, Brasil e remoto.
        </p>
        <a
          href={WHATSAPP_URL_SHORT}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 brand-gradient-bg text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}

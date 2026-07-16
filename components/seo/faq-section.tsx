import { ChevronDown } from 'lucide-react';
import { FaqItem } from '@/lib/seo-data';

/**
 * FAQ acessível e 100% renderizado no HTML (usa <details>/<summary> nativo),
 * para que o Google indexe as respostas — algo que o accordion via JS não
 * garantia. Também injeta o schema FAQPage (JSON-LD) para rich results.
 */
export function FaqSection({ faq, title = 'Perguntas frequentes' }: { faq: FaqItem[]; title?: string }) {
  if (!faq.length) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-3xl font-display text-foreground mb-8">{title}</h2>
      <div className="w-full">
        {faq.map((item, i) => (
          <details
            key={i}
            className="group border-b border-border"
          >
            <summary className="flex items-start justify-between gap-4 py-4 cursor-pointer list-none text-left text-foreground font-medium transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown className="w-4 h-4 mt-1 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="pb-4 text-muted-foreground text-base leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

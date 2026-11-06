import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight, Clock, X } from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { FaqSection } from '@/components/seo/faq-section';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { SiteScreenshot } from '@/components/landing/site-screenshot';
import { StickyMobileCta } from '@/components/landing/sticky-mobile-cta';
import { offers, getOffer } from '@/lib/offers';
import { getCaseBySlug } from '@/lib/data';
import { siteConfig, absoluteUrl } from '@/lib/site-config';

export function generateStaticParams() {
  return offers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) return { title: 'Oferta não encontrada' };

  const url = absoluteUrl(`/lp/${offer.slug}`);
  return {
    title: offer.metaTitle,
    description: offer.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${offer.metaTitle} | ${siteConfig.name}`,
      description: offer.metaDescription,
      url,
      type: 'website',
    },
  };
}

function wa(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Passos genéricos (iguais para toda oferta sob consulta).
const steps = [
  { n: '1', title: 'Fale no WhatsApp', desc: 'Conte o seu desafio. Sem robô, sem formulário chato.' },
  { n: '2', title: 'Diagnóstico em 24h', desc: 'Analisamos e enviamos escopo, prazo e valor — de graça.' },
  { n: '3', title: 'Mão na massa', desc: 'Aprovou? A gente constrói e acompanha até entregar.' },
];

const proofClients = [
  'ILC',
  'Carmax Baterias',
  'Transporte Maurício',
  'JPB',
  'Newflexo',
  'Formento',
  'Primardi Saúde',
  'Vivre',
];

export default async function OfferLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) notFound();

  const Icon = offer.icon;
  const ctaLink = wa(offer.whatsappMessage);
  const proofCases = offer.caseSlugs.map(getCaseBySlug).filter(Boolean);
  // Em ofertas de sistema, mostra o print do sistema (quando houver) em vez da landing page.
  const prefersSystem = ['crm', 'bi', 'sistemas-sob-medida', 'automacao'].includes(offer.slug);
  const proofImage = (c: NonNullable<(typeof proofCases)[number]>) =>
    (prefersSystem && c.images?.find((i) => i.label.startsWith('Sistema'))) || c.images?.[0];

  const trustChips = [
    { icon: Clock, label: offer.priceNote },
    { icon: Check, label: 'Sem compromisso' },
    { icon: WhatsAppIcon, label: 'Atendimento humano no WhatsApp' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: siteConfig.url },
          {
            '@type': 'ListItem',
            position: 2,
            name: offer.eyebrow,
            item: absoluteUrl(`/lp/${offer.slug}`),
          },
        ],
      },
      {
        '@type': 'Service',
        name: offer.eyebrow,
        serviceType: offer.eyebrow,
        description: offer.metaDescription,
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: { '@type': 'Country', name: 'Brasil' },
        url: absoluteUrl(`/lp/${offer.slug}`),
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pb-20 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Decoração ambiente (glows + grade) */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(0,194,203,0.13) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(126,217,87,0.10) 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-10 -right-40 w-[620px] h-[620px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(0,113,188,0.13) 0%, transparent 70%)' }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lp-grid" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M 56 0 L 0 0 0 56" fill="none" stroke="rgba(0,194,203,1)" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lp-grid)" />
          </svg>
        </div>

        <div className="relative z-10 pt-32 pb-16 lg:pt-44 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
          <span className="inline-flex items-center gap-2.5 rounded-full brand-border px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-7">
            <Icon className="w-3.5 h-3.5 text-primary" />
            {offer.eyebrow}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display tracking-tight text-foreground mb-6 leading-[1.02] max-w-4xl">
            {offer.headlineLead}{' '}
            <span className="brand-gradient">{offer.headlineAccent}</span>
          </h1>

          <p className="text-lg lg:text-2xl text-muted-foreground leading-relaxed mb-9 max-w-2xl">
            {offer.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-full hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {offer.ctaLabel}
            </a>
            {offer.secondaryCta && (
              <Link
                href={offer.secondaryCta.href}
                className="cta-secondary inline-flex items-center justify-center gap-2 px-8 h-14 rounded-full font-medium"
              >
                {offer.secondaryCta.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {trustChips.map((chip) => {
              const ChipIcon = chip.icon;
              return (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-4 py-2 text-sm text-muted-foreground"
                >
                  <ChipIcon className="w-4 h-4 text-primary shrink-0" />
                  {chip.label}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Dores ────────────────────────────────────────────── */}
      <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <h2 className="text-2xl lg:text-4xl font-display tracking-tight text-foreground mb-3 leading-tight max-w-3xl">
          Se você se identifica com isso, <span className="brand-gradient">a gente resolve</span>
        </h2>
        <p className="text-muted-foreground mb-10">Os gargalos que a gente ouve todo dia — e elimina.</p>
        <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
          {offer.pains.map((pain) => (
            <div key={pain} className="rounded-2xl border border-border bg-card/30 p-6">
              <span
                className="inline-flex w-9 h-9 rounded-lg items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(248,113,113,0.12)' }}
              >
                <X className="w-4 h-4" style={{ color: '#f87171' }} />
              </span>
              <p className="text-foreground/90 leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── O que você recebe ────────────────────────────────── */}
      <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl brand-border p-6 sm:p-10 lg:p-14">
          <div className="flex items-center gap-4 mb-9">
            <span className="w-12 h-12 rounded-xl brand-gradient-bg flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-white" />
            </span>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                {offer.eyebrow}
              </p>
              <h2 className="text-2xl lg:text-3xl font-display text-foreground">O que você recebe</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-7">
            {offer.includes.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span
                  className="inline-flex w-8 h-8 rounded-full items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(0,194,203,0.12)' }}
                >
                  <Check className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <p className="text-foreground font-medium text-lg mb-1">{item.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prova real ───────────────────────────────────────── */}
      {proofCases.length > 0 && (
        <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-5">
              <span className="w-8 h-px brand-gradient-bg" />
              Prova real
            </span>
            <h2 className="text-2xl lg:text-4xl font-display tracking-tight text-foreground mb-3 leading-tight">
              Não é promessa — <span className="brand-gradient">já entregamos</span>
            </h2>
            <p className="text-muted-foreground">Clientes reais, resultados reais.</p>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-2.5">
            {proofClients.map((name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-card/20 px-3.5 py-1.5 text-sm text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>

          <div className={`grid sm:grid-cols-2 gap-4 lg:gap-6 ${proofCases.length === 3 ? 'lg:grid-cols-3' : ''}`}>
            {proofCases.map((c) => (
              <Link
                key={c!.slug}
                href={`/cases/${c!.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card/30 p-6 lg:p-7 hover:bg-card/50 hover:border-primary/40 transition-colors"
              >
                {proofImage(c!) && (
                  <SiteScreenshot
                    cover
                    src={proofImage(c!)!.src}
                    alt={`${proofImage(c!)!.label} — ${c!.client}, desenvolvido pela Nodeway`}
                    url={proofImage(c!)!.label === 'Landing page' ? c!.url : undefined}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="mb-5 shadow-none"
                  />
                )}
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary mb-4">
                  {c!.client}
                </span>
                <p className="text-lg lg:text-xl font-display text-foreground leading-snug mb-5 flex-1">
                  {c!.results[0]}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Ver o case
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Como funciona ────────────────────────────────────── */}
      <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <h2 className="text-2xl lg:text-3xl font-display tracking-tight text-foreground mb-10">
          Simples de começar
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-10">
          {steps.map((s) => (
            <div key={s.n}>
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full brand-gradient-bg text-white font-display mb-4">
                {s.n}
              </span>
              <h3 className="text-lg font-display text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────── */}
      <section className="pb-16 lg:pb-24 px-5 sm:px-8 lg:px-16 max-w-[1000px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl brand-border p-8 sm:p-14 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,194,203,0.12) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-display tracking-tight text-foreground mb-4">
              Vamos tirar isso do papel?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{offer.priceNote}</p>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-full hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {offer.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ (também gera FAQPage schema) ─────────────────── */}
      <section className="pb-8 px-5 sm:px-8 lg:px-16 max-w-[800px] mx-auto">
        <FaqSection faq={offer.faq} title="Perguntas frequentes" />
      </section>

      <FooterSection />

      {/* ── Barra de CTA fixa (mobile) ───────────────────────── */}
      <StickyMobileCta href={ctaLink} label={offer.ctaLabel} />
    </main>
  );
}

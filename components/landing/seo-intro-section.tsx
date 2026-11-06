import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

const pillLinks = [
  { href: '/servicos', label: 'Nossos serviços' },
  { href: '/cases', label: 'Casos de sucesso' },
  { href: '/atendimento', label: 'Onde atendemos' },
];

/** Barra de presença regional (SEO local), exibida no fim da home. */
export function SeoIntroSection() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 pb-4 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto rounded-2xl sm:rounded-3xl border border-border/70 bg-card/30 p-5 sm:p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div className="flex items-start gap-3.5 max-w-3xl">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
            Sede em{' '}
            <Link href="/atendimento/cascavel" className="text-primary hover:underline">
              Cascavel/PR
            </Link>
            , com clientes em{' '}
            <Link href="/atendimento/blumenau" className="text-primary hover:underline">
              Blumenau/SC
            </Link>
            ,{' '}
            <Link href="/atendimento/guanambi" className="text-primary hover:underline">
              Guanambi/BA
            </Link>{' '}
            e{' '}
            <Link href="/atendimento/toledo" className="text-primary hover:underline">
              Toledo/PR
            </Link>
            . Presencial na região e por vídeo em todo o Brasil.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 shrink-0">
          {pillLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              {l.label}
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

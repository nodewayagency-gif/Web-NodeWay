import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SeoIntroSection() {
  return (
    <section className="relative px-5 sm:px-8 lg:px-16 py-16 lg:py-20 border-t border-border/50">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
            A <strong className="text-foreground font-medium">Nodeway Agency</strong> é uma agência
            de desenvolvimento web e sistemas sob medida com sede em{' '}
            <Link href="/atendimento/cascavel" className="text-primary hover:underline">
              Cascavel/PR
            </Link>
            . Já entregamos soluções para empresas em{' '}
            <Link href="/atendimento/blumenau" className="text-primary hover:underline">
              Blumenau
            </Link>{' '}
            (Formento Playgrounds),{' '}
            <Link href="/atendimento/guanambi" className="text-primary hover:underline">
              Guanambi/BA
            </Link>{' '}
            (Primardi Saúde e Vivre),{' '}
            <Link href="/atendimento/toledo" className="text-primary hover:underline">
              Toledo/PR
            </Link>{' '}
            (Transporte Maurício) — e seguimos em expansão para{' '}
            <Link href="/atendimento/curitiba" className="text-primary hover:underline">
              Curitiba
            </Link>{' '}
            e todo o Brasil.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/planos"
              className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80 transition-opacity"
            >
              Ver planos e preços
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Ver serviços
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/atendimento"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Onde atendemos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Cases de sucesso
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

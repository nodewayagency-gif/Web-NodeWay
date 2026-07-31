import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <section className="pt-40 pb-32 lg:pt-52 lg:pb-40 px-5 sm:px-8 lg:px-16 max-w-[800px] mx-auto text-center">
        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px brand-gradient-bg" />
          Erro 404
        </span>
        <h1 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6 leading-[1.05]">
          Essa página <span className="brand-gradient">não existe</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
          O link pode estar quebrado ou a página foi movida. Vamos te levar de volta ao
          caminho certo.
        </p>
        <Link
          href="/"
          className="cta-primary inline-flex items-center justify-center gap-2 font-medium px-8 h-13 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para a home
        </Link>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/servicos" className="hover:text-primary transition-colors">
            Serviços
          </Link>
          <Link href="/planos" className="hover:text-primary transition-colors">
            Planos
          </Link>
          <Link href="/cases" className="hover:text-primary transition-colors">
            Cases
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

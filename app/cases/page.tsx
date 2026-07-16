import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cases } from '@/lib/data';
import { siteConfig, absoluteUrl } from '@/lib/site-config';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';

export const metadata: Metadata = {
  title: `Casos de Sucesso | ${siteConfig.name}`,
  description: 'Veja como transformamos negócios com desenvolvimento sob medida, automação e dados.',
  alternates: { canonical: absoluteUrl('/cases') },
};

export default function CasesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Nossos Resultados
          </span>
          <h1 className="text-4xl lg:text-7xl font-display tracking-tight text-foreground">
            Casos de <span className="brand-gradient">Sucesso</span>.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mt-6">
            Não falamos apenas de código. Falamos de métricas, crescimento e soluções que resolvem gargalos reais nas operações dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <Link 
              key={c.id} 
              href={`/cases/${c.slug}`}
              className="group flex flex-col bg-card/50 border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              
              <div className="flex-1 z-10">
                <span className="text-xs font-mono text-primary mb-4 block uppercase tracking-wider">{c.category}</span>
                <h2 className="text-2xl font-display text-foreground mb-3">{c.client}</h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">{c.description}</p>
              </div>
              
              <div className="z-10 pt-6 border-t border-border mt-auto flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Ver o estudo completo
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

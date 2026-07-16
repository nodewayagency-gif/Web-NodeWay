import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { siteConfig, absoluteUrl } from '@/lib/site-config';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Artigos, estratégias e insights sobre desenvolvimento de software, tecnologia e conversão.',
  alternates: { canonical: absoluteUrl('/blog') },
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px brand-gradient-bg" />
            Centro de Conhecimento
          </span>
          <h1 className="text-4xl lg:text-7xl font-display tracking-tight text-foreground">
            Blog da <span className="brand-gradient">Nodeway</span>.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mt-6">
            Estratégias de ponta sobre como usar tecnologia sob medida para alavancar suas vendas e escalar a sua operação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-card/30 border border-border rounded-2xl p-6 lg:p-8 hover:bg-card/60 transition-colors relative overflow-hidden"
            >
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                <span className="text-primary font-medium">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              
              <h2 className="text-xl lg:text-2xl font-display text-foreground mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-auto flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Ler artigo
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

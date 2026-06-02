import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Artigo Não Encontrado' };

  return {
    title: `${post.title} | Nodeway Agency`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // A simple markdown-like renderer just for the mock data demonstration
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-display text-foreground mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(i => i.startsWith('- '));
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-lg text-muted-foreground">
            {items.map((item, i) => <li key={i}>{item.replace('- ', '')}</li>)}
          </ul>
        );
      }
      return <p key={index} className="mb-6 text-lg text-muted-foreground leading-relaxed">{paragraph}</p>;
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://nodewayagency.com.br/icon.png",
    "author": {
      "@type": "Organization",
      "name": "Nodeway Agency",
      "url": "https://nodewayagency.com.br/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nodeway Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nodewayagency.com.br/icon.png"
      }
    },
    "datePublished": "2025-01-01T08:00:00+08:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nodewayagency.com.br/blog/${post.slug}`
    }
  };



  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      
      <article className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[800px] mx-auto">
        
        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-12 group transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Voltar para o Blog
        </Link>

        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-muted-foreground mb-6">
            <span className="text-primary font-medium uppercase tracking-wider">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight text-foreground leading-[1.1] mb-8">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

        <div className="prose-container">
          {renderContent(post.content)}
        </div>

        <div className="mt-20 p-8 sm:p-12 bg-card border border-border rounded-3xl text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-primary/5" />
           <div className="relative z-10">
              <h3 className="text-2xl font-display text-foreground mb-4">Gostou da estratégia?</h3>
              <p className="text-muted-foreground mb-8">Nós podemos aplicar isso diretamente no seu negócio. Fale com nossos especialistas.</p>
              <a href="https://wa.me/5545999403598" className="inline-flex items-center justify-center brand-gradient-bg text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
                Agendar Consultoria Gratuita
              </a>
           </div>
        </div>

      </article>

      <FooterSection />
    </main>
  );
}

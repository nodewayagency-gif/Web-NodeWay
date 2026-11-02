import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Navigation } from '@/components/landing/navigation';
import { HeroSection } from '@/components/landing/hero-section';
import { SeoIntroSection } from '@/components/landing/seo-intro-section';
import { FeaturesSection } from '@/components/landing/features-section';

const TestimonialsSection = dynamic(() =>
  import('@/components/landing/testimonials-section').then((m) => m.TestimonialsSection)
);
const HowItWorksSection = dynamic(() =>
  import('@/components/landing/how-it-works-section').then((m) => m.HowItWorksSection)
);
const PricingSection = dynamic(() =>
  import('@/components/landing/pricing-section').then((m) => m.PricingSection)
);
const CtaSection = dynamic(() =>
  import('@/components/landing/cta-section').then((m) => m.CtaSection)
);
const FooterSection = dynamic(() =>
  import('@/components/landing/footer-section').then((m) => m.FooterSection)
);

export const metadata: Metadata = {
  // Keyword no início + marca. absolute porque o template não se aplica ao
  // segmento raiz (só aos filhos), então o sufixo é incluído manualmente aqui.
  title: { absolute: 'Desenvolvimento Web e Sistemas Sob Medida | Nodeway Agency' },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <SeoIntroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

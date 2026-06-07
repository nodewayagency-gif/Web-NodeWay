import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { PresenceBadge } from './presence-badge';
import { PresenceStatus } from '@/lib/seo-data';

interface SeoPageShellProps {
  eyebrow?: string;
  h1: string;
  intro: string;
  presenceStatus?: PresenceStatus;
  children: React.ReactNode;
}

export function SeoPageShell({
  eyebrow,
  h1,
  intro,
  presenceStatus,
  children,
}: SeoPageShellProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1000px] mx-auto">
        <header className="mb-16">
          {eyebrow && (
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px brand-gradient-bg" />
              {eyebrow}
            </span>
          )}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {presenceStatus && <PresenceBadge status={presenceStatus} />}
          </div>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6">
            {h1}
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {intro}
          </p>
        </header>
        {children}
      </section>
      <FooterSection />
    </main>
  );
}

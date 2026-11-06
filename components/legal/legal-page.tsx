import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { siteConfig } from '@/lib/site-config';

/** Identificação do controlador / prestador (razão social e CNPJ só aparecem se preenchidos). */
export function companyIdentity() {
  const { legalName, cnpj, address } = siteConfig.business;
  const name = legalName || siteConfig.name;
  const doc = cnpj ? `, inscrita no CNPJ ${cnpj}` : '';
  return `${name}${doc}, com sede em ${address.locality}/${address.region}`;
}

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  /** Data da última atualização, por extenso. */
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen noise-overlay">
      <Navigation />
      <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display brand-gradient mb-3">{title}</h1>
        <p className="text-sm text-muted-foreground mb-12">Última atualização: {updatedAt}</p>
        <div className="space-y-10 text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-display [&_h2]:text-foreground [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-foreground [&_strong]:font-medium [&_a]:text-primary [&_a:hover]:underline">
          {children}
        </div>
      </div>
      <FooterSection />
    </main>
  );
}

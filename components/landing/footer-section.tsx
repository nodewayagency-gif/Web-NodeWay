import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import {
  siteConfig,
  socialProfiles,
  WHATSAPP_URL_SHORT,
  MAILTO,
} from "@/lib/site-config";
import { AnimatedWave } from "./animated-wave";

type FooterLink = { name: string; href: string; icon?: "mail" | "whatsapp" };

const footerLinks: Record<string, FooterLink[]> = {
  Serviços: [
    { name: "Desenvolvimento Web", href: "/servicos/desenvolvimento-web" },
    { name: "Sistemas Sob Medida", href: "/servicos/sistemas-sob-medida" },
    { name: "E-commerce", href: "/servicos/e-commerce" },
    { name: "Landing Pages", href: "/servicos/landing-pages" },
    { name: "BI e Dados", href: "/servicos/bi-dados" },
    { name: "Integrações", href: "/servicos/integracoes-automacao" },
  ],
  Cidades: [
    { name: "Cascavel, PR", href: "/atendimento/cascavel" },
    { name: "Toledo, PR", href: "/atendimento/toledo" },
    { name: "Blumenau, SC", href: "/atendimento/blumenau" },
    { name: "Guanambi, BA", href: "/atendimento/guanambi" },
    { name: "Curitiba, PR", href: "/atendimento/curitiba" },
    { name: "Todo o Brasil", href: "/atendimento/brasil" },
  ],
  Empresa: [
    { name: "Casos de Sucesso", href: "/cases" },
    { name: "Blog", href: "/blog" },
    { name: "Onde atendemos", href: "/atendimento" },
    { name: "Como trabalhamos", href: "/#how-it-works" },
    { name: "Contato", href: "/#contact" },
    { name: "Termos de Uso", href: "/termos" },
    { name: "Privacidade", href: "/privacidade" },
  ],
  Contato: [
    { name: siteConfig.contact.email, href: MAILTO, icon: "mail" },
    { name: siteConfig.contact.phoneDisplay, href: WHATSAPP_URL_SHORT, icon: "whatsapp" },
  ],
};

const networkLabels: Record<string, string> = {
  instagram: "Instagram",
  linkedin: "LinkedIn",
  facebook: "Facebook",
  youtube: "YouTube",
};

const socialLinks = [
  { name: "WhatsApp", href: WHATSAPP_URL_SHORT, icon: "whatsapp" as const },
  ...socialProfiles.map((p) => ({
    name: networkLabels[p.network] ?? p.network,
    href: p.url,
    icon: null,
  })),
];

/** Renderiza link interno (Link) ou externo (<a>) conforme o href. */
function FooterEntry({ link }: { link: FooterLink }) {
  const content = (
    <>
      {link.icon === "whatsapp" && <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />}
      {link.icon === "mail" && <Mail className="w-3.5 h-3.5 shrink-0" />}
      {link.name}
    </>
  );
  const className =
    "text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 break-all";

  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={className}>
        {content}
      </Link>
    );
  }
  return (
    <a href={link.href} className={className} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 h-64 opacity-10 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display brand-gradient">{siteConfig.shortName}</span>
                <span className="text-xs text-muted-foreground font-mono mt-1">
                  {siteConfig.brandSuffix}
                </span>
              </Link>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
                Soluções digitais sob medida para negócios que querem crescer de verdade. Sem fórmulas prontas. Sem templates limitados.
              </p>

              <nav className="flex gap-6" aria-label="Links sociais">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Siga-nos no ${link.name}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    {link.icon === "whatsapp" && (
                      <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    )}
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium mb-6 text-foreground">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <FooterEntry link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Em expansão pelo Brasil
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

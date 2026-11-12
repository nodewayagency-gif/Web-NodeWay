import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import {
  siteConfig,
  WHATSAPP_URL,
  WHATSAPP_URL_SHORT,
  MAILTO,
} from "@/lib/site-config";

type FooterLink = { name: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Serviços",
    links: [
      { name: "Sistemas sob medida", href: "/servicos/sistemas-sob-medida" },
      { name: "Sites e landing pages", href: "/servicos/landing-pages" },
      { name: "E-commerce", href: "/servicos/e-commerce" },
      { name: "BI e painéis de dados", href: "/servicos/bi-dados" },
      { name: "Integrações", href: "/servicos/integracoes-automacao" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre a Nodeway", href: "/sobre" },
      { name: "Cases", href: "/cases" },
      { name: "Nodeway CRM", href: "/sistema-de-gestao-comercial" },
      { name: "Planos e preços", href: "/planos" },
      { name: "Blog", href: "/blog" },
    ],
  },
];

/** Cidades em uma linha só: mantém os links para o Google sem poluir o rodapé. */
const cities: FooterLink[] = [
  { name: "Cascavel", href: "/atendimento/cascavel" },
  { name: "Toledo", href: "/atendimento/toledo" },
  { name: "Blumenau", href: "/atendimento/blumenau" },
  { name: "Guanambi", href: "/atendimento/guanambi" },
  { name: "Curitiba", href: "/atendimento/curitiba" },
  { name: "Todo o Brasil", href: "/atendimento/brasil" },
];

const linkClass = "text-sm text-muted-foreground hover:text-foreground transition-colors";

export function FooterSection() {
  const year = new Date().getFullYear();
  const instagram = siteConfig.social.instagram;
  const { locality, region } = siteConfig.business.address;

  return (
    <footer className="relative border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="py-14 lg:py-16 grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-x-8 gap-y-10">
          {/* Marca + chamada */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl font-display brand-gradient">{siteConfig.shortName}</span>
              <span className="text-xs text-muted-foreground font-mono mt-1">{siteConfig.brandSuffix}</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Sistemas, sites e painéis de dados sob medida para empresas que querem crescer com
              organização.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-medium"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-foreground/80 mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contato */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xs font-mono uppercase tracking-wider text-foreground/80 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href={WHATSAPP_URL_SHORT} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={MAILTO} className={`${linkClass} inline-flex items-center gap-2 break-all`}>
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              {instagram && (
                <li>
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
                    <InstagramIcon className="w-4 h-4 text-primary" />
                    @nodewayagency
                  </a>
                </li>
              )}
              <li>
                <Link href="/atendimento" className={`${linkClass} inline-flex items-center gap-2`}>
                  <MapPin className="w-4 h-4 text-primary" />
                  {locality}/{region} · todo o Brasil
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Onde atendemos, em uma linha */}
        <div className="py-5 border-t border-border/60 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <span className="text-muted-foreground/70">Atendemos:</span>
          {cities.map((c) => (
            <Link key={c.href} href={c.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {c.name}
            </Link>
          ))}
        </div>

        {/* Barra final */}
        <div className="py-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year} {siteConfig.business.legalName || siteConfig.name}
            {siteConfig.business.cnpj ? ` · CNPJ ${siteConfig.business.cnpj}` : ""}
          </p>
          <div className="flex items-center gap-5">
            <Link href="/sobre#garantias" className="hover:text-foreground transition-colors">
              Garantias
            </Link>
            <Link href="/privacidade" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="hover:text-foreground transition-colors">
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

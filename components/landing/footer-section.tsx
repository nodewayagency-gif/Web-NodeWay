"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Serviços: [
    { name: "Desenvolvimento", href: "/#features" },
    { name: "Landing Pages", href: "/#features" },
    { name: "Automação", href: "/#features" },
    { name: "Dados & BI", href: "/#features" },
  ],
  Empresa: [
    { name: "Casos de Sucesso", href: "/cases" },
    { name: "Blog", href: "/blog" },
    { name: "Sobre nós", href: "/#about" },
    { name: "Como trabalhamos", href: "/#how-it-works" },
    { name: "Contato", href: "/#contact" },
    { name: "Termos de Uso", href: "/termos" },
    { name: "Privacidade", href: "/privacidade" },
  ],
  Contato: [
    { name: "nodewayagency@gmail.com", href: "mailto:nodewayagency@gmail.com" },
    { name: "(45) 99940-3598", href: "https://wa.me/5545999403598" },
  ],
};

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/5545999403598" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 h-64 opacity-10 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display brand-gradient">Nodeway</span>
                <span className="text-xs text-muted-foreground font-mono mt-1">AGENCY</span>
              </a>

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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
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
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 break-all"
                      >
                        {link.name}
                      </a>
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
            2025 Nodeway Agency. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Aceitando novos projetos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

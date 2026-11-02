"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig, WHATSAPP_URL } from "@/lib/site-config";

const navLinks = [
  {
    name: "Serviços",
    description: "Sistemas sob medida, web e BI",
    href: "/servicos",
  },
  {
    name: "Planos & Soluções",
    description: "Formatos de projeto e CRM",
    href: "/planos",
  },
  {
    name: "Cases de Sucesso",
    description: "Projetos e resultados reais",
    href: "/cases",
  },
  {
    name: "Onde Atendemos",
    description: "Cascavel, Blumenau e todo o Brasil",
    href: "/atendimento",
  },
  {
    name: "Blog",
    description: "Estratégia e tecnologia prática",
    href: "/blog",
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isMobileMenuOpen ? "max-lg:pointer-events-none max-lg:opacity-0" : ""
        } ${
          isScrolled
            ? "top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4"
            : "top-0 left-0 right-0"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? "bg-background/90 backdrop-blur-2xl border border-border/70 rounded-2xl shadow-xl shadow-black/25 max-w-[1240px]"
              : "bg-transparent max-w-[1400px]"
          }`}
        >
          <div
            className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
              isScrolled ? "h-14" : "h-18 sm:h-20"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative flex items-center gap-2.5">
                <Image
                  src="/icon.png"
                  alt={`${siteConfig.name} - Desenvolvimento Web e Sistemas`}
                  width={isScrolled ? 32 : 38}
                  height={isScrolled ? 32 : 38}
                  className={`object-contain transition-all duration-500 logo-glow ${
                    isScrolled ? "w-8 h-8" : "w-9 h-9 sm:w-10 sm:h-10"
                  }`}
                  priority
                />
                <div className="flex items-center gap-1.5">
                  <span
                    className={`${
                      isScrolled ? "text-xl" : "text-xl sm:text-2xl"
                    } font-display brand-gradient transition-all duration-500`}
                  >
                    {siteConfig.shortName}
                  </span>
                  <span
                    className={`text-muted-foreground font-mono mt-1 transition-all duration-500 ${
                      isScrolled ? "text-[10px]" : "text-[10px] sm:text-xs"
                    }`}
                  >
                    {siteConfig.brandSuffix}
                  </span>
                </div>
              </div>
            </Link>

            {/* Links Desktop (lg+) */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/75 hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px brand-gradient-bg transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Ações à direita */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex items-center shrink-0">
                <Button
                  size="sm"
                  className={`cta-primary rounded-full transition-all duration-500 font-medium border-0 gap-2 ${
                    isScrolled ? "px-4 h-8 text-xs" : "px-5 h-9 text-sm"
                  }`}
                  asChild
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Solicitar orçamento
                  </a>
                </Button>
              </div>

              {/* Botão Hambúrguer ativo para < lg (mobile e tablet) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground rounded-xl hover:bg-card/60 transition-colors"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Menu Mobile & Tablet Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(8, 16, 35, 0.98)",
          backdropFilter: "blur(20px)",
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full max-w-lg mx-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border/30">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/icon.png"
                alt={siteConfig.name}
                width={36}
                height={36}
                className="w-9 h-9 object-contain logo-glow"
              />
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-display brand-gradient">{siteConfig.shortName}</span>
                <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  {siteConfig.brandSuffix}
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-1 text-foreground rounded-lg hover:bg-card/50 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              Desenvolvimento de sistemas sob medida, landing pages e BI — Cascavel/PR e todo o Brasil.
            </p>

            <nav className="flex flex-col gap-1" aria-label="Menu principal">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group rounded-2xl px-4 py-3.5 -mx-1 hover:bg-card/40 transition-all duration-300"
                >
                  <span className="block text-xl font-display text-foreground group-hover:brand-gradient transition-colors">
                    {link.name}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {link.description}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="shrink-0 px-5 pt-4 pb-8 border-t border-border/30">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="cta-primary flex items-center justify-center gap-3 w-full h-13 rounded-full text-sm font-medium"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Solicitar orçamento no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

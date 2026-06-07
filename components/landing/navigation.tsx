"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WHATSAPP_URL } from "@/lib/contact";

const navLinks = [
  {
    name: "Serviços",
    description: "Web, sistemas, e-commerce e BI",
    href: "/servicos",
  },
  {
    name: "Atendimento",
    description: "Cascavel, Blumenau, Guanambi e Brasil",
    href: "/atendimento",
  },
  {
    name: "Cases",
    description: "Projetos reais com clientes",
    href: "/cases",
  },
  {
    name: "Blog",
    description: "Estratégias e tecnologia",
    href: "/blog",
  },
  {
    name: "Processo",
    description: "Como trabalhamos com você",
    href: "/#how-it-works",
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
          isMobileMenuOpen ? "max-md:pointer-events-none max-md:opacity-0" : ""
        } ${
          isScrolled
            ? "top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4"
            : "top-0 left-0 right-0"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? "bg-background/85 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-xl shadow-black/20 max-w-[1200px]"
              : "bg-transparent max-w-[1400px]"
          }`}
        >
          <div
            className={`flex items-center justify-between px-5 sm:px-6 lg:px-8 transition-all duration-500 ${
              isScrolled ? "h-14" : "h-18 sm:h-20"
            }`}
          >
            <a href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative flex items-center gap-2.5">
                <Image
                  src="/icon.png"
                  alt="Nodeway Agency - Desenvolvimento Web e Sistemas"
                  width={isScrolled ? 32 : 40}
                  height={isScrolled ? 32 : 40}
                  className={`object-contain transition-all duration-500 logo-glow ${
                    isScrolled ? "w-8 h-8" : "w-10 h-10"
                  }`}
                  priority
                />
                <div className="flex items-center gap-1.5">
                  <span
                    className={`${isScrolled ? "text-xl" : "text-2xl"} font-display brand-gradient transition-all duration-500`}
                  >
                    Nodeway
                  </span>
                  <span
                    className={`text-muted-foreground font-mono mt-1 transition-all duration-500 ${isScrolled ? "text-[10px]" : "text-xs"}`}
                  >
                    AGENCY
                  </span>
                </div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px brand-gradient-bg transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center shrink-0">
              <Button
                size="sm"
                className={`brand-gradient-bg hover:opacity-90 text-white rounded-full transition-all duration-500 font-medium border-0 gap-2 ${
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

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2 text-foreground rounded-lg hover:bg-card/50 transition-colors"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-300 ${
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
        <div className="flex flex-col h-full">
          {/* Top bar — logo única + fechar */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-border/30">
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/icon.png"
                alt="Nodeway Agency"
                width={36}
                height={36}
                className="w-9 h-9 object-contain logo-glow"
              />
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-display brand-gradient">Nodeway</span>
                <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  AGENCY
                </span>
              </div>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-1 text-foreground rounded-lg hover:bg-card/50 transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <p className="text-sm text-muted-foreground mb-8 max-w-xs">
              Desenvolvimento web e sistemas sob medida — Cascavel e todo o Brasil.
            </p>

            <nav className="flex flex-col gap-1" aria-label="Menu principal">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group rounded-2xl px-4 py-4 -mx-1 hover:bg-card/40 transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms",
                  }}
                >
                  <span className="block text-2xl font-display text-foreground group-hover:brand-gradient transition-colors">
                    {link.name}
                  </span>
                  <span className="block text-sm text-muted-foreground mt-0.5">
                    {link.description}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div
            className={`shrink-0 px-5 pt-4 pb-8 border-t border-border/30 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "350ms" : "0ms" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full h-14 rounded-full brand-gradient-bg text-white text-base font-medium transition-all hover:opacity-90 shadow-lg shadow-primary/20"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                <WhatsAppIcon className="w-5 h-5" />
              </span>
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

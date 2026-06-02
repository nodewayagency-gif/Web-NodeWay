"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Serviços", href: "/#features" },
  { name: "Casos de Sucesso", href: "/cases" },
  { name: "Blog", href: "/blog" },
  { name: "Como trabalhamos", href: "/#how-it-works" },
  { name: "Sobre", href: "/#about" },
  { name: "Contato", href: "/#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Impede scroll do body quando menu mobile esta aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ${
          isScrolled ? "top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4" : "top-0 left-0 right-0"
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
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative flex items-center gap-2.5">
                <Image
                  src="/icon.png"
                  alt="Nodeway Agency Logo - Especialistas em Desenvolvimento Web"
                  width={isScrolled ? 32 : 40}
                  height={isScrolled ? 32 : 40}
                  className={`object-contain transition-all duration-500 logo-glow ${
                    isScrolled ? "w-8 h-8" : "w-10 h-10"
                  }`}
                  priority
                />
                <div className="flex items-center gap-1.5">
                  <span className={`${isScrolled ? 'text-xl' : 'text-2xl'} font-display brand-gradient transition-all duration-500`}>
                    Nodeway
                  </span>
                  <span className={`text-muted-foreground font-mono mt-1 transition-all duration-500 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>
                    AGENCY
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
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

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <a
                href="https://wa.me/5545999403598"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-foreground/60 hover:text-foreground transition-all duration-300 font-medium ${
                  isScrolled ? "text-xs" : "text-sm"
                }`}
              >
                WhatsApp
              </a>
              <Button
                size="sm"
                className={`brand-gradient-bg hover:opacity-90 text-white rounded-full transition-all duration-500 font-medium border-0 ${
                  isScrolled ? "px-4 h-8 text-xs" : "px-5 h-9 text-sm"
                }`}
                asChild
              >
                <a href="#contact">Solicitar orçamento</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
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

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-400 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(8, 16, 35, 0.98)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col h-full px-6 pt-24 pb-10">

          {/* Logo no menu mobile */}
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Nodeway Agency - Soluções Digitais Sob Medida"
                width={40}
                height={40}
                className="w-10 h-10 object-contain logo-glow"
              />
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-display brand-gradient">Nodeway</span>
                <span className="text-xs text-muted-foreground font-mono mt-1">AGENCY</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl sm:text-5xl font-display text-foreground hover:brand-gradient transition-all duration-400 ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botoes inferiores */}
          <div
            className={`flex flex-col sm:flex-row gap-3 pt-8 border-t border-border/50 transition-all duration-500 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "350ms" : "0ms" }}
          >
            <a
              href="https://wa.me/5545999403598"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center h-14 rounded-full border border-border text-foreground/70 hover:text-foreground text-base font-medium transition-all"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center h-14 rounded-full brand-gradient-bg text-white text-base font-medium transition-all hover:opacity-90"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

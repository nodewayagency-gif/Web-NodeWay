"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { siteConfig, WHATSAPP_URL, WHATSAPP_URL_SHORT, MAILTO } from "@/lib/site-config";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-28 overflow-x-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[40px] border border-white/10 bg-card/40 backdrop-blur-xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,var(--brand-cyan)_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,var(--brand-green)_0%,transparent_50%)]" />
          </div>

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="relative z-10 p-5 sm:p-9 lg:p-14">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Conteúdo principal */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Atendimento humano, sem robôs
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display tracking-tight leading-[1.08] text-foreground mb-4">
                  Conte onde sua rotina trava.{" "}
                  <span className="brand-gradient italic">A gente desenha a saída.</span>
                </h2>

                <p className="text-xs sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  Sem compromisso e sem precisar de projeto pronto.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary group inline-flex items-center justify-center gap-2.5 rounded-full h-12 sm:h-14 px-7 text-xs sm:text-sm font-semibold w-full sm:w-auto"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 shrink-0">
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                    </span>
                    Falar no WhatsApp
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href={MAILTO}
                    className="inline-flex items-center justify-center gap-2.5 rounded-full h-12 sm:h-14 px-6 border border-border bg-background/50 text-foreground text-xs sm:text-sm font-medium hover:bg-card/80 hover:border-primary/30 transition-all w-full sm:w-auto"
                  >
                    <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                    Enviar e-mail
                  </a>
                </div>
              </div>

              {/* Card de acolhimento humano à direita */}
              <div className="lg:col-span-5 w-full">
                <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-background/60 p-5 sm:p-7 space-y-4 sm:space-y-5">
                  <div className="flex items-center gap-3 pb-3.5 border-b border-border/60">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-foreground">
                        Time Nodeway
                      </p>
                      <p className="text-[11px] sm:text-xs text-muted-foreground">
                        Segunda a sexta, das 09h às 18h
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li className="flex items-start gap-2.5 text-foreground/90">
                      <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Diagnóstico gratuito e proposta em até 24h</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-foreground/90">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Presencial na região de Cascavel ou por vídeo</span>
                    </li>
                  </ul>

                  <div className="pt-3 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <a
                      href={WHATSAPP_URL_SHORT}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-card/80 border border-border/60 p-3 hover:border-primary/40 transition-colors"
                    >
                      <span className="text-muted-foreground flex items-center gap-1.5 text-[11px] mb-0.5">
                        <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                        WhatsApp Direto
                      </span>
                      <span className="font-semibold text-primary">{siteConfig.contact.phoneDisplay}</span>
                    </a>
                    <a
                      href={MAILTO}
                      className="rounded-xl bg-card/80 border border-border/60 p-3 hover:border-primary/40 transition-colors"
                    >
                      <span className="text-muted-foreground block text-[11px] mb-0.5">E-mail Comercial</span>
                      <span className="font-semibold text-foreground truncate block">
                        {siteConfig.contact.email}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

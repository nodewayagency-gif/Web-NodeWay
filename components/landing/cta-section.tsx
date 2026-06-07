"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { WHATSAPP_URL, WHATSAPP_URL_SHORT } from "@/lib/contact";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

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
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div
          className={`relative overflow-hidden rounded-3xl lg:rounded-[40px] border border-white/10 bg-card/30 backdrop-blur-xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#00C2CB_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#7ED957_0%,transparent_50%)]" />
          </div>

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="relative z-10 p-6 sm:p-10 lg:p-14">
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
              {/* Conteúdo principal */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-mono text-primary mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  Pronto para escalar seu negócio?
                </div>

                <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-display tracking-tight leading-[1.05] text-foreground mb-5">
                  Sua operação merece{" "}
                  <span className="brand-gradient italic">estrutura.</span>
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                  Não construímos apenas sites. Criamos os alicerces digitais que
                  automatizam sua rotina e sustentam seu crescimento.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl h-14 px-7 brand-gradient-bg text-white font-semibold shadow-lg shadow-primary/25 hover:opacity-90 transition-all"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 shrink-0">
                      <WhatsAppIcon className="w-4 h-4" />
                    </span>
                    Falar no WhatsApp
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <a
                    href="mailto:nodewayagency@gmail.com"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl h-14 px-7 border border-border bg-background/50 text-foreground font-medium hover:bg-card/80 hover:border-primary/30 transition-all"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground shrink-0" />
                    Enviar e-mail
                  </a>
                </div>
              </div>

              {/* Visual decorativo — só desktop */}
              <div className="hidden lg:flex items-center justify-center w-[220px] h-[220px] opacity-30 shrink-0">
                <AnimatedTetrahedron />
              </div>
            </div>

            {/* Cards de contato — grid organizado */}
            <div className="mt-10 pt-8 border-t border-border/40 grid sm:grid-cols-2 gap-4">
              <a
                href={WHATSAPP_URL_SHORT}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/40 p-5 hover:border-primary/40 hover:bg-card/50 transition-all"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl brand-gradient-bg shrink-0 shadow-md shadow-primary/20">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                    Resposta rápida
                  </p>
                  <p className="text-lg font-display text-foreground mb-1">WhatsApp</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Fale com nosso time e valide sua ideia em poucos minutos.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Iniciar conversa
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>

              <a
                href="mailto:nodewayagency@gmail.com"
                className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/40 p-5 hover:border-primary/40 hover:bg-card/50 transition-all"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl border border-border bg-card shrink-0">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">
                    Proposta formal
                  </p>
                  <p className="text-lg font-display text-foreground mb-1">E-mail</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Envie detalhes do projeto para análise da nossa equipe.
                  </p>
                  <span className="text-sm font-medium text-foreground break-all group-hover:text-primary transition-colors">
                    nodewayagency@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

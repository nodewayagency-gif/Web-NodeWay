"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Clock, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { HeroShowcase } from "@/components/landing/hero-showcase";
import { WHATSAPP_URL } from "@/lib/site-config";

const words = ["crescer", "ganhar tempo", "se organizar", "vender mais"];

const realImpactMarquee = [
  { highlight: "Orçamentos de horas para segundos", client: "Newflexo" },
  { highlight: "Frota e custos em tempo real", client: "Transporte Maurício" },
  { highlight: "Vitrine de luxo com fechamento no WhatsApp", client: "JPB Joias" },
  { highlight: "Fim dos clientes esquecidos sem retorno", client: "Newflexo" },
  { highlight: "Kits de produtos e pedidos em minutos", client: "Formento Playgrounds" },
  { highlight: "Atendimento, licitações e fiscal integrados", client: "Primardi Saúde & Vivre" },
];

type Props = {
  /** Números reais, calculados a partir de lib/data.ts na página. */
  projects: number;
  states: number;
};

export function HeroSection({ projects, states }: Props) {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Troca a palavra mesmo com "Reduzir movimento" (só sem o deslize — ver motion-reduce abaixo).
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col overflow-x-hidden">
      {/* Fundo com luzes suaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 25%, rgba(0,194,203,0.13) 0%, rgba(0,113,188,0.06) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute -top-32 -left-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, rgba(126,217,87,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Selo com prova real */}
          <div className="mb-6 hero-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm text-primary font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              + de {projects} projetos entregues em {states} estados
            </span>
          </div>

          <h1 className="font-display leading-[1.12] tracking-tight hero-rise-lcp mb-5 sm:mb-6">
            <span className="block text-foreground text-3xl sm:text-5xl lg:text-6xl">
              Para empresas que querem
            </span>
            <span className="block text-3xl sm:text-5xl lg:text-6xl h-[1.3em] overflow-visible">
              <span
                className={`inline-block brand-gradient px-1.5 pb-2 transition-all duration-300 ${
                  animating ? "opacity-0 translate-y-3 motion-reduce:translate-y-0" : "opacity-100 translate-y-0"
                }`}
                style={{ lineHeight: "1.22" }}
              >
                {words[wordIndex]}
              </span>
            </span>
            <span className="block text-muted-foreground text-2xl sm:text-4xl lg:text-5xl">
              com tecnologia sob medida.
            </span>
          </h1>

          <p
            className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-xl mb-7 sm:mb-8 hero-rise px-2"
            style={{ animationDelay: "0.15s" }}
          >
            Sistemas, sites, lojas virtuais e painéis de dados — do jeito que a sua empresa trabalha.
          </p>

          <div
            className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 hero-rise px-3 sm:px-0"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-flex items-center justify-center gap-2.5 px-5 sm:px-8 h-13 sm:h-14 text-sm sm:text-base rounded-full group font-semibold shadow-lg shadow-primary/15 transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              Solicitar proposta sob medida
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 h-13 sm:h-14 px-6 sm:px-7 text-sm sm:text-base rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground hover:border-primary/50 hover:bg-card/90 transition-all font-medium"
            >
              Ver projetos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground hero-rise px-2"
            style={{ animationDelay: "0.35s" }}
          >
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              Feito para o seu processo
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              Proposta em até 24h
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              Cascavel/PR · Todo o Brasil
            </span>
          </div>
        </div>

        {/* Vitrine com prints reais (carrossel) */}
        <div className="hero-rise" style={{ animationDelay: "0.45s" }}>
          <HeroShowcase />
        </div>
      </div>

      {/* Faixa inferior: resultados reais */}
      <div className="relative z-20 w-full border-t border-border/60 bg-card/40 backdrop-blur-sm py-4 overflow-hidden">
        <div className="max-w-[1400px] mx-auto overflow-hidden">
          <div className="flex gap-0 whitespace-nowrap hero-marquee">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex shrink-0">
                {realImpactMarquee.map((item, i) => (
                  <div key={`${setIdx}-${i}`} className="flex items-center">
                    <div className="flex items-center gap-2.5 px-5 sm:px-8">
                      <span className="w-1.5 h-1.5 rounded-full brand-gradient-bg shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-foreground">{item.highlight}</span>
                      <span className="text-[11px] sm:text-xs text-muted-foreground bg-card/90 border border-border/70 px-2 py-0.5 rounded-full">
                        {item.client}
                      </span>
                    </div>
                    <span className="w-px h-4 bg-border/60 shrink-0" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

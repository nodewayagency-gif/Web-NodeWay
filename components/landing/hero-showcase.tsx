"use client";

import { useEffect, useState } from "react";
import { SiteScreenshot } from "@/components/landing/site-screenshot";

type Slide = { src: string; alt: string; label: string; url?: string; width?: number; height?: number };

/** Prints reais que giram na vitrine do topo. */
const slides: Slide[] = [
  { src: "/cases/jpb-joias.webp", alt: "Loja virtual JPB Joias", label: "JPB Joias · E-commerce", url: "https://jpbjoias.com.br/" },
  { src: "/crm/painel.webp", alt: "Painel do Nodeway CRM (conta de demonstração)", label: "Nodeway CRM · Gestão comercial", url: "https://crm.nodewayagency.com.br/", width: 800, height: 461 },
  { src: "/cases/carmax-baterias.webp", alt: "Landing page da Carmax Baterias", label: "Carmax · Landing page", url: "https://www.carmaxbaterias.com.br/" },
  { src: "/cases/jpb-storex-home.webp", alt: "Loja virtual JPB StoreX", label: "JPB StoreX · E-commerce", url: "https://www.jpbstorex.com.br/" },
  { src: "/cases/transporte-mauricio.webp", alt: "Sistema da Transporte Maurício", label: "Transporte Maurício · Sistema", width: 1200, height: 676 },
  { src: "/cases/formento-playgrounds.webp", alt: "Site da Formento Playgrounds", label: "Formento · Site + sistema", url: "https://www.formento.com.br/" },
  { src: "/cases/diretorfit.webp", alt: "Plataforma DiretorFit", label: "DiretorFit · Plataforma", url: "https://www.diretorfit.com.br/" },
];

const INTERVAL = 4000;

/** Posição de cada slide em relação ao ativo: centro, laterais ou escondido. */
function positionClass(offset: number) {
  switch (offset) {
    case 0:
      return "z-20 opacity-100 [transform:translateX(-50%)_scale(1)]";
    case -1:
      return "z-10 opacity-0 sm:opacity-60 [transform:translateX(-50%)_scale(0.85)] sm:[transform:translateX(-118%)_translateY(48px)_rotate(-5deg)_scale(0.72)]";
    case 1:
      return "z-10 opacity-0 sm:opacity-60 [transform:translateX(-50%)_scale(0.85)] sm:[transform:translateX(18%)_translateY(48px)_rotate(5deg)_scale(0.72)]";
    default:
      return "z-0 opacity-0 pointer-events-none [transform:translateX(-50%)_translateY(60px)_scale(0.6)]";
  }
}

export function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), INTERVAL);
    return () => clearInterval(t);
  }, [paused, n]);

  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div
      className="relative mt-12 sm:mt-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
      aria-label="Projetos entregues pela Nodeway"
    >
      <div className="relative h-[230px] sm:h-[340px] lg:h-[400px] overflow-hidden">
        {/* Brilho atrás do destaque */}
        <div className="absolute left-1/2 top-4 -translate-x-1/2 w-full sm:w-[64%] h-[80%] rounded-[32px] brand-gradient-bg opacity-20 blur-3xl" />

        {slides.map((s, i) => {
          const offset = offsetOf(i);
          return (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(i)}
              tabIndex={Math.abs(offset) === 1 ? 0 : -1}
              aria-hidden={Math.abs(offset) > 1}
              aria-label={offset === 0 ? s.label : `Mostrar ${s.label}`}
              className={`absolute left-1/2 top-0 w-full sm:w-[64%] max-w-[720px] text-left transition-all duration-700 ease-out ${positionClass(offset)} ${
                offset === 0 ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <SiteScreenshot
                cover
                src={s.src}
                alt={s.alt}
                url={s.url}
                width={s.width}
                height={s.height}
                priority={i === 0}
                sizes="(min-width: 640px) 720px, 100vw"
              />
            </button>
          );
        })}

        {/* Fade para o fundo, convidando a rolar */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent z-30 pointer-events-none" />
      </div>

      {/* Legenda + indicadores */}
      <div className="relative z-30 mt-3 mb-8 flex flex-col items-center gap-3">
        <span className="text-xs sm:text-sm text-muted-foreground" aria-live="polite">
          {slides[active].label}
        </span>
        <div className="flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ir para ${s.label}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 brand-gradient-bg" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

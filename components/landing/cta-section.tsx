"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    setParallax({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative overflow-hidden rounded-[40px] border border-white/10 bg-background/40 backdrop-blur-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Background Mesh Gradient */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#00C2CB_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#7ED957_0%,transparent_50%)]" />
          </div>

          {/* Interactive Spotlight */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,194,203,0.15), transparent 40%)`,
            }}
          />

          {/* Grain Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

          <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-0 px-8 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div
                style={{
                  transform: `translate(${parallax.x * -5}px, ${parallax.y * -5}px)`,
                  transition: "transform 0.4s ease-out",
                }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-mono text-primary mb-8 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  Pronto para escalar seu negócio?
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-8xl font-display tracking-tight leading-[0.9] text-foreground mb-8">
                  Sua operação
                  <br />
                  merece <span className="brand-gradient italic">estrutura.</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-12">
                  Não construímos apenas sites. Criamos os alicerces digitais
                  que automatizam sua rotina e sustentam seu crescimento.
                </p>

                {/* Main Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
                  <a
                    href="https://wa.me/5545999403598?text=Olá%20Nodeway%2C%20quero%20um%20orçamento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-3 rounded-2xl h-16 px-8 brand-gradient-bg text-white font-semibold shadow-[0_20px_50px_rgba(0,194,203,0.3)] hover:scale-[1.03] hover:shadow-[0_25px_60px_rgba(0,194,203,0.4)] transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="mailto:nodewayagency@gmail.com"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl h-16 px-8 border border-white/10 bg-white/5 text-foreground font-medium hover:bg-white/10 hover:border-primary/40 transition-all backdrop-blur-md"
                  >
                    <Mail className="w-5 h-5 opacity-60" />
                    Enviar e-mail
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visuals */}
            <div className="relative flex items-center justify-center lg:justify-end lg:pr-10">
              <div className="relative w-full max-w-[480px] h-[400px] md:h-[500px]">
                {/* Floating Parallax Card 1 */}
                <div
                  className="absolute left-0 top-10 z-30 w-[280px] md:w-[320px] rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-300"
                  style={{
                    transform: `translate(${parallax.x * 25}px, ${parallax.y * 25}px) rotateX(${parallax.y * -5}deg) rotateY(${parallax.x * 5}deg)`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl brand-gradient-bg flex items-center justify-center shadow-lg shadow-primary/20">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Direto</div>
                      <div className="text-lg font-display text-foreground">WhatsApp</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Fale com nosso time agora e valide sua ideia em poucos minutos.
                  </p>
                  <a
                    href="https://wa.me/5545999403598"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                  >
                    Iniciar conversa
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>

                {/* Floating Parallax Card 2 */}
                <div
                  className="absolute right-0 bottom-10 z-20 w-[240px] md:w-[280px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-2xl transition-all duration-300"
                  style={{
                    transform: `translate(${parallax.x * 10}px, ${parallax.y * 10}px)`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">E-mail</span>
                  </div>
                  <div className="text-sm font-medium text-foreground break-all">
                    nodewayagency@gmail.com
                  </div>
                </div>

                {/* 3D Visual Background */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen"
                  style={{
                    transform: `translate(${parallax.x * -15}px, ${parallax.y * -15}px) scale(1.1)`,
                  }}
                >
                  <AnimatedTetrahedron />
                </div>
              </div>
            </div>
          </div>

          {/* Refined Border Highlights */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/5" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 blur-[100px] rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
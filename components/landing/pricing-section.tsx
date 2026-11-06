import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Faixa curta para /planos. Os formatos e preços completos ficam lá;
 * a home só aponta o caminho (evita repetir as frentes de serviço).
 */
export function PricingSection() {
  return (
    <section id="pricing" className="relative px-4 sm:px-8 lg:px-16 py-6 sm:py-8 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 gap-4">
        <Link
          href="/planos"
          className="group rounded-2xl sm:rounded-3xl border border-primary/30 bg-card/50 p-5 sm:p-7 hover:border-primary/60 transition-colors"
        >
          <span className="text-xs font-mono text-primary">Projetos sob medida</span>
          <p className="mt-2 text-lg sm:text-2xl font-display text-foreground">
            Veja formatos e como orçamos
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Planos e preços
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>

        <Link
          href="/planos#crm"
          className="group rounded-2xl sm:rounded-3xl border border-border bg-card/30 p-5 sm:p-7 hover:border-primary/40 transition-colors"
        >
          <span className="text-xs font-mono text-muted-foreground">Pronto para usar hoje</span>
          <p className="mt-2 text-lg sm:text-2xl font-display text-foreground">
            Nodeway CRM a partir de R$ 69,90/mês
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            Conhecer o CRM
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </section>
  );
}

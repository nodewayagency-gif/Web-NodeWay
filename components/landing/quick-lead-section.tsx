import { Clock, ShieldCheck } from 'lucide-react';
import { LeadForm } from '@/components/lead-form';

/**
 * Faixa de conversão no meio da home: formulário curto logo depois dos
 * serviços, para quem já se identificou com uma dor não precisar rolar
 * até o fim da página.
 */
export function QuickLeadSection() {
  return (
    <section id="diagnostico" className="relative overflow-hidden scroll-mt-20">
      {/* Sem faixa de fundo: só um brilho suave atrás do formulário, para não criar bloco de cor */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 45% 70% at 72% 50%, rgba(0,194,203,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-16 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-2xl sm:text-4xl font-display tracking-tight text-white leading-tight">
            Se identificou com alguma dessas?{' '}
            <span className="brand-gradient">Fale com a gente.</span>
          </h2>
          <ul className="mt-5 space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#7ED957] shrink-0" />
              Diagnóstico gratuito e proposta em até 24h
            </li>
            <li className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#7ED957] shrink-0" />
              Sem compromisso e sem projeto pronto
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          {/* Borda em gradiente da marca destaca o formulário sem pintar a seção */}
          <div className="rounded-2xl sm:rounded-3xl p-px brand-gradient-bg shadow-2xl shadow-black/40">
            <LeadForm variant="compact" className="bg-[#0d1520] border-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

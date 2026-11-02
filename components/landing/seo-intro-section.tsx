import Link from 'next/link';
import {
  ArrowRight,
  FileSpreadsheet,
  MessageSquareWarning,
  BarChart3,
  MapPin,
} from 'lucide-react';

const painPoints = [
  {
    icon: FileSpreadsheet,
    question: '“Minha equipe perde horas em planilhas e digitação repetida”',
    solution:
      'Quando o controle depende de várias planilhas e da memória das pessoas, os erros aparecem e as vendas esfriam. Criamos sistemas simples onde você cadastra uma vez e o orçamento, o pedido e o financeiro se conversam sozinhos.',
    linkText: 'Conhecer sistemas sob medida',
    href: '/servicos/sistemas-sob-medida',
  },
  {
    icon: MessageSquareWarning,
    question: '“As pessoas visitam meu site, mas quase ninguém chama no WhatsApp”',
    solution:
      'Um site lento, confuso ou cheio de textos difíceis faz o cliente fechar a aba em segundos. Construímos páginas rápidas e claras que guiam o visitante direto para conversar com o seu vendedor.',
    linkText: 'Ver páginas de alta conversão',
    href: '/servicos/landing-pages',
  },
  {
    icon: BarChart3,
    question: '“Vendo bem todo mês, mas não sei exatamente onde está o lucro”',
    solution:
      'Você não precisa esperar dias por um relatório manual. Conectamos os dados da sua empresa em painéis visuais fáceis de ler no celular ou computador, mostrando custos, rotas e margens em tempo real.',
    linkText: 'Conhecer painéis de dados (BI)',
    href: '/servicos/bi-dados',
  },
];

export function SeoIntroSection() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28 border-t border-border/50 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Cabeçalho de empatia */}
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-primary mb-3">
            <span className="w-6 sm:w-8 h-px brand-gradient-bg" />
            Onde o sapato aperta?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display tracking-tight text-foreground mb-4 leading-[1.08]">
            Você se identifica com algum{' '}
            <span className="brand-gradient">desses desafios</span> no dia a dia?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            A tecnologia não deve ser mais um problema para você gerenciar. Nosso papel é ouvir onde
            a sua rotina trava e entregar a ferramenta certa para destravar o crescimento.
          </p>
        </div>

        {/* 3 Cards de identificação humana */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.question}
                className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-border bg-card/40 p-5 sm:p-7 lg:p-8 hover:border-primary/40 hover:bg-card/70 transition-all duration-300"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl brand-gradient-bg/10 border border-primary/25 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-display text-foreground mb-3 leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-5">
                    {item.solution}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:opacity-80 transition-opacity group pt-2"
                >
                  {item.linkText}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Barra de presença regional */}
        <div className="rounded-2xl sm:rounded-3xl border border-border/70 bg-card/30 p-5 sm:p-7 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6">
          <div className="max-w-3xl flex items-start gap-3.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
              A <strong className="text-foreground font-medium">Nodeway Agency</strong> tem sede em{' '}
              <Link href="/atendimento/cascavel" className="text-primary hover:underline">
                Cascavel/PR
              </Link>{' '}
              e atende de perto empresas de todo o país. Já transformamos a operação de clientes em{' '}
              <Link href="/atendimento/blumenau" className="text-primary hover:underline">
                Blumenau/SC
              </Link>{' '}
              (Formento Playgrounds),{' '}
              <Link href="/atendimento/guanambi" className="text-primary hover:underline">
                Guanambi/BA
              </Link>{' '}
              (Primardi Saúde e Vivre),{' '}
              <Link href="/atendimento/toledo" className="text-primary hover:underline">
                Toledo/PR
              </Link>{' '}
              (Transporte Maurício) e{' '}
              <Link href="/atendimento/curitiba" className="text-primary hover:underline">
                Curitiba/PR
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5 shrink-0 pt-2 lg:pt-0">
            <Link
              href="/planos"
              className="inline-flex items-center rounded-full bg-primary/10 border border-primary/25 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              Planos e preços
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Nossos serviços
            </Link>
            <Link
              href="/cases"
              className="inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Casos de sucesso
            </Link>
            <Link
              href="/atendimento"
              className="inline-flex items-center rounded-full border border-border px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Onde atendemos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

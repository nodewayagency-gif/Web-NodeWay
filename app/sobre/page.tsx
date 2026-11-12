import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, ChevronRight, MapPin } from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { SiteScreenshot } from '@/components/landing/site-screenshot';
import { InstagramStrip } from '@/components/landing/instagram-strip';
import { FaqSection } from '@/components/seo/faq-section';
import { cases } from '@/lib/data';
import { siteConfig, absoluteUrl, WHATSAPP_URL } from '@/lib/site-config';

const description = `Quem é a ${siteConfig.name}: agência de Cascavel/PR que desenvolve sistemas sob medida, sites, e-commerce e BI para empresas de todo o Brasil.`;

export const metadata: Metadata = {
  title: 'Sobre a Nodeway',
  description,
  alternates: { canonical: absoluteUrl('/sobre') },
  openGraph: {
    title: `Sobre a Nodeway | ${siteConfig.name}`,
    description,
    url: absoluteUrl('/sobre'),
    type: 'website',
  },
};

const principles = [
  {
    title: 'Feito para o seu processo',
    desc: 'Nada de template. O sistema segue as regras da sua empresa, não o contrário.',
  },
  {
    title: 'Você acompanha tudo',
    desc: 'Escopo, prazo e valor fechados antes de começar e validação toda semana.',
  },
  {
    title: 'Conversa direta',
    desc: 'Você fala com quem constrói a solução, sem robô e sem “tecniquês”.',
  },
  {
    title: 'Parceria depois da entrega',
    desc: 'Treinamos a equipe e seguimos evoluindo o sistema com a empresa.',
  },
];

/**
 * Garantias ao contratar — responde, com fatos confirmados pela empresa, as
 * dúvidas que clientes (e buscadores/IAs) levantam antes de fechar.
 * Renderizado como FAQ (HTML + schema FAQPage) para ser indexável e citável.
 */
const { business } = siteConfig;
const incorporationYear = new Date(`${business.incorporationDate}T12:00:00`).getFullYear();
const guarantees = [
  {
    question: 'A Nodeway é uma empresa formalizada?',
    answer: `Sim. A ${business.legalName} tem CNPJ ${business.cnpj} e sede em ${business.address.locality}/${business.address.region}. Contrato, nota fiscal e pagamento são sempre em nome da empresa. Atendemos clientes desde ${business.foundingYear} e formalizamos a operação em ${incorporationYear}.`,
  },
  {
    question: 'Escopo, prazo e valor ficam definidos antes de começar?',
    answer: 'Sim. Escopo, entregas, prazo e valor ficam por escrito no contrato antes do início. Durante o projeto, você valida o que foi feito toda semana.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Varia conforme o projeto e é combinado em contrato antes de começar. Os formatos mais comuns são entrada mais pagamentos por etapa entregue, ou mensalidade. Os pagamentos acompanham o andamento do projeto.',
  },
  {
    question: 'De quem é o código e os dados?',
    answer: 'Em sistemas sob medida, o código-fonte é da sua empresa. No Nodeway CRM, você usa o sistema por assinatura e pode exportar os seus dados. Em todos os casos, os dados são do cliente.',
  },
  {
    question: 'E se aparecer um defeito depois da entrega?',
    answer: 'Enquanto o contrato de suporte estiver ativo, corrigimos defeitos sem custo adicional.',
  },
];

const services = [
  { label: 'Sistemas sob medida', href: '/servicos/sistemas-sob-medida' },
  { label: 'Sites e landing pages', href: '/servicos/landing-pages' },
  { label: 'E-commerce', href: '/servicos/e-commerce' },
  { label: 'BI e painéis de dados', href: '/servicos/bi-dados' },
  { label: 'Integrações e automação', href: '/servicos/integracoes-automacao' },
  { label: 'Nodeway CRM', href: '/sistema-de-gestao-comercial' },
];

export default function SobrePage() {
  const showcase = cases.filter((c) => c.images?.length).slice(0, 3);
  const states = new Set(cases.map((c) => c.state).filter(Boolean));

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />

      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <nav aria-label="Trilha de navegação" className="mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Início
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            <li className="text-foreground">Sobre</li>
          </ol>
        </nav>

        <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
          <span className="w-8 h-px brand-gradient-bg" />
          Sobre a Nodeway
        </span>
        <h1 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6 leading-[1.05] max-w-4xl">
          Tecnologia sob medida, <span className="brand-gradient">feita perto de quem usa</span>.
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Somos uma agência de desenvolvimento de Cascavel/PR. Criamos sistemas, sites, lojas virtuais
          e painéis de dados para empresas que cansaram de planilha e de software engessado.
        </p>

        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
          <div className="rounded-2xl border border-border bg-card/30 p-5">
            <dt className="text-xs text-muted-foreground">Atendendo desde</dt>
            <dd className="text-2xl font-display text-foreground">{siteConfig.business.foundingYear}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-card/30 p-5">
            <dt className="text-xs text-muted-foreground">Cases publicados</dt>
            <dd className="text-2xl font-display text-foreground">{cases.length}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1 rounded-2xl border border-border bg-card/30 p-5">
            <dt className="text-xs text-muted-foreground">Clientes em</dt>
            <dd className="text-2xl font-display text-foreground">{states.size} estados</dd>
          </div>
        </dl>

        {siteConfig.business.legalName && siteConfig.business.cnpj && (
          <p className="mt-6 text-sm text-muted-foreground max-w-2xl">
            Atendemos clientes desde {siteConfig.business.foundingYear}. Em{' '}
            {new Date(`${siteConfig.business.incorporationDate}T12:00:00`).getFullYear()} formalizamos a operação
            como <strong className="text-foreground font-medium">{siteConfig.business.legalName}</strong>, CNPJ{' '}
            {siteConfig.business.cnpj}, com sede em {siteConfig.business.address.locality}/
            {siteConfig.business.address.region}. Toda nota fiscal e todo contrato saem em nome dessa empresa.
          </p>
        )}
      </section>

      <section className="pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <h2 className="text-2xl lg:text-4xl font-display tracking-tight text-foreground mb-8">
          Como a gente trabalha
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card/30 p-6">
              <h3 className="flex items-center gap-2.5 text-base font-display text-foreground mb-2">
                <Check className="w-4 h-4 text-primary shrink-0" />
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <Link
          href="/#how-it-works"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
        >
          Ver as 5 etapas de customização
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section id="garantias" className="scroll-mt-24 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <FaqSection faq={guarantees} title="Suas garantias ao contratar" />
      </section>

      <section className="pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <h2 className="text-2xl lg:text-4xl font-display tracking-tight text-foreground mb-8">
          O que fazemos
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/30 px-4 py-2 text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors"
            >
              {s.label}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </section>

      <section className="pb-16 lg:pb-20 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl lg:text-4xl font-display tracking-tight text-foreground">
            Alguns projetos
          </h2>
          <Link href="/cases" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80">
            Ver todos os cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {showcase.map((c) => (
            <Link key={c.slug} href={`/cases/${c.slug}`} className="group">
              <SiteScreenshot
                cover
                src={c.images![0].src}
                alt={`${c.images![0].label} — ${c.client}, desenvolvido pela Nodeway`}
                url={c.images![0].label === 'Landing page' ? c.url : undefined}
                sizes="(min-width: 640px) 350px, 100vw"
                className="shadow-none transition-transform duration-300 group-hover:-translate-y-1"
              />
              <p className="mt-3 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {c.client}
              </p>
              <p className="text-xs text-muted-foreground">{c.category}</p>
            </Link>
          ))}
        </div>
      </section>

      <InstagramStrip className="pb-16 lg:pb-20" />

      <section className="pb-24 lg:pb-32 px-5 sm:px-8 lg:px-16 max-w-[1100px] mx-auto">
        <div className="rounded-3xl border border-border bg-card/40 p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              {siteConfig.business.address.locality}/{siteConfig.business.address.region} · presencial na
              região e por vídeo em todo o Brasil
            </p>
            <h2 className="text-2xl lg:text-3xl font-display text-foreground">
              Vamos conversar sobre a sua operação?
            </h2>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center justify-center gap-2.5 px-8 h-14 rounded-full font-medium shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

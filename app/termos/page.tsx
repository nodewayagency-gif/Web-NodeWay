import Link from 'next/link';
import { siteConfig, absoluteUrl, MAILTO } from '@/lib/site-config';
import { LegalPage, companyIdentity } from '@/components/legal/legal-page';

const description = `Condições de uso do site da ${siteConfig.name}.`;

export const metadata = {
  title: 'Termos de Uso',
  description,
  alternates: { canonical: absoluteUrl('/termos') },
  openGraph: {
    title: `Termos de Uso | ${siteConfig.name}`,
    description,
    url: absoluteUrl('/termos'),
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="6 de novembro de 2026">
      <section>
        <h2>1. Sobre este site</h2>
        <p>
          Este site é mantido pela <strong>{companyIdentity()}</strong>. Ele apresenta nossos
          serviços (sites, sistemas sob medida, e-commerce, BI e integrações), nossos cases e o
          Nodeway CRM. Ao usar o site, você concorda com estes termos.
        </p>
      </section>

      <section>
        <h2>2. Conteúdo informativo</h2>
        <p>
          As informações do site são de caráter geral. Prazos, escopo e valores de cada projeto só
          valem depois de uma proposta enviada por nós e aceita por você. Os preços do Nodeway CRM
          seguem a página oficial de planos no momento da contratação.
        </p>
      </section>

      <section>
        <h2>3. Nodeway CRM</h2>
        <p>
          A assinatura e o uso do Nodeway CRM são regidos pelas condições exibidas na própria
          plataforma, em crm.nodewayagency.com.br, no momento da contratação.
        </p>
      </section>

      <section>
        <h2>4. Propriedade intelectual</h2>
        <p>
          Textos, marca, layout e código deste site pertencem à {siteConfig.name}. Marcas, logos e
          imagens de clientes são exibidos com a finalidade de apresentar trabalhos realizados e
          continuam pertencendo aos seus titulares. Nos prints de sistemas, dados de clientes foram
          ocultados.
        </p>
        <p className="mt-3">
          Você pode compartilhar links para as nossas páginas, mas não pode copiar ou reutilizar o
          conteúdo para fins comerciais sem autorização.
        </p>
      </section>

      <section>
        <h2>5. Links externos</h2>
        <p>
          O site tem links para sites de clientes, para o WhatsApp e para outras plataformas. Não
          controlamos esses sites e não respondemos pelo conteúdo ou pelas práticas deles.
        </p>
      </section>

      <section>
        <h2>6. Responsabilidade</h2>
        <p>
          Trabalhamos para manter o site no ar e as informações corretas, mas ele pode ficar
          indisponível ou conter erros pontuais. Não nos responsabilizamos por decisões tomadas
          apenas com base no conteúdo do site, sem uma conversa ou proposta formal.
        </p>
      </section>

      <section>
        <h2>7. Privacidade</h2>
        <p>
          O tratamento de dados pessoais é descrito na nossa{' '}
          <Link href="/privacidade">Política de Privacidade</Link>.
        </p>
      </section>

      <section>
        <h2>8. Lei e foro</h2>
        <p>
          Estes termos seguem a lei brasileira. Fica eleito o foro da comarca de{' '}
          {siteConfig.business.address.locality}/{siteConfig.business.address.region}, salvo quando a
          lei garantir ao consumidor o foro do seu domicílio.
        </p>
      </section>

      <section>
        <h2>9. Contato</h2>
        <p>
          Dúvidas sobre estes termos: <a href={MAILTO}>{siteConfig.contact.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}

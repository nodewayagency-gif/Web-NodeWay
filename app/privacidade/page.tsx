import { siteConfig, absoluteUrl, MAILTO } from '@/lib/site-config';
import { LegalPage, companyIdentity } from '@/components/legal/legal-page';

const description = `Como a ${siteConfig.name} coleta, usa e protege seus dados pessoais, conforme a LGPD.`;

export const metadata = {
  title: 'Política de Privacidade',
  description,
  alternates: { canonical: absoluteUrl('/privacidade') },
  openGraph: {
    title: `Política de Privacidade | ${siteConfig.name}`,
    description,
    url: absoluteUrl('/privacidade'),
    type: 'website',
  },
};

export default function PrivacyPage() {
  const email = siteConfig.contact.email;

  return (
    <LegalPage title="Política de Privacidade" updatedAt="6 de novembro de 2026">
      <section>
        <h2>1. Quem somos</h2>
        <p>
          Este site é mantido pela <strong>{companyIdentity()}</strong>, controladora dos dados
          pessoais tratados aqui, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 —
          LGPD). Esta política explica quais dados coletamos neste site, para quê e quais são os seus
          direitos.
        </p>
      </section>

      <section>
        <h2>2. Dados que coletamos</h2>
        <ul>
          <li>
            <strong>Quando você fala com a gente</strong> pelo WhatsApp ou por e-mail: nome, telefone,
            e-mail, empresa e o que você contar sobre o seu projeto.
          </li>
          <li>
            <strong>Quando você navega no site</strong>: páginas visitadas, cliques em botões (como o
            botão do WhatsApp), origem da visita (por exemplo, um anúncio), tipo de dispositivo,
            navegador, endereço IP e localização aproximada. Esses dados são coletados por cookies e
            ferramentas de medição.
          </li>
        </ul>
        <p className="mt-3">
          Este site não tem formulário de cadastro e não coleta dados de pagamento.
        </p>
      </section>

      <section>
        <h2>3. Para que usamos e com qual base legal</h2>
        <ul>
          <li>
            <strong>Responder seu contato e preparar orçamentos</strong> — procedimentos preliminares a
            um contrato, a seu pedido (art. 7º, V, da LGPD).
          </li>
          <li>
            <strong>Executar projetos e prestar suporte</strong> a clientes — execução de contrato (art.
            7º, V).
          </li>
          <li>
            <strong>Medir o desempenho do site e dos nossos anúncios</strong>, por exemplo, saber
            quantas pessoas chamaram no WhatsApp a partir de uma campanha — legítimo interesse (art.
            7º, IX).
          </li>
          <li>
            <strong>Cumprir obrigações legais</strong>, como guardar registros de acesso exigidos pelo
            Marco Civil da Internet (art. 7º, II).
          </li>
        </ul>
        <p className="mt-3">Não vendemos seus dados e não os usamos para nenhuma outra finalidade.</p>
      </section>

      <section>
        <h2>4. Cookies e ferramentas de terceiros</h2>
        <p>Usamos as seguintes ferramentas, que podem gravar cookies no seu navegador:</p>
        <ul className="mt-3">
          <li>
            <strong>Google Tag Manager</strong> — organiza as ferramentas de medição do site.
          </li>
          <li>
            <strong>Google Ads e Google Analytics</strong> — medem visitas e conversões (como cliques
            no WhatsApp) vindas de anúncios.
          </li>
          <li>
            <strong>Vercel Analytics</strong> — estatísticas de acesso e desempenho, sem identificar
            você pessoalmente.
          </li>
          <li>
            <strong>WhatsApp (Meta)</strong> — quando você clica para conversar, a conversa acontece
            no aplicativo do WhatsApp, sujeita à política de privacidade da Meta.
          </li>
        </ul>
        <p className="mt-3">
          Você pode bloquear ou apagar cookies nas configurações do seu navegador. O site continua
          funcionando, mas deixamos de medir a sua visita.
        </p>
      </section>

      <section>
        <h2>5. Com quem compartilhamos</h2>
        <p>
          Apenas com os fornecedores necessários para operar o site e o nosso atendimento: hospedagem
          (Vercel), ferramentas de medição e anúncios (Google), e-mail e WhatsApp. Alguns desses
          fornecedores processam dados fora do Brasil, com as garantias previstas na LGPD. Também
          podemos compartilhar dados quando a lei ou uma autoridade exigir.
        </p>
      </section>

      <section>
        <h2>6. Por quanto tempo guardamos</h2>
        <p>
          Dados de contato e de orçamento ficam guardados enquanto houver conversa ou relação
          comercial e, depois, pelo prazo exigido por lei. Registros de acesso ao site são guardados
          por 6 meses, conforme o Marco Civil da Internet. Depois disso, são apagados ou
          anonimizados.
        </p>
      </section>

      <section>
        <h2>7. Seus direitos</h2>
        <p>Você pode, a qualquer momento, pedir para:</p>
        <ul className="mt-3">
          <li>confirmar se tratamos seus dados e acessar uma cópia deles;</li>
          <li>corrigir dados incompletos ou desatualizados;</li>
          <li>apagar dados desnecessários ou tratados sem base legal;</li>
          <li>se opor a um tratamento ou revogar um consentimento;</li>
          <li>saber com quem compartilhamos seus dados.</li>
        </ul>
        <p className="mt-3">
          Para isso, escreva para <a href={MAILTO}>{email}</a>. Respondemos em até 15 dias. Você
          também pode registrar reclamação na Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </section>

      <section>
        <h2>8. Segurança</h2>
        <p>
          Usamos conexão criptografada (HTTPS), acesso restrito às informações e fornecedores com
          padrões reconhecidos de segurança. Nenhum sistema é 100% invulnerável; se houver um
          incidente que possa trazer risco a você, avisaremos você e a ANPD.
        </p>
      </section>

      <section>
        <h2>9. Alterações</h2>
        <p>
          Podemos atualizar esta política quando mudarmos ferramentas ou processos. A data no topo
          desta página sempre mostra a versão em vigor.
        </p>
      </section>

      <section>
        <h2>10. Contato</h2>
        <p>
          Dúvidas sobre privacidade: <a href={MAILTO}>{email}</a>.
        </p>
      </section>
    </LegalPage>
  );
}

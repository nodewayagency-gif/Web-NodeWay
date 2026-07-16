import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { siteConfig, absoluteUrl } from "@/lib/site-config";

export const metadata = {
  title: `Política de Privacidade - ${siteConfig.name}`,
  description: `Saiba como a ${siteConfig.name} lida com seus dados e garante sua privacidade.`,
  alternates: { canonical: absoluteUrl('/privacidade') },
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen noise-overlay">
      <Navigation />
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display brand-gradient mb-12">Política de Privacidade</h1>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">1. Introdução</h2>
            <p>
              A Nodeway Agency está comprometida com a proteção da sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações pessoais quando você visita nosso site e utiliza nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">2. Coleta de Dados</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como quando você solicita um orçamento através do nosso formulário de contato ou entra em contato conosco via WhatsApp. Isso pode incluir seu nome, e-mail e detalhes do projeto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">3. Uso das Informações</h2>
            <p>
              As informações coletadas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a solicitações de orçamento e dúvidas;</li>
              <li>Personalizar sua experiência com nossos serviços;</li>
              <li>Enviar comunicações relacionadas aos projetos em andamento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">4. Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição. Seus dados não são vendidos ou compartilhados com terceiros para fins de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">5. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para isso, entre em contato conosco através do e-mail {siteConfig.contact.email}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">6. Alterações</h2>
            <p>
              Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer mudanças.
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}

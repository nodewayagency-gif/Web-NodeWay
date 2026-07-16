import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { siteConfig, absoluteUrl } from "@/lib/site-config";

export const metadata = {
  title: `Termos de Uso - ${siteConfig.name}`,
  description: `Leia os termos de uso e condições para contratação dos serviços da ${siteConfig.name}.`,
  alternates: { canonical: absoluteUrl('/termos') },
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen noise-overlay">
      <Navigation />
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display brand-gradient mb-12">Termos de Uso</h1>
        
        <div className="prose prose-invert prose-blue max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar o site da Nodeway Agency, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Nodeway Agency, apenas para visualização transitória pessoal e não comercial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">3. Isenção de Responsabilidade</h2>
            <p>
              Os materiais no site da Nodeway Agency são fornecidos 'como estão'. A Nodeway Agency não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">4. Limitações</h2>
            <p>
              Em nenhum caso a Nodeway Agency ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">5. Precisão dos Materiais</h2>
            <p>
              Os materiais exibidos no site da Nodeway Agency podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em nosso site seja preciso, completo ou atual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mb-4">6. Links</h2>
            <p>
              A Nodeway Agency não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso pela Nodeway Agency do site.
            </p>
          </section>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}

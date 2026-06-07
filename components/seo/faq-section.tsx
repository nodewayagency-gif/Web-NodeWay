import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaqItem } from '@/lib/seo-data';

export function FaqSection({ faq, title = 'Perguntas frequentes' }: { faq: FaqItem[]; title?: string }) {
  if (!faq.length) return null;

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-display text-foreground mb-8">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-foreground hover:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

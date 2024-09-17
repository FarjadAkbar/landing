import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { IFaq } from "@/types/faq";

export default function FAQ({ data }: { data: IFaq[]}) {
  return (
    <section className="container mx-auto" id="faq">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Got a question? We&apos;ve got answers. Check out our FAQ to find out more about our product and services.
        </p>
      </div>
      <div className="mt-12 space-y-4">
        <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

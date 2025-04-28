"use client"

import { useLanguage } from "@/components/language-provider"
import type { Product } from "@/lib/products"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQsProps {
  product: Product
}

export default function FAQs({ product }: FAQsProps) {
  const { language, translations } = useLanguage()

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{translations.product.faqTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{translations.product.faqDescription}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {product.faqs[language].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

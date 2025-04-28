"use client"

import { useLanguage } from "@/components/language-provider"
import type { Product } from "@/lib/products"
import TestimonialCarousel from "@/components/testimonial-carousel"

interface TestimonialsProps {
  product: Product
}

export default function Testimonials({ product }: TestimonialsProps) {
  const { language, translations } = useLanguage()

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{translations.product.testimonialsTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.product.testimonialsDescription}
          </p>
        </div>

        <TestimonialCarousel testimonials={product.testimonials} />
      </div>
    </section>
  )
}

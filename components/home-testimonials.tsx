"use client"

import { useLanguage } from "@/components/language-provider"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { products } from "@/lib/products"

export default function HomeTestimonials() {
  const { translations } = useLanguage()

  // Combine testimonials from all products
  const allTestimonials = {
    en: products.flatMap((product) => product.testimonials.en),
    ur: products.flatMap((product) => product.testimonials.ur),
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{translations.testimonials.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.testimonials.description}
          </p>
        </div>

        <TestimonialCarousel testimonials={allTestimonials} />
      </div>
    </section>
  )
}

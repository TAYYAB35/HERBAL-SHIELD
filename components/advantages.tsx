"use client"

import { useLanguage } from "@/components/language-provider"
import type { Product } from "@/lib/products"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface AdvantagesProps {
  product: Product
}

export default function Advantages({ product }: AdvantagesProps) {
  const { language, translations } = useLanguage()

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{translations.product.advantagesTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.product.advantagesDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.advantages[language].map((item, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

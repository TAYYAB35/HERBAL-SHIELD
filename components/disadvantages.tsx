"use client"

import { useLanguage } from "@/components/language-provider"
import type { Product } from "@/lib/products"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

interface DisadvantagesProps {
  product: Product
}

export default function Disadvantages({ product }: DisadvantagesProps) {
  const { language, translations } = useLanguage()

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{translations.product.disadvantagesTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {translations.product.disadvantagesDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.disadvantages[language].map((item, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
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

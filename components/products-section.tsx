"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { products } from "@/lib/products"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductsSection() {
  const { language, translations } = useLanguage()

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{translations.products.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{translations.products.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden dark:border border-transparent dark:border-gray-700 dark:hover:border-gray-500 hover:shadow-2xl flex flex-col h-full shadow-xl md:rounded-tl-[150px] md:rounded-br-[150px]">
              <Link href={`/products/${product.slug}`}>
                <div className="relative h-60">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name[language]}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-bold">{product.name[language]}</h3>
                  <p className="mt-2 text-muted-foreground">{product.excerpt[language]}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="w-full">
                    <Button variant="outline" className="w-full md:w-[calc(100%-75px)]">
                      {translations.products.learnMore}
                    </Button>
                  </div>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

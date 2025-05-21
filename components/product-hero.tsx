"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { CheckCircle, ShieldCheck } from "lucide-react"

interface ProductHeroProps {
  product: Product
}

export default function ProductHero({ product }: ProductHeroProps) {
  const { language } = useLanguage()

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 to-yellow-100/40  overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              100% {language === "en" ? "Organic Solution" : "قدرتی حل"}
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {product.name[language]}
                <br />
                <span className="text-primary">
                  {product.shortDescription[language]}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">{product.description[language]}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-6">
                {language === "en" ? "Try BioGro+ Now" : "ہربل شیلڈ ابھی آزمائیں"}
              </Button>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background"></div>
                ))}
              </div>
              <p className="text-sm font-medium">
                <span className="font-bold">500+</span>{" "}
                {language === "en" ? "farmers trust BioGro+" : "کسان ہربل شیلڈ پر بھروسہ کرتے ہیں"}
              </p>
            </div>

            <div className="bg-background rounded-lg shadow-lg p-4 flex items-center gap-3 w-full md:w-4/5">
              <div className="bg-primary/10 rounded-full p-2">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">
                  {language === "en" ? "Backed By" : "تصدیق شدہ ادارہ"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "University of Agriculture Faisalabad" : "یونیورسٹی آف ایگری کلچر فیصل آباد"}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name[language]}
                fill
                className="object-cover shadow-xl"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-background rounded-lg shadow-lg p-4 flex items-center gap-3">
              <div className="bg-primary/10 rounded-full p-2">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">{language === "en" ? "Proven Results" : "ثابت شدہ نتائج"}</p>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "95% Effectiveness Rate" : "95% موثر شرح"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

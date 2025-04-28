"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import type { Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface ProductHeroProps {
  product: Product
}

export default function ProductHero({ product }: ProductHeroProps) {
  const { language } = useLanguage()

  return (
    <section className="py-12 md:py-16 bg-primary/5 dark:bg-primary/10 rounded-lg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              100% {language === "en" ? "Organic Solution" : "نامیاتی حل"}
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                {language === "en" ? "Protect Your Crops." : "اپنی فصلوں کی حفاظت کریں۔"}
                <br />
                <span className="text-primary">
                  {language === "en" ? "Protect the Planet." : "سیارے کی حفاظت کریں۔"}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">{product.description[language]}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-6">
                {language === "en" ? "Try Herbal Shield Now" : "ہربل شیلڈ ابھی آزمائیں"}
              </Button>
              <Button variant="outline" size="lg" className="px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14v4h2V6h-2zm0 6v2h2v-2h-2z" />
                </svg>
                {language === "en" ? "Chat on WhatsApp" : "واٹس ایپ پر چیٹ کریں"}
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
                {language === "en" ? "farmers trust Herbal Shield" : "کسان ہربل شیلڈ پر بھروسہ کرتے ہیں"}
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name[language]}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 md:bottom-4 md:left-4 bg-background rounded-lg shadow-lg p-4 flex items-center gap-3">
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

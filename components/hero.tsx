"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const { translations } = useLanguage()

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Organic Herbal Shield"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">{translations.hero.title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{translations.hero.description}</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#products">
            <Button size="lg" className="w-full sm:w-auto">
              {translations.hero.primaryCta}
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {translations.hero.secondaryCta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

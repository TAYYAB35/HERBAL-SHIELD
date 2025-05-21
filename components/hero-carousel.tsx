"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselSlide {
  title: {
    en: string
    ur: string
  }
  description: {
    en: string
    ur: string
  }
  primaryCta: {
    en: string
    ur: string
    href: string
  }
  secondaryCta: {
    en: string
    ur: string
    href: string
  }
  image: string
  badge?: {
    en: string
    ur: string
  }
}

// Pre-defined message
const message = "Hello! I'm interested in Organic BioGro+ products."

const whatsappUrl = `https://wa.me/+923038406091?text=${encodeURIComponent(message)}`

const carouselSlides: CarouselSlide[] = [
  {
    title: {
      en: "Defend Your Crops the Organic Way",
      ur: "اپنی فصلوں کا قدرتی طریقے سے دفاع کریں۔",
    },
    description: {
      en: "BioGro+ provides effective, natural alternatives to chemical products. Our organic solutions (PlantGuard, HormoGuard) protect plants from pests, promote growth, and enhance nutrition without harmful side effects.",
      ur: "ہربل شیلڈ کیمیائی مصنوعات کا ایک مؤثر اور قدرتی متبادل فراہم کرتی ہے، ہمارے قدرتی حل جیسے پلانٹ گارڈ اور ہارمو گارڈ پودوں کو کیڑوں سے بچاتے ہیں، نشوونما کو فروغ دیتے ہیں اور بغیر کسی نقصان دہ ضمنی اثرات کے غذائیت میں اضافہ کرتے ہیں۔"
    },
    primaryCta: {
      en: "Explore Products",
      ur: "مصنوعات دریافت کریں",
      href: "#products",
    },
    secondaryCta: {
      en: "Contact Us",
      ur: "ہم سے رابطہ کریں",
      href: "#contact",
    },
    image: "/images/hero-1.jpg",
    badge: {
      en: "100% Organic Solution",
      ur: "100% قدرتی حل",
    },
  },
  {
    title: {
      en: "Boost Natural Growth from Within",
      ur: "اندر سے قدرتی ترقی کو فروغ دیں۔",
    },
    description: {
      en: "Maintain your plants’ hormonal balance naturally. Our herbal hormonal product promotes growth and development thus ensuring better yield- supporting every stage of plant development with zero synthetic inputs. ",
      ur: "قدرتی طور پر اپنے پودوں کے ہارمونل توازن کو برقرار رکھیں۔ ہماری جڑی بوٹیوں والی ہارمونل پروڈکٹ ترقی اور نشوونما کو فروغ دیتی ہے اس طرح بہتر پیداوار کو یقینی بناتی ہے- صفر مصنوعی ان پٹ کے ساتھ پودوں کی نشوونما کے ہر مرحلے میں معاونت کرتی ہے۔"
    },
    primaryCta: {
      en: "Try BioGro+ Now",
      ur: "ہربل شیلڈ ابھی آزمائیں",
      href: "/products/pesticide-control",
    },
    secondaryCta: {
      en: "Chat on WhatsApp",
      ur: "واٹس ایپ پر چیٹ کریں",
      href: `${whatsappUrl}`,
    },
    image: "/images/hero-2.jpg",
    badge: {
      en: "100% Organic Solution",
      ur: "100% قدرتی حل",
    },
  },
  {
    title: {
      en: "Natural Nutrients for resilient, and thriving plants.",
      ur: "لچکدار، اور پھل پھولنے والے پودوں کے لیے قدرتی غذائی اجزاء",
    },
    description: {
      en:"Balanced nutrients helps to improves plant health with higher yields, thus ensuring bio-fortified fruits and vegetables as well as agronomic crops. ",
      ur: "متوازن غذائی اجزاء زیادہ پیداوار کے ساتھ پودوں کی صحت کو بہتر بنانے میں مدد کرتے ہیں، اس طرح بایو فورٹیفائیڈ پھلوں اور سبزیوں کے ساتھ ساتھ زرعی فصلوں کو بھی یقینی بناتے ہیں۔",
    },
    primaryCta: {
      en: "Learn More",
      ur: "مزید جانیں",
      href: "/products/hormones-control",
    },
    secondaryCta: {
      en: "View Benefits",
      ur: "فوائد دیکھیں",
      href: "/products/hormones-control",
    },
    image: "/images/hero-3.jpg",
    badge: {
      en: "100% Organic Solution",
      ur: "100% قدرتی حل",
    },
  },
]

export default function HeroCarousel() {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)


  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this with the CSS transition duration
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 7000) // Change slide every 7 seconds

    return () => clearInterval(interval)
  }, [currentSlide])

  const slide = carouselSlides[currentSlide]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out">
        <Image
          src={slide.image || "/placeholder.svg"}
          alt={slide.title[language]}
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge (if available) */}
          {slide.badge && (
            <motion.div
              className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium"
              animate={{
                scale: [1, 1.1, 1],  // Scale up slightly, then back to normal
                opacity: [1, 0.8, 1] // Light fade breathing effect
              }}
              transition={{
                duration: 2,          // 2 seconds for one full cycle
                repeat: Infinity,     // Repeat forever
                repeatType: "loop",    // Loop smoothly
                ease: "easeInOut"      // Soft ease
              }}
            >
              {slide.badge[language]}
            </motion.div>
          )}

          {/* Title with animation */}
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-center transition-all duration-500 ease-in-out"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
            }}
          >
            {slide.title[language]}
          </h1>

          {/* Description with animation */}
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-center transition-all duration-500 ease-in-out"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
              transitionDelay: "100ms",
            }}
          >
            {slide.description[language]}
          </p>

          {/* CTA Buttons with animation */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ease-in-out"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
              transitionDelay: "200ms",
            }}
          >
            <Link href={slide.primaryCta.href}>
              <Button size="lg" className="w-full sm:w-auto">
                {slide.primaryCta[language]}
              </Button>
            </Link>
            <Link href={slide.secondaryCta.href} target={slide.secondaryCta.href.startsWith('http') ? '_blank' : undefined}
              rel={slide.secondaryCta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {slide.secondaryCta[language]}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full z-20 hidden md:flex"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full z-20 hidden md:flex"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

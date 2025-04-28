"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, StarIcon, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { useSwipeable } from "@/hooks/use-swipeable"

interface TestimonialItem {
  name: string
  avatar?: string
  rating: number
  text: string
  location: string
}

interface TestimonialCarouselProps {
  testimonials: {
    en: TestimonialItem[]
    ur: TestimonialItem[]
  }
  autoplay?: boolean
  interval?: number
}

export default function TestimonialCarousel({
  testimonials,
  autoplay = true,
  interval = 5000,
}: TestimonialCarouselProps) {
  const { language } = useLanguage()
  const items = testimonials[language]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  const totalItems = items.length
  const showArrows = totalItems > 1

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentIndex((totalItems + index) % totalItems)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    },
    [isTransitioning, totalItems],
  )

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [goToSlide, currentIndex])

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [goToSlide, currentIndex])

  // Handle swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  // Auto-advance slides
  useEffect(() => {
    if (!autoplay || isPaused || totalItems <= 1) return

    intervalRef.current = window.setInterval(() => {
      nextSlide()
    }, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, currentIndex, isPaused, nextSlide, totalItems, interval])

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...handlers}
    >
      <div className="flex flex-col items-center">
        {/* Testimonial Card */}
        <div className="w-full max-w-3xl mx-auto px-4">
          <Card
            className={cn(
              "transition-all duration-500 ease-in-out bg-card shadow-lg border-0",
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100",
            )}
          >
            <CardContent className="pt-6 pb-2">
              <div className="flex justify-center mb-4">
                <Quote className="h-10 w-10 text-primary/20" />
              </div>
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < items[currentIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-center text-lg italic mb-6">"{items[currentIndex].text}"</p>
            </CardContent>
            <CardFooter className="flex flex-col items-center pb-6">
              <div className="flex items-center space-x-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/10">
                  <Image
                    src={items[currentIndex].avatar || "/placeholder.svg?height=48&width=48"}
                    alt={items[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{items[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{items[currentIndex].location}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Navigation dots */}
        {totalItems > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === index ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50",
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation arrows */}
      {showArrows && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full z-20 hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full z-20 hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </>
      )}
    </div>
  )
}

import HeroCarousel from "@/components/hero-carousel"
import ProductsSection from "@/components/products-section"
import ContactSection from "@/components/contact-section"
import HomeTestimonials from "@/components/home-testimonials"

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <ProductsSection />
      <HomeTestimonials />
      <ContactSection />
    </div>
  )
}

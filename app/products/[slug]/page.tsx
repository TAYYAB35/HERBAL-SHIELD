import { notFound } from "next/navigation"
import ProductHero from "@/components/product-hero"
import Disadvantages from "@/components/disadvantages"
import Advantages from "@/components/advantages"
import FAQs from "@/components/faqs"
import Testimonials from "@/components/testimonials"
import { getProductBySlug } from "@/lib/products"
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react"

export function generateStaticParams() {
  return [{ slug: "pesticide-control" }, { slug: "hormones-control" }, { slug: "nutrition-control" }]
}

export default function ProductPage({ params }: { params: { slug: string } }) {

 

  const product = getProductBySlug(params?.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="py-8">
      <ProductHero product={product} />
      <div>
       
      </div>
      <Disadvantages product={product} />
      <Advantages product={product} />
      <FAQs product={product} />
      <Testimonials product={product} />
    </div>
  )
}

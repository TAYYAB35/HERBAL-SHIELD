import { notFound } from "next/navigation"
import ProductHero from "@/components/product-hero"
import Disadvantages from "@/components/disadvantages"
import Advantages from "@/components/advantages"
import FAQs from "@/components/faqs"
import Testimonials from "@/components/testimonials"
import { getProductBySlug } from "@/lib/products"
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react"
import { useLanguage } from "@/components/language-provider"

export function generateStaticParams() {
  return [{ slug: "pesticide-control" }, { slug: "hormones-control" }, { slug: "nutrition-control" }]
}

export default function ProductPage({ params }: { params: { slug: string } }) {



  const product = getProductBySlug(params?.slug)
  const { language } = useLanguage()


  if (!product) {
    notFound()
  }

  return (
    <div className="py-8">
      <ProductHero product={product} />
      <div>
        {product && (
          <div>
            {/* Excerpt based on selected language */}
            <div className="excerpt">
              <p>{language === "en" ? product.excerpt.en : product.excerpt.ur}</p>
            </div>

            {/* YouTube videos from linkAry */}
            {Array.isArray(product.linkAry) && product.linkAry.length > 0 && (
              <div className="video-section">
                {product.linkAry.map((item, idx) => (
                  <div className="video-wrapper" key={idx}>
                    <iframe
                      width="560"
                      height="315"
                      src={item.link}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <Disadvantages product={product} />
      <Advantages product={product} />
      <FAQs product={product} />
      <Testimonials product={product} />
    </div>
  )
}

"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { ImageComparisonSlider } from "./ui/image-comparison-slider"

type ImageComparisonItem = {
    blink: string;
    alink?: string;
    overlayText?: string;
    bText?: string;
    aText?: string;
  };
  

export default function ImageCompareSection({ product }: { product: any }) {
    const { language, translations } = useLanguage()
    console.log("ImageCompareSection", product)
    return (
        <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                <div>
                    {product && product.length > 0 && product.map((item : ImageComparisonItem, index:number) => (
                        <div key={index} style={{ marginBottom: '2rem' }}>
                            <ImageComparisonSlider
                                beforeImage={item.blink}
                                afterImage={item.alink || "/placeholder.svg?height=400&width=800&text=After"}
                                beforeLabel={item.bText || "Before"}
                                afterLabel={item.aText || "After"}
                                overlayText={item.overlayText || "Drag to compare"}
                                rounded={true}
                                shadow={true}
                                initialPosition={70}
                                height={500}
                                className="max-w-3xl w-full mx-auto"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

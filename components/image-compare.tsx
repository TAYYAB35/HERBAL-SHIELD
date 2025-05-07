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
        <section className="py-12 bg-muted">

            <div className="excerpt flex flex-col justify-center mb-10">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-center mb-2" >{language === "en" ? 'Real Results from the Field' : 'اصلی تجربات اور نتائج'}</h2>
                <p className="mt-4 text-lg text-muted-foreground text-center w-full mx-auto px-5 md:px-20">
                    {language === "en" ? 'Our products have been tested in real-world agricultural settings across various crops including citrus, maize, and apple. The following case studies showcase visual proof of their effectiveness. Each before-and-after image highlights the improvements in plant health, growth, and resilience — all achieved through our organic solutions without the harmful effects of chemicals. These are not simulations — they’re actual field results from farmers and researchers using our products under varying climate conditions.'
                        : 'ہماری مصنوعات کو مختلف فصلوں جیسے ترشاوہ پھل، مکئی، اور سیب پر عملی طور پر آزمایا گیا ہے۔ درج ذیل کیس اسٹڈیز میں ان کے مؤثر نتائج کی بصری مثالیں پیش کی گئی ہیں۔ ہر "پہلے اور بعد" کی تصویر پودوں کی صحت، نشوونما اور مزاحمت میں بہتری کو ظاہر کرتی ہے — وہ بھی بغیر کسی نقصان دہ کیمیکل کے۔ یہ فرضی یا لیبارٹری نتائج نہیں بلکہ اصلی تجربات اور کسانوں کے مشاہدات ہیں۔'}
                </p>
            </div>


            <div className="container mx-auto px-4">
                <div>
                    {product && product.length > 0 && product.map((item: ImageComparisonItem, index: number) => (
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

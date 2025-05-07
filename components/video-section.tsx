"use client"

import { useLanguage } from "@/components/language-provider"

export default function VideoSection({ product }: { product: any }) {
    const { language, translations } = useLanguage()

    return (
        <section className="py-12 bg-muted/80">
            <div className="container mx-auto px-4">
                <div>
                    {product && (
                        <div>
                            {/* Excerpt based on selected language */}
                            <div className="excerpt flex justify-center mb-10">
                                <h4 className="text-2xl font-bold tracking-tight sm:text-3xl text-center w-full md:w-4/5" >{language === "en" ? product.excerpt.en : product.excerpt.ur}</h4>
                            </div>

                            {/* YouTube videos from linkAry */}
                            {Array.isArray(product.linkAry) && product.linkAry.length > 0 && (
                                <div className="video-section">
                                    {product.linkAry.map((item: any, idx: any) => (
                                        <div className="video-wrapper" key={idx}>
                                            <iframe
                                                className="w-full h-64 md:w-4/5 md:h-[500px] mx-auto rounded-3xl shadow-lg mb-10"
                                                src={item.link}
                                                frameBorder="0"
                                                title="YouTube video player"
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
            </div>
        </section>
    )
}

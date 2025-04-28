"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { translations } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">{translations.brand}</h3>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">{translations.footer.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{translations.footer.quickLinks}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  {translations.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/products/pesticide-control" className="text-sm text-muted-foreground hover:text-primary">
                  {translations.nav.pesticide}
                </Link>
              </li>
              <li>
                <Link href="/products/hormones-control" className="text-sm text-muted-foreground hover:text-primary">
                  {translations.nav.hormones}
                </Link>
              </li>
              <li>
                <Link href="/products/nutrition-control" className="text-sm text-muted-foreground hover:text-primary">
                  {translations.nav.nutrition}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">{translations.footer.contact}</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">{translations.footer.email}:</span> info@organicherbalshield.com
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">{translations.footer.phone}:</span> +1 (555) 123-4567
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="font-medium">{translations.footer.address}:</span> 123 Organic Way, Green City
              </li>
            </ul>

            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} {translations.brand}. {translations.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

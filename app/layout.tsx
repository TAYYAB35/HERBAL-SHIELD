import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsAppFAB from "@/components/whatsapp-fab"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Leaf & Shield",
  description: "Natural solutions for pesticide control, hormones control, and nutrition control",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col dark-mode-transition">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
              <WhatsAppFAB />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

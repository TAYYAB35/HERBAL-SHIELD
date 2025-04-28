"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { translations } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: translations.contact.successTitle,
        description: translations.contact.successMessage,
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{translations.contact.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{translations.contact.description}</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">{translations.contact.email}</h3>
                  <p className="text-sm text-muted-foreground">info@organicherbalshield.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">{translations.contact.phone}</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">{translations.contact.address}</h3>
                  <p className="text-sm text-muted-foreground">123 Organic Way, Green City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {translations.contact.form.name}
                </label>
                <Input id="name" name="name" required placeholder={translations.contact.form.namePlaceholder} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {translations.contact.form.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={translations.contact.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {translations.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={translations.contact.form.messagePlaceholder}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? translations.contact.form.sending : translations.contact.form.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

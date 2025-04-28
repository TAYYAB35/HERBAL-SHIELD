"use client"

import { useLanguage } from "@/components/language-provider"

export function useTranslations() {
  const { language, translations } = useLanguage()

  return { language, translations }
}

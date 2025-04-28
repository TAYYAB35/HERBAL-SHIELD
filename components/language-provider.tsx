"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { en, ur } from "@/lib/translations"

type Language = "en" | "ur"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  translations: typeof en
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  translations: en,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState(en)

  useEffect(() => {
    // Check if there's a saved language preference in localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ur")) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Update translations when language changes
    setTranslations(language === "en" ? en : ur)

    // Save language preference to localStorage
    localStorage.setItem("language", language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, translations }}>{children}</LanguageContext.Provider>
}

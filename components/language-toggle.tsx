"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"
import { Switch } from "@/components/ui/switch"

export function LanguageToggle() {
  const { language, setLanguage, translations } = useLanguage()
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleToggle = () => {
    const newLanguage = language === "en" ? "ur" : "en"
    setLanguage(newLanguage)
  }

  if (!isHydrated) {
    return null // Or a skeleton/placeholder if you prefer
  }

  return (
    <div className="flex items-center space-x-2">
      <span
        className={`text-sm font-medium transition-colors duration-200 ${language === "en" ? "text-primary font-bold" : "text-muted-foreground"}`}
      >
        Eng
      </span>
      <Switch
        id="language-switch"
        checked={language === "ur"}
        onCheckedChange={handleToggle}
        aria-label={translations.language.toggle}
      />
      <span
        className={`text-sm font-medium transition-colors duration-200 ${language === "ur" ? "text-primary font-bold" : "text-muted-foreground"}`}
      >
        اردو
      </span>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "./language-provider"

export function LanguageToggle() {
  const { language, setLanguage, translations } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{translations.language.toggle}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>{translations.language.english}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ur")}>{translations.language.urdu}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

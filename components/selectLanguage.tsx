'use client'

import { ChangeEvent, useEffect, useState } from "react";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const SelectLanguage = () => {
  const { t } = useTranslation('translate');
  const [ lan, setLan ] = useState(i18n.language);

  const languages = [
    { name: t("language_en"), code: "en" },
    { name: t("language_es"), code: "es" },
  ]
  

  const changeLanguage = (lang: string) => {
    setLan(lang);
    i18n.changeLanguage(lang);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1" aria-label="Change language">
          <Globe className="h-4 w-4" />
          <span>{lan.toLocaleUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => changeLanguage(lang.code)}>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>

  )
}
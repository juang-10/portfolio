'use client'

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const SelectLanguage = () => {
  const { t, i18n } = useTranslation('translate');
  const [lan, setLan] = useState(i18n.language || "en");

  useEffect(() => {
    setLan(i18n.language || "en");
  }, [i18n.language]);

  const languages = [
    { name: t("language_en") || "English", code: "en" },
    { name: t("language_es") || "Español", code: "es" },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1" aria-label="Change language">
          <Globe className="h-4 w-4" />
          <span>{lan.toUpperCase()}</span>
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
  );
};

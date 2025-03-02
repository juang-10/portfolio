'use client'

import { ChangeEvent, useEffect, useState } from "react";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";

export const SelectLanguage = () => {
  const { t } = useTranslation('translate');
  const [ lan, setLan ] = useState(i18n.language);

  const languages = [
    { name: t("language_en"), code: "en" },
    { name: t("language_es"), code: "es" },
  ]
  

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setLan(value);
    i18n.changeLanguage(value);
  }

  useEffect(() => {
    setLan(i18n.language);
  }, [i18n.language]);

  return (
    <select
      value={lan}
      onChange={changeLanguage}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  )
}
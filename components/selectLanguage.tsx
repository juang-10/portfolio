'use client'

import { ChangeEvent, useState } from "react";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";

const languages = [
  { name: "English", code: "en" },
  { name: "Español", code: "es" },
]

export const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [ lan, setLan ] = useState(i18n.language);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setLan(value);
    i18n.changeLanguage(value);
  }
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
'use client'

import { ChangeEvent, useState } from "react";
import i18n from 'i18next';

const languages = [
  { name: "English", code: "en" },
  { name: "Español", code: "es" },
]

export const SelectLanguage = () => {
  const [ lan, setLan ] = useState('en')

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setLan(value);
    i18n.changeLanguage(value ? value : 'en');
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
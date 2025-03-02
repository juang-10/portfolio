import { enTranslation } from '@/public/locales/en/enTranslation';
import { esTranslation } from '@/public/locales/es/esTranslation';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translate: enTranslation },
      es: { translate: esTranslation },
    },
    fallbackLng: 'en',
    debug: true,
    ns: ['translate'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    }
  });
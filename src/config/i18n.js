import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  lng: 'es',
  supportedLngs: ['es', 'en'],
  fallbackLng: 'en',
  initImmediate: false
});

if (process.env.NODE_ENV !== 'test') {
  const translations = import.meta.glob('/**/i18n.ts')
  for (const path in translations) {
    await translations[path]();
  }
}

export default i18next;

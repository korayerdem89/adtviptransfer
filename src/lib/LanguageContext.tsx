import { createContext, useContext, useState, type ReactNode } from 'react';
import trTranslations from './translations/tr';
import enTranslations from './translations/en';

export type Language = 'tr' | 'en';

const translationsMap = {
  tr: trTranslations,
  en: enTranslations,
} as const;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => unknown;
  ts: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return path;
    current = (current as Record<string, unknown>)[key];
  }
  return current ?? path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('adt-lang');
      return (saved === 'en' || saved === 'tr') ? saved : 'tr';
    } catch {
      return 'tr';
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('adt-lang', newLang);
    } catch { /* SSR or private mode */ }
    document.documentElement.lang = newLang;
  };

  const t = (key: string): unknown => {
    return getNestedValue(translationsMap[lang] as unknown as Record<string, unknown>, key);
  };

  const ts = (key: string): string => {
    const val = t(key);
    return typeof val === 'string' ? val : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, ts }}>
      {children}
    </LanguageContext.Provider>
  );
}

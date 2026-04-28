"use client";

import { createContext, useContext, useEffect, useState } from "react";

import type { Locale } from "@/data/site";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const storedLocale = localStorage.getItem("locale");

      if (storedLocale === "en" || storedLocale === "th") {
        setLocaleState(storedLocale);
      }
    } catch (error) {
      // Ignore storage access issues and keep the default locale.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;

    try {
      localStorage.setItem("locale", locale);
    } catch (error) {
      // Ignore storage write failures.
    }
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
  }

  function toggleLocale() {
    setLocaleState((currentLocale) => (currentLocale === "en" ? "th" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

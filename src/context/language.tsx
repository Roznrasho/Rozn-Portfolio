"use client";

import React from "react";
import { translations } from "@/lib/i18n";

type Lang = "en" | "de";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("site-lang") as Lang) || "en";
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("site-lang", lang);
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((s) => (s === "en" ? "de" : "en"));

  const t = (key: string) => {
    return translations[lang]?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  // Initialize after mount to avoid SSR issues
  useEffect(() => {
    setIsClient(true);
    // Load from localStorage after component mounts
    const saved = localStorage.getItem('loyawin-language');
    if (saved && (saved === 'en' || saved === 'de' || saved === 'vi')) {
      setLanguageState(saved as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (isClient) {
      localStorage.setItem('loyawin-language', lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default values instead of throwing error
    return {
      language: 'en' as Language,
      setLanguage: () => {},
    };
  }
  return context;
}
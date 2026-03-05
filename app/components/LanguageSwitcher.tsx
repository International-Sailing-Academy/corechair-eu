'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'nl', label: 'NL', flag: '🇳🇱' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (locale: string) => {
    // Replace current locale in pathname with new locale
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        <span>{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-20">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                  currentLocale === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span>{lang.flag}</span>
                <span className="font-medium">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

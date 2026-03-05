'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();

  const navItems = [
    { href: `/${locale}/`, label: t('home') },
    { href: `/${locale}/shop/`, label: t('shop') },
    { href: `/${locale}/about/`, label: t('about') },
    { href: `/${locale}/science/`, label: t('science') },
    { href: `/${locale}/contact/`, label: t('contact') },
  ];

  return (
    <nav className="bg-gray-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href={`/${locale}/`} className="text-2xl font-bold hover:text-blue-400 transition-colors">
          CoreChair
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href={`/${locale}/shop/`}
            className="hidden sm:block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {t('buy')}
          </Link>
        </div>
      </div>
    </nav>
  );
}

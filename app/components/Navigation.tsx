'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();

  const navItems = [
    { href: '#products', label: t('products') },
    { href: '#about', label: t('about') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <nav className="bg-gray-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href={`/${locale}/`} className="text-2xl font-bold hover:text-blue-400 transition-colors">
          CoreChair
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#products"
            className="hidden sm:block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {t('buy')}
          </a>
        </div>
      </div>
    </nav>
  );
}

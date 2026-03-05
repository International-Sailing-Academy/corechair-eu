'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export default function FAQ() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = ['0', '1', '2', '3', '4', '5', '6', '7'];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((key, index) => (
                <div
                  key={key}
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8">
                      {t(`items.${key}.q`)}
                    </span>
                    <span className={`text-2xl text-blue-600 transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {t(`items.${key}.a`)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-gray-600 mb-8">{t('contact.desc')}</p>
          <Link
            href={`/${locale}/contact/`}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105"
          >
            {t('contact.button')}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 CoreChair. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12">
              {/* Form */}
              <div className="md:col-span-3">
                <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                      <div className="text-5xl mb-4">✅</div>
                      <p className="text-green-800 font-medium">{t('form.success')}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.name')}</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.email')}</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.subject')}</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('form.message')}</label>
                        <textarea
                          rows={4}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                      >
                        {t('form.submit')}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-blue-50 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Info</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="font-medium text-gray-700">Email</p>
                        <p className="text-blue-600">{t('info.email')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">🕐</span>
                      <div>
                        <p className="font-medium text-gray-700">Hours</p>
                        <p className="text-gray-600">{t('info.hours')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">📍</span>
                      <div>
                        <p className="font-medium text-gray-700">Note</p>
                        <p className="text-gray-600">{t('info.note')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">60-Day Trial</h3>
                  <p className="text-gray-700 text-sm">
                    Try CoreChair risk-free. Not satisfied? We'll make it right.
                  </p>
                </div>
              </div>
            </div>
          </div>
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

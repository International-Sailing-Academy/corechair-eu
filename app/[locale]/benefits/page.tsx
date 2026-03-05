import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Benefits({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const benefits = [
    { key: '0', icon: '🎯', color: 'from-blue-500 to-cyan-500' },
    { key: '1', icon: '🧠', color: 'from-purple-500 to-pink-500' },
    { key: '2', icon: '💪', color: 'from-orange-500 to-red-500' },
    { key: '3', icon: '🪑', color: 'from-green-500 to-emerald-500' },
    { key: '4', icon: '🔥', color: 'from-yellow-500 to-orange-500' },
    { key: '5', icon: '❤️', color: 'from-red-500 to-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('benefits.hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('benefits.hero.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('benefits.main.label')}</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">{t('benefits.main.title')}</h2>
            <p className="text-lg text-gray-600">{t('benefits.main.intro')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.key}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color}`} />
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t(`benefits.items.${benefit.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-6">{t(`benefits.items.${benefit.key}.desc`)}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold gradient-text">{t(`benefits.items.${benefit.key}.stat`)}</span>
                  <span className="text-sm text-gray-500">{t(`benefits.items.${benefit.key}.statLabel`)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sitting Disease Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('benefits.sittingDisease.title')}</h2>
                <p className="text-lg text-gray-600 mb-8">{t('benefits.sittingDisease.desc')}</p>
                <ul className="space-y-4">
                  {['0', '1', '2', '3'].map((i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">✓</span>
                      <span className="text-gray-700">{t(`benefits.sittingDisease.points.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                  <span className="text-9xl">⚠️</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                  <p className="text-3xl font-bold text-red-500">8+ hrs</p>
                  <p className="text-sm text-gray-500">Average sitting time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{t('benefits.cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8">{t('benefits.cta.desc')}</p>
          <Link
            href={`/${locale}/shop/`}
            className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105"
          >
            {t('benefits.cta.button')}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 CoreChair. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

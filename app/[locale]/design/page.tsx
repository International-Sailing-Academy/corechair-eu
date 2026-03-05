import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Design({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const features = [
    { key: '0', icon: '🎯' },
    { key: '1', icon: '🔄' },
    { key: '2', icon: '🪑' },
    { key: '3', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('design.hero.title')}</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">{t('design.hero.subtitle')}</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">{t('design.philosophy.label')}</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">{t('design.philosophy.title')}</h2>
            <p className="text-lg text-gray-600">{t('design.philosophy.desc')}</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.key} className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t(`design.features.${feature.key}.title`)}</h3>
                <p className="text-gray-600">{t(`design.features.${feature.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-9xl">🛡️</span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('design.materials.label')}</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">{t('design.materials.title')}</h2>
                <p className="text-lg text-gray-600 mb-8">{t('design.materials.desc')}</p>
                <ul className="space-y-3">
                  {['0', '1', '2', '3'].map((i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-gray-700">{t(`design.materials.items.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t('design.comparison.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="text-5xl mb-4">🪑</div>
              <h3 className="text-xl font-bold mb-4">Traditional Chairs</h3>
              <p className="text-gray-400">{t('design.comparison.traditional')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10">
              <div className="text-5xl mb-4">⚪</div>
              <h3 className="text-xl font-bold mb-4">Exercise Balls</h3>
              <p className="text-gray-400">{t('design.comparison.ball')}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-4">CoreChair</h3>
              <p className="text-blue-100">{t('design.comparison.corechair')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 CoreChair. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

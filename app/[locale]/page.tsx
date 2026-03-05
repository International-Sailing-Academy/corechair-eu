import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const advantages = [
    { key: 'backPain', icon: '🎯' },
    { key: 'brain', icon: '🧠' },
    { key: 'core', icon: '💪' },
    { key: 'pelvic', icon: '🪑' },
    { key: 'calories', icon: '🔥' },
    { key: 'circulation', icon: '❤️' },
    { key: 'bloodFlow', icon: '🩸' },
    { key: 'ergonomic', icon: '✨' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/shop/`}
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              {t('home.hero.cta')}
            </Link>
            <Link
              href={`/${locale}/about/`}
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              {t('home.hero.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('home.intro.title')}
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">{t('home.intro.p1')}</p>
            <p className="text-lg leading-relaxed">{t('home.intro.p2')}</p>
            <p className="text-lg leading-relaxed">{t('home.intro.p3')}</p>
          </div>
          <p className="text-center text-2xl font-bold text-blue-600 mt-10">
            {t('home.intro.tagline')}
          </p>
        </div>
      </section>

      {/* ELITE Banner */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.eliteBanner.title')}</h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto text-purple-100">
            {t('home.eliteBanner.description')}
          </p>
          <p className="text-lg mb-8 text-purple-200">{t('home.eliteBanner.availability')}</p>
          <Link
            href={`/${locale}/shop/`}
            className="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            {t('home.eliteBanner.cta')}
          </Link>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {t('home.advantages.title')}
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            {t('home.advantages.subtitle')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((item) => (
              <div key={item.key} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {t(`home.advantages.items.${item.key}.title`)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(`home.advantages.items.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Free Trial */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('home.trial.title')}</h2>
          <p className="text-lg text-gray-700">{t('home.trial.desc')}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2026 CoreChair. {t('footer.rights')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.shipping')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

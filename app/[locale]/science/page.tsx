import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Science({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const studies = ['0', '1', '2', '3'];
  const stats = ['0', '1', '2', '3'];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('science.hero.title')}</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">{t('science.hero.subtitle')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">{t('science.intro.label')}</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">{t('science.intro.title')}</h2>
            <p className="text-lg text-gray-600">{t('science.intro.desc')}</p>
          </div>
        </div>
      </section>

      {/* Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {studies.map((key, index) => (
              <div
                key={key}
                className={`flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-8 shadow-lg ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                    <span className="text-7xl">🎓</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                    {t(`science.studies.${key}.institution`)}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                    {t(`science.studies.${key}.title`)}
                  </h3>
                  <p className="text-lg font-semibold text-indigo-600 mb-3">
                    {t(`science.studies.${key}.finding`)}
                  </p>
                  <p className="text-gray-600">
                    {t(`science.studies.${key}.detail`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">{t('science.stats.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((key) => (
              <div key={key} className="text-center">
                <p className="text-5xl font-bold gradient-text">{t(`science.stats.items.${key}.value`)}</p>
                <p className="text-gray-400 mt-2">{t(`science.stats.items.${key}.label`)}</p>
              </div>
            ))}
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

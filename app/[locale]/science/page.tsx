import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Science({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const studies = [
    { key: 'cornell', icon: '🎓' },
    { key: 'callaghan', icon: '🔬' },
    { key: 'neat', icon: '✅' },
    { key: 'mayo', icon: '🔥' },
    { key: 'memorial', icon: '❤️' },
    { key: 'cognitive', icon: '🧠' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('science.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t('science.subtitle')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lg text-gray-700">{t('science.intro')}</p>
        </div>
      </section>

      {/* Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {studies.map((study, index) => (
              <div
                key={study.key}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/3">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 rounded-2xl flex items-center justify-center">
                    <span className="text-7xl">{study.icon}</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {t(`science.studies.${study.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`science.studies.${study.key}.desc`)}
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
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-400 mb-2">14°</p>
              <p className="text-gray-400">Range of Motion</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-400 mb-2">20%</p>
              <p className="text-gray-400">More Calorie Burn</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-purple-400 mb-2">8</p>
              <p className="text-gray-400">Year Warranty</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-yellow-400 mb-2">2008</p>
              <p className="text-gray-400">Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 CoreChair. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

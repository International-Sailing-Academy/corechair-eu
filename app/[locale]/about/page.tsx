import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function About({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const ambassadors = [
    { key: 'lisa', icon: '👩‍⚕️' },
    { key: 'malaena', icon: '👨‍⚕️' },
    { key: 'caleb', icon: '👨‍🔬' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{t('about.title')}</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">{t('about.story.title')}</h2>
          <p className="text-lg text-gray-700 mb-12">{t('about.story.p1')}</p>
          
          <div className="bg-blue-50 p-8 rounded-2xl mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              {t('about.story.vision.label')}
            </p>
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 italic">
              "{t('about.story.vision.quote')}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">{t('about.journey.title')}</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>{t('about.journey.p1')}</p>
            <p>{t('about.journey.p2')}</p>
            <p>{t('about.journey.p3')}</p>
          </div>
        </div>
      </section>

      {/* Pelvic Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('about.pelvicSupport.title')}</h2>
              <p className="text-lg text-gray-700">{t('about.pelvicSupport.desc')}</p>
            </div>
            <div className="bg-blue-100 h-80 rounded-2xl flex items-center justify-center">
              <span className="text-9xl">🪑</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassadors */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-200 text-center mb-4">
            {t('about.ambassadors.title')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {t('about.ambassadors.subtitle')}
          </h2>
          <p className="text-center text-purple-100 max-w-2xl mx-auto mb-16">
            {t('about.ambassadors.desc')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {ambassadors.map((person) => (
              <div key={person.key} className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">{person.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t(`about.ambassadors.people.${person.key}.name`)}
                </h3>
                <p className="text-purple-200">
                  {t(`about.ambassadors.people.${person.key}.title`)}
                </p>
              </div>
            ))}
          </div>
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

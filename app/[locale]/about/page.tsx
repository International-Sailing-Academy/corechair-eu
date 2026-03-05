import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function About({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('about.hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('about.story.founded')}</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">{t('about.story.title')}</h2>
                <div className="space-y-4 text-gray-600">
                  <p>{t('about.story.p1')}</p>
                  <p>{t('about.story.p2')}</p>
                </div>
                <blockquote className="mt-8 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
                  <p className="text-xl italic text-gray-800">"{t('about.story.vision')}"</p>
                </blockquote>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-9xl">🏢</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-12">
                  <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-6xl">
                    👤
                  </div>
                </div>
                <div className="md:col-span-2 p-12">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('about.founder.title')}</span>
                  <h3 className="text-3xl font-bold text-gray-900 mt-2">{t('about.founder.name')}</h3>
                  <p className="text-lg text-blue-600 mb-4">{t('about.founder.role')}</p>
                  <p className="text-gray-600">{t('about.founder.bio')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassadors */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.ambassadors.title')}</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">{t('about.ambassadors.desc')}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['0', '1', '2'].map((key) => (
              <div key={key} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mx-auto mb-4 flex items-center justify-center text-3xl">
                  👨‍⚕️
                </div>
                <h3 className="text-xl font-bold text-gray-900">Ambassador {parseInt(key) + 1}</h3>
                <p className="text-blue-600">Healthcare Professional</p>
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

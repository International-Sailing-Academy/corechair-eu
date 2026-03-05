import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Reviews({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const testimonials = ['0', '1', '2', '3'];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('reviews.hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('reviews.hero.subtitle')}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="text-center">
              <p className="text-5xl font-bold gradient-text">{t('reviews.stats.average')}</p>
              <p className="text-gray-500 mt-2">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold gradient-text">{t('reviews.stats.total')}</p>
              <p className="text-gray-500 mt-2">Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold gradient-text">{t('reviews.stats.recommend')}</p>
              <p className="text-gray-500 mt-2">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((key) => (
              <div key={key} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{t(`reviews.testimonials.${key}.content`)}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {t(`reviews.testimonials.${key}.name`).charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t(`reviews.testimonials.${key}.name`)}</p>
                    <p className="text-sm text-gray-500">{t(`reviews.testimonials.${key}.role`)}</p>
                  </div>
                  <span className="ml-auto text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">{t('reviews.cta.title')}</h2>
          <Link
            href={`/${locale}/shop/`}
            className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105"
          >
            {t('reviews.cta.button')}
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

import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Shop({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const products = [
    { key: 'coreperch', gradient: 'from-orange-400 to-red-500' },
    { key: 'tango', gradient: 'from-blue-400 to-cyan-500' },
    { key: 'classic', gradient: 'from-purple-500 to-pink-500', popular: true },
    { key: 'sport', gradient: 'from-green-400 to-emerald-500' },
    { key: 'elite', gradient: 'from-violet-500 to-purple-600', isNew: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('shop.hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('shop.hero.subtitle')}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.key}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Image Area */}
                <div className={`relative h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                  {product.isNew && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white text-purple-600 text-sm font-bold rounded-full">
                      NEW
                    </span>
                  )}
                  {product.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold rounded-full">
                      POPULAR
                    </span>
                  )}
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-300">🪑</span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">{t(`shop.products.${product.key}.tagline`)}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium">{t(`shop.products.${product.key}.rating`)}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(`shop.products.${product.key}.name`)}</h3>
                  <p className="text-gray-600 mb-4">{t(`shop.products.${product.key}.description`)}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['0', '1', '2'].map((i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {t(`shop.products.${product.key}.features.${i}`)}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-3xl font-bold text-gray-900">{t(`shop.products.${product.key}.price`)}</p>
                    </div>
                    <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                      {t(`shop.products.${product.key}.bestFor`)}
                    </span>
                  </div>

                  <button className="w-full mt-6 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('shop.cta.title')}</h2>
          <p className="text-gray-600 mb-8">{t('shop.cta.desc')}</p>
          <Link
            href={`/${locale}/contact/`}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105"
          >
            {t('shop.cta.button')}
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

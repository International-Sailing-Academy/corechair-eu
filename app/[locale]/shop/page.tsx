import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Navigation from '../../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Shop({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const products = [
    {
      key: 'coreperch',
      image: '🪑',
      warranty: 'short',
      featured: false,
    },
    {
      key: 'tango',
      image: '💺',
      warranty: 'short',
      featured: false,
    },
    {
      key: 'classic',
      image: '✨',
      warranty: 'full',
      neat: true,
      featured: true,
    },
    {
      key: 'sport',
      image: '🏃',
      warranty: 'full',
      neat: true,
      featured: false,
    },
    {
      key: 'elite',
      image: '👑',
      warranty: 'full',
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('shop.title')}</h1>
          <p className="text-xl text-blue-100">{t('shop.subtitle')}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 mb-8 text-center">{t('shop.sort')}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.key}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 ${
                  product.featured ? 'border-blue-500' : 'border-gray-100'
                }`}
              >
                {product.featured && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-bold">
                    ★ {product.key === 'elite' ? 'NEW' : 'POPULAR'}
                  </div>
                )}
                
                <div className={`h-56 flex items-center justify-center ${
                  product.featured ? 'bg-blue-50' : 'bg-gray-50'
                }`}>
                  <span className="text-8xl">{product.image}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t(`shop.products.${product.key}.name`)}
                    </h3>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">
                        {t(`shop.products.${product.key}.rating`)}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {t(`shop.products.${product.key}.shortDesc`)}
                  </p>
                  
                  <p className="text-3xl font-bold text-blue-600 mb-4">
                    {t(`shop.products.${product.key}.price`)}
                  </p>

                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{t(`shop.products.${product.key}.features.${i}`)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      product.warranty === 'full'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {product.warranty === 'full' ? t('shop.warranty') : t('shop.warrantyShort')}
                    </span>
                    {product.neat && (
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        {t('shop.neatCertified')}
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {t('shop.addToCart')}
                  </button>
                </div>
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

import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Navigation from '../components/Navigation';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const products = [
    {
      key: 'coreperch',
      price: '$395',
      warranty: 'warranty3',
      emoji: '🪑',
      featured: false,
    },
    {
      key: 'tango',
      price: '$595',
      warranty: 'warranty3',
      emoji: '💺',
      featured: false,
    },
    {
      key: 'classic',
      price: '$995',
      warranty: 'warranty8',
      emoji: '✨',
      featured: true,
    },
    {
      key: 'sport',
      price: '$1,195',
      warranty: 'warranty8',
      emoji: '🏃',
      featured: false,
    },
    {
      key: 'elite',
      price: '$1,195',
      warranty: 'warranty8',
      emoji: '👑',
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-100">
            {t('hero.subtitle')}
          </p>
          <a
            href="#products"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            {t('hero.cta')}
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.ergonomic')}</h3>
              <p className="text-gray-600">{t('features.ergonomicDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.active')}</h3>
              <p className="text-gray-600">{t('features.activeDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('features.comfort')}</h3>
              <p className="text-gray-600">{t('features.comfortDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            {t('products.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.key}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 ${
                  product.featured ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                {product.featured && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    ★ Popular
                  </div>
                )}
                <div className={`h-48 flex items-center justify-center ${
                  product.featured ? 'bg-blue-50' : 'bg-gray-100'
                }`}>
                  <span className="text-7xl">{product.emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {t(`products.${product.key}`)}
                  </h3>
                  <p className="text-gray-600 mb-4">{t(`products.${product.key}Desc`)}</p>
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      product.warranty === 'warranty8'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {t(`products.${product.warranty}`)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t('about.title')}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about.story')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.mission')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            {t('contact.title')}
          </h2>
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              <p className="flex items-center justify-center gap-3 text-gray-700">
                <span className="text-2xl">📧</span>
                <span><strong>{t('contact.email')}:</strong> info@corechair.eu</span>
              </p>
              <p className="flex items-center justify-center gap-3 text-gray-700">
                <span className="text-2xl">📞</span>
                <span><strong>{t('contact.phone')}:</strong> +31 20 123 4567</span>
              </p>
            </div>
          </div>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

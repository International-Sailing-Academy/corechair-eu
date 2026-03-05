import {useTranslations} from 'next-intl'
import Link from 'next/link'
 
export default function Home() {
  const t = useTranslations()
 
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">CoreChair</div>
          <div className="flex gap-6 items-center">
            <Link href="#products" className="hover:text-gray-300">{t('nav.products')}</Link>
            <Link href="#about" className="hover:text-gray-300">{t('nav.about')}</Link>
            <Link href="#contact" className="hover:text-gray-300">{t('nav.contact')}</Link>
            <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">{t('nav.buy')}</button>
          </div>
        </div>
      </nav>
 
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">{t('hero.cta')}</button>
        </div>
      </section>
 
      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🪑</div>
              <h3 className="text-xl font-semibold mb-2">{t('features.ergonomic')}</h3>
              <p className="text-gray-600">{t('features.ergonomicDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">{t('features.active')}</h3>
              <p className="text-gray-600">{t('features.activeDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">{t('features.comfort')}</h3>
              <p className="text-gray-600">{t('features.comfortDesc')}</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Products */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('products.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* CorePerch */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="bg-gray-100 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">🪑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{t('products.coreperch')}</h3>
              <p className="text-gray-600 mb-4">{t('products.coreperchDesc')}</p>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded text-sm">{t('products.warranty3')}</span>
            </div>

            {/* Tango */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="bg-gray-100 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">💺</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{t('products.tango')}</h3>
              <p className="text-gray-600 mb-4">{t('products.tangoDesc')}</p>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded text-sm">{t('products.warranty3')}</span>
            </div>

            {/* Classic */}
            <div className="bg-white p-6 rounded-lg shadow border border-blue-500">
              <div className="bg-blue-50 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">🪑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{t('products.classic')}</h3>
              <p className="text-gray-600 mb-4">{t('products.classicDesc')}</p>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">{t('products.warranty8')}</span>
            </div>

            {/* Sport */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <div className="bg-gray-100 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">🪑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{t('products.sport')}</h3>
              <p className="text-gray-600 mb-4">{t('products.sportDesc')}</p>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">{t('products.warranty8')}</span>
            </div>

            {/* ELITE */}
            <div className="bg-white p-6 rounded-lg shadow border border-purple-500">
              <div className="bg-purple-50 h-48 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl">👑</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{t('products.elite')}</h3>
              <p className="text-gray-600 mb-4">{t('products.eliteDesc')}</p>
              <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm">{t('products.warranty8')}</span>
            </div>

          </div>
        </div>
      </section>
 
      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">{t('about.title')}</h2>
          <p className="text-lg text-gray-700 mb-6">{t('about.story')}</p>
          <p className="text-lg text-gray-700">{t('about.mission')}</p>
        </div>
      </section>
 
      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
          <div className="max-w-md mx-auto">
            <p className="mb-2"><strong>{t('contact.email')}:</strong> info@corechair.eu</p>
            <p className="mb-2"><strong>{t('contact.phone')}:</strong> +1 (800) 555-0123</p>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 CoreChair. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  )
}

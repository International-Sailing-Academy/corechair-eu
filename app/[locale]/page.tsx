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

  const benefits = [
    { key: '0', icon: '🎯' },
    { key: '1', icon: '🧠' },
    { key: '2', icon: '💪' },
    { key: '3', icon: '🔥' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/80">NEAT Certified by Mayo Clinic</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up stagger-1">
              {t('home.hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-2">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
              <Link
                href={`/${locale}/shop/`}
                className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-2xl"
              >
                {t('home.hero.ctaPrimary')}
              </Link>
              <Link
                href={`/${locale}/benefits/`}
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105"
              >
                {t('home.hero.ctaSecondary')}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in-up stagger-4">
              <p className="text-sm text-white/50 mb-6">{t('home.trust.title')}</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{t('home.trust.stats.years')}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{t('home.trust.stats.satisfaction')}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{t('home.trust.stats.warranty')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('home.intro.label')}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">{t('home.intro.title')}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-gray-600">
                <p>{t('home.intro.p1')}</p>
                <p>{t('home.intro.p2')}</p>
                <p>{t('home.intro.p3')}</p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-9xl">🪑</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
                  <p className="text-3xl font-bold text-blue-600">14°</p>
                  <p className="text-sm text-gray-500">Range of Motion</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-3xl font-bold gradient-text mt-16">{t('home.intro.tagline')}</p>
          </div>
        </div>
      </section>

      {/* ELITE Banner */}
      <section className="py-24 bg-gradient-to-r from-violet-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-medium mb-6">{t('home.elite.label')}</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.elite.title')}</h2>
              <p className="text-xl text-purple-100 mb-8">{t('home.elite.description')}</p>
              <ul className="space-y-3 mb-8">
                {['0', '1', '2', '3'].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-green-900 text-sm">✓</span>
                    <span>{t(`home.elite.features.${i}`)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/shop/`}
                className="inline-block px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-50 transition-all hover:scale-105"
              >
                {t('home.elite.cta')}
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <span className="text-[12rem]">👑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('home.benefits.label')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">{t('home.benefits.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.key} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`home.benefits.items.${benefit.key}.title`)}</h3>
                <p className="text-gray-600">{t(`home.benefits.items.${benefit.key}.desc`)}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/benefits/`}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
            >
              Explore All Benefits →
            </Link>
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{t('home.research.label')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">{t('home.research.title')}</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-blue-50 rounded-2xl p-8">
                <p className="text-lg text-gray-700">{t('home.research.p1')}</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-8">
                <p className="text-lg text-gray-700">{t('home.research.p2')}</p>
              </div>
            </div>
            <Link
              href={`/${locale}/science/`}
              className="inline-block mt-10 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105"
            >
              {t('home.research.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Trial CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.trial.title')}</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">{t('home.trial.desc')}</p>
          <Link
            href={`/${locale}/shop/`}
            className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-2xl"
          >
            {t('home.trial.cta')}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">CoreChair</h3>
              <p className="text-gray-400">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href={`/${locale}/shop/`} className="hover:text-white transition-colors">{t('footer.links.shop')}</Link></li>
                <li><Link href={`/${locale}/benefits/`} className="hover:text-white transition-colors">{t('footer.links.benefits')}</Link></li>
                <li><Link href={`/${locale}/design/`} className="hover:text-white transition-colors">{t('footer.links.design')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href={`/${locale}/about/`} className="hover:text-white transition-colors">{t('footer.links.about')}</Link></li>
                <li><Link href={`/${locale}/science/`} className="hover:text-white transition-colors">{t('footer.links.science')}</Link></li>
                <li><Link href={`/${locale}/contact/`} className="hover:text-white transition-colors">{t('footer.links.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href={`/${locale}/faq/`} className="hover:text-white transition-colors">{t('footer.links.faq')}</Link></li>
                <li><Link href={`/${locale}/reviews/`} className="hover:text-white transition-colors">{t('footer.links.reviews')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 CoreChair. {t('footer.rights')}</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">{t('footer.legal.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.legal.terms')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.legal.shipping')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

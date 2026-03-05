/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  i18n: {
    locales: ['en', 'fr', 'de', 'nl'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig

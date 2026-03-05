const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for dev
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = withNextIntl(nextConfig);

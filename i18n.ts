import { getRequestConfig } from 'next-intl/server';

export const routing = {
  locales: ['en', 'de', 'fr', 'nl'],
  defaultLocale: 'en'
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});

import createMiddleware from 'next-intl/middleware';

export const routing = {
  locales: ['en', 'de', 'fr', 'nl'],
  defaultLocale: 'en'
};
 
export default createMiddleware(routing);
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

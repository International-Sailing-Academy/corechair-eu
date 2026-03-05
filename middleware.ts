import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'de', 'fr', 'nl'],
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

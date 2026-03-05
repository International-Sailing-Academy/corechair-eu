import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'fr' }, { locale: 'nl' }];
}
 
export const metadata = {
  title: 'CoreChair EU - Active Sitting Chairs',
  description: 'The world\'s healthiest ergonomic office chair. NEAT Certified by Mayo Clinic.',
};
 
export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

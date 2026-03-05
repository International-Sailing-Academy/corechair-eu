import './globals.css'
import {Inter} from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'
 
const inter = Inter({subsets: ['latin']})
 
export const metadata = {
  title: 'CoreChair EU - Active Sitting Chairs',
  description: 'The world\'s most comfortable active sitting chair. Revolutionary ergonomic design.',
}
 
export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode
  params: {locale: string}
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

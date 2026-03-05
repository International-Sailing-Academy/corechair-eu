import './globals.css'
 
export const metadata = {
  title: 'CoreChair EU - Active Sitting Chairs',
  description: 'The world\'s healthiest ergonomic office chair. NEAT Certified by Mayo Clinic.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

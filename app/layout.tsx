import { Fredoka, Quicksand } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-fredoka',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Daydreamers Dog Training',
  description: 'Professional dog training in NYC & Brooklyn with proven results',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${quicksand.variable} h-full overflow-x-hidden`}>
      <body className="font-quicksand h-full overflow-x-hidden">{children}</body>
    </html>
  )
}

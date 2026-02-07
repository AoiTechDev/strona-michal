import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-jakarta' })

const SITE_URL = 'https://www.paczkowarkadowody.pl'
const SITE_NAME = 'Paczkowarka do wody'
const SITE_DESCRIPTION =
  'Profesjonalne paczkowarki do wody pitnej – automatyczne i ręczne. Realizujemy program ochrony ludności i obrony cywilnej. Rozwiązania na sytuacje kryzysowe, bioasekurację i ciągłość produkcji. Atesty PZH, wsparcie techniczne, dostawa w całej Polsce.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Paczkowarki do wody pitnej – automatyczne i ręczne | Paczkowarka do wody',
    template: '%s | Paczkowarka do wody',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'paczkowarki do wody',
    'paczkowarka do wody pitnej',
    'pakowanie wody pitnej',
    'automatyczna paczkowarka',
    'ręczna paczkowarka',
    'ręczna paczkowarka do wody w worki',
    'woda pitna sytuacje kryzysowe',
    'bioasekuracja woda',
    'saszetki z wodą',
    'pakowanie wody w worki',
    'atest PZH woda',
    'paczkowarka do wody',
    'ochrona ludności',
    'obrona cywilna',
    'program ochrony ludności i obrony cywilnej',
    'zaopatrzenie w wodę obrona cywilna',
    'woda pitna ochrona ludności',
    'program obrony cywilnej woda',
    'zabezpieczenie wody pitnej',
    'zarządzanie kryzysowe woda',
  ],
  authors: [{ name: 'Paczkowarka do wody', url: SITE_URL }],
  creator: 'Paczkowarka do wody',
  publisher: 'Paczkowarka do wody',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Paczkowarki do wody pitnej – automatyczne i ręczne | Paczkowarka do wody',
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paczkowarki do wody pitnej – automatyczne i ręczne | Paczkowarka do wody',
    description: SITE_DESCRIPTION,
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a73e8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nodeway.com.br'),
  title: 'Nodeway Agency - Soluções Digitais Sob Medida',
  description: 'Criamos sistemas, plataformas e experiências digitais personalizadas para empresas que buscam escala e performance. Especialistas em Next.js, automação de processos e BI.',
  keywords: ['agência de desenvolvimento web', 'sistemas sob medida', 'automação de processos', 'landing pages de alta conversão', 'Nodeway Agency', 'desenvolvimento next.js', 'inteligência de dados'],
  authors: [{ name: 'Nodeway Agency' }],
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
    canonical: 'https://nodeway.com.br', // Ajuste para o domínio final quando disponível
  },
  manifest: '/manifest.json',
  themeColor: '#0A1628',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Nodeway Agency - Soluções Digitais Sob Medida',
    description: 'Criamos sistemas, plataformas e experiências digitais personalizadas para empresas que buscam escala e performance.',
    url: 'https://nodeway.com.br',
    siteName: 'Nodeway Agency',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/Nodeway_white.png',
        width: 1200,
        height: 630,
        alt: 'Nodeway Agency - Soluções Digitais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nodeway Agency - Soluções Digitais Sob Medida',
    description: 'Criamos sistemas, plataformas e experiências digitais personalizadas para empresas que buscam escala e performance.',
    images: ['/Nodeway_white.png'],
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nodeway Agency",
  "image": "https://nodeway.com.br/icon.png",
  "@id": "https://nodeway.com.br",
  "url": "https://nodeway.com.br",
  "telephone": "+5545999403598",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cascavel",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -24.955,
    "longitude": -53.455
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://wa.me/5545999403598"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Nodeway Agency",
    "url": "https://nodeway.com.br",
    "logo": "https://nodeway.com.br/icon.png"
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import React from "react"
import type { Metadata, Viewport } from 'next'
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

export const viewport: Viewport = {
  themeColor: '#0A1628',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nodewayagency.com.br'),
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
    canonical: 'https://nodewayagency.com.br',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Nodeway Agency - Soluções Digitais Sob Medida',
    description: 'Criamos sistemas, plataformas e experiências digitais personalizadas para empresas que buscam escala e performance.',
    url: 'https://nodewayagency.com.br',
    siteName: 'Nodeway Agency',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Nodeway Agency - Soluções Digitais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nodeway Agency - Soluções Digitais Sob Medida',
    description: 'Criamos sistemas, plataformas e experiências digitais personalizadas para empresas que buscam escala e performance.',
    images: ['/icon.png'],
  },
  creator: 'Nodeway Agency',
  publisher: 'Nodeway Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'technology',
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://nodewayagency.com.br/#website",
      "url": "https://nodewayagency.com.br/",
      "name": "Nodeway Agency",
      "description": "Criamos sistemas, plataformas e experiências digitais personalizadas para empresas que buscam escala e performance.",
      "publisher": {
        "@id": "https://nodewayagency.com.br/#organization"
      },
      "inLanguage": "pt-BR"
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://nodewayagency.com.br/#organization",
      "name": "Nodeway Agency",
      "url": "https://nodewayagency.com.br/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nodewayagency.com.br/icon.png",
        "width": 512,
        "height": 512
      },
      "image": "https://nodewayagency.com.br/icon.png",
      "email": "nodewayagency@gmail.com",
      "telephone": "+5545999403598",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-45-99940-3598",
        "contactType": "customer service",
        "email": "nodewayagency@gmail.com",
        "areaServed": "BR",
        "availableLanguage": "Portuguese"
      },
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://wa.me/5545999403598",
        "https://instagram.com/nodewayagency",
        "https://linkedin.com/company/nodewayagency"
      ]
    }
  ]
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

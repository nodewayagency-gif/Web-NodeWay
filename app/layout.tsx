import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig, absoluteUrl, socialProfiles, WHATSAPP_URL_SHORT } from '@/lib/site-config'
import { fontVariables } from '@/lib/fonts'
import './globals.css'

export const viewport: Viewport = {
  themeColor: siteConfig.brand.colors.background,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
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
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.ogDescription,
  },
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: siteConfig.category,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      description: siteConfig.ogDescription,
      publisher: { '@id': `${siteConfig.url}/#organization` },
      inLanguage: siteConfig.lang,
    },
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icon.png'),
        width: 512,
        height: 512,
      },
      image: absoluteUrl('/icon.png'),
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'customer service',
        email: siteConfig.contact.email,
        areaServed: siteConfig.business.address.country,
        availableLanguage: 'Portuguese',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.business.address.locality,
        addressRegion: siteConfig.business.address.region,
        addressCountry: siteConfig.business.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.business.geo.latitude,
        longitude: siteConfig.business.geo.longitude,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: siteConfig.business.openingHours.days,
        opens: siteConfig.business.openingHours.opens,
        closes: siteConfig.business.openingHours.closes,
      },
      priceRange: siteConfig.business.priceRange,
      sameAs: [WHATSAPP_URL_SHORT, ...socialProfiles.map((p) => p.url)],
    },
  ],
}

/**
 * Cores da marca injetadas como variáveis CSS na tag <html>, para que os
 * gradientes (.brand-gradient etc.) sigam siteConfig.brand.colors.
 */
const brandVars: Record<string, string> = {
  '--brand-green': siteConfig.brand.colors.green,
  '--brand-cyan': siteConfig.brand.colors.cyan,
  '--brand-blue': siteConfig.brand.colors.blue,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={siteConfig.lang} className="bg-background" style={brandVars as unknown as React.CSSProperties}>
      <body className={`${fontVariables} font-sans antialiased`}>
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

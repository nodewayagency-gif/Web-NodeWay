import React from 'react'
import { WhatsAppClickTracker } from '@/components/whatsapp-click-tracker'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig, absoluteUrl, socialProfiles, WHATSAPP_URL_SHORT } from '@/lib/site-config'
import { fontVariables } from '@/lib/fonts'
import './globals.css'

export const viewport: Viewport = {
  themeColor: siteConfig.brand.colors.background,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
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
  // Defina GOOGLE_SITE_VERIFICATION no ambiente (ex.: Vercel) para ativar.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
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
  // title/description omitidos de propósito: o Next deriva por página (do title
  // e description de cada rota), evitando cards do X genéricos nas páginas internas.
  twitter: {
    card: 'summary_large_image',
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
      ...(siteConfig.business.legalName ? { legalName: siteConfig.business.legalName } : {}),
      ...(siteConfig.business.cnpj ? { taxID: siteConfig.business.cnpj } : {}),
      foundingDate: siteConfig.business.incorporationDate,
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

// ID do Google Tag Manager. Configurável por env var (NEXT_PUBLIC_GTM_ID),
// com fallback para o container atual.
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PBLQNPTR'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={siteConfig.lang} className="bg-background" style={brandVars as unknown as React.CSSProperties}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
        {/* End Google Tag Manager */}
        {siteConfig.googleAdsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAdsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${siteConfig.googleAdsId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${fontVariables} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppClickTracker />
        <Analytics />
      </body>
    </html>
  )
}

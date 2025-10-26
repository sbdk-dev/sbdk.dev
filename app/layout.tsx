import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    default: 'SBDK.dev - Enterprise Data Pipelines in 30 Seconds',
    template: '%s | SBDK.dev'
  },
  description: 'Local-first data pipeline toolkit with DLT, dbt, and DuckDB. 480x faster setup, zero cloud dependencies, enterprise-grade processing in under 500MB.',
  keywords: [
    'data pipeline',
    'dlt',
    'dbt',
    'duckdb',
    'local-first',
    'data engineering',
    'analytics',
    'ETL',
    'open source',
    'developer tools'
  ],
  authors: [{ name: 'SBDK' }],
  creator: 'SBDK',
  publisher: 'SBDK',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sbdk.dev',
    siteName: 'SBDK.dev',
    title: 'SBDK.dev - Enterprise Data Pipelines in 30 Seconds',
    description: 'Local-first data pipeline toolkit. 480x faster than traditional stacks, zero cloud dependencies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SBDK.dev - Local-first Data Pipeline Toolkit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SBDK.dev - Enterprise Data Pipelines in 30 Seconds',
    description: '480x faster setup, zero cloud dependencies. DLT + dbt + DuckDB in one toolkit.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://sbdk.dev',
  },
  metadataBase: new URL('https://sbdk.dev'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SBDK.dev',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Linux, macOS, Windows',
              description: 'Local-first data pipeline toolkit integrating DLT, dbt, and DuckDB for enterprise-grade data processing',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                ratingCount: '100',
              },
              author: {
                '@type': 'Organization',
                name: 'SBDK',
              },
              downloadUrl: 'https://github.com/sbdk-dev/sbdk-dev',
              softwareVersion: '1.1.0',
              releaseNotes: 'Professional CLI design with enhanced developer experience',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

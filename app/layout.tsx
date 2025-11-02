import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { PosthogProvider } from '@/components/PosthogProvider'

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
        url: '/og-image.svg',
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
    images: ['/og-image.svg'],
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
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="8azO2hbWGHs9O-ky3w3k_L-9my11TwpUIF8rTJKJyHM" />

        {/* SoftwareApplication Schema */}
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

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SBDK',
              url: 'https://sbdk.dev',
              logo: 'https://sbdk.dev/og-image.png',
              sameAs: [
                'https://github.com/sbdk-dev/sbdk-dev',
              ],
              description: 'Local-first data pipeline toolkit for enterprise-grade data processing',
            }),
          }}
        />

        {/* FAQ Schema for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Is SBDK production-ready?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! SBDK uses battle-tested tools (DLT, dbt, DuckDB) that power production data pipelines at thousands of companies. The CLI provides professional error handling, validation, and clear error messages.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I use SBDK with cloud data sources?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. SBDK supports all DLT sources (APIs, databases, SaaS apps). You ingest from cloud sources but process and analyze locally, avoiding data egress costs.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does local processing scale?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'DuckDB can process millions of rows in seconds on a laptop. For truly massive datasets (100GB+), you can still use SBDK for development and deploy to a larger local or on-prem machine.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Will you always offer a free tier?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. SBDK core is MIT licensed and will always be free and open source. Future Team and Enterprise tiers will add collaboration features, but the core toolkit remains free forever.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What if I need cloud deployment later?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your SBDK pipelines are just Python code using standard tools. You can deploy them anywhere: Docker containers, Kubernetes, cloud VMs, or serverless functions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How is this different from running dbt locally?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'SBDK gives you the complete stack (ingestion + transformation + analytics) with one command. No juggling multiple tools, configs, or databases. Everything works together out of the box.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <PosthogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </PosthogProvider>
      </body>
    </html>
  )
}

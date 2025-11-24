import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { PosthogProvider } from '@/components/PosthogProvider'

export const metadata: Metadata = {
  title: {
    default: 'SBDK.dev - Local-First Data & AI Reference Implementations',
    template: '%s | SBDK.dev'
  },
  description: 'A complete open-source ecosystem for building local-first data and AI tools. Five reference implementations showing how to build data pipelines, ML inference, semantic layers, and AI-powered analytics—all without cloud dependencies.',
  keywords: [
    'local-first',
    'data pipeline',
    'AI analytics',
    'reference implementation',
    'dlt',
    'dbt',
    'duckdb',
    'machine learning',
    'semantic layer',
    'data engineering',
    'open source',
    'developer tools',
    'MCP',
    'model context protocol'
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
    title: 'SBDK.dev - Local-First Data & AI Reference Implementations',
    description: 'Five open-source projects demonstrating how to build a complete local-first analytics stack—from data ingestion to AI-powered insights.',
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
    title: 'SBDK.dev - Local-First Data & AI Reference Implementations',
    description: 'Five open-source projects for building local-first analytics: data pipelines, ML inference, semantic layers, and AI-powered analytics.',
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
        {/* Google Search Console Verification - Add your own verification code */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}

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
              description: 'A complete ecosystem of open-source reference implementations for building local-first data and AI tools',
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
              description: 'Open-source ecosystem for building local-first data and AI tools',
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
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-center p-3 text-white">
              <strong>Open Source Reference Implementations:</strong> Complete, production-quality codebases demonstrating local-first data and AI patterns. MIT Licensed • Fork & Build Your Own
            </div>
            {children}
          </ThemeProvider>
        </PosthogProvider>
      </body>
    </html>
  )
}

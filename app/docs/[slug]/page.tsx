import { Github } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import DocsViewer from '@/components/DocsViewer'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

// Valid documentation slugs
const VALID_SLUGS = [
  'home',
  'getting-started',
  'user-guide',
  'faq',
  'architecture',
  'dlt-pipeline-architecture',
  'dbt-models',
  'configuration',
  'configuration-schema',
  'api-reference',
  'server-cli-guide',
  'build-binary',
  'ci-cd-guide',
  'github-release-workflow',
]

// Map URL slugs to display titles and wiki slugs
const SLUG_MAP: Record<string, { title: string; wikiSlug: string }> = {
  'home': { title: 'Home', wikiSlug: 'Home' },
  'getting-started': { title: 'Getting Started', wikiSlug: 'Getting-Started' },
  'user-guide': { title: 'User Guide', wikiSlug: 'User-Guide' },
  'faq': { title: 'FAQ', wikiSlug: 'FAQ' },
  'architecture': { title: 'Architecture', wikiSlug: 'Architecture' },
  'dlt-pipeline-architecture': { title: 'DLT Pipeline Architecture', wikiSlug: 'DLT-Pipeline-Architecture' },
  'dbt-models': { title: 'DBT Models', wikiSlug: 'DBT-Models' },
  'configuration': { title: 'Configuration', wikiSlug: 'Configuration' },
  'configuration-schema': { title: 'Configuration Schema', wikiSlug: 'Configuration-Schema' },
  'api-reference': { title: 'API Reference', wikiSlug: 'API-Reference' },
  'server-cli-guide': { title: 'Server CLI Guide', wikiSlug: 'Server-CLI-Guide' },
  'build-binary': { title: 'Build Binary', wikiSlug: 'Build-Binary' },
  'ci-cd-guide': { title: 'CI/CD Guide', wikiSlug: 'CI-CD-Guide' },
  'github-release-workflow': { title: 'GitHub Release Workflow', wikiSlug: 'GitHub-Release-Workflow' },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slugInfo = SLUG_MAP[params.slug]

  if (!slugInfo) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${slugInfo.title} | SBDK.dev Documentation`,
    description: `${slugInfo.title} - Complete documentation for SBDK.dev, a local-first data pipeline toolkit combining DLT, dbt, and DuckDB.`,
    openGraph: {
      title: `${slugInfo.title} | SBDK.dev Documentation`,
      description: `${slugInfo.title} - Complete guides and API reference for building data pipelines`,
    }
  }
}

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({
    slug,
  }))
}

export default function DocPage({ params }: PageProps) {
  // Validate slug
  if (!VALID_SLUGS.includes(params.slug)) {
    notFound()
  }

  const slugInfo = SLUG_MAP[params.slug]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="text-2xl font-bold">SBDK.dev</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Features
              </Link>
              <Link href="/#demo" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Demo
              </Link>
              <Link href="/docs/home" className="text-primary-600 dark:text-primary-400 font-semibold transition-colors">
                Docs
              </Link>
              <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Pricing
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/sbdk-dev/sbdk-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">Star on GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <DocsViewer initialSlug={slugInfo.wikiSlug} />
      </div>
    </div>
  )
}

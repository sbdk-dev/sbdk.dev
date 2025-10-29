import { ArrowRight, Github, BookOpen, Code, Settings, Rocket, Box, FileText, ExternalLink, Terminal, Database, GitBranch, Server } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Complete documentation for SBDK.dev - guides, API reference, architecture, and advanced topics for building local-first data pipelines.',
  openGraph: {
    title: 'SBDK.dev Documentation',
    description: 'Complete guides and API reference for building data pipelines with DLT, dbt, and DuckDB',
  }
}

const docSections = [
  {
    title: 'Getting Started',
    description: 'Quick start guides and tutorials to get you up and running in minutes',
    icon: Rocket,
    gradient: 'from-primary-500 to-primary-700',
    links: [
      { title: 'Home', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki' },
      { title: 'Getting Started', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/Getting-Started' },
      { title: 'User Guide', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/User-Guide' },
      { title: 'FAQ', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/FAQ' },
    ]
  },
  {
    title: 'Architecture',
    description: 'Understand the technical design and architecture of SBDK.dev',
    icon: GitBranch,
    gradient: 'from-accent-500 to-accent-700',
    links: [
      { title: 'Architecture Overview', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/Architecture' },
      { title: 'DLT Pipeline Architecture', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/DLT-Pipeline-Architecture' },
      { title: 'DBT Models', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/DBT-Models' },
    ]
  },
  {
    title: 'Configuration',
    description: 'Configure and customize your data pipeline setup',
    icon: Settings,
    gradient: 'from-orange-500 to-orange-700',
    links: [
      { title: 'Configuration Guide', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/Configuration' },
      { title: 'Configuration Schema', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/Configuration-Schema' },
      { title: 'API Reference', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/API-Reference' },
    ]
  },
  {
    title: 'Advanced Topics',
    description: 'Deep dive into server CLI, builds, CI/CD, and production workflows',
    icon: Server,
    gradient: 'from-purple-500 to-purple-700',
    links: [
      { title: 'Server CLI Guide', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/Server-CLI-Guide' },
      { title: 'Build Binary', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/Build-Binary' },
      { title: 'CI/CD Guide', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/CI-CD-Guide' },
      { title: 'GitHub Release Workflow', href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/GitHub-Release-Workflow' },
    ]
  },
]

const quickActions = [
  {
    title: 'Quick Start',
    description: 'Install and run your first pipeline in 30 seconds',
    icon: Terminal,
    href: 'https://github.com/sbdk-dev/sbdk-dev/wiki/Getting-Started',
    code: 'uv pip install sbdk-dev && sbdk init'
  },
  {
    title: 'GitHub Repository',
    description: 'View source code, issues, and contribute',
    icon: Github,
    href: 'https://github.com/sbdk-dev/sbdk-dev',
  },
  {
    title: 'PyPI Package',
    description: 'View package details and release history',
    icon: Box,
    href: 'https://pypi.org/project/sbdk-dev/',
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen">
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
              <Link href="/docs" className="text-primary-600 dark:text-primary-400 font-semibold transition-colors">
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

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-950 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Complete Documentation
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Documentation
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Everything you need to build local-first data pipelines with{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">DLT</span>,{' '}
            <span className="font-semibold text-orange-600 dark:text-orange-400">dbt</span>, and{' '}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">DuckDB</span>
          </p>

          <Link
            href="https://github.com/sbdk-dev/sbdk-dev/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            View Full Documentation
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section) => {
              const Icon = section.icon
              return (
                <div
                  key={section.title}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-xl"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${section.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{section.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium">
                          {link.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Link
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-xl"
                >
                  <Icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {action.description}
                  </p>
                  {action.code && (
                    <div className="bg-gray-900 dark:bg-black/60 rounded-lg px-4 py-3 border border-gray-700">
                      <code className="text-green-400 text-sm font-mono break-all">
                        {action.code}
                      </code>
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">11x</div>
              <div className="text-gray-600 dark:text-gray-400">Faster installation with uv</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Local - no cloud dependencies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">30s</div>
              <div className="text-gray-600 dark:text-gray-400">Complete pipeline setup</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Install SBDK.dev and build your first pipeline in 30 seconds
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev/wiki/Getting-Started"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-lg transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4">Built for data engineers who value simplicity and speed</p>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://pypi.org/project/sbdk-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              PyPI
            </Link>
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev/wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

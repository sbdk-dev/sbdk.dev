import { ArrowRight, Github, Zap, Database, GitBranch, Shield, Gauge, Workflow } from 'lucide-react'
import Link from 'next/link'
import PipelineVisualizer from '@/components/PipelineVisualizer'
import DataTableViewer from '@/components/DataTableViewer'
import InteractiveTerminal from '@/components/InteractiveTerminal'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold">SBDK.dev</span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Features
              </Link>
              <Link href="#demo" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Demo
              </Link>
              <Link href="https://github.com/sbdk-dev/sbdk-dev" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-950 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            480x faster than traditional data stacks
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Enterprise Data Pipelines
            <br />
            <span className="gradient-text">in 30 Seconds</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Local-first data pipeline toolkit combining{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">DLT</span>,{' '}
            <span className="font-semibold text-orange-600 dark:text-orange-400">dbt</span>, and{' '}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">DuckDB</span>.
            Zero cloud dependencies, enterprise-grade processing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#demo"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 shadow-xl hover:shadow-2xl"
            >
              Try Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Setup Time', value: '30 seconds', icon: Zap },
              { label: 'Memory Usage', value: '<500MB', icon: Gauge },
              { label: 'Operations/sec', value: '396K+', icon: Workflow },
              { label: 'Cloud Required', value: 'Zero', icon: Shield },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3 mx-auto" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need, <span className="gradient-text">Nothing You Don&apos;t</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built for data engineers who want power without complexity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: '480x Faster Setup',
                description: '30 seconds from zero to running pipeline. Traditional stacks take 4+ hours.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Database,
                title: 'Local-First Architecture',
                description: 'No cloud configuration, no credentials, no complexity. Everything runs on your machine.',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: GitBranch,
                title: 'Complete ETL Stack',
                description: 'DLT for ingestion, dbt for transformation, DuckDB for analytics. All integrated.',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: Workflow,
                title: 'Real-Time Visualization',
                description: 'Watch your pipeline execute with interactive UI and hot-reload development mode.',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: Gauge,
                title: 'Sub-500MB Footprint',
                description: 'Enterprise-grade performance without enterprise-grade hardware requirements.',
                color: 'from-yellow-500 to-amber-500',
              },
              {
                icon: Shield,
                title: 'Production Ready',
                description: 'Professional CLI with error handling, validation, and actionable error messages.',
                color: 'from-indigo-500 to-violet-500',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 card-hover"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white inline-block mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="py-20">
        <PipelineVisualizer autoPlay={false} />
      </section>

      {/* Data Visualization */}
      <DataTableViewer />

      {/* Interactive Terminal */}
      <section id="demo" className="py-20">
        <InteractiveTerminal />
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data Engineers',
                description: 'Tired of cloud complexity and want to iterate faster on local development.',
                benefits: ['Instant feedback loops', 'No cloud costs during dev', 'Full control over data'],
              },
              {
                title: 'Analytics Teams',
                description: 'Need enterprise-grade analytics without enterprise infrastructure.',
                benefits: ['Sub-second query performance', 'Familiar SQL interface', 'Easy data modeling'],
              },
              {
                title: 'Startups',
                description: 'Want to avoid cloud vendor lock-in and keep infrastructure costs low.',
                benefits: ['Zero ongoing costs', 'No cloud dependencies', 'Deploy anywhere'],
              },
              {
                title: 'Enterprises',
                description: 'Require data sovereignty and local processing for compliance.',
                benefits: ['Data stays on-premise', 'Full audit trail', 'No data egress'],
              },
            ].map((useCase, idx) => (
              <div
                key={idx}
                className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build <span className="gradient-text">480x Faster?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join data engineers who&apos;ve ditched cloud complexity for local-first simplicity
          </p>

          <div className="bg-gray-900 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <code className="text-green-400 text-lg">
              pip install sbdk-dev
            </code>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-lg transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Database className="w-6 h-6 text-primary-600" />
              <span className="font-bold text-lg">SBDK.dev</span>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/sbdk-dev/sbdk-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Pricing
              </Link>
              <a
                href="https://github.com/sbdk-dev/sbdk-dev/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                MIT License
              </a>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 SBDK. Open Source.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

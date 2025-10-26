import { ArrowRight, Github, Zap, Database, GitBranch, Shield, Gauge, Workflow, Clock, Cloud, DollarSign, Code, Check, X, AlertCircle, Users, TrendingUp, Server, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
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
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="text-2xl font-bold">SBDK.dev</span>
            </Link>

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

      {/* Hero Section - Concise, Above the Fold */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-950 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            480x faster than traditional data stacks
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Enterprise Data Pipelines
            <br />
            <span className="gradient-text">in 30 Seconds</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Local-first data pipeline toolkit combining{' '}
            <span className="font-semibold text-primary-600 dark:text-primary-400">DLT</span>,{' '}
            <span className="font-semibold text-orange-600 dark:text-orange-400">dbt</span>, and{' '}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">DuckDB</span>.
            Zero cloud dependencies, enterprise-grade processing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#demo"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 shadow-xl hover:shadow-2xl"
            >
              Try Live Demo
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
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Setup Time', value: '30 sec', icon: Zap },
              { label: 'Memory', value: '<500MB', icon: Gauge },
              { label: 'Ops/sec', value: '396K+', icon: Workflow },
              { label: 'Cloud Cost', value: '$0', icon: DollarSign },
            ].map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Traditional Data Stacks Are <span className="text-red-600">Painfully Slow</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Setting up a modern data pipeline shouldn&apos;t take 4+ hours of wrestling with cloud configs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Hours of Setup Time',
                description: 'Configure AWS/GCP, manage credentials, deploy infrastructure, debug networking issues...',
              },
              {
                icon: Cloud,
                title: 'Cloud Lock-In',
                description: 'Forced to use specific vendors, pay egress fees, and deal with vendor-specific quirks',
              },
              {
                icon: DollarSign,
                title: 'Unpredictable Costs',
                description: 'Development environments rack up cloud bills. Data egress charges surprise you at month-end.',
              },
            ].map((problem, idx) => {
              const Icon = problem.icon
              return (
                <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-red-200 dark:border-red-900/30">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/20">
                      <Icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{problem.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solution / How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">3 Steps</span> to Production-Ready Pipelines
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              No cloud setup. No credentials. Just code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Install & Initialize',
                description: 'One command gets you a complete ETL sandbox with DLT, dbt, and DuckDB integrated.',
                code: 'uv pip install sbdk-dev\nsbdk init my-pipeline',
              },
              {
                step: '02',
                title: 'Run Your Pipeline',
                description: 'Execute the full pipeline locally. Watch data flow through ingestion, transformation, and analytics.',
                code: 'sbdk run',
              },
              {
                step: '03',
                title: 'Query & Analyze',
                description: 'Query your data with DuckDB. Sub-second performance on millions of rows, all running locally.',
                code: 'sbdk query "SELECT * FROM users"',
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-bold text-primary-100 dark:text-primary-950 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  {step.code.split('\n').map((line, lidx) => (
                    <div key={lidx}>
                      <span className="text-gray-500">$ </span>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What You Can <span className="gradient-text">Actually Do</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Capabilities that unlock new possibilities for data teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Go from idea to insights in 30 seconds',
                capability: 'Instant pipeline prototyping',
                description: 'No waiting for cloud resources. Test ideas immediately with hot-reload dev mode.',
              },
              {
                icon: Database,
                title: 'Process data without cloud dependencies',
                capability: 'True local-first architecture',
                description: 'Your data never leaves your machine. Perfect for compliance, sovereignty, or air-gapped environments.',
              },
              {
                icon: GitBranch,
                title: 'Build production pipelines with best practices',
                capability: 'Complete ETL stack',
                description: 'DLT for ingestion, dbt for modeling, DuckDB for analytics. Industry-standard tools, zero config.',
              },
              {
                icon: Code,
                title: 'Iterate 10x faster with visual feedback',
                capability: 'Real-time pipeline visualization',
                description: 'Watch data flow through your pipeline. Catch errors instantly. Debug with confidence.',
              },
              {
                icon: Gauge,
                title: 'Run enterprise queries on a laptop',
                capability: 'Sub-500MB memory footprint',
                description: '396K+ operations per second. Process millions of rows without cloud-scale hardware.',
              },
              {
                icon: Shield,
                title: 'Ship with confidence',
                capability: 'Production-grade error handling',
                description: 'Clear error messages. Validation at every step. Professional CLI experience.',
              },
            ].map((capability, idx) => {
              const Icon = capability.icon
              return (
                <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 card-hover">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                  <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
                    {capability.capability}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Demo Section - Original Components */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See It <span className="gradient-text">In Action</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Watch a complete pipeline run from ingestion to analytics
            </p>
          </div>

          {/* Pipeline Visualization */}
          <div className="mb-12">
            <PipelineVisualizer autoPlay={false} />
          </div>

          {/* Interactive Terminal */}
          <div className="mb-12">
            <InteractiveTerminal />
          </div>

          {/* Data Visualization */}
          <DataTableViewer />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Teams who value speed, simplicity, and sovereignty
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Data Engineers',
                description: 'Tired of cloud complexity and want to iterate faster on local development.',
                benefits: ['Instant feedback loops', 'No cloud costs during dev', 'Full control over data'],
                icon: Code,
              },
              {
                title: 'Analytics Teams',
                description: 'Need enterprise-grade analytics without enterprise infrastructure.',
                benefits: ['Sub-second query performance', 'Familiar SQL interface', 'Easy data modeling'],
                icon: TrendingUp,
              },
              {
                title: 'Startups',
                description: 'Want to avoid cloud vendor lock-in and keep infrastructure costs low.',
                benefits: ['Zero ongoing costs', 'No cloud dependencies', 'Deploy anywhere'],
                icon: Zap,
              },
              {
                title: 'Enterprises',
                description: 'Require data sovereignty and local processing for compliance.',
                benefits: ['Data stays on-premise', 'Full audit trail', 'No data egress'],
                icon: Shield,
              },
            ].map((useCase, idx) => {
              const Icon = useCase.icon
              return (
                <div
                  key={idx}
                  className="p-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Performance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real metrics from production usage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '480x', label: 'Faster Setup', sublabel: 'vs traditional stacks' },
              { metric: '30s', label: 'To First Pipeline', sublabel: 'From zero to running' },
              { metric: '396K+', label: 'Ops/Second', sublabel: 'DuckDB performance' },
              { metric: '<500MB', label: 'Memory Usage', sublabel: 'Full pipeline running' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              SBDK vs <span className="gradient-text">The Alternatives</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how SBDK compares to traditional approaches
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold bg-primary-50 dark:bg-primary-950">
                    <div className="flex items-center justify-center gap-2">
                      <Logo className="w-5 h-5" />
                      SBDK
                    </div>
                  </th>
                  <th className="text-center p-4 font-semibold">Cloud ETL</th>
                  <th className="text-center p-4 font-semibold">Custom Scripts</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Setup Time', sbdk: '30 seconds', cloud: '4+ hours', custom: '2-3 days' },
                  { feature: 'Cloud Required', sbdk: false, cloud: true, custom: false },
                  { feature: 'Monthly Cost', sbdk: '$0', cloud: '$500+', custom: '$0' },
                  { feature: 'Data Sovereignty', sbdk: true, cloud: false, custom: true },
                  { feature: 'Visual Pipeline UI', sbdk: true, cloud: true, custom: false },
                  { feature: 'Hot-Reload Dev', sbdk: true, cloud: false, custom: false },
                  { feature: 'Production Ready', sbdk: true, cloud: true, custom: false },
                  { feature: 'Learning Curve', sbdk: 'Low', cloud: 'High', custom: 'Medium' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-primary-50 dark:bg-primary-950">
                      {typeof row.sbdk === 'boolean' ? (
                        row.sbdk ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-600 mx-auto" />
                      ) : (
                        <span className="font-semibold text-primary-700 dark:text-primary-300">{row.sbdk}</span>
                      )}
                    </td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">
                      {typeof row.cloud === 'boolean' ? (
                        row.cloud ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-600 mx-auto" />
                      ) : (
                        row.cloud
                      )}
                    </td>
                    <td className="p-4 text-center text-gray-600 dark:text-gray-400">
                      {typeof row.custom === 'boolean' ? (
                        row.custom ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-600 mx-auto" />
                      ) : (
                        row.custom
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is SBDK production-ready?',
                a: 'Yes! SBDK uses battle-tested tools (DLT, dbt, DuckDB) that power production data pipelines at thousands of companies. The CLI provides professional error handling, validation, and clear error messages.',
              },
              {
                q: 'Can I use SBDK with cloud data sources?',
                a: 'Absolutely. SBDK supports all DLT sources (APIs, databases, SaaS apps). You ingest from cloud sources but process and analyze locally, avoiding data egress costs.',
              },
              {
                q: 'How does local processing scale?',
                a: 'DuckDB can process millions of rows in seconds on a laptop. For truly massive datasets (100GB+), you can still use SBDK for development and deploy to a larger local or on-prem machine.',
              },
              {
                q: 'Will you always offer a free tier?',
                a: 'Yes. SBDK core is MIT licensed and will always be free and open source. Future Team and Enterprise tiers will add collaboration features, but the core toolkit remains free forever.',
              },
              {
                q: 'What if I need cloud deployment later?',
                a: 'Your SBDK pipelines are just Python code using standard tools. You can deploy them anywhere: Docker containers, Kubernetes, cloud VMs, or serverless functions.',
              },
              {
                q: 'How is this different from running dbt locally?',
                a: 'SBDK gives you the complete stack (ingestion + transformation + analytics) with one command. No juggling multiple tools, configs, or databases. Everything works together out of the box.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-950 dark:to-accent-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Ready to Build <span className="gradient-text">480x Faster?</span>
          </h2>
          <p className="text-xl text-gray-900 dark:text-gray-100 mb-8">
            Join data engineers who&apos;ve ditched cloud complexity for local-first simplicity
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 shadow-xl"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/sbdk-dev/sbdk-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View Documentation
            </Link>
          </div>

          <div className="inline-block bg-gray-900 dark:bg-gray-800 rounded-lg px-6 py-4">
            <code className="text-green-400 text-lg font-mono">uv pip install sbdk-dev && sbdk init</code>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Logo className="w-6 h-6" />
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

'use client'

import { useState } from 'react'
import { ArrowRight, Github, Zap, Database, GitBranch, Shield, Gauge, Workflow, Play } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Simplified integrated demo component
function IntegratedDemo() {
  const [step, setStep] = useState<'idle' | 'pipeline' | 'terminal' | 'results'>('idle')
  const [pipelineProgress, setPipelineProgress] = useState(0)

  const runDemo = async () => {
    setStep('pipeline')
    setPipelineProgress(0)

    // Pipeline animation (3 stages)
    for (let i = 0; i <= 100; i += 33.33) {
      setPipelineProgress(i)
      await new Promise(r => setTimeout(r, 600))
    }

    await new Promise(r => setTimeout(r, 500))
    setStep('terminal')

    await new Promise(r => setTimeout(r, 2500))
    setStep('results')
  }

  const reset = () => {
    setStep('idle')
    setPipelineProgress(0)
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Control */}
      <div className="text-center mb-8">
        {step === 'idle' ? (
          <button
            onClick={runDemo}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 mx-auto shadow-xl"
          >
            <Play className="w-5 h-5" />
            Run Live Demo
          </button>
        ) : (
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors mx-auto"
          >
            Reset Demo
          </button>
        )}
      </div>

      {/* Demo Container */}
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-gray-400 text-sm">SBDK Demo</span>
          <div className="ml-auto flex gap-2">
            <div className={`px-3 py-1 rounded text-xs font-medium ${
              step === 'idle' ? 'bg-gray-700 text-gray-400' :
              step === 'pipeline' ? 'bg-blue-500/20 text-blue-400' :
              step === 'terminal' ? 'bg-green-500/20 text-green-400' :
              'bg-purple-500/20 text-purple-400'
            }`}>
              {step === 'idle' ? 'Ready' :
               step === 'pipeline' ? 'Running Pipeline...' :
               step === 'terminal' ? 'Executing...' :
               'Complete'}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[400px]">
          <AnimatePresence mode="wait">
            {step === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full py-20 text-center"
              >
                <Database className="w-16 h-16 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to see SBDK in action?
                </h3>
                <p className="text-gray-400 max-w-md">
                  Watch a complete pipeline run: DLT ingestion → dbt transformation → DuckDB analytics
                </p>
              </motion.div>
            )}

            {step === 'pipeline' && (
              <motion.div
                key="pipeline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Pipeline Execution</h3>

                  {/* Pipeline stages */}
                  {[
                    { name: 'DLT', desc: 'Generating synthetic data', progress: pipelineProgress >= 0 },
                    { name: 'dbt', desc: 'Transforming & modeling', progress: pipelineProgress >= 33.33 },
                    { name: 'DuckDB', desc: 'Loading analytics', progress: pipelineProgress >= 66.66 },
                  ].map((stage, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border-2 transition-all ${
                      stage.progress ? 'border-primary-500 bg-primary-500/10' : 'border-gray-700 bg-gray-800'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">{stage.name}</span>
                        {stage.progress && (
                          <span className="text-xs text-green-400">✓ Complete</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{stage.desc}</p>
                    </div>
                  ))}

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                        initial={{ width: '0%' }}
                        animate={{ width: `${pipelineProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 'terminal' && (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="font-mono text-sm space-y-2"
              >
                <div className="text-green-400">$ sbdk run</div>
                <div className="text-gray-400">→ Running DLT pipeline...</div>
                <div className="text-gray-400 ml-4">✓ Generated 10,247 users</div>
                <div className="text-gray-400 ml-4">✓ Generated 52,891 events</div>
                <div className="text-gray-400 ml-4">✓ Generated 21,456 orders</div>
                <div className="text-gray-400 mt-2">→ Executing dbt models...</div>
                <div className="text-gray-400 ml-4">✓ user_metrics (12 rows)</div>
                <div className="text-gray-400 ml-4">✓ order_summary (8 rows)</div>
                <div className="text-gray-400 ml-4">✓ event_analytics (15 rows)</div>
                <div className="text-gray-400 mt-2">→ Loading into DuckDB...</div>
                <div className="text-gray-400 ml-4">✓ Loaded 3 tables</div>
                <div className="text-green-400 mt-4">✅ Pipeline complete in 4.2 seconds</div>
                <div className="flex gap-2 mt-2"><span className="text-green-400">$</span><span className="animate-pulse">_</span></div>
              </motion.div>
            )}

            {step === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Query Results (DuckDB)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-2 text-gray-400 font-semibold">user_id</th>
                        <th className="text-left p-2 text-gray-400 font-semibold">username</th>
                        <th className="text-right p-2 text-gray-400 font-semibold">total_orders</th>
                        <th className="text-right p-2 text-gray-400 font-semibold">revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { user_id: 1247, username: 'alice_smith', total_orders: 42, revenue: '$8,940.50' },
                        { user_id: 3891, username: 'bob_jones', total_orders: 38, revenue: '$7,215.30' },
                        { user_id: 5632, username: 'carol_white', total_orders: 35, revenue: '$6,842.75' },
                      ].map((row, idx) => (
                        <motion.tr
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="border-b border-gray-800 hover:bg-gray-800/50"
                        >
                          <td className="p-2 text-gray-300">{row.user_id}</td>
                          <td className="p-2 text-gray-300">{row.username}</td>
                          <td className="p-2 text-right text-gray-300">{row.total_orders}</td>
                          <td className="p-2 text-right text-green-400 font-semibold">{row.revenue}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  Query executed in 8.4ms • 396K+ ops/sec
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Quick stats below demo */}
      {step === 'results' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 grid grid-cols-3 gap-4"
        >
          {[
            { label: 'Total Time', value: '4.2s' },
            { label: 'Memory Used', value: '<500MB' },
            { label: 'Query Speed', value: '8.4ms' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

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
              <Link href="#demo" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Demo
              </Link>
              <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Features
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

      {/* Hero Section with Integrated Demo */}
      <section id="demo" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
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
          </div>

          {/* Integrated Demo */}
          <IntegratedDemo />

          {/* Quick install */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-900 rounded-lg px-6 py-4 mb-4">
              <code className="text-green-400 text-lg font-mono">pip install sbdk-dev</code>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build <span className="gradient-text">480x Faster?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join data engineers who&apos;ve ditched cloud complexity for local-first simplicity
          </p>

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

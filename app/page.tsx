'use client'

import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { motion } from 'framer-motion'

export default function HomePage() {
  const projects = [
    {
      name: 'SBDK.dev (Sandbox Development Kit)',
      repo: 'sbdk-dev/sbdk-dev',
      description: 'A developer sandbox framework for local-first data pipeline development using DLT, DuckDB, and dbt. It provides a complete local-first environment for prototyping, learning, and developing data solutions before deploying to production systems.',
      features: [
        '11x Faster Installation: Lightning-fast installation with `uv`.',
        '100% Local: No cloud dependencies, no complex setup.',
        'Intelligent Guided UI: A clean, intuitive interface with actionable options.',
        'Hot Reload: Automatic re-runs when files change for iterative development.',
      ],
    },
    {
      name: 'Mallard (local-inference)',
      repo: 'sbdk-dev/local-inference',
      description: 'A local-first semantic layer for AI-powered analytics, providing a "Snowflake Cortex for Local-First Databases." It allows you to run powerful, zero-shot tabular predictions directly in your database with simple SQL.',
      features: [
        'Zero-Shot Predictions: Use powerful foundation models for classification and regression without training.',
        'Simple SQL Interface: All functionality is exposed through declarative SQL UDFs.',
        'High-Performance & Local-First: Built in Rust as a DuckDB extension.',
        'Embeddings & Explainability: Generate dense vector embeddings and get feature importance explanations.',
      ],
    },
    {
      name: 'Semantic Tracer',
      repo: 'sbdk-dev/semantic-tracer',
      description: 'A local-first application for visualizing and exploring dbt semantic layers. It connects directly to your dbt project and Snowflake account to provide a real-time, interactive lineage graph of your metrics, dimensions, and entities.',
      features: [
        'Local-First: Your data and semantic models never leave your machine.',
        'dbt Semantic Layer Integration: Connects seamlessly to your `semantic_models.yml` file.',
        'Interactive Lineage Graph: Utilizes React Flow to create a dynamic and explorable graph.',
        'Tauri Backend: A lightweight Rust backend provides high performance and a secure application shell.',
      ],
    },
    {
        name: 'Local AI Analyst',
        repo: 'sbdk-dev/local-ai-analyst',
        description: 'An AI-powered data analyst with a semantic layer, statistical rigor, and natural language insights. It allows you to ask questions in natural language and get answers based on real query results, not AI guesses.',
        features: [
          'Natural Language Queries: Ask questions like "What\'s our conversion rate by plan type?"',
          'Statistical Rigor: Automatic significance testing, confidence intervals, and sample size validation.',
          'Execution-First: Prevents AI fabrication by building, executing, and then annotating results.',
          'Multi-Query Workflows: Built-in analytical workflows for comprehensive analysis.',
        ],
      },
      {
        name: 'knowDB',
        repo: 'sbdk-dev/knowDB',
        description: 'A local-first agentic analytics platform that extends `sbdk-dev` to enable natural language queries against your data through AI assistants like Claude Desktop and ChatGPT Desktop via the Model Context Protocol (MCP).',
        features: [
          'Multi-AI Support: Works with any MCP-compatible AI assistant.',
          'dbt Integration: Sync dbt models to the semantic layer automatically.',
          'Local-First: Runs entirely on your machine with DuckDB.',
          'Open Source: MIT License - free for personal and commercial use.',
        ],
      },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="text-2xl font-bold">SBDK.dev</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/sbdk-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-semibold"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 dark:from-primary-400 dark:via-accent-400 dark:to-primary-500 text-transparent bg-clip-text">
              Production-Ready Examples for Building Local-First Data Tools
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Five complete, working implementations showing how to build data pipelines, ML-in-SQL, semantic layers, and AI analytics—without cloud dependencies.
            </p>

            {/* Value Props Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-3">📦</div>
                <h3 className="font-bold text-lg mb-2">Complete Codebases</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Not tutorials or docs—actual production-quality code you can run, study, and fork.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-3">🔗</div>
                <h3 className="font-bold text-lg mb-2">Working Examples</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  See how DLT, dbt, DuckDB, Rust extensions, and MCP integration actually fit together.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2">Skip Months of R&D</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Proven patterns for local-first architecture, tested and documented. Just fork and adapt.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="#projects"
                className="px-8 py-4 rounded-lg bg-primary-600 dark:bg-primary-500 text-white text-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg"
              >
                Explore the 5 Projects
              </Link>
              <Link
                href="#use-cases"
                className="px-8 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                See Use Cases
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Open source • MIT Licensed • Archived as reference implementations (Nov 2025)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section - Who is this for? */}
      <section id="use-cases" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Who Should Use These?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Whether you're building similar tools or learning modern data engineering, these implementations save you months of research.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Building Local-First Tools?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Stop piecing together scattered docs. See complete working examples of:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <span>How to structure a data pipeline with DLT + dbt + DuckDB</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <span>Building Rust extensions for DuckDB (ML/AI in SQL)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <span>MCP server integration for AI assistants</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <span>Statistical rigor in AI-powered analytics</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">Learning Modern Data Stack?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Skip tutorials. Learn from production-quality code that shows:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <span>Real architecture patterns, not toy examples</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <span>How components actually connect and work together</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <span>Error handling, testing, and deployment practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                  <span>Why certain tech choices were made (comments explain decisions)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            How The Ecosystem Fits Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Each project builds on the foundation to create a complete local-first analytics platform
          </p>

          <div className="space-y-6">
            {/* Layer 1: Foundation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Foundation: SBDK.dev</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The core framework providing local-first data pipelines with DLT (ingestion), dbt (transformation), and DuckDB (analytics). Everything else builds on this foundation.
                </p>
              </div>
            </motion.div>

            {/* Layer 2: Intelligence */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-xl ml-0 md:ml-12"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Intelligence: Mallard (local-inference)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A DuckDB extension adding ML/AI capabilities. Run zero-shot predictions, generate embeddings, and get feature importance—all in SQL, no separate ML infrastructure needed.
                </p>
              </div>
            </motion.div>

            {/* Layer 3: Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-xl ml-0 md:ml-24"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Visualization: Semantic Tracer</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Visualizes dbt semantic layers with interactive lineage graphs. Understand how your metrics, dimensions, and entities connect. Built with Tauri and React Flow.
                </p>
              </div>
            </motion.div>

            {/* Layer 4: Natural Language */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-xl ml-0 md:ml-36"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-orange-600 dark:bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Conversational: Local AI Analyst</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ask questions in natural language, get answers based on real query results with statistical rigor. Execution-first approach prevents AI fabrication with confidence intervals and significance testing.
                </p>
              </div>
            </motion.div>

            {/* Layer 5: Integration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 rounded-xl ml-0 md:ml-48"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-pink-600 dark:bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Integration: knowDB</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Connects everything to AI assistants via MCP (Model Context Protocol). Query your data through Claude Desktop or ChatGPT Desktop with automatic dbt model syncing and semantic layer integration.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-center">The Result</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A complete stack for building local-first analytics tools. Start with raw data, transform it, analyze it with ML, visualize relationships, and query it conversationally—all without cloud dependencies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Five Projects, One Ecosystem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Each project is a complete, production-quality reference implementation. Fork any or all to build your own local-first data tools.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-3xl font-bold">{project.name}</h2>
                  {project.repo !== 'sbdk-dev/sbdk-dev' && (
                    <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                      ARCHIVED
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`https://github.com/${project.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Link>
                  <Link
                    href={`https://github.com/${project.repo}/fork`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Fork It
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Ready to Build?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
            These projects are reference implementations showing how to build local-first data tools. Here's how to get started:
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pick a Project</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Start with SBDK.dev for the foundation, or choose any project that matches your needs. Each works standalone or as part of the ecosystem.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fork & Explore</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Fork the repository, read the README, explore the code. Each project includes comprehensive documentation and examples.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-600 dark:text-gray-400"># Example: SBDK.dev</div>
                  <div>git clone https://github.com/sbdk-dev/sbdk-dev</div>
                  <div>cd sbdk-dev</div>
                  <div>pip install -e .</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Adapt & Extend</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  These are reference implementations—take what works, modify what doesn't, and build your own tools. All projects are MIT licensed for maximum flexibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Share Your Work</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built something cool? Share it! Open an issue on the original repo to showcase your fork or derivative work.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-bold mb-2 text-blue-900 dark:text-blue-100">Why These Are Archived</h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
              These are <strong>complete, stable reference implementations</strong>—not active products. They're archived because they're <em>done</em>: production-quality code demonstrating proven patterns. Perfect for forking, learning, or adapting for your own projects.
            </p>
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
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 SBDK. MIT Licensed.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
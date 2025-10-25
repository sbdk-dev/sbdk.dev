'use client'

import { useEffect, useRef, useState } from 'react'
import { Terminal as TerminalIcon, Copy, RotateCcw, Play } from 'lucide-react'

interface Command {
  command: string
  output: string[]
  delay?: number
}

const demoCommands: Command[] = [
  {
    command: 'sbdk init my-analytics',
    output: [
      '✓ Creating project directory...',
      '✓ Setting up DLT pipeline...',
      '✓ Configuring dbt models...',
      '✓ Initializing DuckDB database...',
      '✓ Installing dependencies with uv...',
      '',
      '🎉 Project created in 2.3 seconds!',
      '',
      'Next steps:',
      '  cd my-analytics',
      '  sbdk run --visual',
    ],
    delay: 100,
  },
  {
    command: 'sbdk run',
    output: [
      '→ Running DLT pipeline...',
      '  ✓ Generated 10,247 users',
      '  ✓ Generated 52,891 events',
      '  ✓ Generated 21,456 orders',
      '',
      '→ Executing dbt models...',
      '  ✓ user_metrics (12 rows)',
      '  ✓ order_summary (8 rows)',
      '  ✓ event_analytics (15 rows)',
      '',
      '→ Loading into DuckDB...',
      '  ✓ Loaded 3 tables',
      '',
      '✅ Pipeline complete in 4.2 seconds',
    ],
    delay: 150,
  },
  {
    command: 'sbdk query "SELECT COUNT(*) FROM analytics.users"',
    output: [
      '┌──────────┐',
      '│ count(*) │',
      '├──────────┤',
      '│   10,247 │',
      '└──────────┘',
      '',
      'Query executed in 8.4ms',
    ],
    delay: 50,
  },
]

export default function InteractiveTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [copied, setCopied] = useState(false)

  const runDemo = async () => {
    if (!terminalRef.current) return

    setIsPlaying(true)
    terminalRef.current.innerHTML = ''
    setCurrentLine(0)

    for (const cmd of demoCommands) {
      // Show prompt and command
      const promptLine = document.createElement('div')
      promptLine.className = 'flex gap-2'
      promptLine.innerHTML = `
        <span class="text-green-400">$</span>
        <span class="text-gray-300">${cmd.command}</span>
      `
      terminalRef.current.appendChild(promptLine)

      // Wait a bit before showing output
      await new Promise(resolve => setTimeout(resolve, 500))

      // Show each output line with delay
      for (const line of cmd.output) {
        const outputLine = document.createElement('div')
        outputLine.className = 'text-gray-400 ml-4'
        outputLine.textContent = line
        terminalRef.current.appendChild(outputLine)

        if (terminalRef.current.parentElement) {
          terminalRef.current.parentElement.scrollTop = terminalRef.current.parentElement.scrollHeight
        }

        await new Promise(resolve => setTimeout(resolve, cmd.delay || 100))
      }

      // Add spacing between commands
      const spacer = document.createElement('div')
      spacer.className = 'h-4'
      terminalRef.current.appendChild(spacer)

      await new Promise(resolve => setTimeout(resolve, 800))
    }

    // Show final prompt
    const finalPrompt = document.createElement('div')
    finalPrompt.className = 'flex gap-2'
    finalPrompt.innerHTML = '<span class="text-green-400">$</span><span class="animate-pulse">_</span>'
    terminalRef.current.appendChild(finalPrompt)

    setIsPlaying(false)
  }

  const handleCopyInstall = async () => {
    await navigator.clipboard.writeText('pip install sbdk-dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    if (terminalRef.current) {
      terminalRef.current.innerHTML = `
        <div class="flex gap-2">
          <span class="text-green-400">$</span>
          <span class="animate-pulse">_</span>
        </div>
      `
    }
  }

  useEffect(() => {
    handleReset()
  }, [])

  return (
    <div className="w-full py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try It <span className="gradient-text">Right Now</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            See how easy it is to set up and run a complete data pipeline
          </p>
        </div>

        {/* Terminal window */}
        <div className="terminal-window">
          {/* Terminal header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <TerminalIcon className="w-4 h-4" />
                <span>sbdk-demo</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={runDemo}
                disabled={isPlaying}
                className="px-3 py-1 rounded bg-primary-600 hover:bg-primary-700 disabled:bg-gray-700 text-white text-sm font-medium transition-colors flex items-center gap-2"
                title="Run demo"
              >
                <Play className="w-3 h-3" />
                {isPlaying ? 'Running...' : 'Run Demo'}
              </button>
              <button
                onClick={handleReset}
                className="p-1 rounded hover:bg-gray-700 text-gray-400 transition-colors"
                title="Reset terminal"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal content */}
          <div className="bg-gray-900 p-6 h-96 overflow-y-auto font-mono text-sm">
            <div ref={terminalRef} className="space-y-1" />
          </div>

          {/* Terminal footer */}
          <div className="bg-gray-800 px-4 py-3 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Ready to install?
              </div>
              <button
                onClick={handleCopyInstall}
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Copy className="w-4 h-4 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    pip install sbdk-dev
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quick commands reference */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { cmd: 'sbdk init <name>', desc: 'Create new project' },
            { cmd: 'sbdk run --visual', desc: 'Run with UI' },
            { cmd: 'sbdk query <sql>', desc: 'Execute SQL' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <code className="text-sm font-mono text-primary-600 dark:text-primary-400">
                {item.cmd}
              </code>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

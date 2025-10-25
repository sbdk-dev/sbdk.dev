'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, GitBranch, Zap, CheckCircle2, ArrowRight } from 'lucide-react'

interface PipelineStep {
  id: string
  name: string
  description: string
  icon: typeof Database
  status: 'idle' | 'running' | 'complete'
  color: string
  stats?: {
    label: string
    value: string
  }[]
}

export default function PipelineVisualizer({ autoPlay = false }: { autoPlay?: boolean }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const steps: PipelineStep[] = [
    {
      id: 'dlt',
      name: 'DLT',
      description: 'Data ingestion & generation',
      icon: Database,
      status: 'idle',
      color: 'from-blue-500 to-cyan-500',
      stats: [
        { label: 'Users', value: '10,000+' },
        { label: 'Events', value: '50,000+' },
        { label: 'Orders', value: '20,000+' },
      ],
    },
    {
      id: 'dbt',
      name: 'dbt',
      description: 'Data transformation & modeling',
      icon: GitBranch,
      status: 'idle',
      color: 'from-orange-500 to-red-500',
      stats: [
        { label: 'Models', value: '12' },
        { label: 'Tests', value: '24' },
        { label: 'Time', value: '<2s' },
      ],
    },
    {
      id: 'duckdb',
      name: 'DuckDB',
      description: 'Analytics & querying',
      icon: Zap,
      status: 'idle',
      color: 'from-yellow-500 to-amber-500',
      stats: [
        { label: 'Queries/s', value: '396K+' },
        { label: 'Memory', value: '<500MB' },
        { label: 'Latency', value: '<10ms' },
      ],
    },
  ]

  const [pipelineSteps, setPipelineSteps] = useState(steps)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % (steps.length + 1)

        setPipelineSteps((current) =>
          current.map((step, idx) => {
            if (idx < next - 1) return { ...step, status: 'complete' as const }
            if (idx === next - 1) return { ...step, status: 'running' as const }
            return { ...step, status: 'idle' as const }
          })
        )

        return next
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isPlaying, steps.length])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      setCurrentStep(0)
      setPipelineSteps(steps)
    }
  }

  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Your Pipeline in <span className="gradient-text">Real-Time</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Watch data flow from ingestion through transformation to analytics
          </p>
          <button
            onClick={handlePlayPause}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
          >
            {isPlaying ? 'Pause Demo' : 'Play Demo'}
          </button>
        </div>

        {/* Pipeline Flow */}
        <div className="pipeline-flow flex-wrap md:flex-nowrap">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon
            const isActive = step.status === 'running'
            const isComplete = step.status === 'complete'

            return (
              <div key={step.id} className="relative flex items-center">
                {/* Pipeline Node */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: isActive ? 1.05 : 1,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`pipeline-node min-w-[280px] ${
                    isActive
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-950 shadow-lg'
                      : isComplete
                      ? 'border-green-500 bg-green-50 dark:bg-green-950'
                      : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${step.color} text-white`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{step.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                    {isComplete && (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    )}
                  </div>

                  {/* Stats */}
                  <AnimatePresence>
                    {(isActive || isComplete) && step.stats && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200 dark:border-gray-700"
                      >
                        {step.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-500">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Loading indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 overflow-hidden rounded-b-lg">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${step.color}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'linear' }}
                      />
                    </div>
                  )}
                </motion.div>

                {/* Connector Arrow */}
                {index < pipelineSteps.length - 1 && (
                  <div className="hidden md:block mx-4">
                    <motion.div
                      animate={{
                        opacity: isComplete ? 1 : 0.3,
                        scale: isComplete ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <ArrowRight
                        className={`w-8 h-8 ${
                          isComplete
                            ? 'text-green-500'
                            : 'text-gray-400 dark:text-gray-600'
                        }`}
                      />
                    </motion.div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Timeline indicator */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Pipeline Progress</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {currentStep === steps.length + 1 ? 'Complete' : `Step ${currentStep}/${steps.length}`}
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
              initial={{ width: '0%' }}
              animate={{
                width: `${(currentStep / (steps.length + 1)) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Code preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gray-900 rounded-lg p-6 font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-400 ml-4">terminal</span>
          </div>
          <div className="space-y-2 text-gray-300">
            <div>
              <span className="text-green-400">$</span> sbdk init my-pipeline
            </div>
            <div className="text-gray-500">✓ Project created in 2.3s</div>
            <div>
              <span className="text-green-400">$</span> sbdk run --visual
            </div>
            <div className="text-gray-500">→ Running DLT pipeline...</div>
            <div className="text-gray-500">→ Executing dbt models...</div>
            <div className="text-gray-500">→ Loading into DuckDB...</div>
            <div className="text-green-400">✓ Pipeline complete in 4.2s</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

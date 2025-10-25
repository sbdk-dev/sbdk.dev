'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Table, BarChart3, Download, Copy, Check } from 'lucide-react'

interface QueryResult {
  query: string
  columns: string[]
  data: Record<string, any>[]
  executionTime: string
  rowCount: number
}

const sampleData: QueryResult = {
  query: 'SELECT * FROM analytics.user_metrics ORDER BY revenue DESC LIMIT 10',
  columns: ['user_id', 'username', 'total_orders', 'revenue', 'avg_order_value', 'last_order_date'],
  data: [
    { user_id: 1247, username: 'alice_smith', total_orders: 42, revenue: 8940.50, avg_order_value: 212.87, last_order_date: '2024-12-15' },
    { user_id: 3891, username: 'bob_jones', total_orders: 38, revenue: 7215.30, avg_order_value: 189.88, last_order_date: '2024-12-14' },
    { user_id: 5632, username: 'carol_white', total_orders: 35, revenue: 6842.75, avg_order_value: 195.51, last_order_date: '2024-12-16' },
    { user_id: 2109, username: 'david_brown', total_orders: 31, revenue: 6124.20, avg_order_value: 197.55, last_order_date: '2024-12-13' },
    { user_id: 7854, username: 'emma_davis', total_orders: 29, revenue: 5890.15, avg_order_value: 203.11, last_order_date: '2024-12-15' },
    { user_id: 4321, username: 'frank_miller', total_orders: 27, revenue: 5445.80, avg_order_value: 201.70, last_order_date: '2024-12-12' },
    { user_id: 9087, username: 'grace_wilson', total_orders: 26, revenue: 5234.60, avg_order_value: 201.33, last_order_date: '2024-12-16' },
    { user_id: 1563, username: 'henry_moore', total_orders: 24, revenue: 4896.40, avg_order_value: 204.02, last_order_date: '2024-12-14' },
    { user_id: 6745, username: 'iris_taylor', total_orders: 23, revenue: 4678.90, avg_order_value: 203.43, last_order_date: '2024-12-11' },
    { user_id: 8234, username: 'jack_anderson', total_orders: 22, revenue: 4512.30, avg_order_value: 205.11, last_order_date: '2024-12-15' },
  ],
  executionTime: '8.4ms',
  rowCount: 10,
}

export default function DataTableViewer({ data = sampleData }: { data?: QueryResult }) {
  const [viewMode, setViewMode] = useState<'table' | 'chart'>('table')
  const [copied, setCopied] = useState(false)

  const formatValue = (value: any): string => {
    if (typeof value === 'number') {
      if (value % 1 === 0) return value.toLocaleString()
      return value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
    return String(value)
  }

  const handleCopy = async () => {
    const csv = [
      data.columns.join(','),
      ...data.data.map(row => data.columns.map(col => row[col]).join(','))
    ].join('\n')

    await navigator.clipboard.writeText(csv)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const csv = [
      data.columns.join(','),
      ...data.data.map(row => data.columns.map(col => row[col]).join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'query_results.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Query Results <span className="gradient-text">Instantly</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                396K+ operations per second, sub-10ms latency
              </p>
            </div>

            {/* View toggles */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'table'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Table className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('chart')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'chart'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Query display */}
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">SQL Query</div>
                <code className="text-sm text-green-400 font-mono break-all">
                  {data.query}
                </code>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                  title="Copy as CSV"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                  title="Download CSV"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4 text-sm">
            <div className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full">
              <span className="text-gray-600 dark:text-gray-400">Rows:</span>{' '}
              <span className="font-semibold">{data.rowCount.toLocaleString()}</span>
            </div>
            <div className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full">
              <span className="text-gray-600 dark:text-gray-400">Execution:</span>{' '}
              <span className="font-semibold text-green-600 dark:text-green-400">{data.executionTime}</span>
            </div>
            <div className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full">
              <span className="text-gray-600 dark:text-gray-400">Columns:</span>{' '}
              <span className="font-semibold">{data.columns.length}</span>
            </div>
          </div>
        </div>

        {/* Data display */}
        {viewMode === 'table' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    {data.columns.map((column) => (
                      <th key={column} className="whitespace-nowrap">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {data.columns.map((column) => (
                        <td key={column} className="whitespace-nowrap">
                          {formatValue(row[column])}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
          >
            {/* Simple bar chart visualization */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-6">Revenue by User</h3>
              {data.data.map((row, idx) => {
                const maxRevenue = Math.max(...data.data.map(r => r.revenue))
                const percentage = (row.revenue / maxRevenue) * 100

                return (
                  <motion.div
                    key={idx}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium truncate">
                        {row.username}
                      </div>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-8 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-end px-3"
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                          <span className="text-xs font-semibold text-white">
                            ${formatValue(row.revenue)}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Footer info */}
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            Powered by <span className="font-semibold text-primary-600 dark:text-primary-400">DuckDB</span> -
            In-process analytical database with zero configuration
          </p>
        </div>
      </div>
    </div>
  )
}

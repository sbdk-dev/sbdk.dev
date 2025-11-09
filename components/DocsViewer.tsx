'use client'

import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { BookOpen, ExternalLink, Loader2 } from 'lucide-react'

interface DocPage {
  title: string
  slug: string
  category: string
}

const DOC_PAGES: DocPage[] = [
  { title: 'Home', slug: 'Home', category: 'Overview' },
  { title: 'Getting Started', slug: 'Getting-Started', category: 'Getting Started' },
  { title: 'User Guide', slug: 'User-Guide', category: 'Getting Started' },
  { title: 'FAQ', slug: 'FAQ', category: 'Getting Started' },
  { title: 'Architecture', slug: 'Architecture', category: 'Architecture' },
  { title: 'DLT Pipeline Architecture', slug: 'DLT-Pipeline-Architecture', category: 'Architecture' },
  { title: 'DBT Models', slug: 'DBT-Models', category: 'Architecture' },
  { title: 'Configuration', slug: 'Configuration', category: 'Configuration' },
  { title: 'Configuration Schema', slug: 'Configuration-Schema', category: 'Configuration' },
  { title: 'API Reference', slug: 'API-Reference', category: 'Configuration' },
  { title: 'Server CLI Guide', slug: 'Server-CLI-Guide', category: 'Advanced Topics' },
  { title: 'Build Binary', slug: 'Build-Binary', category: 'Advanced Topics' },
  { title: 'CI/CD Guide', slug: 'CI-CD-Guide', category: 'Advanced Topics' },
  { title: 'GitHub Release Workflow', slug: 'GitHub-Release-Workflow', category: 'Advanced Topics' },
]

export default function DocsViewer() {
  const [selectedDoc, setSelectedDoc] = useState<DocPage>(DOC_PAGES[0])
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchDoc() {
      setLoading(true)
      setError(null)

      try {
        // Fetch from our API route (server-side proxy to avoid CORS)
        const response = await fetch(`/api/docs?slug=${selectedDoc.slug}`)

        if (!response.ok) {
          throw new Error('Failed to fetch documentation')
        }

        const data = await response.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setContent(data.content)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load documentation')
        setContent('')
      } finally {
        setLoading(false)
      }
    }

    fetchDoc()
  }, [selectedDoc])

  const categories = Array.from(new Set(DOC_PAGES.map(doc => doc.category)))

  return (
    <div className="flex gap-8 max-w-7xl mx-auto px-4 py-8">
      {/* Sidebar Navigation */}
      <aside className="w-64 flex-shrink-0 sticky top-24 self-start">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
            <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h3 className="font-semibold">Documentation</h3>
          </div>

          {categories.map(category => {
            const categoryDocs = DOC_PAGES.filter(doc => doc.category === category)
            return (
              <div key={category} className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {category}
                </h4>
                <ul className="space-y-1">
                  {categoryDocs.map(doc => (
                    <li key={doc.slug}>
                      <button
                        onClick={() => setSelectedDoc(doc)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedDoc.slug === doc.slug
                            ? 'bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 font-medium'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {doc.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href={`https://github.com/sbdk-dev/sbdk-dev/wiki/${selectedDoc.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Edit on GitHub
            </a>
          </div>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 min-w-0">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-primary-600 dark:text-primary-400 animate-spin" />
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <p className="text-red-800 dark:text-red-200 font-semibold mb-2">Failed to load documentation</p>
              <p className="text-red-600 dark:text-red-400 text-sm mb-4">{error}</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://github.com/sbdk-dev/sbdk-dev/wiki/${selectedDoc.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-700 dark:text-red-300 hover:text-red-900 dark:hover:text-red-100 font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on GitHub instead
                </a>
                <button
                  onClick={() => setSelectedDoc(DOC_PAGES[0])}
                  className="inline-flex items-center gap-2 text-red-700 dark:text-red-300 hover:text-red-900 dark:hover:text-red-100 font-medium text-left"
                >
                  <BookOpen className="w-4 h-4" />
                  Return to Home page
                </button>
              </div>
            </div>
          )}

          {!loading && !error && content && (
            <article className="prose prose-gray dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-gray-200 dark:prose-h1:border-gray-700
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
              prose-code:text-primary-700 dark:prose-code:text-primary-300 prose-code:bg-gray-100 dark:prose-code:bg-gray-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-gray-900 dark:prose-pre:bg-black prose-pre:border prose-pre:border-gray-700
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-gray-700 dark:prose-li:text-gray-300
              prose-strong:text-gray-900 dark:prose-strong:text-gray-100
              prose-table:border-collapse
              prose-th:bg-gray-100 dark:prose-th:bg-gray-800 prose-th:border prose-th:border-gray-300 dark:prose-th:border-gray-600 prose-th:p-3
              prose-td:border prose-td:border-gray-300 dark:prose-td:border-gray-600 prose-td:p-3
              prose-img:rounded-lg prose-img:border prose-img:border-gray-300 dark:prose-img:border-gray-700
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
              >
                {content}
              </ReactMarkdown>
            </article>
          )}
        </div>
      </main>
    </div>
  )
}

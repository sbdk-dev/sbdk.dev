import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { ArrowRight, Book, Zap, BrainCircuit, Bot, GitBranch } from 'lucide-react';

export default function DocsHubPage() {
  const projects = [
    {
      name: 'SBDK.dev',
      description: 'The foundation: local-first data pipeline framework with DLT, dbt, and DuckDB. Build, test, and run sophisticated data pipelines entirely on your laptop.',
      link: 'https://github.com/sbdk-dev/sbdk-dev',
      icon: GitBranch,
      archived: false,
    },
    {
      name: 'Mallard (local-inference)',
      description: 'DuckDB extension for ML/AI: run zero-shot predictions, generate embeddings, and get feature importance—all in SQL. Local-first AI-powered analytics.',
      link: 'https://github.com/sbdk-dev/local-inference',
      icon: Zap,
      archived: true,
    },
    {
      name: 'Semantic Tracer',
      description: 'Visualize dbt semantic layers with interactive lineage graphs. Understand how metrics, dimensions, and entities connect. Built with Tauri and React Flow.',
      link: 'https://github.com/sbdk-dev/semantic-tracer',
      icon: BrainCircuit,
      archived: true,
    },
    {
      name: 'Local AI Analyst',
      description: 'AI-powered data analyst with statistical rigor. Ask questions in natural language, get answers based on real query results with confidence intervals and significance testing.',
      link: 'https://github.com/sbdk-dev/local-ai-analyst',
      icon: Bot,
      archived: true,
    },
    {
      name: 'knowDB',
      description: 'MCP integration layer connecting your data to AI assistants like Claude Desktop and ChatGPT Desktop. Natural language queries with automatic dbt model syncing.',
      link: 'https://github.com/sbdk-dev/knowDB',
      icon: Book,
      archived: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-8 h-8" />
              <span className="text-2xl font-bold">SBDK.dev</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text">
            Explore the SBDK Ecosystem
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Five open-source projects demonstrating how to build local-first data and AI tools.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500 mb-12">
            Click any project to view its repository, explore the code, and fork it for your own use.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <project.icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                  </div>
                  {project.archived && (
                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded">
                      ARCHIVED
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-primary-600 dark:text-primary-400 font-semibold">
                <span>View Repository</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

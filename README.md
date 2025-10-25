# SBDK.dev - Promotional Website

> SEO/AEO-optimized promotional website for [SBDK](https://github.com/sbdk-dev/sbdk-dev) - The local-first data pipeline toolkit.

![SBDK.dev](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)

## Overview

This is the promotional website for **SBDK.dev** - a local-first data pipeline toolkit that combines DLT, dbt, and DuckDB for enterprise-grade data processing with zero cloud dependencies.

### Key Features

- **SEO/AEO Optimized** - Schema.org structured data, semantic HTML, optimized metadata
- **Interactive Demos** - Live pipeline visualization and CLI terminal sandbox
- **Data Visualization** - Beautiful DuckDB query result displays
- **PLG-Focused** - Product-led growth strategy with self-service onboarding
- **Performance Optimized** - Next.js 14 with App Router, static generation
- **Responsive Design** - Mobile-first with Tailwind CSS

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sbdk-dev/sbdk.dev.git
cd sbdk.dev

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript type checking
```

## Project Structure

```
sbdk.dev/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Landing page
│   ├── pricing/           # Pricing page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.txt         # Robots.txt
├── components/             # React components
│   ├── PipelineVisualizer.tsx      # Visual pipeline tracer
│   ├── DataTableViewer.tsx         # DuckDB results display
│   ├── InteractiveTerminal.tsx     # CLI sandbox
│   └── ThemeProvider.tsx           # Dark mode provider
├── lib/                    # Utility functions
├── public/                 # Static assets
├── ARCHITECTURE.md         # Detailed architecture documentation
├── tailwind.config.ts      # Tailwind configuration
└── next.config.js          # Next.js configuration
```

## Key Components

### PipelineVisualizer
Animated visualization showing the DLT → dbt → DuckDB pipeline flow with real-time status indicators.

### DataTableViewer
Interactive data table with chart view for displaying DuckDB query results. Supports CSV export and copy functionality.

### InteractiveTerminal
Simulated CLI terminal that demonstrates SBDK commands with realistic output animations.

## SEO/AEO Optimization

This website implements comprehensive SEO and Answer Engine Optimization (AEO):

### On-Page SEO
- Semantic HTML5 structure
- Optimized title tags and meta descriptions
- Proper heading hierarchy (H1-H6)
- Internal linking strategy
- Mobile-first responsive design

### Structured Data
- Schema.org SoftwareApplication markup
- JSON-LD for machine-readable data
- Open Graph for social sharing
- Twitter Cards for social media

### AEO Strategy
- FAQ sections with clear Q&A format
- Concise answers in first paragraphs
- Bullet points for scannability
- Code snippets with context
- Clear problem-solution framing

### Performance
- Lighthouse score target: 95+
- Core Web Vitals optimized
- Static generation where possible
- Image optimization with next/image
- Code splitting and lazy loading

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sbdk-dev/sbdk.dev)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
# Build for production
npm run build

# The output will be in .next/ directory
# Deploy to your preferred hosting platform
```

## Environment Variables

No environment variables required for basic deployment. Add these for enhanced features:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Optional: Custom domain
NEXT_PUBLIC_SITE_URL=https://sbdk.dev
```

## Contributing

This is the promotional website for SBDK. For the main project, see [sbdk-dev/sbdk-dev](https://github.com/sbdk-dev/sbdk-dev).

Website improvements are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Links

- **Main Project**: [sbdk-dev/sbdk-dev](https://github.com/sbdk-dev/sbdk-dev)
- **Documentation**: [GitHub Wiki](https://github.com/sbdk-dev/sbdk-dev/wiki)
- **Website**: [sbdk.dev](https://sbdk.dev)

## Architecture

For detailed information about the website architecture, SEO strategy, and PLG approach, see [ARCHITECTURE.md](ARCHITECTURE.md).

---

Built with ❤️ for the data engineering community

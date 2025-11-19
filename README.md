# SBDK.dev - Promotional Website

> SEO/AEO-optimized promotional website for [SBDK](https://github.com/sbdk-dev/sbdk-dev) - The local-first data pipeline toolkit.

![SBDK.dev](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Overview

Professional marketing website for **SBDK.dev** - a local-first data pipeline toolkit combining DLT, dbt, and DuckDB for enterprise-grade data processing with zero cloud dependencies.

### Key Features

✨ **SEO/AEO Optimized** - Schema.org structured data, semantic HTML, LLM-ready content
🎬 **Interactive Demos** - Live pipeline visualization, CLI sandbox, data table viewer
📊 **10 Content Sections** - Problem, solution, capabilities, use cases, comparison, FAQ
🎨 **Brand System** - Complete logo variants, OG images, design system
⚡ **Performance** - Next.js 14 App Router, static generation, <500ms load times
📱 **Responsive** - Mobile-first design, dark mode, accessibility (WCAG AA)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build && npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) |

## Project Structure

```
sbdk.dev/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout + SEO metadata
│   ├── page.tsx           # Landing page (10 sections)
│   ├── pricing/           # Pricing tiers
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── PipelineVisualizer.tsx  # Pipeline flow visualization
│   ├── InteractiveTerminal.tsx # CLI sandbox
│   ├── DataTableViewer.tsx     # DuckDB results
│   └── Logo.tsx               # Brand logo
├── docs/                   # 📚 Documentation
│   ├── ARCHITECTURE.md    # Technical architecture
│   ├── DEPLOYMENT.md      # Deployment guides
│   └── README.md          # Docs index
├── public/
│   ├── brand/             # Logo variants & guidelines
│   ├── favicon.svg        # Site icon
│   ├── og-image.svg       # Social sharing image
│   └── llms.txt           # AI crawler file
└── .github/               # Issue/PR templates
```

## Documentation

📖 **[Full Documentation](docs/)**

- [Architecture & SEO Strategy](docs/ARCHITECTURE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Private Repo Deployment](docs/DEPLOY_PRIVATE_REPO.md)

## Contributing

Contributions are welcome! Please read our:

- [Contributing Guidelines](CONTRIBUTING.md) - Development setup, PR process, code style
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community standards
- [Security Policy](SECURITY.md) - Vulnerability reporting

For the main SBDK project, see [sbdk-dev/sbdk-dev](https://github.com/sbdk-dev/sbdk-dev).

## Scripts

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## Deployment

### Vercel (Current)

Configured for automatic deployment with:
- `vercel.json` - Build configuration and security headers
- Auto-deploy on push to main branch
- Next.js framework auto-detection

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment instructions and other platforms (Netlify, Cloudflare).

## License

MIT License - see [LICENSE](LICENSE) for details.

## Links

- **Live Site**: [sbdk.dev](https://sbdk.dev)
- **Main Project**: [sbdk-dev/sbdk-dev](https://github.com/sbdk-dev/sbdk-dev)
- **Documentation**: [GitHub Wiki](https://github.com/sbdk-dev/sbdk-dev/wiki)
- **Brand Assets**: [public/brand/](public/brand/)

---

**Built with ❤️ for the data engineering community**

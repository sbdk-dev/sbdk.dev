# SBDK.dev Promotional Website Architecture

## Overview
SEO/AEO-optimized promotional website for sbdk-dev with PLG focus, interactive demos, and conversion optimization for future paid product launch.

## Technology Stack

### Core Framework
- **Next.js 14** (App Router) - React framework with built-in SSR/SSG for optimal SEO
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### Key Libraries
- **Xterm.js** - Terminal emulator for interactive CLI sandbox
- **Framer Motion** - Animation library for engaging interactions
- **React Syntax Highlighter** - Code highlighting for examples
- **next-seo** - SEO metadata management
- **@vercel/analytics** - Privacy-friendly analytics

### SEO/AEO Optimization
- **Schema.org structured data** (SoftwareApplication, HowTo, FAQPage)
- **Open Graph & Twitter Cards** - Social sharing optimization
- **Semantic HTML5** - Proper heading hierarchy and landmarks
- **JSON-LD** - Machine-readable structured data
- **Sitemap & robots.txt** - Search engine guidance

## Site Architecture

### Pages Structure

```
/                           # Landing page - Hero, features, demo, CTAs
├── /features              # Detailed feature showcase
├── /docs                  # Documentation hub
│   ├── /getting-started   # Installation & quick start
│   ├── /cli-reference     # All CLI commands
│   ├── /architecture      # System design & concepts
│   └── /examples          # Usage examples & tutorials
├── /demo                  # Interactive CLI sandbox (full-page)
├── /pricing               # Pricing tiers (free OSS + future paid)
├── /about                 # Brand story & roadmap
└── /blog                  # Content marketing (future)
```

### Key Components

#### 1. Interactive CLI Terminal (`components/CLITerminal.tsx`)
- Built with Xterm.js
- Pre-loaded demo scenarios
- Real-time command simulation
- Copy-paste enabled
- Mobile-responsive fallback

#### 2. Feature Cards (`components/FeatureCard.tsx`)
- Icon + title + description
- Animated on scroll (Framer Motion)
- Links to detailed docs

#### 3. Code Examples (`components/CodeBlock.tsx`)
- Syntax highlighting
- Copy button
- Multiple language support
- Line highlighting

#### 4. Performance Metrics (`components/MetricsSection.tsx`)
- Animated counters
- Visual comparisons (480x faster, 30s setup)
- Charts/graphs for technical audience

#### 5. CTA Components
- Primary: GitHub Star + Clone
- Secondary: Read Docs
- Tertiary: Try Demo
- Future: Sign up for Pro

## SEO/AEO Strategy

### On-Page Optimization
1. **Title Tags**: Target keywords "local-first data pipeline", "dlt dbt duckdb", "data pipeline toolkit"
2. **Meta Descriptions**: Focus on key differentiators (480x faster, zero cloud)
3. **H1-H6 Hierarchy**: Semantic structure for answer engines
4. **Internal Linking**: Strategic cross-linking between features/docs

### Structured Data Implementation
```json
{
  "@type": "SoftwareApplication",
  "name": "SBDK.dev",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

### Answer Engine Optimization
- FAQ schema for common questions
- HowTo schema for installation guides
- Clear, concise answers in first paragraph
- Bullet points and tables for scannability
- Code snippets with context

### Content Strategy
- **Problem-Solution Format**: Address pain points (slow setup, cloud complexity)
- **Comparison Content**: vs traditional stacks, vs cloud solutions
- **Tutorial Content**: Step-by-step guides optimized for AI understanding

## PLG Strategy

### Self-Service Onboarding
1. **Interactive Demo First** - Let users try before installing
2. **30-Second Quickstart** - Match the product's value prop
3. **Progressive Disclosure** - Basic → Advanced features
4. **In-Page Examples** - Runnable code snippets

### Conversion Funnel
```
Visitor → Interactive Demo → GitHub Star → Install → Documentation → Community → (Future: Paid Upgrade)
```

### Activation Moments
- First CLI command executed in sandbox
- GitHub repository starred
- Local installation completed
- First pipeline run successful

## Freemium Positioning

### Free Tier (Open Source)
- Full CLI toolkit
- Local development
- Community support
- GitHub wiki access

### Future Paid Tier (Positioned)
- Team collaboration features
- Cloud deployment options
- Priority support
- Advanced monitoring/analytics
- Enterprise integrations

### Pricing Page Design
- Prominent "Forever Free" tier
- "Coming Soon" badges on Pro features
- Email capture for launch notification
- Clear value differentiation

## Performance Optimization

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Techniques
- Image optimization (next/image)
- Code splitting (dynamic imports)
- Font optimization (next/font)
- Static generation where possible
- Edge runtime for API routes

## Analytics & Conversion Tracking

### Key Metrics
- GitHub stars (conversion goal)
- Demo interactions (engagement)
- Documentation page views (activation)
- Install command copies (intent)
- Pricing page visits (monetization interest)

### Event Tracking
```typescript
// Example events
trackEvent('demo_command_executed', { command: 'sbdk init' })
trackEvent('github_link_clicked', { source: 'hero_cta' })
trackEvent('pricing_page_viewed')
trackEvent('install_copied')
```

## Mobile Strategy

### Responsive Design
- Mobile-first Tailwind breakpoints
- Touch-friendly interactive elements
- Simplified terminal on mobile (command list)
- Collapsible navigation

### Progressive Enhancement
- Core content accessible without JavaScript
- Enhanced interactions with JS enabled
- Fallbacks for terminal (static code blocks)

## Content Management

### Documentation
- MDX files in `/content/docs`
- Frontmatter for metadata
- Auto-generated table of contents
- Search functionality (Algolia DocSearch)

### Blog (Future)
- MDX-based blog posts
- SEO-optimized articles
- Technical tutorials
- Case studies

## Deployment

### Hosting
- **Vercel** (recommended) - Optimal Next.js performance
- **Cloudflare Pages** (alternative) - Global edge network
- **GitHub Pages** (fallback) - Static export

### CI/CD
- Automatic deployments on push to main
- Preview deployments for PRs
- Lighthouse CI for performance monitoring

## Future Enhancements

### Phase 2
- Advanced playground with real sbdk environment
- User accounts for saved demos
- Community showcase (user projects)
- Video tutorials

### Phase 3
- Interactive documentation with live examples
- In-browser data pipeline builder
- Template marketplace
- Integration guides

## Brand Positioning

### Core Message
"Enterprise-grade data pipelines in 30 seconds, not 4 hours. Zero cloud, zero complexity."

### Value Propositions
1. **Speed**: 480x faster setup
2. **Simplicity**: Local-first, no cloud config
3. **Power**: Enterprise-grade processing
4. **Developer Experience**: Hot-reload, visualization

### Target Audience
- Data engineers tired of cloud complexity
- Analytics teams wanting faster iteration
- Startups avoiding cloud costs
- Enterprises with data sovereignty requirements

---

## Implementation Checklist

- [ ] Initialize Next.js 14 with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up project structure (components, pages, content)
- [ ] Implement landing page with hero + features
- [ ] Build interactive CLI terminal component
- [ ] Add documentation pages
- [ ] Create pricing page with free/paid structure
- [ ] Implement SEO metadata + structured data
- [ ] Add analytics tracking
- [ ] Configure deployment pipeline
- [ ] Test on mobile devices
- [ ] Run Lighthouse audits
- [ ] Validate structured data (Google Rich Results Test)

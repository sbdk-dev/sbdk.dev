# Contributing to SBDK.dev

Thank you for your interest in contributing to the SBDK.dev promotional website! We appreciate your help in making this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Project Structure](#project-structure)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (browser, OS, device)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - why this would be useful
- **Mockups or examples** if applicable
- **Additional context** or screenshots

### Pull Requests

We actively welcome your pull requests! Areas where you can contribute:

- 🎨 **UI/UX improvements** - Better design, animations, accessibility
- 📝 **Content updates** - Clearer copy, better examples, documentation
- 🐛 **Bug fixes** - Fix issues in the issue tracker
- ⚡ **Performance** - Optimize loading times, bundle size
- ♿ **Accessibility** - Improve WCAG compliance, keyboard navigation
- 🌐 **SEO/AEO** - Better metadata, structured data, content optimization

## Development Setup

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn**
- **Git**

### Installation

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/sbdk.dev.git
   cd sbdk.dev
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/sbdk-dev/sbdk.dev.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev        # Start development server with hot reload
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint to check code quality
npm run type-check # Run TypeScript type checking
```

## Pull Request Process

### Before Submitting

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run build      # Ensure production build succeeds
   npm run lint       # Check for linting errors
   npm run type-check # Check for TypeScript errors
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `perf:` - Performance improvements
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

### Submitting the PR

1. Go to the [SBDK.dev repository](https://github.com/sbdk-dev/sbdk.dev)
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template with:
   - **Description** - What does this PR do?
   - **Motivation** - Why is this change needed?
   - **Testing** - How did you test this?
   - **Screenshots** - If UI changes are involved
   - **Checklist** - Complete the checklist items

### Review Process

- Maintainers will review your PR within a few days
- Address any requested changes
- Once approved, your PR will be merged
- Your contribution will be acknowledged in release notes

## Style Guidelines

### TypeScript/React

- Use **TypeScript** for all new files
- Use **functional components** with hooks
- Keep components **small and focused**
- Extract reusable logic into custom hooks
- Use **meaningful variable names**

### Tailwind CSS

- Use **Tailwind utility classes** over custom CSS
- Follow **mobile-first** responsive design
- Use the project's **design system** colors/spacing
- Group classes logically (layout → spacing → colors → typography)

Example:
```tsx
<div className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-900 rounded-lg">
  // content
</div>
```

### Code Formatting

- Run `npm run lint` before committing
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in objects/arrays

### Accessibility

- Use semantic HTML elements
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast ratios (WCAG AA)
- Test with screen readers when possible

### Performance

- Optimize images (use next/image)
- Lazy load components when appropriate
- Minimize bundle size
- Avoid unnecessary re-renders

## Project Structure

```
sbdk.dev/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Landing page
│   ├── pricing/           # Pricing page
│   └── globals.css        # Global styles
├── components/             # Reusable React components
│   ├── Logo.tsx           # Brand logo component
│   └── ThemeProvider.tsx  # Dark mode provider
├── lib/                    # Utility functions
├── public/                 # Static assets
│   ├── favicon.svg        # Favicon
│   ├── llms.txt          # AI crawler file
│   └── brand/            # Brand assets
├── ARCHITECTURE.md         # Detailed architecture docs
├── CONTRIBUTING.md         # This file
└── README.md              # Project overview
```

## Questions?

- **Main SBDK Project**: [sbdk-dev/sbdk-dev](https://github.com/sbdk-dev/sbdk-dev)
- **Documentation**: [GitHub Wiki](https://github.com/sbdk-dev/sbdk-dev/wiki)
- **Issues**: [GitHub Issues](https://github.com/sbdk-dev/sbdk.dev/issues)

---

Thank you for contributing to SBDK.dev! 🎉

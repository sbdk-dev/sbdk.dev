# GitHub Repository Setup

This document contains the recommended GitHub repository description and topics for publishing sbdk.dev.

## Repository Description

```
Website and central hub for the SBDK ecosystem - five open-source reference implementations demonstrating how to build local-first data and AI tools (data pipelines, ML inference, semantic layers, conversational analytics, and MCP integration)
```

**Character count**: 250 (within GitHub's 350 character limit)

## Repository Topics (Tags)

Use these topics for maximum discoverability:

### Primary Topics (Required)
```
local-first
data-pipeline
ai-analytics
reference-implementation
open-source
```

### Technology Topics
```
nextjs
typescript
react
tailwindcss
dlt
dbt
duckdb
rust
python
```

### Domain Topics
```
data-engineering
machine-learning
semantic-layer
mcp
model-context-protocol
developer-tools
analytics
portfolio
```

### Ecosystem Topics
```
data-analysis
ai-tools
database-extension
data-visualization
conversational-ai
```

## Complete Topics List (Copy-Paste Ready)

For the GitHub "Topics" field, add these (comma-separated in UI, or space-separated via API):

```
local-first data-pipeline ai-analytics reference-implementation open-source nextjs typescript react tailwindcss dlt dbt duckdb rust python data-engineering machine-learning semantic-layer mcp model-context-protocol developer-tools analytics portfolio data-analysis ai-tools database-extension data-visualization conversational-ai
```

**Total**: 28 topics (GitHub allows up to 20 visible, but you can add more)

## Recommended: Top 20 Topics (Most Important)

If you need to prioritize to 20 topics:

```
local-first
data-pipeline
ai-analytics
reference-implementation
open-source
nextjs
typescript
dlt
dbt
duckdb
data-engineering
machine-learning
semantic-layer
mcp
model-context-protocol
developer-tools
analytics
rust
python
portfolio
```

## Repository Settings

### General Settings

- **Features**:
  - ✅ Wikis (if you want to add additional docs)
  - ✅ Issues (for bug reports and discussions)
  - ✅ Projects (optional, for tracking)
  - ✅ Discussions (recommended for community)

- **Pull Requests**:
  - ✅ Allow squash merging (recommended)
  - ✅ Allow merge commits
  - ✅ Automatically delete head branches

- **Archives**:
  - ⚠️ **Do NOT archive the repository yet** - keep it active for the website
  - Mark individual ecosystem projects as archived instead

### Social Preview

The repository will use your existing OG image (`/public/og-image.svg`).

To set a custom social preview image:
1. Go to Settings → General → Social preview
2. Upload an image (1280x640px recommended)
3. Or use the auto-generated preview

### Security

- ✅ Enable **Dependabot alerts**
- ✅ Enable **Dependabot security updates**
- ✅ Enable **Secret scanning**
- ✅ Enable **Private vulnerability reporting**

### About Section

**Website**: `https://sbdk.dev`

**Topics**: (See above)

**Description**: (See above)

## How to Apply These Settings

### Via GitHub UI

1. **Go to your repository**: https://github.com/sbdk-dev/sbdk.dev
2. **Click "⚙️ Settings"** (top right)
3. **Update description**:
   - Click the "⚙️" gear icon next to "About" on the main repo page
   - Paste the description
   - Add website URL: `https://sbdk.dev`
   - Click "Save changes"
4. **Add topics**:
   - Still in the "About" section
   - Click "+ Add topics"
   - Type each topic (they'll autocomplete)
   - Click "Done"

### Via GitHub CLI

```bash
# Update description
gh repo edit sbdk-dev/sbdk.dev \
  --description "Website and central hub for the SBDK ecosystem - five open-source reference implementations demonstrating how to build local-first data and AI tools (data pipelines, ML inference, semantic layers, conversational analytics, and MCP integration)" \
  --homepage "https://sbdk.dev"

# Add topics (requires GitHub API)
gh api repos/sbdk-dev/sbdk.dev/topics -X PUT \
  -f names='["local-first","data-pipeline","ai-analytics","reference-implementation","open-source","nextjs","typescript","react","tailwindcss","dlt","dbt","duckdb","rust","python","data-engineering","machine-learning","semantic-layer","mcp","model-context-protocol","developer-tools"]'
```

### Via GitHub API (curl)

```bash
# Update repository settings
curl -X PATCH \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/sbdk-dev/sbdk.dev \
  -d '{
    "description": "Website and central hub for the SBDK ecosystem - five open-source reference implementations demonstrating how to build local-first data and AI tools (data pipelines, ML inference, semantic layers, conversational analytics, and MCP integration)",
    "homepage": "https://sbdk.dev"
  }'

# Update topics
curl -X PUT \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.mercy-preview+json" \
  https://api.github.com/repos/sbdk-dev/sbdk.dev/topics \
  -d '{
    "names": [
      "local-first",
      "data-pipeline",
      "ai-analytics",
      "reference-implementation",
      "open-source",
      "nextjs",
      "typescript",
      "react",
      "tailwindcss",
      "dlt",
      "dbt",
      "duckdb",
      "rust",
      "python",
      "data-engineering",
      "machine-learning",
      "semantic-layer",
      "mcp",
      "model-context-protocol",
      "developer-tools"
    ]
  }'
```

## README Badge Setup

Add these badges to the top of your README for a professional look:

```markdown
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fsbdk.dev&label=sbdk.dev)](https://sbdk.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/sbdk-dev/sbdk.dev.svg?style=social&label=Star)](https://github.com/sbdk-dev/sbdk.dev)
[![GitHub last commit](https://img.shields.io/github/last-commit/sbdk-dev/sbdk.dev)](https://github.com/sbdk-dev/sbdk.dev/commits)
```

These will show:
- Website status (live/down)
- MIT License
- Star count (with star button)
- Last commit date

## Verification Checklist

Before publishing, verify:

- [ ] No API keys or secrets in code (✅ Completed)
- [ ] Repository URL in package.json is correct (✅ Completed)
- [ ] No personal file paths in code (✅ Completed)
- [ ] Dependencies have no critical vulnerabilities (✅ Completed)
- [ ] README.md is up to date (✅ Completed)
- [ ] SECURITY.md reflects archived status (✅ Completed)
- [ ] CONTRIBUTING.md reflects archived status (✅ Completed)
- [ ] All documentation files are clean and professional
- [ ] Description and topics are set in GitHub
- [ ] Website URL is set in GitHub
- [ ] Social preview image looks good
- [ ] License file is present (MIT)
- [ ] .gitignore is comprehensive

## Post-Publication Tasks

After making the repository public:

1. **Submit to Directories**:
   - [GitHub Topics](https://github.com/topics)
   - [Awesome Lists](https://github.com/topics/awesome) (find relevant ones)
   - [Made with Next.js](https://www.madewith.nextjs.org/)

2. **Social Sharing**:
   - Share on Twitter/X with relevant hashtags
   - Share on LinkedIn with professional context
   - Share on Reddit (r/datascience, r/programming, etc.)
   - Share on Hacker News (Show HN)

3. **Documentation**:
   - Consider creating a Wiki for detailed guides
   - Enable GitHub Discussions for community
   - Set up GitHub Projects for tracking (optional)

4. **Monitoring**:
   - Set up GitHub Insights to track traffic
   - Monitor Issues and Discussions
   - Review Dependabot alerts regularly

## Notes

- This repository is the **website/hub** for the ecosystem
- Individual projects (sbdk-dev, local-inference, etc.) are separate repos
- This repo should remain **active** (not archived) since it's the live website
- Mark individual tool repos as archived, not this one

# Analytics & SEO Setup Guide

This document explains the SEO, AEO, and analytics setup for SBDK.dev.

## Table of Contents
- [SEO Optimization](#seo-optimization)
- [AEO Optimization](#aeo-optimization)
- [Google Search Console](#google-search-console)
- [Posthog Analytics](#posthog-analytics)
- [Custom Event Tracking](#custom-event-tracking)

## SEO Optimization

### Implemented Features

1. **Meta Tags** (app/layout.tsx:5-62)
   - Title with template
   - Description
   - Keywords
   - Authors, creator, publisher
   - Robots directives
   - Open Graph tags for social sharing
   - Twitter card metadata
   - Canonical URLs

2. **Sitemap** (app/sitemap.ts)
   - Automatically generated at `/sitemap.xml`
   - Includes homepage and pricing page
   - Configured with change frequency and priority

3. **Robots.txt** (app/robots.txt)
   - Allows all search engines
   - Points to sitemap
   - Configured with crawl delay

## AEO Optimization (Answer Engine Optimization)

### Structured Data

We use Schema.org JSON-LD markup for better visibility in AI-powered search engines:

1. **SoftwareApplication Schema** (app/layout.tsx:77-107)
   - Application details
   - Pricing information
   - Rating information
   - Download URL

2. **Organization Schema** (app/layout.tsx:109-125)
   - Company information
   - Logo and social links
   - Description

3. **FAQPage Schema** (app/layout.tsx:127-186)
   - All FAQ questions and answers
   - Optimized for Google's FAQ rich results
   - Helps with voice search and AI assistants

### Benefits
- Better visibility in ChatGPT, Perplexity, and other AI search tools
- Enhanced rich snippets in Google Search
- Improved voice search optimization
- Better featured snippet opportunities

## Google Search Console

### Setup Instructions

1. Visit [Google Search Console](https://search.google.com/search-console)
2. Add property for `https://sbdk.dev`
3. Choose "HTML tag" verification method
4. Copy the verification code
5. Replace `YOUR_VERIFICATION_CODE` in `app/layout.tsx:75`
6. Deploy changes
7. Click "Verify" in Search Console

### Verification Meta Tag Location
File: `app/layout.tsx:75`
```tsx
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

## Posthog Analytics

### Setup Instructions

1. **Create Posthog Account**
   - Sign up at [posthog.com](https://posthog.com)
   - Create a new project
   - Copy your Project API Key

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add:
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=phc_your_actual_key_here
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

3. **Deploy**
   - For local development: restart the dev server
   - For production: add environment variables to your hosting platform

### What's Tracked Automatically

The Posthog integration automatically tracks:

- **Pageviews**: Every page navigation
- **Page Leaves**: When users leave pages
- **Autocapture Events**: Clicks on buttons, links, form interactions
- **Session Recordings**: User sessions (optional, configured in PosthogProvider)

### Configuration
Provider: `components/PosthogProvider.tsx`

Key features:
- Client-side only (doesn't run on server)
- Manual pageview capture for better control
- Autocapture for common interactions
- Person profiles only for identified users

## Custom Event Tracking

### Analytics Helper Library
File: `lib/analytics.ts`

### Available Methods

#### 1. Generic Event Tracking
```tsx
import { analytics } from '@/lib/analytics'

analytics.track('event_name', {
  property1: 'value1',
  property2: 'value2'
})
```

#### 2. Button Clicks
```tsx
analytics.trackButtonClick('Get Started', {
  location: 'hero',
  target_url: 'https://github.com/sbdk-dev/sbdk-dev'
})
```

#### 3. Demo Interactions
```tsx
analytics.trackDemoInteraction('pipeline_play', {
  step: 'extract'
})
```

#### 4. Terminal Commands
```tsx
analytics.trackTerminalCommand('sbdk init my-pipeline')
```

#### 5. Pipeline Visualizer
```tsx
analytics.trackPipelineView('step_completed', {
  step_name: 'extract',
  duration_ms: 1500
})
```

#### 6. CTA Clicks
```tsx
analytics.trackCTA('hero', 'Try Live Demo', '#demo')
```

#### 7. Section Views
```tsx
analytics.trackSectionView('pricing')
```

#### 8. External Links
```tsx
analytics.trackExternalLink(
  'https://github.com/sbdk-dev/sbdk-dev',
  'Star on GitHub'
)
```

#### 9. GitHub Clicks
```tsx
analytics.trackGitHubClick('header')
```

### Usage Example

Add tracking to a button:
```tsx
'use client'

import { analytics } from '@/lib/analytics'

export default function CTAButton() {
  return (
    <button
      onClick={() => {
        analytics.trackCTA('hero', 'Get Started', 'https://github.com/sbdk-dev/sbdk-dev')
      }}
    >
      Get Started
    </button>
  )
}
```

### Recommended Events to Track

For conversion optimization:
- CTA clicks (all major buttons)
- GitHub link clicks
- Demo interactions
- Pricing page views
- Download/install button clicks

For engagement analysis:
- Section scroll depth
- Terminal command executions
- Pipeline visualizer interactions
- FAQ expansions (if implemented)

## Verification & Testing

### Test SEO
1. Build the site: `npm run build`
2. Check meta tags: View page source
3. Validate structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)
4. Check sitemap: Visit `/sitemap.xml`
5. Check robots: Visit `/robots.txt`

### Test Analytics
1. Set up Posthog environment variables
2. Run dev server: `npm run dev`
3. Open Posthog dashboard
4. Navigate the site and watch events appear in real-time
5. Check that pageviews and custom events are captured

### Common Issues

**Posthog not tracking:**
- Verify environment variables are set correctly
- Check browser console for errors
- Ensure ad blockers aren't blocking Posthog
- Verify the API key is correct

**Schema markup not showing:**
- Run [Google Rich Results Test](https://search.google.com/test/rich-results)
- Allow 1-2 weeks for Google to crawl and index
- Check for JSON-LD syntax errors

## Production Checklist

- [ ] Add Posthog API key to production environment variables
- [ ] Replace Google Search Console verification code
- [ ] Verify sitemap is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test Posthog events in production
- [ ] Set up Posthog dashboards for key metrics
- [ ] Configure Posthog alerts for important events

## Monitoring & Optimization

### Key Metrics to Track
- Organic search traffic (Google Search Console)
- Conversion rate (CTA clicks → GitHub stars)
- Demo engagement (terminal interactions, pipeline views)
- Page scroll depth
- Bounce rate by landing page

### Regular Tasks
- Weekly: Review Posthog event data
- Monthly: Check Google Search Console for crawl errors
- Monthly: Review and update FAQ schema if questions change
- Quarterly: Update structured data based on new features

## Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Posthog Documentation](https://posthog.com/docs)
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

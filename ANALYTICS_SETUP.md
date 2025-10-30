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

### Step-by-Step Setup Instructions

1. **Go to Google Search Console**
   - Visit [Google Search Console](https://search.google.com/search-console)
   - Sign in with your Google account

2. **Add Your Property**
   - Click "Add Property" or "Add a property"
   - Choose "URL prefix" option
   - Enter: `https://sbdk.dev`
   - Click "Continue"

3. **Get Verification Code**
   - Google will show several verification methods
   - Select "HTML tag" method
   - You'll see a meta tag that looks like:
     ```html
     <meta name="google-site-verification" content="abc123XYZ..." />
     ```
   - Copy ONLY the content value (the part inside quotes after `content=`)
   - Example: If the tag is `content="abc123XYZ"`, copy `abc123XYZ`

4. **Add Code to Your Site**
   - Open `app/layout.tsx:75`
   - Replace `YOUR_VERIFICATION_CODE` with the code you copied
   - Before:
     ```tsx
     <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
     ```
   - After:
     ```tsx
     <meta name="google-site-verification" content="abc123XYZ" />
     ```

5. **Deploy and Verify**
   - Commit and push your changes
   - Wait for deployment to complete
   - Go back to Google Search Console
   - Click "Verify" button
   - Google will check your site and confirm verification

6. **Submit Sitemap**
   - After verification, go to "Sitemaps" in the left menu
   - Enter: `sitemap.xml`
   - Click "Submit"

### Verification Meta Tag Location
File: `app/layout.tsx:75`
```tsx
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

## Posthog Analytics

### Setup Instructions

#### 1. Create Posthog Account
- Sign up at [posthog.com](https://posthog.com)
- Create a new project
- Go to Project Settings → Project Variables
- Copy your **Project API Key** (starts with `phc_`)

#### 2. Add to GitHub Secrets

1. **Go to Repository Settings**
   - Navigate to your GitHub repository: https://github.com/sbdk-dev/sbdk.dev
   - Click "Settings" tab
   - Click "Secrets and variables" → "Actions" in left sidebar

2. **Add Repository Secrets**
   Click "New repository secret" and add:

   **Secret 1:**
   - Name: `NEXT_PUBLIC_POSTHOG_KEY`
   - Value: Your Posthog API key (e.g., `phc_abc123...`)

   **Secret 2:**
   - Name: `NEXT_PUBLIC_POSTHOG_HOST`
   - Value: `https://us.i.posthog.com` (or your Posthog instance URL)

#### 3. Configure Deployment Platform

**For Vercel (Detailed Steps):**

1. **Navigate to Environment Variables**
   - Go to your Vercel dashboard: https://vercel.com
   - Select your project: `sbdk-dev`
   - Click on "Settings" tab
   - Click on "Environment Variables" in the left sidebar

2. **Add First Variable - PostHog API Key**
   - Click "Add New" button
   - Key: `NEXT_PUBLIC_POSTHOG_KEY`
   - Value: `phc_x3OrNNG8NNa6N6JyMLtCn1OKBAezkye5Xkn8c1NlSWc` (or your key from PostHog)
   - Environment: Check ✅ "Production" (and optionally Preview and Development)
   - Click "Save"

3. **Add Second Variable - PostHog Host**
   - Click "Add New" button again
   - Key: `NEXT_PUBLIC_POSTHOG_HOST`
   - Value: `https://us.i.posthog.com`
   - Environment: Check ✅ "Production" (and optionally Preview and Development)
   - Click "Save"

4. **Redeploy Your Site**
   - Go to "Deployments" tab
   - Click the three dots (⋮) on your latest deployment
   - Select "Redeploy"
   - Or simply push a new commit to trigger automatic redeployment

5. **Verify Analytics Are Working**
   - Visit your live site
   - Open PostHog dashboard
   - Go to "Live Events" to see events coming in real-time
   - You should see `$pageview` events appearing

**For Netlify:**
1. Go to Site settings → Environment variables
2. Add the same variables as above
3. Redeploy

**For Railway:**
1. Go to your service → Variables
2. Add the same variables
3. Railway will automatically redeploy

#### 4. Local Development (Optional)

For local testing only:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_POSTHOG_KEY=phc_your_actual_key_here
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

**Important:** Never commit `.env.local` to git!

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

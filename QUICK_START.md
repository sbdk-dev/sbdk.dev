# Quick Start: SEO & Analytics Setup

This guide will get your SEO and analytics up and running in 10 minutes.

## Prerequisites

- Access to GitHub repository settings
- Access to your deployment platform (Vercel/Netlify/Railway)

## 1. Setup Posthog Analytics (5 minutes)

### Get Your Posthog API Key

1. Go to [posthog.com](https://posthog.com) and create a free account
2. Create a new project (or use existing)
3. Navigate to: **Project Settings** → **Project Variables**
4. Copy your **Project API Key** (starts with `phc_`)

### Add to Your Deployment Platform

**Choose your platform:**

<details>
<summary><b>Vercel</b></summary>

1. Go to: https://vercel.com/[your-account]/sbdk-dev/settings/environment-variables
2. Click "Add New"
3. Add these two variables:
   ```
   Key: NEXT_PUBLIC_POSTHOG_KEY
   Value: phc_your_key_here

   Key: NEXT_PUBLIC_POSTHOG_HOST
   Value: https://us.i.posthog.com
   ```
4. Click "Save"
5. Redeploy: Go to Deployments → Click "..." → "Redeploy"

</details>

<details>
<summary><b>Netlify</b></summary>

1. Go to: Site settings → Environment variables
2. Add these variables:
   ```
   NEXT_PUBLIC_POSTHOG_KEY = phc_your_key_here
   NEXT_PUBLIC_POSTHOG_HOST = https://us.i.posthog.com
   ```
3. Trigger deploy: Deploys → Trigger deploy

</details>

<details>
<summary><b>Railway</b></summary>

1. Go to your service → Variables tab
2. Click "New Variable"
3. Add:
   ```
   NEXT_PUBLIC_POSTHOG_KEY = phc_your_key_here
   NEXT_PUBLIC_POSTHOG_HOST = https://us.i.posthog.com
   ```
4. Railway auto-redeploys

</details>

### Verify It Works

1. Visit your deployed site
2. Open Posthog dashboard → Activity
3. You should see pageview events appearing in real-time!

## 2. Setup Google Search Console (5 minutes)

### Get Verification Code

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose **URL prefix**
4. Enter: `https://sbdk.dev`
5. Click "Continue"
6. Select **HTML tag** method
7. Copy the code from: `<meta name="google-site-verification" content="THIS_PART" />`
   - Example: Copy `abc123XYZ` from `content="abc123XYZ"`

### Add to Your Site

1. Open: `app/layout.tsx` (line 75)
2. Replace:
   ```tsx
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
   With:
   ```tsx
   <meta name="google-site-verification" content="abc123XYZ" />
   ```
3. Commit and push:
   ```bash
   git add app/layout.tsx
   git commit -m "feat: add Google Search Console verification"
   git push
   ```

### Verify in Console

1. Wait for deployment (~2 minutes)
2. Go back to Google Search Console
3. Click "Verify"
4. You should see: ✅ "Ownership verified"

### Submit Sitemap

1. In Google Search Console, click "Sitemaps" (left menu)
2. Enter: `sitemap.xml`
3. Click "Submit"

Done! Google will start indexing your site.

## 3. Verify Everything Works

### Check SEO
- ✅ Visit: https://sbdk.dev/sitemap.xml (should show sitemap)
- ✅ Visit: https://sbdk.dev/robots.txt (should show robots file)
- ✅ Test structured data: https://search.google.com/test/rich-results
  - Enter your URL
  - Should show: SoftwareApplication, Organization, FAQPage

### Check Analytics
- ✅ Visit your site
- ✅ Click around (buttons, links)
- ✅ Check Posthog dashboard
- ✅ Should see: pageviews, clicks, autocapture events

## What's Being Tracked?

### Automatic Tracking
- **Pageviews** - Every page navigation
- **Clicks** - All button and link clicks
- **Forms** - Form interactions
- **Sessions** - User session duration

### Custom Events (Available)
You can add custom tracking to any component:

```tsx
import { analytics } from '@/lib/analytics'

// Track CTA clicks
analytics.trackCTA('hero', 'Get Started', '/github')

// Track demo interactions
analytics.trackDemoInteraction('pipeline_started')

// Track GitHub clicks
analytics.trackGitHubClick('header')
```

See `lib/analytics.ts` for all available tracking methods.

## Monitoring

### Daily Tasks
- Check Posthog for traffic and engagement

### Weekly Tasks
- Review conversion metrics (CTA clicks → GitHub stars)
- Check demo engagement rates

### Monthly Tasks
- Review Google Search Console for:
  - Crawl errors
  - Search performance
  - Index coverage
- Update FAQ schema if questions change

## Troubleshooting

### Posthog not tracking

**Issue:** No events in Posthog dashboard

**Solutions:**
1. Check environment variables are set correctly
2. Look for errors in browser console (F12)
3. Disable ad blockers temporarily
4. Verify API key is correct (starts with `phc_`)

### Google verification failed

**Issue:** "Verification failed" message

**Solutions:**
1. Check the verification code is correct in `app/layout.tsx:75`
2. Ensure site is deployed and accessible
3. Wait 1-2 minutes and try again
4. Clear cache: Ctrl+Shift+R on your site

### Structured data not showing

**Issue:** Rich results test shows errors

**Solutions:**
1. Wait 24-48 hours for Google to crawl
2. Check JSON-LD syntax in browser DevTools
3. Submit sitemap to Search Console
4. Verify no JavaScript errors on page

## Need Help?

- Full documentation: See `ANALYTICS_SETUP.md`
- Posthog docs: https://posthog.com/docs
- Google Search Console: https://support.google.com/webmasters

## Production Checklist

Before going live:
- [ ] Posthog API key added to deployment platform
- [ ] Google Search Console verification code added
- [ ] Site deployed and accessible
- [ ] Verified in Google Search Console
- [ ] Sitemap submitted to Google
- [ ] Posthog events appearing
- [ ] Structured data validated
- [ ] No console errors on site

---

**Total setup time:** ~10 minutes
**Result:** Full SEO + Analytics tracking ready!

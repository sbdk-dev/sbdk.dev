# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link project
# First deployment will be to a preview URL
# Use `vercel --prod` for production deployment
```

### Option 2: GitHub Integration

1. Push code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import from GitHub: `sbdk-dev/sbdk.dev`
5. Framework Preset: **Next.js** (auto-detected)
6. Click "Deploy"

**That's it!** Vercel will:
- Auto-detect Next.js
- Build the project
- Deploy to a .vercel.app domain
- Set up automatic deployments for future pushes

### Option 3: Deploy Button

Click this button to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sbdk-dev/sbdk.dev)

## Custom Domain Setup

After deployment:

1. Go to Project Settings → Domains
2. Add your custom domain: `sbdk.dev`
3. Configure DNS:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`

   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

4. Wait for DNS propagation (5-30 minutes)
5. Vercel auto-issues SSL certificate

## Environment Variables

No environment variables required for basic deployment.

Optional variables you can add in Vercel dashboard:

```env
# Analytics (if you add tracking)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=sbdk.dev

# Custom site URL (auto-set by Vercel)
NEXT_PUBLIC_SITE_URL=https://sbdk.dev
```

## Build Configuration

Already configured in `vercel.json`:
- ✅ Next.js framework auto-detected
- ✅ Security headers enabled
- ✅ LLM files properly served with correct content-type
- ✅ Clean URLs enabled
- ✅ Regional deployment (US East)

## Performance Optimization

The site is already optimized for Vercel:
- Static generation where possible
- Automatic code splitting
- Image optimization with `next/image`
- Font optimization with system fonts
- Edge runtime ready

## Deployment Checklist

- [x] Next.js project initialized
- [x] Build tested locally (`npm run build`)
- [x] vercel.json configured
- [x] LLM files added for AI discoverability
- [x] SEO metadata configured
- [x] Sitemap and robots.txt created
- [ ] Deploy to Vercel
- [ ] Test deployed site
- [ ] Configure custom domain
- [ ] Set up analytics (optional)

## Alternative Platforms

### Cloudflare Pages

```bash
# Install Wrangler CLI
npm install -g wrangler

# Deploy
npx @cloudflare/next-on-pages
wrangler pages publish .vercel/output/static
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Docker (Self-hosted)

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

## Post-Deployment

### Test Your Deployment

1. **Homepage:** https://sbdk.dev
2. **Pricing:** https://sbdk.dev/pricing
3. **Sitemap:** https://sbdk.dev/sitemap.xml
4. **Robots:** https://sbdk.dev/robots.txt
5. **LLM Files:**
   - https://sbdk.dev/llms.txt
   - https://sbdk.dev/llms-full.txt

### SEO Validation

- [ ] Test with [Google Rich Results](https://search.google.com/test/rich-results)
- [ ] Validate structured data
- [ ] Check mobile-friendliness
- [ ] Run Lighthouse audit (target: 95+)
- [ ] Submit sitemap to Google Search Console

### Performance Monitoring

Consider adding:
- [Vercel Analytics](https://vercel.com/analytics) (built-in)
- [Plausible](https://plausible.io) (privacy-friendly)
- [Google Analytics 4](https://analytics.google.com)

## Troubleshooting

### Build fails on Vercel

Check build logs in Vercel dashboard. Common issues:
- Node version mismatch (ensure Node 18+)
- Missing dependencies (run `npm install` locally)
- TypeScript errors (run `npm run type-check`)

### LLM files not accessible

Check:
- Files in `public/` directory
- Correct headers in `vercel.json`
- No typos in file paths

### Custom domain not working

- Verify DNS records
- Wait 5-30 minutes for propagation
- Check domain configuration in Vercel dashboard
- Ensure domain is not pointed elsewhere

---

**Ready to deploy?** Run `vercel` in your terminal or connect via GitHub!

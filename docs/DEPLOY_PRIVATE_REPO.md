# Deploying Private Repo to Free Hosting

Since this is a **private GitHub repository**, here are your best free options:

## ✅ Option 1: Railway (Recommended for Private Repos)

Railway offers **500 free hours/month** and supports private repos with GitHub integration.

### Deploy to Railway

1. **Go to [railway.app](https://railway.app)**
2. Click **"Start a New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway to access your private repos
5. Select **sbdk-dev/sbdk.dev**
6. Select branch: **claude/create-promo-website-011CUUnJM2Y8yxLZyvxRjDuj**
7. Railway auto-detects Next.js and deploys!

**Configuration:**
- ✅ Already configured via `railway.json` and `nixpacks.toml`
- ✅ Auto-deploys on every push
- ✅ Free SSL certificate
- ✅ Custom domain support (including Squarespace domains)

**Custom Domain (Squarespace):**
1. In Railway dashboard, go to Settings → Domains
2. Click "Custom Domain"
3. Enter your domain (e.g., `sbdk.dev`)
4. Railway will show you DNS records
5. Go to Squarespace DNS settings:
   - **A Record**: `@` → Railway IP
   - **CNAME**: `www` → Railway URL
6. Wait 5-30 minutes for propagation

**Free Tier Limits:**
- 500 execution hours/month (enough for small-medium traffic)
- $5 credit/month
- No credit card required initially

---

## ✅ Option 2: Netlify

Netlify supports private repos and has generous free tier.

### Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. Click **"Add new site" → "Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select your private repo: **sbdk-dev/sbdk.dev**
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Install Next.js plugin when prompted
7. Click **Deploy**

**Configuration:**
- ✅ Already configured via `netlify.toml`
- ✅ Next.js plugin for optimal performance
- ✅ Auto-deploys on push
- ✅ Free SSL
- ✅ Custom domains (Squarespace compatible)

**Custom Domain (Squarespace):**
1. In Netlify: Site Settings → Domain Management → Add custom domain
2. Enter `sbdk.dev`
3. Netlify shows DNS records:
   - **A Record**: `@` → `75.2.60.5`
   - **CNAME**: `www` → `your-site.netlify.app`
4. Update in Squarespace DNS settings
5. Wait for propagation

**Free Tier:**
- 300 build minutes/month
- 100GB bandwidth/month
- Unlimited sites

---

## ✅ Option 3: Render

Another great option for private repos.

### Deploy to Render

1. **Go to [render.com](https://render.com)**
2. Click **"New +" → "Web Service"**
3. Connect GitHub account
4. Select private repo: **sbdk-dev/sbdk.dev**
5. Configure:
   - Name: `sbdk-dev`
   - Environment: `Node`
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
6. Click **Create Web Service**

**Free Tier:**
- 750 hours/month
- Automatic SSL
- Custom domains supported

---

## ✅ Option 4: Cloudflare Pages

Cloudflare Pages is 100% free and supports private repos.

### Deploy to Cloudflare Pages

1. **Go to [pages.cloudflare.com](https://pages.cloudflare.com)**
2. Click **"Create a project"**
3. Connect GitHub account
4. Select **sbdk-dev/sbdk.dev**
5. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Output directory: `.next`
6. Click **Save and Deploy**

**Free Tier:**
- Unlimited sites
- Unlimited bandwidth
- 500 builds/month
- Built-in CDN

---

## ✅ Option 5: Fly.io (Docker-based)

If you want full control, use Docker.

### Deploy to Fly.io

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Login
fly auth login

# Launch app (in your project directory)
fly launch --name sbdk-dev

# Deploy
fly deploy
```

**Free Tier:**
- 3 shared-cpu VMs
- 160GB bandwidth/month
- 3GB persistent storage

---

## 🌐 Squarespace Domain Setup

Your Squarespace domain works with **all** these platforms. General steps:

### In Squarespace:
1. Go to **Settings → Domains → DNS Settings**
2. Click **Advanced DNS Settings**
3. Add records provided by your hosting platform

### Typical Records:

**For root domain (sbdk.dev):**
```
Type: A
Host: @
Value: [IP from hosting platform]
TTL: 3600
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: [URL from hosting platform]
TTL: 3600
```

**For Railway/Render/Fly:**
They may provide a CNAME instead of A record - follow their specific instructions.

---

## 📊 Platform Comparison

| Platform | Free Tier | Build Time | Custom Domain | Best For |
|----------|-----------|------------|---------------|----------|
| **Railway** | 500 hrs/mo | Fast | ✅ Easy | Private repos, Node apps |
| **Netlify** | 300 min/mo | Fast | ✅ Easy | JAMstack, Next.js |
| **Render** | 750 hrs/mo | Medium | ✅ Easy | Full-stack apps |
| **Cloudflare** | Unlimited | Fast | ✅ Very Easy | Static + Edge |
| **Fly.io** | 3 VMs | Medium | ✅ Medium | Docker apps |

---

## 🚀 My Recommendation: Railway

For your private repo, I recommend **Railway** because:
1. ✅ **Best GitHub integration** for private repos
2. ✅ **Already configured** (railway.json + nixpacks.toml)
3. ✅ **Auto-detects Next.js** - zero config needed
4. ✅ **Generous free tier** - 500 hours is plenty for this site
5. ✅ **Easy custom domains** - works great with Squarespace
6. ✅ **Fast deployments** - usually under 2 minutes

---

## 🎯 Quick Start: Railway Deployment

### Step-by-Step:

1. **Visit [railway.app](https://railway.app)**
2. Click **"Start a New Project"**
3. Choose **"Deploy from GitHub repo"**
4. Find **sbdk-dev/sbdk.dev**
5. Railway auto-deploys (uses our railway.json config)
6. Get deployment URL (e.g., `sbdk-dev.up.railway.app`)
7. Test it!
8. Add custom domain in Railway settings
9. Update Squarespace DNS

**Total time:** 5-10 minutes

---

## 🔧 Build Verification

Before deploying, verify it builds:

```bash
npm run build
npm start
# Visit http://localhost:3000
```

If that works, deployment will work! ✅

---

## 💡 Vercel Workaround (If You Want It)

**Option A: Make repo public** (if you're okay with that)
- Repo → Settings → Danger Zone → Change visibility → Public
- Then Vercel free tier works

**Option B: Vercel Pro** ($20/month)
- Supports unlimited private repos
- Best performance (they made Next.js)

**Option C: Deploy via CLI (sometimes works)**
```bash
vercel login
vercel --prod
```

But honestly, Railway/Netlify are better for private repos on free tier.

---

## 📝 Files Included

I've added configs for all platforms:
- ✅ `railway.json` - Railway config
- ✅ `nixpacks.toml` - Railway build config
- ✅ `netlify.toml` - Netlify config
- ✅ `Dockerfile` - For Fly.io/Render/any Docker platform
- ✅ `vercel.json` - In case you make repo public

Pick your platform and deploy! 🚀

---

**Need help?** Let me know which platform you choose and I can provide more specific guidance!

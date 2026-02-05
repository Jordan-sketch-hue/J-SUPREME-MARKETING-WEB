# J Supreme Marketing - Deployment Guide

## Quick Start

### Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

## Deployment Options

### 1. Vercel (Recommended - Easiest)

**Why Vercel?**
- Built specifically for Next.js
- Zero configuration deployment
- Automatic HTTPS and CDN
- Free tier available

**Steps:**
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! Your site is live

**Custom Domain:**
- Add your domain in Vercel dashboard
- Update DNS records as instructed
- SSL is automatic

### 2. Netlify

**Steps:**
1. Push code to Git repository
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

### 3. AWS Amplify

**Steps:**
1. Go to AWS Amplify Console
2. Connect your Git repository
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
4. Deploy

### 4. Traditional Hosting (cPanel/VPS)

**Requirements:**
- Node.js 18+ installed
- PM2 for process management

**Steps:**
```bash
# On your server
git clone your-repo
cd JSUPREMEMARKETINGWEBSITE
npm install
npm run build

# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start npm --name "jsm-website" -- start
pm2 save
pm2 startup
```

## Environment Variables

Create `.env.local` for local development:

```env
# Example variables
NEXT_PUBLIC_SITE_URL=https://jsuprememarketing.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Email service (optional)
EMAIL_SERVICE_API_KEY=your-api-key
EMAIL_FROM=noreply@jsuprememarketing.com

# CRM Integration (optional)
CRM_API_KEY=your-crm-api-key
```

## Custom Domain Setup

### Vercel/Netlify
1. Add domain in dashboard
2. Update DNS records:
   - Type: A Record
   - Name: @ (or www)
   - Value: Provided IP
3. Wait for propagation (up to 48 hours)

### Traditional Hosting
1. Point A record to server IP
2. Configure Nginx/Apache as reverse proxy
3. Set up SSL with Let's Encrypt:
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Performance Optimization

### Before Deployment
- [x] Images optimized (use Next.js Image component)
- [x] Minification enabled in build
- [x] Lazy loading implemented
- [x] Fonts preloaded

### After Deployment
1. Test with [PageSpeed Insights](https://pagespeed.web.dev)
2. Set up CDN if not using Vercel
3. Enable caching headers
4. Compress responses (gzip/brotli)

## Analytics Setup

### Google Analytics
1. Get GA4 tracking ID
2. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add Google Analytics script to `app/layout.tsx`

### Facebook Pixel (Optional)
Add Meta Pixel code to track conversions from ads.

## Form Integration

### Email Service Integration
Update form handlers in:
- `components/audit/AuditForm.tsx`
- `components/contact/ContactForm.tsx`

Example with SendGrid:
```typescript
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### CRM Integration Options
- HubSpot
- Salesforce
- ActiveCampaign
- ConvertKit

## Monitoring

### Recommended Tools
- **Uptime**: UptimeRobot, Pingdom
- **Analytics**: Google Analytics, Plausible
- **Errors**: Sentry, LogRocket
- **Performance**: Vercel Analytics, New Relic

## Security Checklist

- [x] HTTPS enabled
- [x] Environment variables secured
- [ ] Rate limiting on forms
- [ ] CORS configured
- [ ] Security headers set
- [ ] Regular dependency updates

## Backup Strategy

1. Git repository (primary backup)
2. Database backups (if using)
3. Media files backup
4. Environment variables stored securely

## Support

For deployment issues:
1. Check build logs
2. Verify Node.js version (18+)
3. Clear cache and rebuild
4. Check environment variables

## Cost Estimates

### Vercel
- Free tier: Perfect for most sites
- Pro: $20/month (if needed)

### Netlify
- Free tier: Generous limits
- Pro: $19/month

### Traditional VPS
- DigitalOcean: $6-12/month
- Linode: $5-10/month
- AWS: Variable (typically $10-30/month)

## Next Steps After Deployment

1. Test all pages and forms
2. Set up analytics
3. Configure email notifications
4. Add sitemap to Google Search Console
5. Set up monitoring/alerts
6. Create regular backup schedule
7. Document any custom configurations

---

**Need Help?**
- Documentation: [Next.js Docs](https://nextjs.org/docs)
- Deployment: [Vercel Docs](https://vercel.com/docs)
- Community: [Next.js GitHub](https://github.com/vercel/next.js)

Happy Deploying!

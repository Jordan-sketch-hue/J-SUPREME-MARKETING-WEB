# J Supreme Marketing Website

A high-performance, modern marketing agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Dark premium design with gold accents and smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **High Performance**: Built with Next.js 14 for optimal speed and SEO
- **Interactive Animations**: Powered by Framer Motion
- **Lead Capture System**: Free audit form with validation
- **Blog System**: Ready-to-use blog with CMS-ready structure
- **Case Studies**: Featured projects with filterable categories
- **Contact Forms**: Multiple contact points with success states

## Project Structure

```
JSUPREMEMARKETINGWEBSITE/
├── app/
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── free-audit/
│   ├── results/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about/
│   ├── audit/
│   ├── blog/
│   ├── contact/
│   ├── home/
│   ├── layout/
│   ├── results/
│   └── services/
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Orbitron, Inter, Montserrat)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Brand Colors

- **Supreme Black**: `#0B0E11` (Primary background)
- **Platinum White**: `#FFFFFF` (Text on dark)
- **Supreme Gold**: `#C9A24D` (CTAs, highlights)
- **Electric Blue**: `#2F80ED` (Links, accents)
- **Steel Gray**: `#8A8F98` (Subtext)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Hero, services, how it works, social proof, CTA
- **Services** (`/services`) - All service offerings with details
- **Results** (`/results`) - Case studies with filterable categories
- **Free Audit** (`/free-audit`) - Lead capture form
- **Blog** (`/blog`) - Marketing insights and articles
- **About** (`/about`) - Company story and values
- **Contact** (`/contact`) - Contact form and information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in the `.next` folder.

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=your_api_url
```

## Customization

### Updating Content

- Edit page content in respective component files
- Update brand colors in `tailwind.config.ts`
- Modify metadata in each page's `page.tsx`

### Adding New Pages

1. Create new folder in `app/`
2. Add `page.tsx` with page content
3. Update navigation in `Header.tsx`

### Form Integration

Forms are ready to integrate with:
- Email services (SendGrid, Mailgun)
- CRM systems (HubSpot, Salesforce)
- Database (Firebase, Supabase)

Update the `handleSubmit` functions in:
- `components/audit/AuditForm.tsx`
- `components/contact/ContactForm.tsx`

## Performance

- Lighthouse Score: 95+ (target)
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Mobile-optimized with responsive images

## Support

For issues or questions:
- Email: hello@jsuprememarketing.com
- Website: [Your URL]

## License

Copyright © 2026 J Supreme Marketing. All rights reserved.

---

Built with J Supreme Marketing

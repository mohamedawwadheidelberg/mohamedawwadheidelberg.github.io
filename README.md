# BlueRay Precision GmbH Website

Modern, premium biotech B2B website for BlueRay Precision GmbH, a Heidelberg-based company developing standardized flow-cytometry reagents and reference materials for cell therapy diagnostics.

## Overview

This website showcases SCOPE detection reagents and reference materials for CAR T cell monitoring, targeting diagnostic labs, hospitals, and cell therapy manufacturers.

## Features

- **Modern Design**: Clean, professional aesthetic with deep blue color palette
- **Comprehensive Product Pages**: Detailed information about CD19, BCMA detection reagents and reference cells
- **Multi-page Structure**: Home, Technology, Products, Applications, About, Contact, Legal pages
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, sitemap, and semantic HTML
- **German Legal Pages**: GDPR-compliant Impressum and Datenschutzerklärung

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Hosting**: Optimized for GitHub Pages static export

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Building for Production

```bash
npm run build
```

For static export (GitHub Pages):
```bash
npm run build
```

## Customization

### Replace Placeholders

1. **Logo**: Add your logo to `/public/logo.png` or update the navigation component
2. **Images**: Replace placeholder images with actual product photos and lab imagery
3. **Contact Details**: Update Impressum and contact information throughout
4. **Product Figures**: Add actual flow cytometry plots and performance data
5. **Team Photo**: Add professional team/lab photography

### Legal Pages

The Impressum and Datenschutzerklärung contain placeholders marked with `[brackets]`. Fill in:
- Complete address
- Managing director name
- Handelsregister number
- USt-IdNr

## Structure

```
/app
  /page.tsx              # Home page
  /technology/           # Platform technology
  /products/             # Products overview and detail pages
  /applications/         # Use cases
  /about/                # Company information
  /contact/              # Contact form
  /legal/                # Impressum & Datenschutz
/components              # Reusable components
/public                  # Static assets
```

## Key Pages

- **Home**: Hero with video, problem/solution, featured products, workflow
- **Technology**: Platform overview, consistency approach, IP information
- **Products**: CD19/BCMA reagents, reference cells, coming soon products
- **Applications**: Clinical monitoring, manufacturing, multi-center studies
- **About**: Mission, values, team, location
- **Contact**: Quote request form with validation

## Contact

For questions or support:
- Email: info@blu-ray-precision.com
- Location: Heidelberg, Germany

## License

© 2025 BlueRay Precision GmbH. All rights reserved.

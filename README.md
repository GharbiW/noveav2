# noveaV2

A technology-mediatique company website built with Next.js 16, Tailwind CSS v4, Motion, and headless WordPress.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 with dark/light theme
- **Animation**: Motion (motion/react) — scroll-triggered, gesture-aware
- **Particles**: @tsparticles/react + @tsparticles/slim
- **3D**: @react-three/fiber + @react-three/drei
- **Forms**: React Hook Form + Zod validation
- **CMS**: Headless WordPress via WPGraphQL (optional)
- **Deploy**: Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values (see below).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_WP_GRAPHQL_URL` | No | WordPress WPGraphQL endpoint |
| `WP_AUTH_TOKEN` | No | JWT token for authenticated WP queries |
| `MAKE_COM_WEBHOOK_URL` | No | Make.com webhook for lead submissions |
| `FORMSPREE_ENDPOINT` | No | Formspree endpoint for lead submissions |
| `NEXT_PUBLIC_CALENDLY_URL` | No | Calendly booking page URL |

## Project Structure

```
app/
  layout.tsx              # Root layout (Navbar, Footer, metadata)
  page.tsx                # Home
  services/page.tsx       # Services overview
  consulting/page.tsx     # Consulting Digital
  automation/page.tsx     # Automation & SaaS Marketing
  ai-data/page.tsx        # AI & Data
  media-distribution/     # Média & Distribution
  network/page.tsx        # Media network
  about/page.tsx
  news/page.tsx
  contact/page.tsx
  thank-you/page.tsx
  launch/page.tsx
  development/page.tsx
  actions.ts              # Server action for lead form submission
  sitemap.ts
  robots.ts
components/
  home/                   # Home page sections (Hero, Services, Network, etc.)
  services/               # Reusable service detail components
  network/                # Network page components
  layout/                 # Navbar, Footer
  ui/                     # Primitive UI components (button, card, input, ScrollReveal)
lib/
  env.ts                  # Environment variable access
  wp-graphql.ts           # WordPress fetch wrapper + types
  schema.ts               # Zod schemas for lead form
  utils.ts                # cn() utility
```

## Deployment (Vercel)

1. Push this repo to GitHub
2. Connect to Vercel → New Project → Import from GitHub
3. Set environment variables in Vercel dashboard
4. Deploy — builds automatically on every push to `main`

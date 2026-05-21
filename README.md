# Aji Nuansa Sengarie — Developer Portfolio

A modern, responsive, dark-mode developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, animations, utility classes
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Main page (assembles all sections)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with avatar & CTA
│   │   ├── About.tsx        # About me + highlight cards
│   │   ├── Skills.tsx       # Skills grid by category
│   │   ├── Experience.tsx   # Timeline-style experience
│   │   ├── Projects.tsx     # Project cards with stack badges
│   │   └── Contact.tsx      # Contact links + form
│   ├── ui/
│   │   ├── Badge.tsx        # Reusable badge component
│   │   ├── Button.tsx       # Animated button component
│   │   └── SectionTitle.tsx # Consistent section heading
│   ├── Navbar.tsx           # Sticky navbar with active section tracking
│   └── Footer.tsx           # Footer with social links
├── lib/
│   └── data.ts              # All portfolio data (skills, experience, projects)
└── types/
    └── index.ts             # TypeScript type definitions
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Customization

All portfolio content is centralized in `src/lib/data.ts`. Edit that file to update:
- **skills** — your tech stack
- **experiences** — work history, education, programs
- **projects** — featured projects with stack and links

Update personal info (name, email, social links) by searching for `ansengarie` and `ansengarie@gmail.com` across the components.

## Features

- Dark mode design with cyan/neon accent colors
- Smooth scroll with active section highlight in navbar
- Scroll-reveal animations on all sections
- Floating hero avatar with animated badges
- Skills grouped by category (Frontend / Backend / Tools)
- Timeline-style experience section
- Project cards with hover animations and tech badges
- Contact form with send animation
- Fully responsive (mobile-first)
- SEO metadata via Next.js Metadata API

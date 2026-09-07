# TechNova Solutions — Landing Page

A responsive single-page marketing site for a fictional technology company,
built with Next.js (App Router) and TypeScript for a frontend developer
technical assessment.

## Live Links

- **Live Site:** _add your Vercel deployment URL here_
- **Repository:** _add your GitHub repository URL here_

## Tech Stack

| Concern        | Choice                              |
| --------------- | ------------------------------------ |
| Framework       | Next.js 14 (App Router)             |
| Language        | TypeScript                          |
| Styling         | Tailwind CSS                        |
| Animation       | Framer Motion                       |
| Icons           | lucide-react                        |
| Dark mode       | next-themes                         |
| Deployment      | Vercel                              |

## Features

- Hero, About, Services, Blog, Testimonials, Contact, and Footer sections
- Reusable components under `/components`
- Blog data sourced from local JSON (`/data/blogs.json`)
- Dynamic blog routes at `/blog/[slug]`, statically generated
- **Bonus:** each blog post page fetches its full body text live from
  `https://jsonplaceholder.typicode.com/posts/{id}`, combined with local
  metadata (title, image, author, category)
- **Bonus:** light/dark theme toggle in the navbar (persisted via
  `next-themes`)
- **Bonus:** hero entrance animation via Framer Motion
- Client-side validated contact form (name, email, phone, message) with
  inline error messages
- SEO via the Next.js Metadata API: page titles, meta description, Open
  Graph and Twitter card tags, per-post metadata on blog pages
- Images served through `next/image` for automatic optimization
- Responsive from mobile through desktop; visible keyboard focus states;
  respects `prefers-reduced-motion`

## Project Structure

```
technova/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, theme provider
│   ├── page.tsx             # Homepage — composes all sections
│   ├── globals.css
│   └── blog/
│       └── [slug]/
│           └── page.tsx     # Dynamic blog post page (bonus)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Blog.tsx
│   ├── BlogCard.tsx
│   ├── Testimonials.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
├── data/
│   ├── blogs.json
│   ├── services.json
│   └── testimonials.json
├── types/
│   └── index.ts
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open the app
# http://localhost:3000
```

Build and run a production build locally:

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset is auto-detected as Next.js — no extra config needed.
4. Deploy. Vercel will build and give you a live URL.

## Suggested Commit History

This project was structured to be committed in the following logical
stages:

1. `chore: project initialization` — Next.js + TypeScript + Tailwind setup
2. `feat: hero section added`
3. `feat: about section added`
4. `feat: services section completed`
5. `feat: blog section implemented`
6. `feat: dynamic blog routes + jsonplaceholder API integration`
7. `feat: testimonials section added`
8. `feat: contact form with validation`
9. `feat: footer, navbar, dark mode toggle`
10. `chore: SEO metadata and Open Graph tags`
11. `docs: README`
12. `chore: deployment completed`

# Axiom Black — Website

Marketing site for Axiom Black. Next.js (App Router) + Tailwind CSS v4 + TypeScript.
Animation: GSAP + Framer Motion. See `BUILD-PLAN.md` for the full plan.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build && npm run start
```

## Deploy (Vercel)

1. Push this folder to a Git repo.
2. Import the repo at vercel.com → framework auto-detected as Next.js.
3. Deploy — free tier covers a site this size (custom domain, CDN, HTTPS).
   Every push gets a preview URL; `main` deploys to production.

## Fonts

Aeonik is the licensed brand typeface. Self-host it in production: drop the
`.woff2` files in `public/fonts/` and switch `src/app/layout.tsx` from
`next/font/google` (DM Sans) to `next/font/local`. DM Sans is the sanctioned
fallback until then.

## Editing content

All copy lives in `src/content/*.ts` as typed data: solutions, products, blog posts
(`blog.ts`), careers (`careers.ts`), legal text (`legal.ts`). Add a blog post by appending
to `posts`; it appears on /blog, the home page, the sitemap and gets Article JSON-LD.

## Status

Phase 0–1 done: black canvas per the brand guide, three-menu nav (Engineering ·
Technology · Company), real content only, legal text carried over from Framer, SEO
(sitemap, robots, llms.txt, OG image, JSON-LD). Deployed on Vercel project
`axiom-black-website` (Axiom Black team). Build board tracks the rest.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at http://localhost:3000
pnpm build      # Production build (TypeScript errors are ignored — see next.config.mjs)
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm install    # Install dependencies
```

## Architecture

**Next.js App Router** project using TypeScript + Tailwind CSS 4 + Shadcn/ui (New York style).

### Pages

- `app/page.tsx` — Main landing page (~740 lines). Sections: hero, about Osh, research findings, heritage/identity (tabs), memory & language, regional variations, FAQ accordion, team cards, references.
- `app/cooking/page.tsx` — Interactive 8-step plov cooking game with score/mistake/meter state.
- `app/layout.tsx` — Root layout with metadata, Vercel Analytics, and skip-to-main link.

### Components

- `components/site-header.tsx` — Nav with IntersectionObserver for scroll-active states; Sheet drawer for mobile.
- `components/ui/` — Shadcn/ui primitives (Radix-based). Do not modify these unless upgrading Shadcn.
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).

### Styling

Custom CSS variables in `app/globals.css`:

```
--color-paper: #f6ead8       (background cream)
--color-ink: #241813         (text dark brown)
--color-spice: #a4522b       (rust/accent)
--color-saffron: #d6a24c     (gold/accent)
```

Fluid spacing uses `clamp()` via `--shell-gutter`, `--section-space`, `--header-offset` variables. Custom keyframe animations: `animate-enter`, `animate-float`, `kazan-pulse`, `grain-overlay`.

### Path alias

`@/*` maps to the project root (configured in `tsconfig.json`).

### Images

Remote images from Wikimedia are allowed in `next.config.mjs`. Next.js image optimization is disabled for those sources.

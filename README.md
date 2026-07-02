# christopherrobinson.uk

Source code for [christopherrobinson.uk](https://christopherrobinson.uk), the personal website of Christopher Robinson. The site is built with Astro and includes portfolio pages, blog posts, downloadable templates, project tools, RSS, sitemap generation, and a small vehicle fuel tracking section.

## Tech Stack

- [Astro](https://astro.build/) for routing, content collections, static rendering, and Netlify output
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://react.dev/) for interactive project components
- [Vitest](https://vitest.dev/) for helper tests
- [Netlify](https://www.netlify.com/) for deployment
- `pnpm` for package management

## Requirements

- Node.js 24
- pnpm 11+

## Getting Started

Install dependencies:

```sh
pnpm install
```

Start the local development server:

```sh
pnpm dev
```

Astro is configured to use HTTPS locally through Vite's basic SSL plugin.

## Scripts

```sh
pnpm dev      # Start the Astro development server
pnpm build    # Run tests, then build the production site
pnpm preview  # Preview the production build locally
pnpm test     # Run Vitest tests once
pnpm check    # Run Astro type and template checks
pnpm astro    # Run the Astro CLI
```

## Project Structure

```text
src/
  components/       Astro and React UI components
  config/           Shared site configuration
  content/          Astro content collections
  data/             Static JSON data
  helpers/          Utility functions and tests
  images/           Source images and icons
  layouts/          Page layouts
  pages/            Astro file-based routes and endpoints
  schema/           Content collection schemas
  styles/           Global Tailwind CSS
  types/            Shared TypeScript types

public/
  download/         Downloadable ZIP files
  fonts/            Local font files
  templates/        Template preview HTML and CSS
```

## Content

Content collections are defined in `src/content.config.ts`.

- Blog posts live in `src/content/blog/**/index.md`
- Markdown pages live in `src/content/pages/**/index.md`
- Vehicle fuel-up data lives in `src/content/vehicles/*.json`

Each collection has a schema in `src/schema/`. Blog posts can include local images alongside their `index.md` file.

## Configuration

Shared site metadata is stored in `src/config/index.ts`.

The optional public environment variable below is defined in `astro.config.mjs`:

```sh
GOOGLE_TAG_MANAGER_ID=
```

Path aliases are configured in `tsconfig.json`, including `@/components/*`, `@/helpers/*`, `@/layouts/*`, and `@/schema/*`.

## Deployment

The site is configured for Netlify:

- Build command: `pnpm run build`
- Publish directory: `dist`
- Node version: `24`

Security and policy headers are defined in `netlify.toml`.

## License

This project is licensed under the Apache License 2.0. See [LICENSE](./LICENSE) for details.

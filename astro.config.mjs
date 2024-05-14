import { defineConfig } from 'astro/config';
import remarkDescription from 'astro-remark-description';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { site } from './src/config';
import { remarkExternalLinks } from './src/helpers/remarkExternalLinks';
import { remarkReadingTime } from './src/helpers/remarkReadingTime';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  integrations: [
    (await import('@playform/compress')).default(),
    prefetch(),
    react(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [
      [remarkDescription, { name: 'excerpt' }],
      [remarkExternalLinks, {}],
      [remarkReadingTime, {}],
    ],
    shikiConfig: {
      theme: 'dracula',
      wrap: false,
    },
  },
  prefetch: {
    prefetchAll: true,
  },
  site: site.url,
  trailingSlash: 'always',
  vite: {
    plugins: [
      basicSsl(),
    ],
    server: {
      https: true,
    },
  },
});

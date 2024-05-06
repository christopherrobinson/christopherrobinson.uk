import { defineConfig } from 'astro/config';
// import Compress from 'astro-compress'
import remarkDescription from 'astro-remark-description';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { stripHtml } from 'string-strip-html';
import { remarkExternalLinks } from './src/helpers/remarkExternalLinks';
import { remarkReadingTime } from './src/helpers/remarkReadingTime';


// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  integrations: [
    // Compress(),
    prefetch(),
    react(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkDescription, {
          name: 'excerpt',
          transform: desc => stripHtml(desc).result
        }
      ],
      [
        remarkExternalLinks, {
        }
      ],
      [
        remarkReadingTime, {
        }
      ],
    ],
    shikiConfig: {
      theme: 'dracula',
      wrap: false,
    },
  },
  prefetch: {
    prefetchAll: true,
  },
  site: 'https://christopherrobinson.uk',
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

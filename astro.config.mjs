import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import remarkDescription from 'astro-remark-description';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import Unimport from 'unimport/unplugin';
import { site } from './src/config';
import templates from './src/data/templates.json';
import { createSlug } from './src/helpers/createSlug';
import { remarkExternalLinks } from './src/helpers/remarkExternalLinks';
import { remarkReadingTime } from './src/helpers/remarkReadingTime';

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        GOOGLE_TAG_MANAGER_ID: envField.string({ access: 'public', context: 'client', optional: true }),
      },
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  integrations: [
    icon({ iconDir: './src/images/icons' }),
    prefetch(),
    react(),
    sitemap({
      customPages: [
        ...templates.map(({ name }) =>
          `${site.url}/templates/${createSlug(name)}/preview/`),
      ],
    }),
    tailwind(),
    (await import('astro-compress')).default(),
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
      Unimport.vite({
        dirs: [
          './src/config/*',
          './src/helpers/*',
          './src/schema/*',
        ],
        dts: true,
        include: [/\.astro$/, /\.[jt]sx?$/],
        presets: [
          { from: 'astro:assets',          imports: [ 'getImage', 'Picture' ] },
          { from: 'astro:components',      imports: [ 'Debug' ] },
          { from: 'astro:content',         imports: [ 'defineCollection', 'getCollection', 'z' ] },
          { from: 'astro:transitions',     imports: [ 'ViewTransitions' ] },
          { from: 'astro-capo',            imports: [ 'Head' ] },
          { from: 'astro-icon/components', imports: [ 'Icon' ] },
          { from: 'react',                 imports: [ 'useState' ] },
          { from: 'string-strip-html',     imports: [ 'stripHtml' ] },
        ],
      }),
    ],
    server: {
      https: true,
    },
  },
});

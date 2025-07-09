import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import remarkDescription from 'astro-remark-description';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import basicSsl from '@vitejs/plugin-basic-ssl';
import Unimport from 'unimport/unplugin';
import { site } from './src/config';
import templates from './src/data/templates.json';
import { createSlug } from './src/helpers/createSlug';
import { remarkExternalLinks } from './src/helpers/remarkExternalLinks';
import { remarkReadingTime } from './src/helpers/remarkReadingTime';

// https://astro.build/config
export default defineConfig({
  adapter: netlify({ imageCDN: false }),
  env: {
    schema: {
      GOOGLE_TAG_MANAGER_ID: envField.string({ access: 'public', context: 'client', optional: true }),
    },
  },
  experimental: {
    contentIntellisense: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  integrations: [
    icon({ iconDir: './src/images/icons' }),
    react(),
    sitemap({
      customPages: [
        ...templates.map(({ name }) =>
          `${site.url}/templates/${createSlug(name)}/preview/`),
      ],
    }),
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
    defaultStrategy: 'hover',
  },
  site: site.url,
  trailingSlash: 'ignore',
  vite: {
    plugins: [
      basicSsl(),
      tailwindcss(),
      Unimport.vite({
        dirs: [
          './src/config/*',
          './src/helpers/*',
        ],
        dts: true,
        include: [/\.astro$/, /\.[jt]sx?$/],
        presets: [
          { from: 'astro:assets',          imports: [ 'getImage', 'Picture' ] },
          { from: 'astro:components',      imports: [ 'Debug' ] },
          { from: 'astro:content',         imports: [ 'defineCollection', 'getCollection', 'render', 'z' ] },
          { from: 'astro:transitions',     imports: [ 'ViewTransitions' ] },
          { from: 'astro/loaders',         imports: [ 'glob' ] },
          { from: 'astro-capo',            imports: [ 'Head' ] },
          { from: 'astro-icon/components', imports: [ 'Icon' ] },
          { from: 'react',                 imports: [ 'useState' ] },
          { from: 'string-strip-html',     imports: [ 'stripHtml' ] },
          { from: 'vitest',                imports: [ 'describe', 'expect', 'it' ] },
        ],
      }),
    ],
    server: {
      https: true,
    },
  },
});

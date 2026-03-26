import { z } from 'astro/zod';
import { blogSchema } from '@/schema/blog.ts'
import { pagesSchema } from '@/schema/pages.ts'
import { vehiclesSchema } from '@/schema/vehicles.ts'

export const collections = {
  blog: defineCollection({
    loader: glob({
      base: './src/content/blog',
      pattern: '**/[^_]*.md',
      retainBody: false,
    }),
    schema: blogSchema,
  }),
  pages: defineCollection({
    loader: glob({
      base: './src/content/pages',
      pattern: '**/[^_]*.md',
      retainBody: false,
    }),
    schema: pagesSchema,
  }),
  vehicles: defineCollection({
    loader: glob({
      base: './src/content/vehicles',
      pattern: '**/[^_]*.json',
      retainBody: false,
    }),
    schema: vehiclesSchema,
  }),
}

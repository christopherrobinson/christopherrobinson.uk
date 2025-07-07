import { blogSchema } from '@/schema/blog.ts'
import { pagesSchema } from '@/schema/pages.ts'
import { vehiclesSchema } from '@/schema/vehicles.ts'

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
    schema: blogSchema,
  }),
  pages: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/pages' }),
    schema: pagesSchema,
  }),
  vehicles: defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: './src/content/vehicles' }),
    schema: vehiclesSchema,
  }),
}

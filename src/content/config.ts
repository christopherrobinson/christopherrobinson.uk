import { blogSchema } from '@/schema/blog.ts'
import { pagesSchema } from '@/schema/pages.ts'
import { vehiclesSchema } from '@/schema/vehicles.ts'

export const collections = {
  blog: defineCollection({ schema: blogSchema, type: 'content',  }),
  pages: defineCollection({ schema: pagesSchema, type: 'content' }),
  vehicles: defineCollection({ schema: vehiclesSchema, type: 'data' }),
}

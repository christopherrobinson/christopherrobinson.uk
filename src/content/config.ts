import { blogSchema } from '@/schema/blog.ts'
import { pagesSchema } from '@/schema/pages.ts'
import { vehiclesSchema } from '@/schema/vehicles.ts'

export const collections = {
  blog: defineCollection({ type: 'content', schema: blogSchema }),
  pages: defineCollection({ type: 'content', schema: pagesSchema }),
  vehicles: defineCollection({ type: 'data', schema: vehiclesSchema }),
}

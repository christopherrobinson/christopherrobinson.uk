import { blogSchema } from '@/schema/blog.ts'
import { pagesSchema } from '@/schema/pages.ts'

export const collections = {
  blog: defineCollection({ type: 'content', schema: blogSchema }),
  pages: defineCollection({ type: 'content', schema: pagesSchema }),
}

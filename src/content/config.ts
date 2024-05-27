import { defineCollection } from 'astro:content';

export const collections = {
  blog: defineCollection({ type: 'content', schema: blogSchema }),
  pages: defineCollection({ type: 'content', schema: pagesSchema }),
}

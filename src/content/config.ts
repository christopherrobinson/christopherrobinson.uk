import { defineCollection } from 'astro:content';
import { blogSchema, pagesSchema } from '@/schema';

export const collections = {
  blog: defineCollection({ type: 'content', schema: blogSchema }),
  pages: defineCollection({ type: 'content', schema: pagesSchema }),
}

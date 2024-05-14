import { defineCollection } from 'astro:content';
import { blogSchema, pagesSchema } from '@/schema';

const blogCollection = defineCollection({ type: 'content', schema: blogSchema });
const pagesCollection = defineCollection({ type: 'content', schema: pagesSchema });

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
}

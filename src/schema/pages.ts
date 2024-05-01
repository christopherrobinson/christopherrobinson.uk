import { z } from 'astro:content'

export const pagesSchema = () => z.object({
  meta: z.object({
    description: z.string().optional(),
    title: z.string().optional(),
  }).optional(),
  title: z.string(),
})

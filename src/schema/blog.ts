export const blogSchema = ({ image }) => z.object({
  date: z.string().or(z.date()).transform((v) => new Date(v)),
  cover: image().optional(),
  meta: z.object({
    description: z.string().optional(),
    title: z.string().optional(),
  }).optional(),
  tags: z.array(z.string()).optional(),
  title: z.string(),
});

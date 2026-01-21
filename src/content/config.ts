import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z
      .string()
      .or(z.date())
      .optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
};



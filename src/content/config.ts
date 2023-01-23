import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    started: z.string(),
    updated: z.string().optional(),
    description: z.string(),
    completionLevel: z.string(),
    topics: z.array(z.string()),
    image: z.string().optional(),
  }),
});
export const collections = {
  'blog': blogCollection,
};

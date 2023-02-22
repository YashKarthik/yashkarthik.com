import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.string(),
    updated: z.string().optional(),
    description: z.string(),
    completionLevel: z.string(),
    topics: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const storiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.string(),
    scifi: z.boolean().optional(),
    image: z.string(),
  }),
});

const weeklyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.string(), // Sat, Feb 4, 2023
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'stories': storiesCollection,
  'weekly': weeklyCollection,
};

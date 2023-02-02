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
    description: z.string(),
    scifi: z.boolean().optional(),
    image: z.string().optional(),
  }),
});

const weeklyCollection = defineCollection({
  schema: z.object({
    //no title object, will create using weekNum: Week 3, Week 30, etc.
    published: z.string(),
    weekNum: z.number(), // In frontmatter: 1
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'stories': storiesCollection,
  'weekly': weeklyCollection,
};

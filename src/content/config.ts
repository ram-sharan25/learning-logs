import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

const learningsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    area: z.string().optional(),
    project: z.string().optional(),
    draft: z.boolean().default(false),
    difficulty: z.string().optional(),
    leetcode_link: z.string().optional(),
  }),
});

const thoughtsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  learnings: learningsCollection,
  thoughts: thoughtsCollection,
};

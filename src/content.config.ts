import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
      title: z.string(),
      image: z.string(),
      description: z.string().optional(),
      created: z.string(),
      updated: z.string().optional(),
      draft: z.boolean().optional(),
    }),
  }),
};

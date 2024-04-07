import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    img: z.string(),
    title: z.string(),
    desc: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
    client: z.string(),
    pubDate: z.date(),
    gallery: z.array(z.string()),
    body: z.array(
      z.object({
        title: z.string(),
        parrafo: z.array(z.string()),
        border: z.boolean(),
        list: z.array(z.string()),
      })
    ),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};

import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const pricesCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    price: z.string(),
    slug: z.string(),

    items: z.array(z.string()),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  prices: pricesCollection,
};

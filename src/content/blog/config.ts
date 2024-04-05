import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const blogsCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.bigint(),
    img: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    title: z.string(),
    desc: z.string(),
    tag: z.string(),
    slug: z.string(),
    pubDate: z.date(),

    author: z.object({
      img: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      name: z.string(),
      proffesion: z.string(),
      bio: z.string(),
    }),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blogs: blogsCollection,
};

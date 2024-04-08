import { defineCollection } from "astro:content";
import { blogSchema, priceSchema, projectSchema } from "@/content/schemas";

// Define a `type` and `schema` for each collection
const blogsCollection = defineCollection({
  type: "data",
  schema: blogSchema,
});

const pricesCollection = defineCollection({
  type: "data",
  schema: priceSchema,
});

const projectsCollection = defineCollection({
  type: "data",
  schema: projectSchema,
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blogs: blogsCollection,
  projects: projectsCollection,
  prices: pricesCollection,
};

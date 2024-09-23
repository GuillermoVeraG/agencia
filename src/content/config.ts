import { defineCollection } from "astro:content";
import { blogSchema, serviceSchema, projectSchema } from "@/content/schemas";

// Define a `type` and `schema` for each collection
const blogsCollection = defineCollection({
  type: "data",
  schema: blogSchema,
});

const servicesCollection = defineCollection({
  type: "data",
  schema: serviceSchema,
});

const projectsCollection = defineCollection({
  type: "data",
  schema: projectSchema,
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  blogs: blogsCollection,
  projects: projectsCollection,
  services: servicesCollection,
};

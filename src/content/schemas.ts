import { z } from "astro:content";

export const blogSchema = z.object({
  id: z.number(),
  img: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  title: z.string(),
  desc: z.string(),
  tag: z.string(),
  slug: z.string(),
  pubDate: z.string(),

  author: z.object({
    img: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    name: z.string(),
    proffesion: z.string(),
    bio: z.string(),
  }),

  body: z.array(
    z.object({
      title: z.string(),
      parrafo: z.array(z.string()),
      border: z.boolean(),
      list: z.array(z.string()),
    })
  ),

  conclusion: z.array(z.string()),
});

export const priceSchema = z.object({
  title: z.string(),
  desc: z.string(),
  price: z.string(),
  slug: z.string(),

  items: z.array(z.string()),

  body: z.array(
    z.object({
      title: z.string(),
      parrafo: z.array(z.string()),
      border: z.boolean(),
      list: z.array(z.string()),
    })
  ),
});

export const projectSchema = z.object({
  img: z.string(),
  title: z.string(),
  desc: z.string(),
  tags: z.array(z.string()),
  slug: z.string(),
  client: z.string(),
  pubDate: z.string(),
  gallery: z.array(z.string()),
  body: z.array(
    z.object({
      title: z.string(),
      parrafo: z.array(z.string()),
      border: z.boolean(),
      list: z.array(z.string()),
    })
  ),
});

export interface blogItemBody {
  title: string;
  parrafo: Array<string>;
  list: Array<string>;
  border: boolean;
}

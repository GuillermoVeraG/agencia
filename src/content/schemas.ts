import { z } from "astro:content";

const list = z.object({
  title: z.string(),
  txt: z.string(),
});

const body = z.array(
  z.object({
    title: z.string(),
    parrafo: z.array(z.string()),
    border: z.boolean(),
    list: z.array(list),
  })
);

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

  body: body,

  conclusion: z.array(z.string()),
});

export const serviceSchema = z.object({
  title: z.string(),
  desc: z.string(),
  largedesc: z.array(z.string()),
  price: z.string(),
  slug: z.string(),

  items: z.array(z.string()),

  body: body,
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

  body: body,
});

export interface blogItemList {
  title: string;
  txt: string;
}

export interface blogItemBody {
  title: string;
  parrafo: Array<string>;
  list: Array<blogItemList>;
  border: boolean;
}

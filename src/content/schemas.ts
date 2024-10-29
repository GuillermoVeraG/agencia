import { z } from "astro:content";

const list = z.object({
  title: z.string(),
  txt: z.string(),
});

const imgBlog = z.object({
  src: z.string(),
  align: z.enum(["left", "right"]),
});

const body = z.array(
  z.object({
    title: z.string(),
    parrafo: z.optional(z.array(z.string())),
    border: z.optional(z.boolean()),
    list: z.optional(z.array(list)),
    img: z.optional(imgBlog),
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
  pubDate: z.string().transform((str) => new Date(str)),

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

  conclusion: z.optional(z.array(z.string())),
});

export const serviceSchema = z.object({
  title: z.string(),
  desc: z.string(),
  largedesc: z.array(z.string()),
  price: z.string(),
  slug: z.string(),
  img: z.string(),

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
  pubDate: z.string().transform((str) => new Date(str)),
  gallery: z.array(z.string()),

  body: body,
});

interface blogImg {
  src: string;
  align: string;
}

export interface blogItemList {
  title: string;
  txt: string;
}

export interface blogItemBody {
  title: string;
  parrafo?: Array<string>;
  list?: Array<blogItemList>;
  border?: boolean;
  img?: blogImg;
}

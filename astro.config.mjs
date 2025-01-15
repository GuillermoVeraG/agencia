import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => page !== "https://audienzelabs.com/convert",
    }),
    react(),
  ],

  site: "https://audienzelabs.com",

  //base: "/agencia",
  redirects: {
    "/blogs": "/blogs/1",
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  output: "server",
});

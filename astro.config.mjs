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

  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD
        ? {
            "react-dom/server": "react-dom/server.edge",
          }
        : {},
    },
  },
});

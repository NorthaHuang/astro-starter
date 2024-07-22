import { defineConfig } from "astro/config";

// Astro integrations
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Vite plugins
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});

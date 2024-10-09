import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  base: "/spa2",
  integrations: [tailwind(), mdx()],
  experimental: { contentIntellisense: true },
});

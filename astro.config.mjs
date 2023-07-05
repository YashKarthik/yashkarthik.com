import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://www.yashkarthik.xyz",
  integrations: [tailwind(), mdx(), sitemap(), solidJs()]
});
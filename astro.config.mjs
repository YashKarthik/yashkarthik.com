import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import monochromeDark from "./themes/monochrome-dark.json";
import monochromeLight from "./themes/monochrome-light.json";

export default defineConfig({
  site: "https://www.yashkarthik.com",
  integrations: [tailwind(), mdx(), sitemap(), solidJs()],
  markdown: {
    shikiConfig: {
      theme: monochromeDark,
      wrap: true,
    },
  },
});

import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";
const website = 'https://astro-goteacher.pages.dev/';
// https://astro.build/config
export default defineConfig({
  site: website,
  integrations: [
    tailwind(),
    react(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});

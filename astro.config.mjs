import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	site: 'https://omnitechdevelopment.com/',
  integrations: [tailwind(), sitemap(), svelte()],
	i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: true,
		}
  }
});

import {
  defineConfig
} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  site: 'https://sitename.fr',
  integrations: [tailwind(), vue(), sitemap(), turbolinks()]
});
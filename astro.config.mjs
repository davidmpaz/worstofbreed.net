import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://worstofbreed.net',
  adapter: cloudflare(),
});
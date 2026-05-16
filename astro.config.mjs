import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://maisoninteriorshome.com', // Restauração exata do domínio real
  integrations: [tailwind()],
  adapter: cloudflare({
    imageService: 'cloudflare',
    compatibilityDate: '2026-05-15' // Trava do servidor Cloudflare sem interferência de proxy
  })
});
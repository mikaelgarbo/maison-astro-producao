import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // <-- RESTAURADO: O motor que faz o Header e o Slot funcionarem
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://maisoninteriorshome.com',
  integrations: [
    tailwind(),
    react() // <-- RESTAURADO: Integração ativada
  ],
  adapter: cloudflare({
    imageService: 'cloudflare',
    compatibilityDate: '2026-05-15'
  })
});
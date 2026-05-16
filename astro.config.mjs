import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://maisoninteriors.com', // Restaura o domínio base para corrigir caminhos de assets e SEO
  integrations: [tailwind()],
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true
    },
    compatibilityDate: '2026-05-15' // Mantém a trava de compatibilidade sincronizada com o servidor da Cloudflare
  })
});
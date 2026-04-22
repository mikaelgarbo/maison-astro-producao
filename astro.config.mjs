import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Esta configuração força a integração perfeita entre o React e o motor CSS
export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }) 
  ]
});
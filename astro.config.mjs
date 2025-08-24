// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/mmi-tca-troyes',
  redirects: {
   '/': '/s5',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});

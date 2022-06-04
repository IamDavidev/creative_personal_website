import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit'

// integration with lit
export default defineConfig({
    integrations: [lit()]
})

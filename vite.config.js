import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { pageTitles, siteUrl } from './src/data/site.js'

// Emit sitemap.xml from the same route list the app uses for page titles.
const sitemap = () => ({
  name: 'sitemap',
  apply: 'build',
  generateBundle() {
    const urls = Object.keys(pageTitles).map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
})

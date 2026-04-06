import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { lossy: true, quality: 80 },
    }),
    visualizer({
      filename: 'stats.html',
      gzipSize: true,
    }),
  ],
  // Base musí odpovídat názvu tvého repozitáře na GitHubu
  base: '/YouthArabskaWeb/',
})
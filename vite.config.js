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
      open: true,
      filename: 'stats.html',
      gzipSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('react') && !id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('react-router')) {
              return 'router'
            }
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n'
            }
            return 'vendor'
          }
        },
      },
    },
  },
  base: '/YouthArabskaWeb/',
  server: {
    host: true,
  },
})

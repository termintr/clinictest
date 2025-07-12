import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    // Optimize chunk splitting for better caching
    chunkSizeWarningLimit: 1000,
    // Generate source maps for debugging (remove in production)
    sourcemap: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
})
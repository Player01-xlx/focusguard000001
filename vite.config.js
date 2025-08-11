import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    outDir: 'build' // Ensure this is set to 'build' or 'dist' based on your preference
  },
  base: '/' // Add this line
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'index.tsx',
      formats: ['iife'],
      name: 'ChatWidget',
      fileName: 'chat-widget'
    },
    target: 'es2015'
  },
})
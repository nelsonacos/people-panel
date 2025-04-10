// <reference types="vitest" />
// <reference types="vite/client">
import { defineConfig, type UserConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(<UserConfig>{
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.ts', '**/*.test.tsx'],
    setupFiles: './src/tests/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.tsx', 'src/**/*.d.ts', 'src/test-utils/**', 'src/__tests__/helpers/**'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
    },
  },
})

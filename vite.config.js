import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: './dist'
  },
  plugins: [
    vue(),
  ],
  external: ['vue'],
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url))
    // }
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
})

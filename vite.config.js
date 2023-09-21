import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  quasar({
    sassVariables: 'src/quasar-variables.sass'
  }),
  base: './',
  build: {
    outDir: './dist'
  },
  plugins: [
    vue(),
    // basicSsl()
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

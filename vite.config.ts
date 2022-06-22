import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default  defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  css: {
    preprocessorOptions: {
      scss: {
          charset: false,
          // additionalData: `@import "@/assets/styles/global.scss";`
      }
    }
  }
})

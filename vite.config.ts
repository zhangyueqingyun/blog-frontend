import { UserConfigExport } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default  ({mode}): UserConfigExport=>{ 
  return {
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: mode === 'mock'

      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname,'src/assets')],
        symbolId: 'icon-[name]'
      })
    ],
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
  }
}

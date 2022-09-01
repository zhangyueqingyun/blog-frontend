const { createSvgIconsPlugin } = require('vite-plugin-svg-icons');
const vue = require('@vitejs/plugin-vue')
const path = require('path');

// https://vitejs.dev/config/
module.exports = () => { 
  return {
    base: '/zblog/',
    plugins: [
      vue(),
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


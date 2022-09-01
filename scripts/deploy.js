const vue = require('@vitejs/plugin-vue');
const path = require('path');
const { createSvgIconsPlugin } = require('vite-plugin-svg-icons');
const { splitVendorChunkPlugin } = require('vite');

const viteConfig =  {
    root: path.resolve(__dirname, '../'),
    base: '/zblog/',
    plugins: [
        splitVendorChunkPlugin(),
        vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname,'../src/assets')],
        symbolId: 'icon-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, '../src'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
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

async function run() {
    const { build } = require('vite');
    await build(viteConfig);

    const util = require('node:util');
    const exec = util.promisify(require('node:child_process').exec);
    const { username, host, path } = require('../config/server');
    const { stdout, stderr } = await exec(`cd ./dist && scp -r ./* ${username}@${host}:${path}"`);
    
    console.log(stdout);
    
    if(stderr) {
        console.log(stderr);
    } else {
        console.log('部署成功 @v@ ~\n');
    }
}

run();
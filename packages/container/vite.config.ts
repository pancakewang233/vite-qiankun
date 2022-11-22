import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "src": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts', '.tsx'] // 使用路径别名时想要省略的后缀名，可以自己增减,.vue 可以缩写，但是会有ts红线
  },
  plugins: [
    vue(),
    vueJsx(),
    unocss(),
  ]
})

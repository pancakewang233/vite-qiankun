import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

// router
import router from './router/index'
// qiankun 微应用router
import { registerMicroApps, start } from 'qiankun';
// 注册子应用
registerMicroApps([
    {
      name: 'reactApp',
      entry: '//localhost:3000',
      container: '#container',
      activeRule: '/app-react',
    },
    {
      name: 'vueApp',
      entry: '//localhost:3001',
      container: '#container',
      activeRule: '/app-vue',
    },
    {
      name: 'svelteApp',
      entry: '//localhost:3002',
      container: '#container',
      activeRule: '/app-svelte',
    },
]);
// 启动乾坤
start();

/** 重置样式 这里引入自定义的重置样式也可 */
import '@unocss/reset/tailwind.css'
/** 
 *  项目内的样式，
 *  注意：最好放在重置样式后，uno.css前
 */
import './style.css'
/** 引入uno.css，不引入不生效 */
import 'uno.css'

createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#container')

import { createApp } from 'vue'
import App from './App.vue'

// router
import router from './router/index'

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
    .use(router)
    .mount('#container')

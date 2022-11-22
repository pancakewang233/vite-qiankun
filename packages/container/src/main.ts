import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// router
import router from './router/index'

//unocss
import 'uno.css'

createApp(App)
    .use(router)
    .mount('#app')

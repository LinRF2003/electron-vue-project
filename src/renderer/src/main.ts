import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Request from './utils/Request'

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.Request = Request

app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')

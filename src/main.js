//main.js
import 'element-plus/dist/index.css' //引入element-plus 样式
import router from './router'
import {createPinia} from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const pinia=createPinia()

const app=createApp(App)
//引入图标库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.use(pinia)

app.mount('#app')

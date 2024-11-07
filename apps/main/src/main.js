import { createApp } from 'vue'
import '@/assets/less/reset.less'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:svg-icons-register'
import router from './router'
createApp(App).use(router).mount('#app')


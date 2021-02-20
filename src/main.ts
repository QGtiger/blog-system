import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import api from '@/fetch/index'
import utilspro from '@/utils/utilspro'
import svgComp from '@/components/svgComponent/main.vue'

const app = createApp(App)
app.component('svgComp', svgComp)

// 挂载
app.config.globalProperties.$api = api;
app.config.globalProperties.$utilspro = utilspro;

app.use(store).use(router).use(ElementPlus).mount('#app')

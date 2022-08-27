import { createApp } from 'vue'
import App from '@/App.vue'
import SvgIcon from '@/components/SvgIcon.vue';
import router from './router/index'
import '@/assets/styles/global.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router);
app.component('svg-icon', SvgIcon);
app.mount('#app')

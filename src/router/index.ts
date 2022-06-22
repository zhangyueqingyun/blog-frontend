import {createRouter,  createWebHistory} from 'vue-router'
import Home from '@/views/Home/Home.vue'

const Router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }]
})

export default Router
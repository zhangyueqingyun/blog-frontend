import {createRouter,  createWebHistory} from 'vue-router'
// const Home = () => import('@/views/Home/index.vue');
import Home from '@/views/Home/index.vue'
const Router = createRouter({
    history: createWebHistory('zblog'),

    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/blog/:id',
        name: 'blog',
        component: () => import('@/views/Blog/index.vue')
    }, {
        path: '/category/:id',
        name: 'category',
        component: () => import('@/views/Category/index.vue')
    }]
})

export default Router
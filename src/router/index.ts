import {createRouter,  createWebHistory} from 'vue-router'
import Home from '@/views/Home/index.vue'
import Blog from '@/views/Blog/index.vue'
const Router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/blog',
        name: 'blog',
        component: Blog
    }]
})

export default Router
import {createRouter,  createWebHistory} from 'vue-router'

import Home from '@/views/Home/index.vue';
import Blog from '@/views/Blog/index.vue';
// import Category from '@/views/Category/index.vue';

const Category = () => import('@/views/Category/index.vue')


const Router = createRouter({
    history: createWebHistory('zblog'),
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/blog/:id',
        name: 'blog',
        component: Blog
    }, {
        path: '/category/:id',
        name: 'category',
        component: Category
    }]
})

export default Router;
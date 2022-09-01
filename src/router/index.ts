import {createRouter,  createWebHistory} from 'vue-router'

const Router = createRouter({
    history: createWebHistory('zblog'),

    routes: [{
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
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
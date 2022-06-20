import {createRouter,  createWebHistory} from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

const Router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: HelloWorld
    }]
})

export default Router
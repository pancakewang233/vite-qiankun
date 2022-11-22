import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name:'Dashboard',
            component: () => import('src/views/dashboard/index.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('src/views/dashboard/about.vue')
        },
    ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'

// 主内容
const Mainner = ()=> import('src/components/Main.vue')

const routerHistory = createWebHistory()
export const routes = [
    {
        path: '/',
        name:'Index',
        meta:{
            menuShow: false
        },
        component: Mainner,
        children: [
            {
                path: '/',
                name:'Index',
                meta:{
        
                },
                component: () =>import('src/views/dashboard/index.vue')
            }
        ]
    },
    {
        path: '/about',
        name:'About',
        meta:{
            menuShow: true
        },
        component: Mainner,
        children: [
            {
                path: '/about',
                name:'About',
                meta:{
                    menuShow: true
                },
                component: () =>import('src/views/dashboard/about.vue'),
            },
            {
                path: '/about/item',
                name:'Item',
                meta:{
                    menuShow: true
                },
                component: () =>import('src/views/dashboard/item.vue'),
            },
        ]
    },
    {        
        path: '/other',
        name:'Other',
        meta:{
            menuShow: true
        },
        component: Mainner,
        children: [
            {
                path: '/other',
                name:'Other',
                meta:{
                    menuShow: true
                },
                component: () =>import('src/views/dashboard/other.vue'),
                children: [
                    {
                        path: '/other',
                        name:'Other',
                        meta:{
                            menuShow: true
                        },
                        component: () =>import('src/views/dashboard/other.vue'),
                    }
                ]
            }
        ]
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        meta:{
            menuShow: false
        },
        component: ()=>import('src/views/dashboard/notFound.vue')}
]

const router = createRouter({
    history: routerHistory,
    routes
})

export default router
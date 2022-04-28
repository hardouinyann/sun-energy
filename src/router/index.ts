import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../views/HomePage.vue')
    },
    {
        path: '/client-chantier',
        component: () => import('../views/ClientChantierPage.vue')
    },
    {
        path: '/installation',
        component: () => import('../views/Installation.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router

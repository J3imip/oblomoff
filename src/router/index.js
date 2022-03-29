import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import Recepies from '@/pages/Recepies.vue';

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/recepies",
        name: "recepies",
        component: Recepies
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes
});

export default router;
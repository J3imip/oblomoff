import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import Recepies from '@/pages/Recipes.vue';
import Contact from '@/pages/Contact.vue';
import Blog from '@/pages/Blog.vue';
import Fact from '@/pages/Fact.vue';

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
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/fact",
      name: "fact",
      component: Fact
    },
];

const router = createRouter({
    history: createWebHistory("/"),
    routes
});

export default router;
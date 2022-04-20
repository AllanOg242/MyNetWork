import { createRouter, createWebHistory } from 'vue-router';

import Main from '../components/Main.vue';
import Login from '../components/Login.vue';
import NotFound from '../components/NotFound.vue';
import Register from '../components/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Register,
    },
    {
      path: '/not-found',
      name: 'notfound',
      component: NotFound,
    },
  ],
});

export default router;

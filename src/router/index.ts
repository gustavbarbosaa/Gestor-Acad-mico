import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const Construction = () => import('../views/Construction/index.vue');
const Forum = () => import('../views/Forum/index.vue');
const Queries = () => import('../views/Queries/index.vue');
const Register = () => import('../views/Register/index.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/construction',
    name: 'construction',
    component: Construction,
  },
  {
    path: '/forum',
    name: 'forum',
    component: Forum,
  },
  {
    path: '/queries',
    name: 'queries',
    component: Queries,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;

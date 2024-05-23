import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import(`../pages/dashboard/Index.vue`),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(`../pages/user/Index.vue`),
  },
  {
    path: '/add-user',
    name: 'addUser',
    component: () => import(`../pages/user/Add.vue`),
  },
  {
    path: '/edit-user/:id',
    name: 'editUser',
    component: () => import(`../pages/user/Edit.vue`),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

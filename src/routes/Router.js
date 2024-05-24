import { createRouter, createWebHistory } from 'vue-router';
import dataUsers from '../pages/user/Index.vue';
import addUser from '../pages/user/Add.vue';
import editUser from '../pages/user/Edit.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import(`../pages/dashboard/Index.vue`),
  },
  {
    path: '/users',
    name: 'users',
    component: dataUsers,
    meta: { requiresAuth: true },
  },
  {
    path: '/add-user',
    name: 'addUser',
    component: addUser,
    meta: { requiresAuth: true },
  },
  {
    path: '/edit-user/:id',
    name: 'editUser',
    component: editUser,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({
        path: '/',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

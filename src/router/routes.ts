import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect:'/Todo',
    children: [
      { path: '/Todo', component: () => import('src/pages/Todo.vue') },
      { path: '/help', component: () => import('src/pages/help.vue') },
      { path: '/map', component: () => import('src/pages/map.vue') },
      { path: '/chart', component: () => import('src/pages/chart.vue')},
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

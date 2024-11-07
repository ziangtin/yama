import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../components/HelloWorld.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory('/yama/ipet-admin'),
  routes: routes,
});

export default router

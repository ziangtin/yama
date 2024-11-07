const routes = [
  {
    path: '/main',
    redirect: { name: 'home' },
    meta: { title: '首页' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/entry/home.vue')
      },
    ]
  },
  {
    path: '/vue3/:pathMatch(.*)*',
    name: 'vue3',
    meta: {},
    component: () => import('../components/subApp/index.vue')
  },
  {
    path: '/ipet-admin/:pathMatch(.*)*',
    name: 'ipetAdminApp',
    meta: {},
    component: () => import('../components/subApp/index.vue')
  }
]
export default routes
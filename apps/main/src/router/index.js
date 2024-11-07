import { createRouter, createWebHistory } from "vue-router";
import routes from "./base";
const router = createRouter({
  history: createWebHistory('/yama'),
  routes: routes,
});

export default router

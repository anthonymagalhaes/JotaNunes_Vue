import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/", component: Home , meta: { requiresAuth: true } },
  { path: "/login", name: "login", component: Login, meta: { isPublic: true } },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

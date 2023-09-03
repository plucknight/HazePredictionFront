import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/data.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/data",
    name: "data",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/data.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/admin.vue"),
  },

  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/knowledge",
    name: "knowledge",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/knowledge.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

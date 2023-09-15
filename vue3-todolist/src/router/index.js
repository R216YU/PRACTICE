import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import CreateView from "../views/CreateView.vue";
import UpdateView from "../views/UpdateView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/update/:id",
    name: "update",
    component: UpdateView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

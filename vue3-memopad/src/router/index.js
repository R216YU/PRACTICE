import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewView from "../views/NewView.vue";
import EditView from "../views/EditView.vue";

const routes = [
  // メモ一覧画面
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // メモ新規作成画面
  {
    path: "/new",
    name: "new",
    component: NewView,
  },
  // メモ編集画面(パスパラメーター:memo.id)
  {
    path: "/edit/:id",
    name: "edit",
    component: EditView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

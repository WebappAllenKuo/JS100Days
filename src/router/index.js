import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/d01",
  },
  // {
  //   path: "/d01",
  //   component: () => import("../Pages/Page01.vue"),
  // },
];

const end = 2;
for (let i = 1; i <= end; i++) {
  const path = i.toString().padStart(2, "0");
  const componentFile = `../Pages/Page${path}.vue`;

  const setting = { path: "/d" + path, component: () => import(componentFile) };
  console.info("setting=", setting);

  routes.push(setting);
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

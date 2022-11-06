import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth-store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminPage.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  // const authStore = useAuthStore();
  // await authStore.getUserStatus();
  // if (!authStore && to.name !== "login") {
  //   return { name: "login" };
  // }
  // if (authStore && to.name == "login") {
  //   return { name: "home" };
  // }
});
export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/coin/:id",
    name: "coin-detail",
    component: CoinDetail
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: Error
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PlanetDetails from "../views/PlanetDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/planet/:id",
    name: "PlanetDetails",
    component: PlanetDetails,
    props: true,
    meta: { transition: "slide-left" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PositionsIndex from "../views/PositionsIndex.vue";
import PositionsShow from "../views/PositionsShow.vue";
import PositionsEdit from "../views/PositionsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/positions",
    name: "positions-index",
    component: PositionsIndex,
  },
  {
    path: "/positions/:id",
    name: "positions-show",
    component: PositionsShow,
  },
  {
    path: "/positions/:id/edit",
    name: "positions-edit",
    component: PositionsEdit,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from "vue";
import Router from "vue-router";
import nprogress from "nprogress";

nprogress.configure({
  trickle: false,
  showSpinner: false
});

import appList from "@/views/AppListView.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "appList",
      component: appList
    },
    {
      path: "/appPage",
      name: "appPage",
      component: () => import("@/views/AppPageView.vue")
    }
  ]
});

export default router;

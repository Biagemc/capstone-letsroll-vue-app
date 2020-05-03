import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueYoutube from "vue-youtube";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { BEmbed } from "bootstrap-vue";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);
Vue.component("b-embed", BEmbed);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueYoutube);

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");

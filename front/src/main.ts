import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./directives/focus";
import "./directives/async-btn";
import VueResource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

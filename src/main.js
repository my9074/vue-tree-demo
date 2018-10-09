import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Text, Record } from "skeleton-element";

Vue.config.productionTip = false;
Vue.use(Text);
Vue.use(Record);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

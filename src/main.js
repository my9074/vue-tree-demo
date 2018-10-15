import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-tree-halower/dist/halower-tree.min.css"; // you can customize the style of the tree
import VTree from "vue-tree-halower";

Vue.config.productionTip = false;
Vue.use(VTree);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

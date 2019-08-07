import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueResource from "vue-resource";

Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, //ECMA6 özelliği key value aynıysa birini alman yeter
  render: h => h(App),
});

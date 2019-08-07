import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

export default new Vuex.Store({
  state: {
    forSale: [
      { id: " ", name: " ", price: " ",currency: " ",image:" " },

    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, id) { state.inCart.push(id); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, id) { context.commit('ADD_TO_CART',id); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});

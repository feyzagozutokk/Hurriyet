<template>
  <div id="app" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>My online store</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
      <div >
      {{info}}

      </div>
    </div>

    <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.id"
        :invId="item.id"
        :name="item.name"
        :price="item.price"
        :currency="item.currency"
        :image="item.image"

        />
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import ShoppingCart from './ShoppingCart.vue';



export default {
  name: 'app',
  computed: {
    forSale() { return this.$store.getters.forSale; },
  },
  components: {
    Item,
    ShoppingCart,
  },

};
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

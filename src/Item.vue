<template>
  <div class="col-md-3" >
    <div>

      <div class="card" id="ana-kart" v-for="(item, index) in info.data" >
        <img v-bind:src="item.image" :alt="name" class="card-img-top">
        <div class="card-body">
          <h4 class="card-title">{{ item.name }}</h4>
          <div class="card-text">{{ item.price }}  {{ item.currency }}</div>
          <div class="row justify-content-end">
            <button class="btn btn-primary" @click="addToCart(invId)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { dollars } from './filters';
  import  axios from  'axios';

  export default {
    name: 'item',
    props: ['invId', 'name', 'image', 'price','currency'],
    filters: {
      dollars,
    },
    methods: {
      addToCart(invId) {
        this.$store.dispatch('addToCart', invId);
      }
    },
    data(){
      return {
        info:null
      }
    },
    mounted: function(){
      axios
              .get('https://nonchalant-fang.glitch.me/listing')
              .then(response => (this.info = response));
    }


  };
</script>
<style>

</style>